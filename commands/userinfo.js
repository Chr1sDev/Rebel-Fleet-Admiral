module.exports = {
	name: 'userinfo',
	description: '',
	execute(msg, args) {
        msg.channel.send(`Your username: ${msg.author.username}\nYour ID: ${msg.author.id}`);
	},
};