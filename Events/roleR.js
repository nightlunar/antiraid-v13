const Discord = require("discord.js");
const client = global.client;
const { Database } =  require('ready.db')
const  db  =  new  Database("settings.json")
const Errorhandler = require("discord-error-handler");
const handle  = new Errorhandler(client, {
  webhook: {id: `934160026438885425`, token: `vBoLvKP6ys4eu2DdHLOuTll6OrLWOeDF4BxHadiMhqX1wBJHz2RtY5QdX89pkKkKHJvk`}
}) 

exports.execute = async (role) => {
  const user = await role.guild.fetchAuditLogs({
    type: 'ROLE_DELETE'
}).then(audit => audit.entries.first())
const entry = user.executor 
let author = db.get(`executer_${role.guild.id}_${entry.id}_roleremove`)
let limts = db.get(`roleremovelimt_${role.guild.id}`)
if(limts === null) {
return console.log('shit');
}
let trustedusers = db.get(`trustedusers_${role.guild.id}`)
if(trustedusers && trustedusers.find(find => find.user == entry.id)) {
return console.log('Its Trusted User');
}
let logs = db.get(`acitonslogs_${role.guild.id}`)
if(author > limts) {
  let logsembeda = new Discord.MessageEmbed()
.setTitle(`${entry.tag} | I do not have power over said user.`)
.setColor("RED")
role.guild.members.ban(entry.id).catch(e => 
  client.channels.cache.get(logs).send({embeds: [logsembeda]}),
  )
console.log('trying to ban the user..')
let logsembed = new Discord.MessageEmbed()
.setTitle(`${entry.tag} | is raiding the server. Trying to ban user... \n[Breaking Role Delete Limit]`)
.setColor("BLURPLE")
client.channels.cache.get(logs).send({embeds: [logsembed]})
return db.remove(`executer_${role.guild.id}_${entry.id}_roleremove`, 1)

   }
   db.add(`executer_${role.guild.id}_${entry.id}_roleremove`, 1)
   let warn = db.get(`executer_${role.guild.id}_${entry.id}_roleremove`)
   let logsembed = new Discord.MessageEmbed()

   .setTitle(`${entry.tag} Is deleting roles.. \n[${warn || 0}/${limts || 0}]`)
   .setColor("GREEN")
   client.channels.cache.get(logs).send({embeds: [logsembed]})
 };
exports.conf = {
  event: "roleDelete"
};
