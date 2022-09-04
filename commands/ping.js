const fs = require('fs');

module.exports = {
    name: 'ping',
    description: 'Saca el ping de acuerdo a 5 ticks',
    execute(message)
    {
        try{
            const currentTime = new Date();
            const  currentMiliseconds = currentTime.getMilliseconds();
            
        } catch (error)
        {
            console.error(error);
            return;
        }
    }
}
