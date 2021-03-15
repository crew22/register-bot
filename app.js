const Discord = require("discord.js");
const client = new Discord.Client();
const ayarlar = require("./ayarlar.json");
const config = require("./config.json");


client.on("ready", () => {
    console.log("Bot başlatıldı!");
});

client.on("guildMemberAdd", member => {
    if (!ayarlar.sistemleriYonet.sunucuyaGirisOzeldenEmbed) return;
    const embed = new Discord.MessageEmbed()
        .setTitle(ayarlar.sunucuyaGirisOzeldenEmbedTitle)
        .setDescription(ayarlar.sunucuyaGirisOzeldenEmbedDescription)
        .setTimestamp()
        .setFooter("https://fivemsociety.com", "https://media.discordapp.net/attachments/777175999988105233/777217619064389632/fsgiff.gif")
    member.send(embed);
    if (!ayarlar.sistemleriYonet.giristeOtomatikRolVerme) return;
    member.roles.add(member.guild.roles.cache.find(role => role.id == ayarlar.nonWhitelistRolID));
});

client.on("message", message => {
    if (message.author.bot) return;

    // Kayıt çağırma 
    if (message.content.startsWith(config.prefix + "kayıt ") && ayarlar.sistemleriYonet.yetkiliCagir && message.channel.id != ayarlar.yetkiliCagirKanalID) {
        client.channels.cache.get(ayarlar.yetkiliCagirKanalID).send(ayarlar.yetkiliCagirMesaj);
    };

    if (message.content.startsWith(config.prefix + "kayıt-et")) {
        let rol = message.mentions.roles.first();
        console.log(message.author.member);
        if (!rol) return message.channel.send(ayarlar.kayitRolEtiketlemediniz);
    }
});

client.login(config.token);
