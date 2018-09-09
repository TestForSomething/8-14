const Discord = require('discord.js');
const client = new Discord.Client();
  function codes() {
       this.clear = function(message) {
           const args = message.content.slice(config.prefix.length).trim().split(/ +/g); const command = args.shift().toLowerCase();
if(command == "clear") {
message.delete() if(!message.channel.guild) return; if(message.member.hasPermission(0x2000)){ let count = args[0] || 100; let messagecount = parseInt(count); message.channel.fetchMessages({limit: messagecount}) .then( messages => { count = messages.array().length message.channel.send(` ** messages deleted count: ${count} **`).then(m => m.delete(2500)); message.delete(60000); return messages; }) .then(messages => message.channel.bulkDelete(messages)) } else { var manage = new Discord.RichEmbed() .setDescription('You Do Not Have Permission to use this') .setColor("RANDOM") message.channel.send(manage) return;
}
       }
}

module.exports = codes;
 client.login(process.env.BOT_TOKEN);
