module.exports = {
	name: 'off',
	description: '',
	execute(msg, args) {
	const member = msg.member;
	if (member.roles.cache.some(role => role.name === 'bot manager')) {
		process.exit();
	}else {
		msg.reply(`You are missing "Bot Manager" perms`);
	}
},
};