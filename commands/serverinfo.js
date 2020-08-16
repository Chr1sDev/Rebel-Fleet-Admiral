module.exports = {
	name: 'server-info',
	description: '',
	execute(msg, args) {
        msg.channel.send(`Server name: ${msg.guild.name}\nTotal members: ${msg.guild.memberCount}`);
	},
};