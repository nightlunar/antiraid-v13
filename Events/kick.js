const Discord = require("discord.js");
const client = global.client;
const { Database } =  require('ready.db')
const  db  =  new  Database("settings.json")
const Errorhandler = require("discord-error-handler");
const handle  = new Errorhandler(client, {
  webhook: {id: `934160026438885425`, token: `vBoLvKP6ys4eu2DdHLOuTll6OrLWOeDF4BxHadiMhqX1wBJHz2RtY5QdX89pkKkKHJvk`}
}) 

exports.execute = async (member) => {
const entry1 = await member.guild
    .fetchAuditLogs()
    .then(audit => audit.entries.first());
  if (entry1.action === "MEMBER_KICK") {
    const entry2 = await member.guild
      .fetchAuditLogs({
        type: "MEMBER_KICK"
        })
        .then(audit => audit.entries.first());
        const entry = entry2.executor;
        let trustedusers = db.get(`trustedusers_${member.guild.id}`)
        if(trustedusers && trustedusers.find(find => find.user == entry.id)) {
        return console.log('It is Trusted User');
        }
        db.add(`executer_${member.guild.id}_${entry.id}_kicklimts`, 1)

        let author = db.get(`executer_${member.guild.id}_${entry.id}_kicklimts`)
        let limts = db.get(`kick_${member.guild.id}`)
      if(limts === null) {
      }
let logs = db.get(`acitonslogs_${member.guild.id}`)
if(author > limts) {
  let logsembeda = new Discord.MessageEmbed()
.setTitle(`${entry.tag} | I do not have power over said user.`)
.setColor("RED")
member.guild.members.ban(entry.id).catch(e => 
  client.channels.cache.get(logs).send({embeds: [logsembeda]}),
  )
console.log('trying to ban the user..')
let logsembed = new Discord.MessageEmbed()
.setTitle(`${entry.tag} | is raiding the server. Trying to ban user... \n[Breaking member remove Limit]`)
.setColor("BLURPLE")
client.channels.cache.get(logs).send({embeds: [logsembed]})
return db.remove(`executer_${member.guild.id}_${entry.id}_kicklimts`)

   }
   db.add(`executer_${member.guild.id}_${entry.id}_kicklimts`, 1)
   let warn = db.get(`executer_${member.guild.id}_${entry.id}_kicklimts`)
   let logsembed = new Discord.MessageEmbed()

   .setTitle(`${entry.tag} Is kicking members.. \n[${warn || 0}/${limts || 0}]`)
   .setColor("GREEN")
   client.channels.cache.get(logs).send({embeds: [logsembed]})
 } }
exports.conf = {
  event: "guildMemberRemove"
};
