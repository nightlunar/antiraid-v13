const { MessageActionRow, MessageSelectMenu, MessageEmbed } = require('discord.js');
const { Database } =  require('ready.db')
const  db  =  new  Database("settings.json")

module.exports = {
    "code": "ayarla",
    "aliases": [],
     async run (client,message,args){
        if (message.author.id != message.guild.ownerId) {
            return message.reply("<:Wrong:934100954196885504> Bu komutu kullanacak yetkin yok.")
        }
		m = message
		let rolelimit = db.get(`rolecreatelimt_${message.guild.id}`) 
		if(rolelimit === null) rolelimit = "Kapalı :x:"
		let roledelete = db.get(`roleremovelimt_${m.guild.id}`) 
		if(roledelete === null) roledelete = "Kapalı :x:"
		let logschannel = db.get(`acitonslogs_${message.guild.id}`)
		let logschannel2 = db.get(`acitonslogs_${message.guild.id}`)
		if(logschannel === null) logschannel = "Kapalı :x:"
		else logschannel = `<#${logschannel2}>`
		let channelcreatelimits = db.get(`channelcreatelimt_${m.guild.id}`)
		if(channelcreatelimits === null) channelcreatelimits = "Kapalı :x:"
		let channeldeletelimits = db.get(`channelremovelimt_${m.guild.id}`)
		if(channeldeletelimits === null) channeldeletelimits = "Kapalı :x:"
		let banlimits = db.get(`ban_${message.guild.id}`)
	   if(banlimits === null) banlimits = "Kapalı :x:"
	   let kicklimits = db.get(`kick_${message.guild.id}`)
	   if(kicklimits === null) kicklimits = "Kapalı :x:"
	   let punishment = db.get(`punishment_${message.guild.id}`)
        const emb = new MessageEmbed()
		.setAuthor(message.author.username, message.author.displayAvatarURL())
	  .setColor('BLURPLE')
	  .setTitle(`⚙️ ${message.guild.name} Antiraid configuration`)
	  .addField('Rol oluşturma limit:', `${rolelimit}`, true)
	  .addField('Rol silme limit:', `${roledelete}`, true)
	  .addField(`Kanal oluşturma limit`, `${channelcreatelimits}`, true)
	  .addField(`Kanal silme limit`, `${channeldeletelimits}`, true)
	  .addField(`Ban limit`, `${banlimits}`, true)
	  .addField(`Kick limit`, `${kicklimits}`, true)
	  .addField(`Log kanalı`, logschannel, true);
    	const row = new MessageActionRow()
			.addComponents(
				new MessageSelectMenu()
					.setCustomId('config')
					.setPlaceholder('Ayarlanacak bir şey seç.')
					.addOptions([
						{
							label: 'Log kanalı',
							value: 'log',
                            emoji: '<:log:934093208743477289>',
						},
						{
							label: 'Rol oluşturma limit',
							value: 'roleC',
                            emoji: '<:icons_createrole:934112597421228092>',
						},
						{
							label: 'Rol silme limit',
							value: 'roleR',
                            emoji: '<:icons_deleterole:934112577389219861>',
						},
						{
							label: 'Kanal oluşturma limit',
							value: 'chanC',
                            emoji: '<:icons_createchannel:936171236273291265>',
						},
						{
							label: 'Kanal silme limit',
							value: 'chanR',
                            emoji: '<:icons_deletechannel:936171264068964412>',
						},
						{
							label: 'Ban limit',
							value: 'ban',
                            emoji: '<:ban:936212974660636722>',
						},
						{
							label: 'Kick limit',
							value: 'kick',
                            emoji: '<:kick:936213001479008266>',
						},
					]),
			);

		await message.reply({ embeds: [emb], components: [row] });

  
  }};