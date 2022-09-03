const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'ask',
    description: 'Yorihime te responde a una pregunta con un si o un no',
    execute(message, prefix)
    {
        var question = message.content.slice(prefix.length + 4);
        var decision = Math.floor(Math.random() * 10);

        if (!question)
        {
            message.channel.send('Especifica qué vas a preguntar.');
            return;
        }

        /*
        if (question[question.length - 1]!='?')
        {
            message.channel.send('No es una pregunta. Añade ? al final.')
        }
        */

        var reply = ''
        if (decision<6) reply='Sí';
        if (decision>5) reply='No';

        const askEmbed = new MessageEmbed()
            .setAuthor(`${message.author.tag} pregunta:`, message.author.displayAvatarURL())
            .setTitle(`*${question}*`)
            .setColor(message.author.accentColor)
            .setDescription(`**${reply}.**`);

        message.channel.bulkDelete(1);

        message.channel.send({
            embeds: [askEmbed]
        });
    }
}