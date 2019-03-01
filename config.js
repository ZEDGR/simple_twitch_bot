require('dotenv').config();

const bot = {
  options: {
    debug: true
  },
  connection: {
    reconnect: true,
    secure: true
  },
  identity: {
    username: process.env.TWITCHBOT_USERNAME,
    password: process.env.TWITCHBOT_PASSWORD
  },
  channels: [process.env.TWITCHBOT_CHANNEL]
};

const relic = {
  headers: JSON.parse(process.env.RELIC_HEADERS),
  personalStatURL: process.env.PROFILES_STATS,
  leaderboardsProfileURL: process.env.LEADERBOARD_PROFILE
};

module.exports = {
  bot: bot,
  relic: relic
};
