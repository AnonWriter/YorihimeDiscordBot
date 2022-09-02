const Discord = require('discord.js');
const dotenv = require('dotenv');
const fs = require("fs");

dotenv.config();

const Yori = new Discord.Client(
    {
        intents:
        [
            "GUILDS",
            "GUILD_MESSAGES",
        ]
    }
);

const token = process.env.Yorihime;
const prefix = "!yori ";

Yori.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

/* see through commands */
for (const file of commandFiles)
{
    const command = require(`./commands/${file}`);
    Yori.commands.set(command.name, command);
}

Yori.once('ready', () =>
{
    console.log(`Conección existosa: ${Yori.user.tag}`);
});

Yori.on("messageCreate", message =>
{
    if (message.author.tag !== Yori.user.tag) console.log(`Leyendo mensaje... ${message.content}`);
    if (message.author.tag === Yori.user.tag) return;
    if(message.author.bot)
    {
        console.log("Mensaje enviado por un bot, ignorando.");
        return;
    }
    if(!message.content.startsWith(prefix))
    {
        console.log("El mensaje no contiene el prefijo, ignorando.");
        return;
    }

    const args = message.content.slice(prefix.length).split(" ");
    const cmd = args.shift().toLowerCase();

    switch(cmd)
    {
        case 'di':
            Yori.commands.get('di').execute(message, args, prefix);
            break;
        case 'borra': case 'borrar': case 'elimina':
            Yori.commands.get('borrar').execute(message, args);
            break;
        case '?': case 'help': case 'ayuda': case 'info':
            Yori.commands.get('help').execute(message, Yori);
            break;
        case 'ponte':
            Yori.commands.get('ponte').execute(message, Yori, prefix, args);
            break;
        case 'img': case 'imagen': case 'image':
            Yori.commands.get('img').execute(message, args)
            break;
    }
    console.log(`Comando [${cmd}] ejecutado por ${message.author.tag}`);
});

Yori.login(token);