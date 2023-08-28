const {Client, Events, GatewayIntentBits} = require('discord.js');
const {token} = require('./config.json');
const client = new Client({intents: [GatewayIntentBits.Guilds]}); // New Client instance

client.once(Events.ClientReady, c => {
    console.log(`Logged in as ${c.user.tag}`);
});
client.login(token)

