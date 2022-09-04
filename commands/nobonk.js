const { MessageEmbed } = require("discord.js");

module.exports = {
    name:'nobonk',
    description:'No Bonk!',
    execute(message)
    {
        try 
        {
            const bonked = message.author.tag;

            const nobonkEmbed = new MessageEmbed()
                .setDescription(`${bonked}: Why did 'ya bonk?! NO BONK!`)
                .setColor('#ccb4e8')
                .setImage('https://c.tenor.com/WSnK0B_VuAwAAAAd/shylily-bonk.gif');

            message.channel.send({
                embeds: [nobonkEmbed]
            });
        }
        catch(err)
        {
            console.log(err);
        }
    }
}