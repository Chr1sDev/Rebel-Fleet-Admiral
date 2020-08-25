module.exports = {
	name: 'immature',
	description: '',
	execute(msg, args) {

        const user = msg.client.users.cache.get(msg.author.id);
        user.send("nico-nico-nii https://www.youtube.com/watch?v=T4iC52d-fVY");

        msg.react('👍');

        const filter = (reaction, user) => {
            return reaction.emoji.name === '👍' && (user.id === `183339913008119808` || user.id === `279032930926592000`);
        };
        
        const collector = msg.createReactionCollector(filter, { time: 15000 });
        
        collector.on('collect', (reaction, user) => {
            msg.channel.send(`${msg.author} is very immature`);
            const immature = msg.member.guild.roles.cache.get('746601135149809684');
            const immaturemusic = msg.guild.roles.cache.get(`615191480067293210`);
            msg.member.roles.add(immature);
            msg.member.roles.add(immaturemusic);
        });
        
        collector.on('end', collected => {

            if (collected.size == 0) {
                msg.channel.send(`\**Error:\** Timeout, try again!`);
            } else {
                msg.channel.send(`Cooldown period has ended`);
            }

        });

	},
};