const { MessageEmbed } = require('discord.js')
const fs = require('fs')

module.exports = {
    name: 'help',
    description: 'Recibe un mensaje de ayuda de Yorihime',
    execute(message, Yori, prefix, cmd, args)
    {
        var file = 'helpv3.txt';

        /*var subarg = message.content.slice(prefix.length + cmd.length);*/

        switch(args[0])
        {
            case 'github': case 'git':
                file = 'github.txt';
                break;
            case '?': case 'help': case 'ayuda': case 'info':
                file = 'shelp.txt';
                break;
            case 'di':
                file = 'dihelp.txt';
                break;
            case 'borra': case 'elimina':
                file = 'borrahelp.txt';
                break;
            case 'img': case 'imagen': case 'image':
                file = 'imghelp.txt';
                break;
            case 'ponte':
                file = 'pontehelp.txt';
                break;
            case 'palabras':
                file = 'palabrashelp.txt';
                break;
            case 'updates': case 'versions':case 'version':
            case 'versiones':case 'actualizaciones': case 'update':
                file = 'updhelp.txt';
                break;
            case 'ask': case 'pregunta': case '¿':
                file = 'askhelp.txt';
                break;
            case 'ping':
                file = 'pinghelp.txt';
                break;
            case 'bonk':
                file = 'bonkhelp.txt';
                break;
            case 'nobonk':
                file = 'nobonkhelp.txt';
                break;
        }

        const helpEmbed = new MessageEmbed()
            .setAuthor(`${Yori.user.tag}`, Yori.user.displayAvatarURL())
            .setTitle(`Ayuda:`)
            .setColor('#ccb4e8')
            .setDescription(fs.readFileSync(`./help/${file}`, 'utf-8'));

        message.channel.send({
            embeds: [helpEmbed]
        });
    }
}
