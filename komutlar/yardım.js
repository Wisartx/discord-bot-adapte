const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Komutlar")
  .setDescription('')
  .setColor(0x00ffff)
  .addField("**» Eğlence Komutları**", `_atatürk = Rastgele Atatürkün Fotoğraflarını Gösterir. \n_starwars = StarWars (Pixel Formatında) Filmini Gösterir. \n_banned = Dene ve Gör! \n_kahkaha = Kahkaha Atarsınız \n_herkesebendençay = Herkese Çay Alırsınız. \n_koş = Koşarsınız.\n_çayiç = Çay İçersiniz. \n_çekiç = İstediğiniz Kişiye Çekiç Atarsınız. \n_çayaşekerat = Çaya Şeker Atarsınız. \n_yumruk-at = Yumruk Atarsınız. \n_şanslısayım = Bot Sizin Şanslı Sayınızı Söyler.`)
  .addField("**» Kullanıcı Komutları**", `_report = İstediğiniz Kullanıcıyı Reportlarsınız. \n_kısalt = İstediğiniz Linki Kısaltarak Özelleştire Bilirsiniz. \n_yaz = Bota İsediğinizi Yazdırırsınız. \n_sunucubilgi = Bulunduğunuz Sunucu Hakkında Bilgi Verir. \n_sunucuresmi = Bulunduğunuz Sunucunun Resmin Gösterir. \n_kullanıcıbilgim = Sizin Hakkınızda Bilgi Verir. \n_avatarım = Avatarınınızı Gösterir. `)
  .addField("**» Oyun Komutları**", `_fortnite = İstediğiniz Kullanıcının İstatistiklerine Bakarsınız.`)
  .addField("**» Sunucu Yetkilisi Komutları**", `_ban = İstediğiniz Kişiyi Sunucudan Banlar. \n_kick  = İstediğiniz Kişiyi Sunucudan Atar. \n_unban = İstediğiniz Kişinin Yasağını Açar. \n_sustur = İstediğiniz Kişiyi Susturur. \n_sil = Belirtilen Miktarda Mesajı Silir. (MAX 100) \n_oylama = Oylama Açar. \n_duyuru = Güzel Bir Duyuru Görünümü Sağlar.`)
  .addField("**» Botun Ana Komutları**", "_yardım = BOT Komutlarını Atar. \n_bilgi = BOT Kendisi Hakkında Bilgi Verir. \n_ping = BOT Gecikme Süresini Söyler. \n_davet = BOT Davet Linkini Atar. \n_istatistik = BOT İstatistiklerini Gösterir.")
  .setFooter('Adapte Bot')
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};
