module.exports = {
    name: 'cuenta',
    description: 'Yorihime contará hasta el número que le pidas.',
    execute(Yori, message, args)
    {
        if (args[0] == null)
        {
            message.channel.send("Especifica el número al que quieres contar.");
            return;
        }
        let toCount = parseInt(args[0]);
        for (let i = 1; i < toCount+1; i++)
        {
            message.channel.send(i.toString());
        }
    }
}