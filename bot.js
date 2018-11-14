const Discord = require("discord.js");
const Enmap = require(`enmap`);
const farm = new Enmap();


const client1 = new Discord.Client();
const client_2 = new Discord.Client();
const client_3 = new Discord.Client();
const client_4 = new Discord.Client();
const client_5 = new Discord.Client();
const client_6 = new Discord.Client();
const client_7 = new Discord.Client();

client1.on('ready', () => {
console.log(`Logged in as ${client1.user.tag}!`);
});
function randomIntFromInterval(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}
client1.on('message', msg => {
    let ownerid = '278261303540187137';
    if(msg.author.id === ownerid){
        if(msg.content === "farm"){
            if(msg.channel.id !== "508196822242689032") return;
            let count = 0;
            farm.set(`farm`, 'true')
            setInterval(function(){
                setTimeout(function(){
                    if(farm.get(`farm`) !== 'true') return;
                    count++;
                    msg.channel.send(`${randomIntFromInterval(1135,1234)}${randomIntFromInterval(1135,1334)}${randomIntFromInterval(1135,1534)} #${count}`)
                }, randomIntFromInterval(250, 300))
            }, randomIntFromInterval(1119, 2119))
        }
        if(msg.content.startsWith(`credits`)){
            if(msg.channel.id !== "510836021357838336") return;
            if(msg.isMentioned(client1.user)){
                farm.set(`farm`, 'blah blah')
                let args = msg.content.split(` `)
                msg.channel.send(`#credits <@!${msg.author.id}> ${args[2]}`).then(()=>{
                    const filter = m => m.author.id === msg.author.id;
                    msg.channel.awaitMessages(filter, {max: 1, time: 29000}).then(col=>{
                        if(col.first().content === "cancel"){
                            return msg.reply(`Canceled!`);
                        }
                        msg.channel.send(`${col.first().content}`).then(()=> farm.set(`farm`, 'true'))
                    })
                })
            }
        }
    }
});


function randomIntFromInterval(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}
client_2.on('message', msg => {
    let ownerid = '278261303540187137';
    if(msg.author.id === ownerid){
        if(msg.content === "farm"){
            if(msg.channel.id !== "508196822242689032") return;
            let count = 0;
            farm.set(`farm`, 'true')
            setInterval(function(){
                setTimeout(function(){
                    if(farm.get(`farm`) !== 'true') return;
                    count++;
                    msg.channel.send(`${randomIntFromInterval(1135,1234)}${randomIntFromInterval(1135,1334)}${randomIntFromInterval(1135,1534)} #${count}`)
                }, randomIntFromInterval(250, 300))
            }, randomIntFromInterval(1119, 2119))
        }
        if(msg.content.startsWith(`credits`)){
            if(msg.channel.id !== "510836021357838336") return;
            if(msg.isMentioned(client_2.user)){
                farm.set(`farm`, 'blah blah')
                let args = msg.content.split(` `)
                msg.channel.send(`#credits <@!${msg.author.id}> ${args[2]}`).then(()=>{
                    const filter = m => m.author.id === msg.author.id;
                    msg.channel.awaitMessages(filter, {max: 1, time: 29000}).then(col=>{
                        if(col.first().content === "cancel"){
                            return msg.reply(`Canceled!`);
                        }
                        msg.channel.send(`${col.first().content}`).then(()=> farm.set(`farm`, 'true'))
                    })
                })
            }
        }
    }
});

function randomIntFromInterval(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}
client_3.on('message', msg => {
    let ownerid = '278261303540187137';
    if(msg.author.id === ownerid){
        if(msg.content === "farm"){
            if(msg.channel.id !== "508196822242689032") return;
            let count = 0;
            farm.set(`farm`, 'true')
            setInterval(function(){
                setTimeout(function(){
                    if(farm.get(`farm`) !== 'true') return;
                    count++;
                    msg.channel.send(`${randomIntFromInterval(1135,1234)}${randomIntFromInterval(1135,1334)}${randomIntFromInterval(1135,1534)} #${count}`)
                }, randomIntFromInterval(250, 300))
            }, randomIntFromInterval(1119, 2119))
        }
        if(msg.content.startsWith(`credits`)){
            if(msg.channel.id !== "510836021357838336") return;
            if(msg.isMentioned(client_3.user)){
                farm.set(`farm`, 'blah blah')
                let args = msg.content.split(` `)
                msg.channel.send(`#credits <@!${msg.author.id}> ${args[2]}`).then(()=>{
                    const filter = m => m.author.id === msg.author.id;
                    msg.channel.awaitMessages(filter, {max: 1, time: 29000}).then(col=>{
                        if(col.first().content === "cancel"){
                            return msg.reply(`Canceled!`);
                        }
                        msg.channel.send(`${col.first().content}`).then(()=> farm.set(`farm`, 'true'))
                    })
                })
            }
        }
    }
});
function randomIntFromInterval(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}
client_4.on('message', msg => {
    let ownerid = '278261303540187137';
    if(msg.author.id === ownerid){
        if(msg.content === "farm"){
            if(msg.channel.id !== "508196822242689032") return;
            let count = 0;
            farm.set(`farm`, 'true')
            setInterval(function(){
                setTimeout(function(){
                    if(farm.get(`farm`) !== 'true') return;
                    count++;
                    msg.channel.send(`${randomIntFromInterval(1135,1234)}${randomIntFromInterval(1135,1334)}${randomIntFromInterval(1135,1534)} #${count}`)
                }, randomIntFromInterval(250, 300))
            }, randomIntFromInterval(1119, 2119))
        }
        if(msg.content.startsWith(`credits`)){
            if(msg.channel.id !== "510836021357838336") return;
            if(msg.isMentioned(client_4.user)){
                farm.set(`farm`, 'blah blah')
                let args = msg.content.split(` `)
                msg.channel.send(`#credits <@!${msg.author.id}> ${args[2]}`).then(()=>{
                    const filter = m => m.author.id === msg.author.id;
                    msg.channel.awaitMessages(filter, {max: 1, time: 29000}).then(col=>{
                        if(col.first().content === "cancel"){
                            return msg.reply(`Canceled!`);
                        }
                        msg.channel.send(`${col.first().content}`).then(()=> farm.set(`farm`, 'true'))
                    })
                })
            }
        }
    }
});
function randomIntFromInterval(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}
client_5.on('message', msg => {
    let ownerid = '278261303540187137';
    if(msg.author.id === ownerid){
        if(msg.content === "farm"){
            if(msg.channel.id !== "508196822242689032") return;
            let count = 0;
            farm.set(`farm`, 'true')
            setInterval(function(){
                setTimeout(function(){
                    if(farm.get(`farm`) !== 'true') return;
                    count++;
                    msg.channel.send(`${randomIntFromInterval(1135,1234)}${randomIntFromInterval(1135,1334)}${randomIntFromInterval(1135,1534)} #${count}`)
                }, randomIntFromInterval(250, 300))
            }, randomIntFromInterval(1119, 2119))
        }
        if(msg.content.startsWith(`credits`)){
            if(msg.channel.id !== "510836021357838336") return;
            if(msg.isMentioned(client_5.user)){
                farm.set(`farm`, 'blah blah')
                let args = msg.content.split(` `)
                msg.channel.send(`#credits <@!${msg.author.id}> ${args[2]}`).then(()=>{
                    const filter = m => m.author.id === msg.author.id;
                    msg.channel.awaitMessages(filter, {max: 1, time: 29000}).then(col=>{
                        if(col.first().content === "cancel"){
                            return msg.reply(`Canceled!`);
                        }
                        msg.channel.send(`${col.first().content}`).then(()=> farm.set(`farm`, 'true'))
                    })
                })
            }
        }
    }
});

function randomIntFromInterval(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}
client_6.on('message', msg => {
    let ownerid = '278261303540187137';
    if(msg.author.id === ownerid){
        if(msg.content === "farm"){
            if(msg.channel.id !== "508196822242689032") return;
            let count = 0;
            farm.set(`farm`, 'true')
            setInterval(function(){
                setTimeout(function(){
                    if(farm.get(`farm`) !== 'true') return;
                    count++;
                    msg.channel.send(`${randomIntFromInterval(1135,1234)}${randomIntFromInterval(1135,1334)}${randomIntFromInterval(1135,1534)} #${count}`)
                }, randomIntFromInterval(250, 300))
            }, randomIntFromInterval(1119, 2119))
        }
        if(msg.content.startsWith(`credits`)){
            if(msg.channel.id !== "510836021357838336") return;
            if(msg.isMentioned(client_6.user)){
                farm.set(`farm`, 'blah blah')
                let args = msg.content.split(` `)
                msg.channel.send(`#credits <@!${msg.author.id}> ${args[2]}`).then(()=>{
                    const filter = m => m.author.id === msg.author.id;
                    msg.channel.awaitMessages(filter, {max: 1, time: 29000}).then(col=>{
                        if(col.first().content === "cancel"){
                            return msg.reply(`Canceled!`);
                        }
                        msg.channel.send(`${col.first().content}`).then(()=> farm.set(`farm`, 'true'))
                    })
                })
            }
        }
    }
});
function randomIntFromInterval(min,max){
  return Math.floor(Math.random()*(max-min+1)+min);
}
client_7.on('message', msg => {
  let ownerid = '278261303540187137';
  if(msg.author.id === ownerid){
      if(msg.content === "farm"){
          if(msg.channel.id !== "508196822242689032") return;
          let count = 0;
          farm.set(`farm`, 'true')
          setInterval(function(){
              setTimeout(function(){
                  if(farm.get(`farm`) !== 'true') return;
                  count++;
                  msg.channel.send(`${randomIntFromInterval(1135,1234)}${randomIntFromInterval(1135,1334)}${randomIntFromInterval(1135,1534)} #${count}`)
              }, randomIntFromInterval(250, 300))
          }, randomIntFromInterval(1119, 2119))
      }
      if(msg.content.startsWith(`credits`)){
          if(msg.channel.id !== "510836021357838336") return;
          if(msg.isMentioned(client_7.user)){
              farm.set(`farm`, 'blah blah')
              let args = msg.content.split(` `)
              msg.channel.send(`#credits <@!${msg.author.id}> ${args[2]}`).then(()=>{
                  const filter = m => m.author.id === msg.author.id;
                  msg.channel.awaitMessages(filter, {max: 1, time: 29000}).then(col=>{
                      if(col.first().content === "cancel"){
                          return msg.reply(`Canceled!`);
                      }
                      msg.channel.send(`${col.first().content}`).then(()=> farm.set(`farm`, 'true'))
                  })
              })
          }
      }
  }
});

client1.login("NTEyMzE5MDIxNTIyMDkyMDMz.Ds3uGA.-lQ6vWi5WZ64j8DQWvKvl3YOhUo")
client_2.login("NTEyMzE5ODI3OTQ4MzM5MjEw.Ds3uqQ.qhzbe1wevn310-LwX28DXWvFiIU")
client_3.login("NDg4NDQ2NDk5MTEwMzg3NzEz.Ds3tig.ncRjbLON45f64SgiTgVl3iYa3WY")
client_4.login("NTEyMzIwOTgxMDY3NjI4NTY1.Ds3v6Q.fvKqnSUxyRU6Lqr5GX0Oz9TRjZk")
client_5.login("NTEyMzIyMDgyNTI5NjA3Njgw.Ds3w3g.nCZr0bdokETElScrXvNuyCvjUp4")
client_6.login("NTEyMzIyNzE1NDIwNDU5MDA4.Ds3xkw.6iW8x-iOhvf1KGjLRi-BgCPoKdQ")
client_7.login("NTEyMzIzODUzNTk1MzEyMTQ4.Ds3yZg.LsZE-M0fxlU_q09CJ_8yokhdRcQ")
