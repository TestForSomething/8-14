const Discord = require('discord.js');
const client = new Discord.Client();
client.on('message', message => {
       if (message.content.startsWith('سيرفرات')) {
     let msg =  client.guilds.map(guild => `**${guild.name}** عدد الاعضاء: ${guild.memberCount}`).join('\n');
  let embed = new Discord.RichEmbed()
  .setTitle(`${client.guilds.size}سيرفرات `)
  .setDescription(`${msg}`)
  .setColor("#ebf442");
  message.channel.send(embed);
}
});
 client.login(process.env.BOT_TOKEN);
