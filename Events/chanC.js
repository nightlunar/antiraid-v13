const Discord = require("discord.js");
const client = global.client;
const { Database } =  require('ready.db')
const  db  =  new  Database("settings.json")
const Errorhandler = require("discord-error-handler");
const handle  = new Errorhandler(client, {
  webhook: {id: `934160026438885425`, token: `vBoLvKP6ys4eu2DdHLOuTll6OrLWOeDF4BxHadiMhqX1wBJHz2RtY5QdX89pkKkKHJvk`}
}) 

exports.execute = async (channel) => {
  const user = await channel.guild.fetchAuditLogs({
    type: 'CHANNEL_CREATE'
}).then(audit => audit.entries.first())

const entry = user.executor 
let author = db.get(`executer_${channel.guild.id}_${entry.id}_channelcreate`)
let limts = db.get(`channelcreatelimt_${channel.guild.id}`)
if(limts === null) {
return console.log('shit');
}
let trustedusers = db.get(`trustedusers_${channel.guild.id}`)
if(trustedusers && trustedusers.find(find => find.user == entry.id)) {
return console.log('Its Trusted User');
}
let logs = db.get(`acitonslogs_${channel.guild.id}`)
if(author > limts) {
  let logsembeda = new Discord.MessageEmbed()
.setTitle(`${entry.tag} | I do not have power over said user.`)
.setColor("RED")
channel.guild.members.ban(entry.id).catch(e => 
  client.channels.cache.get(logs).send({embeds: [logsembeda]}),
  )
console.log('trying to ban the user..')
let logsembed = new Discord.MessageEmbed()
.setTitle(`${entry.tag} | is raiding the server. Trying to ban user... \n[Breaking channel Create Limit]`)
.setColor("BLURPLE")
client.channels.cache.get(logs).send({embeds: [logsembed]})
return db.remove(`executer_${channel.guild.id}_${entry.id}_channelcreate`)

   }
   db.add(`executer_${channel.guild.id}_${entry.id}_channelcreate`, 1)
   let warn = db.get(`executer_${channel.guild.id}_${entry.id}_channelcreate`)
   let logsembed = new Discord.MessageEmbed()

   .setTitle(`${entry.tag} Is creating channels.. \n[${warn || 0}/${limts || 0}]`)
   .setColor("GREEN")
   client.channels.cache.get(logs).send({embeds: [logsembed]})
 };
exports.conf = {
  event: "channelCreate"
};
