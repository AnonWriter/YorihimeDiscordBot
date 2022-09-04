const { MessageEmbed } = require('discord.js')
const execSync = require('child_process').execSync;
const fs = require('fs');

module.exports = {
    name: 'ping',
    description: 'Saca el ping de acuerdo a 5 ticks',
    async execute(message)
    {
        try{

            execSync('bash bash/logs.sh');
            const start = fs.readFileSync('./logs/pingLogs.txt', 'utf-8').indexOf("5 packets");
            const end = fs.readFileSync('./logs/pingLogs.txt', 'utf-8').indexOf("rtt");

            const ping = fs.readFileSync('./logs/pingLogs.txt', 'utf-8').slice(start);

            const pingEmbed = new MessageEmbed()
                .setColor('#ccb4e8')
                .setDescription(`**Resultados:**\n_\`${ping}\`_`);

            message.channel.send({
                embeds: [pingEmbed]
            });

            
        } catch (error)
        {
            message.channel.send(
                '`Falla temporal en la resolución del dominio`. Basicamente, mal ping. Muy malo')
            console.error(error);
            return;
        }
    }
}