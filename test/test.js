const Discord = require('discord.js');
const ms = require('ms');

module.exports = {
    name: 'test',
    usage: 'test',


    run: async (client, msg) => {
        msg.reply('Hi');

    }
}
