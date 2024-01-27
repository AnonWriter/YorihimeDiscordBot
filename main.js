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
    Yori.user.setActivity("!yori ?");
    Yori.user.setPresence(
        {
            status: 'idle',
        }
    )
});

Yori.on("messageCreate", message =>
{
    if (message.author.tag === Yori.user.tag) return;
    if(message.author.bot)
    {
        console.log("Mensaje enviado por un bot, ignorando.");
        return;
    }

    try {
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
            case 'emir': case 'emri': case 'eimr':
                message.channel.send('el masca riata');
                break;
        }
    } catch(err)
    {
        console.log(err);
    }

    if(!message.content.toLowerCase().startsWith(prefix))
    {
        return;
    }

    const args = message.content.slice(prefix.length).split(" ");
    const cmd = args.shift().toLowerCase();

    try {
        switch(cmd)
        {
            case 'di':
                Yori.commands.get('di').execute(message, args, prefix);
                break;
            case 'borra': case 'borrar': case 'elimina':
                Yori.commands.get('borrar').execute(message, args);
                break;
            case '?': case 'help': case 'ayuda': case 'info':
                Yori.commands.get('help').execute(message, Yori, prefix, cmd, args);
                break;
            case 'ponte':
                Yori.commands.get('ponte').execute(message, Yori, prefix, args);
                break;
            case 'img': case 'imagen': case 'image':
                Yori.commands.get('img').execute(message, args);
                break;
            case 'ask': case 'pregunta': case '¿':
                Yori.commands.get('ask').execute(message, prefix, cmd);
                break;
            case 'ping':
                Yori.commands.get('ping').execute(message);
                break;
            case 'bonk':
                Yori.commands.get('bonk').execute(message, args);
                break;
            case 'nobonk':
                Yori.commands.get('nobonk').execute(message);
                break;
        }
    } catch (err)
    {
        console.log(err);
    }
});

Yori.login(token);
