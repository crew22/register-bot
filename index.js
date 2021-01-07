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
    if (!message.content.startsWith(config.prefix + "kayıt") || message.author.bot) return;
    if (!ayarlar.sistemleriYonet.yetkiliCagir) return;
    if (message.channel.id != ayarlar.yetkiliCagirKanalID) return;
    client.channels.cache.get(ayarlar.yetkiliCagirKanalID).send(ayarlar.yetkiliCagirMesaj);
});

client.login(config.token);