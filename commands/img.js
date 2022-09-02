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
        var randomNumber= Math.floor(Math.random() * 9);

        const imageQuery = args.join(' ');
        var noNumber = imageQuery.length;
        if (!imageQuery) return message.channel.send('Especifica qué vas a buscar.');
        if (!isNaN(imageQuery[imageQuery.length-1]))
        {
            randomNumber = imageQuery[imageQuery.length-1];
            noNumber-=1;
        }

        const imageResults = await google.scrape(imageQuery.slice(0, noNumber), 10);

        const imgEmbed = new MessageEmbed()
            .setDescription(`***${imageQuery.slice(0, noNumber)}***\n ***[Imagen](${imageResults[randomNumber].url})*** *\`${randomNumber}\` de \`9\`*`)
            .setColor(message.author.hexAccentColor)
            .setImage(imageResults[randomNumber].url);

        message.channel.send({
            embeds: [imgEmbed]
        });
    }
}
