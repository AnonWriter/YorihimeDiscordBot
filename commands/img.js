const { MessageEmbed } = require("discord.js");
var Scraper = require("images-scraper");

const google = new  Scraper({
    puppeter: {
        headless: true
    }
});

module.exports = {
    name: 'img',
    description: 'Agarra una imágen de google de lo que pidas.',
    async execute(message, args)
    {
        try {
            var randomNumber= Math.floor(Math.random() * 20);

            const imageQuery = args.join(' ');
            var noNumber = imageQuery.length;
            if (!imageQuery) return message.channel.send('Especifica qué vas a buscar.');
            if (!isNaN(imageQuery[imageQuery.length-1]))
            {
                var start = 0;
                if (isNaN(imageQuery[imageQuery.length-2]))
                {
                    start = imageQuery.length-1;
                    noNumber-=1;
                } else
                {
                    start = imageQuery.length-2;
                    noNumber-=2;
                }
                randomNumber = parseInt(imageQuery.slice(start));
            }

            const imageResults = await google.scrape(imageQuery.slice(0, noNumber), 21)
            if (!imageResults) message.channel.send('No se pudo.');

            const imgEmbed = new MessageEmbed()
                .setDescription(`***${imageQuery.slice(0, noNumber)}***\n ***[Imagen](${imageResults[randomNumber].url})*** *\`${randomNumber}\` de \`20\`*`)
                .setColor(message.author.hexAccentColor)
                .setImage(imageResults[randomNumber].url);

            message.channel.send({
                embeds: [imgEmbed]
            });
        }
        catch(err){
            const current = new Date();

            const date = current.getFullYear()+'/'+(current.getMonth()+1)+'/'+current.getDate();
            const time = current.getHours()+':'+current.getMinutes()+':'+current.getSeconds();

            message.channel.send('*`Hubo un problema al cargar la imagen.`*');
            console.error(`${date} ${time} | Intento fallido de enviar una imagen ${err}`);
        }
    }
}
