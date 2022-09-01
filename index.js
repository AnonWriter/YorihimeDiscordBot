/* Constantes de clientes y elementos necesarios */
const Discord=require("discord.js")
const dotenv=require("dotenv")
const {Routes}=require("discord-api-types/v9")
const {REST}=require("@discordjs/rest")
const fs=require("fs")
const {Player}=require("discord-player")

dotenv.config()
const token = process.env.Yorihime

const CLIENT_ID = "1012933559310352415" /* ID de Yorihime */
const GUILD_ID = "1013964306481684601" /* ID de test server */

const client = new Discord.Client(
{
    intents:
    [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_VOICE_STATES"
    ]
})

client.player = new Player(client, 
{
    ytdlOptions:
    {
        quality: "highestaudio",
        highWaterMark: 1 << 25
    }
})

client.on("error", error =>
{
    console.log(error);
    return;
})
client.on("ready", () => 
{
    console.log(`Se ha ingresado como ${client.user.tag}`)
})

/************************************************************/

const PREFIX = "!yori "

client.on("messageCreate", async message =>
{
    if (message.author.bot) return
    let args = message.content.substring(PREFIX.length).split(" ")

    switch(args[0].toLowerCase())
    {
        case 'di':
            if (args[1]!=null)
            {
                let toSay = message.content.slice(PREFIX.length + 2, message.content.length)
                message.channel.bulkDelete(1)
                message.channel.send(toSay)
            } 
            else{message.channel.send("Argumentos inválidos.")}
            break
        case 'borra': case 'borrar': case 'elimina':
            if (args[1]!=null)
            {
                let sum = 1;
                let toDelete = parseInt(sum) + parseInt(args[1])

                message.channel.bulkDelete(toDelete)
            } else {message.channel.send("Argumento inválido. Especifica un número de mensajes a borrar.")}
            break
        case '?': case 'help': case 'ayuda': case 'info':
            const helpEmbed = new Discord.MessageEmbed()
                .setAuthor(`${client.user.tag}`, client.user.displayAvatarURL())
                .setTitle(`Comandos disponibles\npedidos por ${message.author.tag}:`)
                .setColor("#ccb4e8")
                .setDescription(fs.readFileSync(`./help.txt`, 'utf-8'))

            message.author.send({
                embeds: [helpEmbed]
            })
            console.log(message.author)
            break
        case 'dev': case 'escritorio':
            console.log("CONDUCTOR WE HAVE A PROBLEM!")
            break

        case 'cuenta':
            if (args[1]!=null)
            {
                let to = parseInt(args[1])
                for (let count=1;count<to+1;count++)
                {
                    message.channel.send(count.toString())
                }
            }
            break
        /* Bloque de música */
        case 'poner':
            if (message.member.voice.channel == null)
            {
                 message.channel.send("Tienes que entrar a un canal de voz para usar los comandos de música.")
            }
            else if (args[1]!=null)
            {
                const queue = await client.player.createQueue(message.guild)
                if (!queue.connection) await queue.connect(message.member.voice.channel)

                let musciEmbed = new Discord.MessageEmbed()
                if (args[1] === "rola")
                {
                    let url = 
                }
            }

            break
        /* Fin del bloque */
    }
})

client.login(token)

/************************************************************/
