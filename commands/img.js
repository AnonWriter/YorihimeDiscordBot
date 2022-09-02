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
        const imageQuery = args.join(' ');
        if (!imageQuery) return message.channel.send('Especifica qué vas a buscar.');

        const imageResults = await google.scrape(imageQuery, 1);
        message.channel.send(imageResults[0].url);
    }
}