const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

      message.channel.send("Pinging...").then(m => {
        let ping = m.createdTimestamp - message.createdTimestamp
        
        const embed = new Discord.RichEmbed()
        .setTitle(':ping_pong: BOT LATENCY :ping_pong:')
        .setDescription((`**Bot Latency:** \`${ping}ms\`\n**API Latency:** \`${Math.round(client.ping)}ms\``))
        .setColor("RANDOM")
        .setFooter(client.user.username, client.user.displayAvatarURL)
        .setTimestamp()
        m.edit(embed)
      })
                                
  }                               
 
