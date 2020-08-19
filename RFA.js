// bot add link
// https://discordapp.com/oauth2/authorize?client_id=704877848858460170&scope=bot&permissions=8

//Permissions site
// https://discordapi.com/permissions.html#8

const fs = require('fs');
const Discord = require('discord.js')
const config = require('./config.json');
const { prefix, token } = require('./config.json');
const client = new Discord.Client()
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));



//Include Command Files ending in .js
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

// Runs once at startup
client.on('ready', () => {

    // Sets Bot Status
    console.log("Connected as " + client.user.tag + ", hiii")
    //client.user.setActivity("with JavaScript", {type: "PLAYING"})
    client.user.setActivity("r!help", {type: "STREAMING"})


});

//Runs when a member joins a guild
client.on('guildMemberAdd', join => {

  //join.send(`Welcome to ${join.guild.name}!`);
  //const role = join.member.guild.roles.cache.get('605516657837867145');
  //join.member.roles.add(role);

});


client.on('message', msg => {

  if (!msg.content.startsWith(prefix) || msg.author.bot) return;

	const args = msg.content.slice(prefix.length).split(/ +/);
	const commandName = args.shift().toLowerCase();

  if (!client.commands.has(commandName)) return;

  const command = client.commands.get(commandName);

  if (command.args && !args.length) {
  	return msg.channel.send(`You didn't provide any arguments, ${msg.author}!`);
  }

  try {
    command.execute(msg, args);
  } catch (error) {
    console.error(error);
    const user = client.users.cache.get('279032930926592000');
    user.send(`**Crashlog:** \n${error}`);
	  msg.reply('there was an error trying to execute that command!');
  }


});


client.on('message', async voice => {


if (voice.content.includes(`${prefix}play`)) {
  
  const connection = await voice.member.voice.channel.join();

  // Join the same voice channel of the author of the message
  if (voice.member.voice.channel) {
    //const connection = await voice.member.voice.channel.join();

    const fs = require('fs');
    const ytdl = require('ytdl-core-discord');

    const { apiurl } = require('ytsearcher');

    const { YTSearcher } = require('ytsearcher');
    const searcher = new YTSearcher('AIzaSyAvFzxIPtrBdOPe5YIEGohywE4EEDLVQwU');

    var input = voice.content;
    var usrInput = input.substr('6');
    let result = await searcher.search(usrInput);
    //voice.channel.send(usrInput + '\n' + result.first.url);

    // Create a dispatcher

    //const dispatcher = connection.play('https://www.youtube.com/watch?v=xGtyOPC3mEA'); , { quality: 'highestaudio' }
    //const dispatcher = connection.play(await ytdl('https://www.youtube.com/watch?v=xGtyOPC3mEA'), { type: 'opus' }, {quality: 'lowest' });
    //https://www.youtube.com/watch?v=HRW9W7ZtOEI
    //const dispatcher = connection.play(await ytdl('https://www.youtube.com/watch?v=HRW9W7ZtOEI'), { type: 'opus' }, {quality: 'lowest' });
    const dispatcher = connection.play(await ytdl(result.first.url), { type: 'opus' }, {quality: 'lowest' });

    dispatcher.on('start', () => {
        voice.channel.send('Now playing ' + result.first.url);
    });

    dispatcher.on('finish', () => {
        //voice.channel.send('Song has finished playing!');
        connection.disconnect();
    });

    // Always remember to handle errors appropriately!
    dispatcher.on('error', console.error);

    }
}

});

  client.login(token)

