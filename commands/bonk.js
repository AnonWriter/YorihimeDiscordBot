const { MessageEmbed } = require("discord.js");
const fs = require('fs')

module.exports = {
    name:'bonk',
    description:'Bonk!',
    async execute(message, args)
    {

        urlList = [
            'https://c.tenor.com/q8jW3bH5VWgAAAAC/bonk-anime.gif',
            'https://c.tenor.com/CrmEU2LKix8AAAAC/anime-bonk.gif',
            'https://c.tenor.com/7gieVV7wfEQAAAAC/bonk-anime.gif',
            'https://c.tenor.com/D6Ln3UPAdKcAAAAd/bonk-anime.gif',
            'https://i.gifer.com/7zBH.gif',
            'https://i.gifer.com/I03C.gif',
            'https://c.tenor.com/60Tr3Zeg6RkAAAAd/fumo-bonk.gif',
            'https://c.tenor.com/5YrUft9OXfUAAAAC/bonk-doge.gif',
            'https://64.media.tumblr.com/adc033e3e6f92f4a7b2e452d20155c2f/tumblr_px6bidWjFA1w6z402o1_1280.gifv',
            'https://64.media.tumblr.com/0f1c40da4b2e93c7e60c3555d68db96b/70020afccd511ed8-13/s500x750/8c3d67ed4c69dae7bab04555b46f0dcf2747b7a9.gifv',
            'https://c.tenor.com/rNxxa_mpAUkAAAAC/ina-bonk.gif',
            'https://c.tenor.com/WGMK5cQcix8AAAAC/gura-bonk.gif',
            'https://c.tenor.com/oudsAxuIhT0AAAAC/ina-bonk.gif',
            'https://i.imgur.com/a6mln1g.gif',
            'https://c.tenor.com/7smApyci-iMAAAAC/bonk-keqing.gif',
            'https://pa1.narvii.com/6365/ad2d57e595720caf54896213d8088f517b45c31a_hq.gif',
            'https://c.tenor.com/D_-8tx--KDAAAAAC/chuunibyou-anime.gif',
        ]

        try 
        {

            var randr = Math.floor(Math.random()*16);
            /* !yori bonk eri#2983 */
            var bonked = args[0];
            if (!bonked)
            {
                message.channel.send('`Especifica quién le toca bonk!`')
                return;
            }
            var check = bonked.includes('@');
            if (check==false)
            {
                message.channel.send('`Menciona con un @ a quien le vas a dar un "bonk!"`');
                return;
            }
            var rest = bonked.slice(1);
            if (!rest)
            {
                message.channel.send('`Especifica a quién le vas a dar un "bonk!"`');
                return;
            }
            
            const bonkEmbed = new MessageEmbed()
                .setDescription(`BONK! ${bonked}`)
                .setColor('#ccb4e8')
                .setImage(urlList[randr]);

            message.channel.send({
                embeds: [bonkEmbed]
            });
            
        }
        catch(err)
        {
            message.channel.send('`Hubo un problema al cargar la imagen.`');
            console.log(err);
        }
    }
}