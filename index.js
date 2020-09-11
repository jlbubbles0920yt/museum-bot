const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "bm?";

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}! ${client.user.id}`);
  client.user.setActivity("use bm?help!")
});

client.on('message', message => {
  if(message.content.startsWith(`${prefix}help`)) {
    message.channel.send("I am not ready yet! Wait for my developer to give me stuff to do!")
  }
});

client.login('NzU0MDc1MDEwNTE5NTMxNjAx.X1vdFA.IvYfzjxgNgKN4XhveioSMxFttwI');
