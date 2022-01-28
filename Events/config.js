const Discord = require("discord.js");
const client = global.client;
const { Database } =  require('ready.db')
const  db  =  new  Database("settings.json")

exports.execute = async (interaction ) => {
	if (interaction.customId === 'config') {
        if (interaction.member != interaction.guild.ownerId) {
            return interaction.channel.send({content: '<:Wrong:934100954196885504> Bunu kullanmak için gerekli yetkiye sahip değilsin', ephermal: true})
    }
    if (interaction.values[0] == 'log') {
    await interaction.update({ content: 'Şimdi değiştirilen: logging channel for this server!\n istediğin kanal ile bir mesaj gönder', components: [], embeds: [] });
    const filter = m => m.author.id == m.guild.ownerId
    const collector = interaction.channel.createMessageCollector({ filter, time: 15000, max: 1 });
    
    collector.on('collect', m => {
      if (!m.mentions.channels.first()) return m.reply("<:exclamation:934102712348450866> Malmısın dostum.")
      var channel = m.mentions.channels.first()
        if (!channel) return m.reply("<:exclamation:934102712348450866> Malmısın dostum.")
      channel.send(`**<:icons_bots:934108319193399336> Log kanalım burası **`)
      db.set(`acitonslogs_${m.guild.id}`, channel.id)
      return m.reply(`<:Correct:934107739997765662> Log kanalımı: ${channel} olarak ayarladım`)
    
  
    });



    collector.on('end', collected => {
        console.log(`Collected ${collected.size} items`);
    });

  }

  if (interaction.values[0] == 'roleC') {
    await interaction.update({ content: 'Şimdi değiştirilen: role creation limit!\n istediğin sayı ile bir mesaj gönder', components: [], embeds: [] });
    const filter = m => m.author.id == m.guild.ownerId
    const collector = interaction.channel.createMessageCollector({ filter, time: 15000, max: 1 });
    
    collector.on('collect', m => {
        var a = Number(m.content)
        if (isNaN(a)) return m.reply("<:exclamation:934102712348450866> Ymalmısın aga")
        if (a < 0) return m.reply("<:exclamation:934102712348450866> malmısın aga.")
      db.set(`rolecreatelimt_${m.guild.id}`, a)
      return m.reply(`<:Correct:934107739997765662> *role creation limit* : ${a} `)
    
  
    });



    collector.on('end', collected => {
      console.log(`Collected ${collected.size} items`);
    });

  }



  if (interaction.values[0] == 'roleR') {
    await interaction.update({ content: 'Şimdi değiştirilen: role remove limit!\n istediğin sayı ile bir mesaj gönder', components: [], embeds: [] });
    const filter = m => m.author.id == m.guild.ownerId
    const collector = interaction.channel.createMessageCollector({ filter, time: 15000, max: 1 });
    
    collector.on('collect', m => {
        var a = Number(m.content)
        if (isNaN(a)) return m.reply("<:exclamation:934102712348450866> Ymalmısın aga")
        if (a < 0) return m.reply("<:exclamation:934102712348450866> malmısın aga.")
      db.set(`roleremovelimt_${m.guild.id}`, a)
      return m.reply(`<:Correct:934107739997765662> *role remove limit* : ${a} `)
    
  
    });



    collector.on('end', collected => {
      console.log(`Collected ${collected.size} items`);
    });

  }

  
  if (interaction.values[0] == 'chanC') {
    await interaction.update({ content: 'Şimdi değiştirilen: channel creation limit!\n istediğin sayı ile bir mesaj gönder', components: [], embeds: [] });
    const filter = m => m.author.id == m.guild.ownerId
    const collector = interaction.channel.createMessageCollector({ filter, time: 15000, max: 1 });
    
    collector.on('collect', m => {
        var a = Number(m.content)
        if (isNaN(a)) return m.reply("<:exclamation:934102712348450866> Ymalmısın aga")
        if (a < 0) return m.reply("<:exclamation:934102712348450866> malmısın aga.")
      db.set(`channelcreatelimt_${m.guild.id}`, a)
      return m.reply(`<:Correct:934107739997765662> *channel create limit* : ${a} `)
    
  
    });



    collector.on('end', collected => {
      console.log(`Collected ${collected.size} items`);
    });

  }

  
  if (interaction.values[0] == 'chanR') {
    await interaction.update({ content: 'Şimdi değiştirilen: channel remove limit!\n istediğin sayı ile bir mesaj gönder', components: [], embeds: [] });
    const filter = m => m.author.id == m.guild.ownerId
    const collector = interaction.channel.createMessageCollector({ filter, time: 15000, max: 1 });
    
    collector.on('collect', m => {
        var a = Number(m.content)
        if (isNaN(a)) return m.reply("<:exclamation:934102712348450866> Ymalmısın aga")
        if (a < 0) return m.reply("<:exclamation:934102712348450866> malmısın aga.")
      db.set(`channelremovelimt_${m.guild.id}`, a)
      return m.reply(`<:Correct:934107739997765662> *channel remove limit* : ${a} `)
    
  
    });



    collector.on('end', collected => {
      console.log(`Collected ${collected.size} items`);
    });

  }
 
  if (interaction.values[0] == 'ban') {
    await interaction.update({ content: 'Şimdi değiştirilen: **ban** limit!\n istediğin sayı ile bir mesaj gönder', components: [], embeds: [] });
    const filter = m => m.author.id == m.guild.ownerId
    const collector = interaction.channel.createMessageCollector({ filter, time: 15000, max: 1 });
    
    collector.on('collect', m => {
        var a = Number(m.content)
        if (isNaN(a)) return m.reply("<:exclamation:934102712348450866> Ymalmısın aga")
        if (a < 0) return m.reply("<:exclamation:934102712348450866> malmısın aga.")
      db.set(`ban_${m.guild.id}`, a)
      return m.reply(`<:Correct:934107739997765662> *ban limit* : ${a} `)
    
  
    });



    collector.on('end', collected => {
      console.log(`Collected ${collected.size} items`);
    });

  }
 
  if (interaction.values[0] == 'kick') {
    await interaction.update({ content: 'Şimdi değiştirilen: **kick** limit!\n istediğin sayı ile bir mesaj gönder', components: [], embeds: [] });
    const filter = m => m.author.id == m.guild.ownerId
    const collector = interaction.channel.createMessageCollector({ filter, time: 15000, max: 1 });
    
    collector.on('collect', m => {
        var a = Number(m.content)
        if (isNaN(a)) return m.reply("<:exclamation:934102712348450866> Ymalmısın aga")
        if (a < 0) return m.reply("<:exclamation:934102712348450866> malmısın aga.")
      db.set(`kick_${m.guild.id}`, a)
      return m.reply(`<:Correct:934107739997765662> *kick limit* : ${a} `)
    
  
    });



    collector.on('end', collected => {
      console.log(`Collected ${collected.size} items`);
    });

  }
}


};
exports.conf = {
  event: "interactionCreate"
};
