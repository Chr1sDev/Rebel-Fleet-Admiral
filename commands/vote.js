module.exports = {
	name: 'vote',
    description: '',
    args: true,
	execute(msg, args) {
        if (args[0] === '1') {

        msg.channel.send('hello nope haha');

        }
	},
};