class AFK {
    constructor () {
      (this.name = "afk", this.alias = [""]);
    }

    async operate ({ client, message, args, config, member, author}, Database = require("../models/Member")) {
        if (client.AFKMembers2.has(author.id)) return null;
        const reason = args.join(" ") || "Şu anda AFK'yım en kısa sürede geri döneceğim.";
        if ((client.ReklamMembers.has(author.id)) && (reason.includes("discord.gg") || reason.includes("@everyone") || reason.includes("@here") || reason.includes(message.mentions.roles.first()))) return message.guild.members.ban(author.id, { reason: "reklam", days: 7});
        if (reason.includes(message.mentions.users.first())) return null;
        if (reason.includes("discord.gg") || reason.includes("@everyone") || reason.includes("@here") || reason.includes(message.mentions.roles.first())) {
            message.delete({timeout: 10});
            message.reply("`AFK` **moduna giriş yaparken link veya etiket (`@everyone, @Rol`) atamazsın.**", { disableMentions: "all" }).then(m => m.delete({ timeout: 3500 })).catch(() => { });
            client.ReklamMembers.add(author.id);
            return;
          };
    };
}





module.exports = AFK;