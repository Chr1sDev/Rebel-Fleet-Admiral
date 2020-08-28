const Discord = require('discord.js');
module.exports = {
    name: 'about',
    description: '',
    execute(msg, args) {

        const aboutEmbed = new Discord.MessageEmbed()
        .setTitle(`About Rebel Fleet Admiral Bot`)
        .setURL(`https://chr1s.dev`)
        .setAuthor("About!", "https://cdn.discordapp.com/icons/586736904771469313/0e4b24f8252d25949976c14b9ce5c11c.webp","https://chr1s.dev")
        .setColor('#02f2ce')
        .setDescription(`\**Rebel Fleet Admiral\** (RFA) is an all-purpose discord bot for the discord server "Rebel Grenades". It's main purpose is moderation and music. But, it also includes other miscellaneous commands for obtaining information. Such as member profile link and guild member count.`)
        .setFooter(`Developer: Chr1sDev (クリス)`, `https://chr1s.dev/assets/verified_dev.png`)
        .setThumbnail(`https://cdn.discordapp.com/icons/586736904771469313/0e4b24f8252d25949976c14b9ce5c11c.webp`)
        msg.channel.send(aboutEmbed)

    },
}