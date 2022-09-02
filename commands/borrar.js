module.exports = {
    name: 'borrar',
    description: 'Yorihime eliminará el número de mensajes especificados',
    execute(message, args, Yori)
    {
        if (args[0] == null)
        {
            message.channel.send("Especifica el número de mensajes a borrar.");
            return;
        }
        let toDelete = parseInt(args[0]) + 1;
        message.channel.bulkDelete(toDelete);
    }
}