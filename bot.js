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

client1.login("NDg4NDQ2NDk5MTEwMzg3NzEz.DncU-w.tXd241v3TEyW9qUsg2AISVAKVR4")
client_2.login("NDg4NDQ2OTIzNDc3NjE0NTky.DncVwQ.hXq2LKcBWIrM_uGT-jfKt0cHyUo")
client_3.login("NDAzNTgxOTI2MjUxOTU0MTc5.DUJYsg.Q20PLeDWmOYd2vo-HRsNpAG_8nU")
client_4.login("NDg4NDQ3ODE2NTIwMzAyNTky.DncWQw.Ct-quBn2hovOySo81rg_21FmSnI")
client_5.login("NDgwMTY0MjgzNzIwNjYzMDQx.DncXvQ.e-hZRgq1LKIRQgC2hnCu9DBtMTw")
client_6.login("NDg4NDQ5OTMwODg1ODU3MzEw.DncYSg.etk1SsUOsvEgIkbyAMVdjwoVAlg")
client_7.login("NTExNjMwNjM4MzYxODcwMzM3.Dsts5g.2Fkv0Y_yXBYUIVah6u6zBIYQ5kQ")
