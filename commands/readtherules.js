module.exports = {
	name: 'readtherules',
	description: '',
	execute(msg, args) {
		const sender = msg.member;

		if (sender.roles.cache.some(role => role.name === 'bot manager')) {
		
		const role = msg.member.guild.roles.cache.get('612502834205687829');
		const shut = msg.mentions.members.first();
		shut.roles.remove(role);

		}else {
			msg.reply(`You are missing "Bot Manager" perms`);
		};
	},
};