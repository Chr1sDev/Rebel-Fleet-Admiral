module.exports = {
	name: 'hi',
	description: '',
	execute(msg, args) {
            const role = msg.member.guild.roles.cache.get('611043295279316992');
            msg.member.roles.add(role);
	},
};