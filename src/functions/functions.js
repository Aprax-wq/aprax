const { MessageEmbed } = require("discord.js");

module.exports = (client, fs, config) => {

    client.Renk = new Array("")

    client.message = (Content, Channel, Timeout) => {
    const channel = client.channels.cache.get(Channel);
      if (!Timeout) {
        if (channel) channel.send(Content).catch(() => { });
      } else {
        if (channel) channel.send(Content).then((msg) => msg.delete({ timeout: Timeout})).catch(() => { });
      }
    };

    client.punish = async (id, type) => {
        const guild = client.guilds.cache.get() || client.guilds.cache.first();
        if (guild) {
            const member = await guild.members.cache.fetch(id);
            if (!member) return console.error(`${__filename} - Punish fonksiyonunda kullanıcı bulunamadı.`);
            
            if (type == "mute") return member.roles.add().catch(() => { });
            if (type == "vmute") {
                if ("") member.roles.add().catch(() => {});

                return member.voice.setMute();
            };
            
            if (type == "jail") return member.roles.add().catch();
            
            if (type == "kick") return member.kick();
            if (type == "ban") return member.ban();
        };
    };

    client.cezaNumara = async (Database) => {
      var Sayi = 0;
      Database.countDocuments().then(Number => {
        Sayi += (Number + 1);
      });
      return Sayi;
    };

    client.react = function(x) {
      return client.emojis.cache.get(config.getirilecek[x]);
    };

    client.getDate = (date, type) => {
        let sure;
        date = Number(date);
        if (type === "saniye") { sure = (date * 1000) }
        else if (type === "dakika") { sure = (60 * 1000) * date }
        else if (type === "saat") { sure = ((60 * 1000) * 60) * date }
        else if (type === "gün") { sure = (((60 * 1000) * 60) * 24) * date }
        else if (type === "hafta") { sure = ((((60 * 1000) * 60) * 24) * 7) * date }
        else if (type === "ay") { sure = ((((60 * 1000) * 60) * 24) * 30) * date }
        else if (type === "yıl") { sure = ((((((60 * 1000) * 60) * 24) * 30) * 12) + 5) * date };
        return sure;
    };

    client.NoMember = (message) => {
      return {
        embed: {
          author: { name: message.guild.member(message.author).user.username, icon_url: message.author.displayAvatarURL({dynamic: true})},
          description: `${client.react("iptal")} | Argümanları düzgün yerleştiriniz, etiketlediğiniz veya belirttiğiniz ID'nin düzgün olmasına dikkat ediniz.`,
          color: client.Renk[Math.floor(Math.random() * client.Renk.length)] 
        }
      }
    }

    client.embed = (message, msj) => {
      return {
        embed: {
          author: { name: msj.guild.member(msj.author).user.username, icon_url: msj.author.displayAvatarURL({dynamic: true})},
          description: message,
          color: client.Renk[Math.floor(Math.random() * client.Renk.length)] 
        }
      }
    } 
};