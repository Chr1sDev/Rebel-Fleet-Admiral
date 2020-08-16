module.exports = {
	name: 'clear',
	description: '',
	execute(msg, args) {

        var input = msg.content;
        var usrInput = input.substr(7);
        var amount = usrInput;
        var amountNum = parseInt(amount, 10);


        const member = msg.member;
	    if (member.hasPermission("MANAGE_MESSAGES")) {

            if (amount !== "") {

                if (amountNum !== NaN) {
                    
                    if (amountNum >= 1 && amountNum <= 100) {
                        
                            msg.channel.messages.fetch()
                            .then(function(){
                                msg.channel.bulkDelete(amountNum + 1);
                            }, function(err){msg.channel.send("\**Error:\** error clearing channel.")})                        

                    } else {
                        msg.channel.send(`\**Error:\** Amount must be a whole number from 1-100!`);
                    }

                } else {
                    msg.channel.send(`\**Error:\** Amount must be a whole number from 1-100!`);
                }

            } else {
                msg.channel.send(`\**Error:\** Must include amount!`);
            }

        } else {
            msg.channel.send(`\**Error:\** You are missing "Manage Messages" perms`);
        }
        
	},
};