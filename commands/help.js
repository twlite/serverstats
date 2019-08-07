const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
        
        const embed = new Discord.RichEmbed()
        .setTitle('Commands')
        .setDescription(`serverstats [enable/disable]\nping`)
        .setColor("RANDOM")
        .setFooter(client.user.username, client.user.displayAvatarURL)
        .setTimestamp()
        message.channel.send(embed)
      })
                                
  }                               
 
