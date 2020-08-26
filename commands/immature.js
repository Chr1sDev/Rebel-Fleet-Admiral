module.exports = {
	name: 'mature',
	description: '',
	execute(msg, args) {

        //DM Matthew and Thomas when command is invoked
        const matthew = msg.client.users.cache.get(`195651503673835520`);
        const thomas = msg.client.users.cache.get(`183339913008119808`);
        const chris = msg.client.users.cache.get(`279032930926592000`);
        //matthew.send("\**Mature Role:\** Press on the reaction to confirm role\nThis will timeout in 20 minutes.");
        //thomas.send("\**Mature Role:\** Press on the reaction to confirm role\nThis will timeout in 20 minutes.");

        //reacts with MonkaS (custom reaction) (must be in the same server that the command is called from)
        const reactionEmoji = msg.guild.emojis.cache.find(emoji => emoji.name === 'monkaS');
        msg.react(reactionEmoji);

        //(user.id === `183339913008119808` || user.id === `279032930926592000` || user.id === `195651503673835520`)
        const filter = (reaction, user) => {
            return reaction.emoji.name === `monkaS` && (user.id == chris || user.id == thomas || user.id == matthew);
        };
        //1200000
        const collector = msg.createReactionCollector(filter, { time: 1200000 });
        
        collector.on('collect', (reaction, user) => {

            //Runs if filter detects reaction from [insert user name here]
            msg.channel.send(`\**Mature Role:\** ${msg.author} now has the \`@mature\` and \`@mature music\` roles`);
            const immature = msg.member.guild.roles.cache.get('746601135149809684');
            const immaturemusic = msg.guild.roles.cache.get(`615191480067293210`);
            msg.member.roles.add(immature);
            msg.member.roles.add(immaturemusic);
            msg.channel.send(`It worked`);
        });
        
        collector.on('end', collected => {

            console.log(collected.size);

            //Runs when ReactionCollector timesout and if no reactions were found
            if (collected.size == 0) {
                msg.channel.send(`\**Mature Role:\** ${msg.author} role request timed out! Try again later`);
            }

        });

	},
};