const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`**
  5invites : 50K
  10invites : 80K
  300Invites : 1M Credit
  15Invites : Hypixel VIP
  50Invites : Hypxiel MVP+
  50Invites : Discord Nitro
  

                                 https://discord.gg/NCmBbgp**`)
}).catch(console.error)
})

client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(`**
  5invites : 50K
  10invites : 80K
  300Invites : 1M Credit
  15Invites : Hypixel VIP
  50Invites : Hypxiel MVP+
  50Invites : Discord Nitro
  

                                 https://discord.gg/NCmBbgp**`)
}).catch(console.error)
})
client.login("NDg4NDUwNTI2MDcwMTc3ODM5.Dt2ORA.YFJHA-GDxV4-Ue6tz_8ioaDWcpw");
