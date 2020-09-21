module.exports = {
	name: 'userinfo',
	description: '',
	execute(msg, args) {
        msg.channel.send(`\**Your username:\** ${msg.author.username}\n\**Your ID:\** ${msg.author.id}\n\**Date Created:\** ${msg.author.createdAt}`);
	},
};