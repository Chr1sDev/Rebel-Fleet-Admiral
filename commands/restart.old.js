/*
const {token} = require('../config.json');
module.exports = {
	name: 'restart',
	description: '',
	execute(msg, args) {
	const member = msg.member;
	if (member.roles.cache.some(role => role.name === 'bot manager')) {
		
		const client = msg.client;

		function resetBot(channel) {
			// send channel a message that you're resetting bot [optional]
			channel.send('Resetting...')
			.then(msg => client.destroy())
			.then((msg) => client.login(token));
			channel.send(`Done Resetting <:checkered_flag:718870592597655583>`);
		}
		
		resetBot(msg.channel);

	}else {
		msg.reply(`You are missing "Bot Manager" perms`);
	}
},
};
*/