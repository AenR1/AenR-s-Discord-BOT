const Discord = require('discord.js');
const client = new Discord.Client();

var prefix = '-';

client.on('ready', () => {
  console.log(`BOT : ${client.user.tag} adı ile giriş yaptı!`);
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix + 'komutlar') {
    msg.reply('-kurucu');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
    msg.reply('Aleyküm Selam Hoşgeldin');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix + 'kurucu') {
    msg.reply('AenRdır');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'discord.gg') {
	msg.delete(30)
    msg.reply('**Reklam engellendi !**');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix + 'temizle') {
	msg.delete(30)
    msg.reply('**Chat Temizlendi !**');
  }
});

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find('name', 'lobi');
  if (!channel) return;
  const embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setAuthor(member.user.username, member.user.avatarURL)
  .setThumbnail(member.user.avatarURL)
  .setTitle('📤 | Sunucuya Katıldı | Hoşgeldin ')
  .setTimestamp()
  channel.sendEmbed(embed);
});

client.login('process.env.BOT_TOKEN');
