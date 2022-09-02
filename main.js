const { SSRCMap } = require('@discordjs/voice');
const Discord = require('discord.js');
const dotenv = require('dotenv');
const fs = require("fs");
const { send } = require('process');

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

const token = process.env.Pornografo;
const prefix = "!pn ";

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
    Yori.user.setActivity("porno", );
    Yori.user.setPresence(
        {
            status: 'idle',
        }
    )
});

Yori.on("messageCreate", message =>
{
    /* if (message.author.tag !== Yori.user.tag) console.log(`Leyendo mensaje... ${message.content}`); */
    if (message.author.tag === Yori.user.tag) return;
    if(message.author.bot)
    {
        console.log("Mensaje enviado por un bot, ignorando.");
        return;
    }

    switch (message.content.toLowerCase())
    {
        case 'marlos': case 'barrera': case 'malros':
            message.channel.send('es joto!');
            break;
        case 'gama': case 'gmaa': case 'gaam':
            message.channel.send('el peinado de culo abierto');
            break;
        case 'ronni': case 'roni': case 'ranas':
            message.channel.send('G1');
            break;
        case 'carlos': case 'cralos': case 'carlos': case 'escritor':
            message.channel.send('el escirtor');
            break;
        case 'maria': case 'mariana':
            message.channel.send('le gusta el gama');
            break;
        case 'eri': case 'eriberto': case 'eir':
            message.channel.send('se fue al gabacho');
            break;
    }

    if(!message.content.startsWith(prefix))
    {
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
            Yori.commands.get('img').execute(message, args);
            break;
    }
});

Yori.login(token);
