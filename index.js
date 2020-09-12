const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "bm?";

const { GiveawaysManager } = require("discord-giveaways");

const manager = new GiveawaysManager(client, {
    storage: "./giveaways.json",
    updateCountdownEvery: 10000,
    default: {
        botsCanWin: false,
        exemptPermissions: [ "MANAGE_MESSAGES", "ADMINISTRATOR" ],
        embedColor: "#FF0000",
        reaction: "🎉"
    }
});

client.giveawaysManager = manager;

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}! ${client.user.id}`);
  client.user.setActivity("use bm?help!")
});

client.on('message', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const ms = require("ms");
  const args = message.content.slice(prefix.length).trim().split(/ +/g);

  if(message.content.startsWith(`${prefix}help`)) {
    message.channel.send(`Commands are:\n${prefix}say\nThats all!`)
  }

  if(message.content.startsWith(`${prefix}say`)) {
    const sayMessage = args.join(" ").slice(4);
    message.delete().catch(O_o => {});
    message.channel.send(`${sayMessage}`);
  }
});

client.login(process.env.TOKEN);
