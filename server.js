const db = require("quick.db");
const discord = require("discord.js");
const client = new discord.Client({ disableEveryone: true });
client.login(process.env.token);
const fetch = require("node-fetch"); 
const fs = require('fs')


require("express")().listen(1343);
setInterval(() => {
  var links = db.get("linkg");
  if(!links) return;
  var linkA = links.map(c => c.url)
  linkA.forEach(link => {
    try {
      fetch(link)
    } catch(e) { console.log("" + e) };
  })
  console.log("تتعرض لضغوط بنجاح")
}, 50000)
client.on("ready", () => {
if(!Array.isArray(db.get("linkg"))) {
db.set("linkg",[])
}
})
const prefix = "_"
client.on("ready", () => {
  client.user.setActivity(`${prefix}help + جرب و قول ريك في خاصي هب🥂!.ة`)
  console.log(`giris yaptı`)
})
client.on("message", message => {
  if(message.author.bot) return;
  var spl = message.content.split(" ");
  if(spl[0] == prefix + "uptime") {
  var link = spl[1]
  fetch(link).then(() => {
    if(db.get("linkg").map(z => z.url).includes(link)) return message.channel.send("This is a link to the bulldozer system!!")
const moment = require("moment")
require("moment-duration-format")
message.channel.send(` It's Hosted now `)
var text = message.content.split(' ').slice(1).join(' ');
 message.channel.send(text)
    db.push("linkg", { project: link})
  }).catch(e => { return message.channel.send("جيب رابط url بتاع المشروع من فضلك")
  })
  }
})

client.on("message", message => {
  if(message.author.bot) return;
  var spl = message.content.split(" ");
  if(spl[0] == prefix + "project") {
  var link = spl[1]
 message.channel.send(`**${db.get("linkg").length}** Number of projects`)
}})
const Discord = require('discord.js');
client.on("message", message => {
  if(message.author.bot) return;
    var spl = message.content.split(" ");
  if(spl[0] == prefix + "help") {
let embed = new Discord.RichEmbed()
.setColor('#f12ee0')
.addField(`Welcome In the site uptime`,`
\`${prefix}uptime\`, \`${prefix}project\`,
`)
return message.channel.send(embed);
    }
})
const log = message => {
  console.log(`${message}`);
}