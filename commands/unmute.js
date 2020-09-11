module.exports = {
	name: 'unmute',
	description: '',
	execute(msg, args) {

        const member = msg.member;
	    if (member.hasPermission('KICK_MEMBERS')) {
            if (member.roles.cache.some(role => role.name === 'Muted')) {
                msg.channel.send(`\**Error:\** You cannot unmute yourself when muted`);
            } else {

                var input = msg.content;
                var reason = input.substr('32');
                const ping = msg.mentions.members.first();
                const role = msg.member.guild.roles.cache.get('611043295279316992');

                if (ping == undefined) {
                    msg.channel.send(`\**Error:\** Ping the person you want to unmute!`);
                } else if (ping.hasPermission('ADMINISTRATOR')) {
                    msg.channel.send(`\**Error:\** You can not unmute an Admin!`);
                } else if (reason !== "") {
                    msg.channel.send(`${ping} has been unmuted for \`${reason}\``);
                    ping.roles.remove(role);
                } else if (reason == "") {
                    msg.channel.send(`${ping} has been unmuted`);
                    ping.roles.remove(role.id);
                }

            }

        } else {
            msg.channel.send(`\**Error:\** You are missing "Mute Member" perms`);
        }
        



	},
};


