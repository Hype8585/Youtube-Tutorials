
const Discord = require("discord.js");
const client = new Discord.Client();



client.on("ready", () => {
    console.log("The bot is now online");


    const channelId = "CHANNEL_ID";
    client.on('guildMemberAdd', (member) => {
        console.log(member);

        const message = `Welcome <@${
            member.id
          }> to our server! Be sure to check out our rules`;

        const channel = member.guild.channels.cache.get(channelId);
        channel.send(message);
    });
})



client.login('TOKEN_GOES_HERE')
