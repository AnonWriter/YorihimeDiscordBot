const { MessageEmbed } = require('discord.js')
const fs = require('fs')

module.exports = {
    name: 'help',
    description: 'Recibe un mensaje de ayuda de Yorihime',
    execute(message, Yori)
    {
        const helpEmbed = new MessageEmbed()
            .setAuthor(`${Yori.user.tag}`, Yori.user.displayAvatarURL())
            .setTitle(`Lista de comandos\npedidos por ${message.author.tag}:`)
            .setColor('#ccb4e8')
            .setDescription(fs.readFileSync(`./help/helpv1.txt`, 'utf-8'));

        message.author.send({
            embeds: [helpEmbed]
        });
    }
}