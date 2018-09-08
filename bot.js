const Discord = require('discord.js');
const hero = new Discord.Client();

hero.on('message',async message => {
  if(message.content.startsWith('سيرفرات')) {
    if(message.author.id !== '278261303540187137') return message.channel.send(':negative_squared_cross_mark: » هذا الأمر مخصص لصاحب البوت فقط');
    try {
      hero.guilds.forEach(g => {
        var l = g.channels.first();
        l.createInvite({
          maxUses: 3
        }).then(i => {
          var o = 1;
          message.channel.send(`\`${g.name}\`, ${i}`).catch(e => message.channel.send(`:negative_squared_cross_mark: » فشل ارسال بعض السيرفرات`));
        });
      });
    } catch(e) {
      message.channel.send(`:negative_squared_cross_mark: » ${e}`);
    }
  }
});
 hero.login(process.env.BOT_TOKEN);
