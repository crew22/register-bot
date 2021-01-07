const Discord = require("discord.js");
const client = new Discord.Client();
const mesajlar = require("./mesajlar.json");
const config = require("./config.json");


client.on("ready", () => {
    console.log("Bot başlatıldı!");
});

client.on("guildMemberAdd", member => {
    if (!mesajlar.sistemleriYonet.sunucuyaGirisOzeldenEmbed) return;
    const embed = new Discord.MessageEmbed()
        .setTitle(mesajlar.sunucuyaGirisOzeldenEmbedTitle)
        .setDescription(mesajlar.sunucuyaGirisOzeldenEmbedDescription)
        .setTimestamp()
        .setFooter("https://fivemsociety.com", "https://media.discordapp.net/attachments/777175999988105233/777217619064389632/fsgiff.gif")
    member.send(embed);
});

client.on("message", message => {
    if (!message.content.startsWith(config.prefix + "kayıt") || message.author.bot) return;
    if (!mesajlar.sistemleriYonet.yetkiliCagir) return;
    if (message.channel.id != mesajlar.yetkiliCagirKanalID) return;
    client.channels.cache.get(mesajlar.yetkiliCagirKanalID).send(mesajlar.yetkiliCagirMesaj);
});

client.login(config.token);