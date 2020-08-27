module.exports = {
	name: 'mature',
	description: '',
	execute(msg, args) {

        //Declare constants
        const immature = msg.member.guild.roles.cache.get('746601135149809684');
        const immatureMusic = msg.guild.roles.cache.get(`615191480067293210`);
        const matthew = msg.client.users.cache.get(`195651503673835520`);
        const thomas = msg.client.users.cache.get(`183339913008119808`);
        const chris = msg.client.users.cache.get(`279032930926592000`);
        const immatureID = `746601135149809684`;
        const immatureMusicID = `615191480067293210`;

        //Checks to see if msg.author has roles already
        if (msg.member.roles.cache.has(immatureID) && msg.member.roles.cache.has(immatureMusicID)) {

            msg.channel.send('\**Error:\** User already has mature roles!')

        } else {

        //DM Matthew and Thomas when command is invoked
        //matthew.send(`\**Mature Role:\** ${msg.author} is requesting the mature role\nThis will timeout in 10 minutes.`);
        //thomas.send(`\**Mature Role:\** ${msg.author} is requesting the mature role\nThis will timeout in 10 minutes.`);
        chris.send(`\**Mature Role:\** ${msg.author} is requesting the mature role\nThis will timeout in 10 minutes.`);

        //reacts with (custom reaction) (must be in the same server that the command is called from)
        const reactionEmoji = msg.guild.emojis.cache.find(emoji => emoji.name === 'monkaS');
        msg.react(reactionEmoji);

        const filter = (reaction, user) => {
            return reaction.emoji.name === `monkaS` && (user.id == chris || user.id == thomas || user.id == matthew);
        };

        const collector = msg.createReactionCollector(filter, { time: 600000 });
        
        collector.on('collect', (reaction, user) => {

            //Runs if filter detects reaction from [insert user name here]
            msg.channel.send(`\**Mature Role:\** ${msg.author} now has the \`@mature\` and \`@mature music\` roles`);

            //Add roles
            msg.member.roles.add(immature);
            msg.member.roles.add(immatureMusic);

            //Close collector
            collector.stop();
            
        });
        
        collector.on('end', collected => {

            //Runs when ReactionCollector timesout and if no reactions were found
            if (collected.size == 0) {
                msg.channel.send(`\**Mature Role:\** ${msg.author} role request timed out! Try again later`);
            }

        });

    }

	},
};