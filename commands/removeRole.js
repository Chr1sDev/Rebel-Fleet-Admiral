const { User } = require("discord.js");

module.exports = {
    name: 'removeRole',
    description: '',
    execute(msg, args) {

        //Declare Constants
        const muted = '611043295279316992';

        //Check to see if msg.author is muted
        if (msg.member.roles.cache.has(muted)) {

            msg.channel.send(`\**Error:\** You are muted!`);
            
        } else {

            

        }

    },

}