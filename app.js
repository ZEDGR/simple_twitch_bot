const tmi = require('tmi.js');
const config = require('./config.js');
const getPlayerProfileURL = require('./coh.js');

const bot = new tmi.client(config.bot);
bot.connect();

bot.on('chat', (channel, userstate, message, self) => {
  if (self) return;

  if (message.startsWith('!rank')) {
    let args = message.split(' ');
    if (args.length < 2) return;

    let player = args.splice(1).join(' ');

    getPlayerProfileURL(player).then(url => {
      if (!url) {
        bot.say(channel, `${player} not found in the leaderboards`);
        return;
      }
      bot.say(channel, url);
    });
  }

});

// Periodic Announcements
setInterval(() => {
  bot.say(process.env.TWITCHBOT_CHANNEL, process.env.TWITCHBOT_ANNOUNCEMENT);
}, process.env.TWITCHBOT_ANNOUNCEMENT_INTERVAL_MINUTES * 60 * 1000);

