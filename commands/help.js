const Discord = require('discord.js');
module.exports = {
	name: 'help',
	description: 'Lists all commands',
	execute(msg, args) {
        
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#00FF86')
        .setTitle('Command List')
        .setFooter('')
        .setDescription('')
        .addFields(
            { name: '**1.** r!pfp - to get link for profile picture\n**2.** r!icon - gets server icon\n**3.** r!server-info\n**4.** r!user-info', value: 'page 1/1'}
        )
        msg.channel.send(exampleEmbed);

        msg.channel.send("This is outdated. ping @christopher#8888 if this is still here.");
	},
};