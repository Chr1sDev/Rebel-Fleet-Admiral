module.exports = {
	name: 'pfp',
	description: '',
	execute(msg, args) {
		// Send the user's avatar URL
        msg.reply(msg.author.displayAvatarURL());
	},
};