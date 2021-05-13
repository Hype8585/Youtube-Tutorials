const Discord = require('discord.js');
const client = new Discord.Client();
const { default_prefix } = "YOUR_BOT_PREFIX";
const { readdirSync } = require('fs');
const { join } = require('path');
const db = require('quick.db')


client.commands = new Discord.Collection();
const commandFiles = readdirSync(join(__dirname, "test")).filter(file => file.endsWith(".js"));

for (const file of commandFiles) {
    const command = require(join(__dirname, "test", `${file}`));
    client.commands.set(command.name, command);
}


client.on("error", console.error);


client.on('ready', () => {
    console.log('The bot is now ready!!')
})


client.on("message", async message => {

    if (message.author.bot) return;
    if (message.channel.type === 'dm') return;

    let prefix = await db.get(`prefix ${message.guild.id}`);
    if (prefix === null) prefix = "YOUR_BOT_PREFIX"

    if (message.content.startsWith(prefix)) {
        const args = message.content.slice(prefix.length).trim().split(/ +/g)

        const command = args.shift().toLowerCase();

        if (!client.commands.has(command)) return;

        try {
            client.commands.get(command).run(client, message, args)
        } catch (error) {
            console.error(error);
        }
    }
})





client.login('TOKEN_GOES_HERE')
