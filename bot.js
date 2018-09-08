const Discord = require('discord.js');
const client = new Discord.Client();
client.on('message',async client => {
  var codes = "+";
  if(client.content.startsWith(codes + "test")) {
  if(!client.guild.member(client.author).hasPermissions('MANAGE_CHANNELS')) return client.reply(':x: **ليس لديك الصلاحيات الكافية**');
  if(!client.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return client.reply(':x: **ليس معي الصلاحيات الكافية**');
  client.guild.createChannel(`Voice Online : [ ${client.guild.members.filter(m => m.voiceChannel).size} ]` , 'voice').then(c => { 
    console.log(`Voice Online Is Activation In ${client.guild.name}`);
    c.overwritePermissions(client.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
    setInterval(() => {
      c.setName(` Online :  ${client.guild.members.filter(m => m.voiceChannel).size} .`)
    },1000);
  });
  }
});
 client.login(process.env.BOT_TOKEN);
