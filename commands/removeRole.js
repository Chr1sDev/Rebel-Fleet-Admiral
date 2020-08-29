const { User } = require("discord.js");

module.exports = {
    name: 'removerole',
    description: '',
    execute(msg, args) {

        //Declare Constants/Variables
        const muted = '611043295279316992';
        var input = msg.content;
        var roleName = input.substr(12);

        //Check to see if msg.author is muted
        if (msg.member.roles.cache.has(muted)) {

            msg.channel.send(`\**Error:\** You are muted!`);
            
        } else {

            

        }

    },

}