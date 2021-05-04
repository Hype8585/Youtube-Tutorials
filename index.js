const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Ready!!!`);
});


client.login('TOKEN_GOES_HERE');
