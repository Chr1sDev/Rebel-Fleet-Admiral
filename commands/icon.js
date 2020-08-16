module.exports = {
	name: 'icon',
	description: '',
	execute(msg, args) {
        msg.reply(msg.guild.iconURL());
	},
};