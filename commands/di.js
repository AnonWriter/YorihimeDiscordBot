module.exports = {
    name: 'di',
    description: 'Yorihime dirá lo que tú quieras.',
    execute(Yori, message, args, prefix)
    {
        if (args[0] == null)
        {
            message.channel.send("Especifica qué quieres que diga.");
            return;
        }
        let toSay = message.content.slice(prefix.length + 2, message.content.length);
        message.channel.bulkDelete(1);
        message.channel.send(toSay);
    }
}