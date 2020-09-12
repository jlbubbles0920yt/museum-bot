const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "bm?";

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}! ${client.user.id}`);
  client.user.setActivity("use bm?help!")
});

client.on('message', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(' ');

  if(message.content.startsWith(`${prefix}help`)) {
    message.channel.send(`Commands are:\n${prefix}say\nThats all!`)
  }

  if(message.content.startsWith(`${prefix}say`)) {
    const sayMessage = args.join(" ").slice(1);
    message.delete().catch(O_o => {});
    message.channel.send(`${sayMessage}`);
  }
});

client.login('NzU0MDc1MDEwNTE5NTMxNjAx.X1vdFA.IvYfzjxgNgKN4XhveioSMxFttwI');
