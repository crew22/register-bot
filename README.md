# fivemsociety.com Kayıt Botu
Fivem Society Kayıt Botu, sistemlerinde gönderilen mesajların içeriklerine kadar ayarlanabilen bir açık kaynaklı kayıt botudur ve halen geliştirilmeye devam edilmektedir. Bu bot sayesinde sunucunuza giren üyelere özel mesaj gönderilmesini, yetkili çağırabilmesini, girişte otomatik rol verilmesini ve yetkililerin üyeleri kaydetmesini (Yakında eklenecektir, bu özellik sayesinde yetkilileriniz kaç kayıt yaptığını takip edebileceksiniz.) sağlayabilirsiniz.

## Botun Kurulumları
Botun çalışması bazı kurulumların yapılması gerekmektedir ve bu bölümde yapılması gereken kurulumları nasıl yapacağımızı göreceğiz.

### Modül Kurulumları
Botta şu an sadece `discord.js` modülü kullanılmaktadır. Bu modülü kurmak için yapmanız gereken tek işlem botun bulunduğu klasörde **SHIFT + MOUSE SAĞ TIK** kısayolunu kullanıyoruz ve **Powershell penceresini burada açın**'a basıyoruz. Açılan pencereye aşağıda verdiğim komudu yazıyoruz.

`npm install discord.js`

## Ayarların Yapılması 

### Önemli Ayarları Değiştirmek
Prefixi değiştirmek için config.json dosyasının içindeki prefix özelliğinin karşısındaki değeri değiştirmelisiniz. Tokeni değiştirmek için discord.com/developers üzerinden oluşturduğunuz botun tokenini girmelisiniz. Eğer tokeni nasıl alacağınızı ve botu nasıl oluşturacağınızı bilmiyorsanız [FivemSociety Bot Oluşturma ve Aktif Etme Rehberi](https://fivemsociety.com/konu/discord-botu-olusturma-ve-aktif-etme-vds-glitch.658) adresinden yardım alabilirsiniz.

### Mesajları Değiştirmek ve Sistemleri Yönetmek
Botun göndereceği mesajları düzenlemek için ve botta var olan sistemleri kapatıp açmak için "ayarlar.json" isimli dosyadan faydalanacağız. Nereye hangi mesajı yazacağınızı "ayarlar.json" içerisinde yazdım. Eğer bir sistemi açmak istiyorsanız karşısındaki değeri tırnak içerisinde almadan "true" olarak, eğer kapatmak istiyorsanız yine tırnak içine almadan "false" olarak değiştirmelisiniz. 

#### Rol ID'lerini Bulmak
Rol ID'lerini bulmak için `Sunucu Ayarları -> Roller`'e gitmeniz ve seçtiğiniz role sağ tıklayıp `ID'yi Kopyala` seçeneğine basmalısınız.