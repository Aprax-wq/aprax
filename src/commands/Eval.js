class Eval {
    constructor() {
      (this.name = "eval", this.alias = ["evsat"]);
    }
    async operate ({ client, message, args, config, member, author }) {
        if (!caonfig.Iport.Owners.includes(message.author.id)) return message.reply("annen");
        const code = args.join(" ");
        if (!code) return;
        try {
          const evaled = client.clean(await eval(code));
          if (evaled.match(new RegExp(`${client.token}`, 'g'))) evaled.replace(client.token, "Yasaklı komut");
          message.channel.send(`${evaled.replace(client.token, "Yasaklı komut")}`, {code: "js", split: true});
        } catch(err) { message.channel.send(err, {code: "js", split: true}) 
      };
    }
  };

  module.exports = Eval;