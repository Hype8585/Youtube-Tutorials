const Discord = require('discord.js')
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Ready!!')
    client.user.setActivity("PASTE_STATUS_HERE", {
        type: "PLAYING",
    })
})

client.login('PASTE_TOKEN_HERE')
