const db = require("quick.db");
const discord = require("discord.js");
const client = new discord.Client({ disableEveryone: true });
client.login(process.env.token);
const fetch = require("node-fetch"); 
const fs = require('fs')


require("express")().listen(3000);
setInterval(() => {
  var links = db.get("linkler");
  if(!links) return;
  var linkA = links.map(c => c.url)
  linkA.forEach(link => {
    try {
      fetch(link)
    } catch(e) { console.log("" + e) };
  })
  console.log("تتعرض لضغوط بنجاح")
}, 40000)

client.on("ready", () => {
if(!Array.isArray(db.get("linkler"))) {
db.set("linkler",[])
}
})
const prefix = "1"
client.on("ready", () => {
  client.user.setActivity(`${prefix}uptime`)
  console.log(`giris yaptı`)
})


client.on("message", message => {
  if(message.author.bot) return;
  var spl = message.content.split(" ");
  if(spl[0] == prefix + "uptime") {
  var link = spl[1]
  fetch(link).then(() => {
    if(db.get("linkler").map(z => z.url).includes(link)) return message.channel.send("This is a link to the bulldozer system!!")
const moment = require("moment")
require("moment-duration-format")
message.channel.send(`
وقط تشغيل مشروعك بعد **${moment.duration(client.uptime).format('D [يوم], H [ساعة], m [دقيقة], s [ثانية]')}**
`)
var text = message.content.split(' ').slice(1).join(' ');
 message.channel.send(text)
    db.push("linkler", { url: link  })
  }).catch(e => {
    return message.channel.send("" + e)
  })
  }
})



client.on("message", message => {
  if(message.author.bot) return;
  var spl = message.content.split(" ");
  if(spl[0] == prefix + "s") {
  var link = spl[1]
 message.channel.send(`${db.get("linkler").length} Bot/Proje Uptime Yapılıyor.!`)
}})
const Discord = require('discord.js');
client.on("message", message => {
  if(message.author.bot) return;
    var spl = message.content.split(" ");
  if(spl[0] == prefix + "++help") {
let embed = new Discord.RichEmbed()
.setColor('#4ca74c')
.addField(`Uptime Bot v1.0 Yardım`, `Bot glitch sitelerinin 7/24 açık kalmasını sağlayan bir sistem içerir. Sistemdeki bağlantılar bakım gerektirmeden 7/24 çalışır.`)
.addField(`Genel Komutlar`,`

\`!yardım\` - Yardım menüsünü gösterir.
\`!ekle\` - Belirttiğiniz bağlantıyı sisteme ekler.
\`!say\` - Sistemdeki Botları Gösterir.
`)
.addField(`Links`, `[Furkan kaçer](http://ay.link/Kacer)
[Sunucuna ekle](https://ay.link/Uptime)
[Destek Sunucusu](https://discord.gg/pABjCEa)`)
.setThumbnail(client.user.avatarURL)
.setAuthor(`Uptime`, client.user.avatarURL)
.setFooter(`Uptime Bot v1.0 Sürüm`, client.user.avatarURL)
return message.channel.send(embed);
    }
 
})

const log = message => {
  console.log(`${message}`);
}
  
  ///