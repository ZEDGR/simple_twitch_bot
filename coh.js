const axios = require('axios');
const config = require('./config');

const getPlayerProfileURL = async name => {
  let response  =  await axios.get(config.relic.personalStatURL, {
    headers: config.relic.headers,
    params: {
      title: 'coh2',
      search: name
    }
  });

  const data = await response.data;
  let found = null;
  let group = null;
  if (!data.statGroups) return found;

  for (group of data.statGroups) {
    let player = group.members.find(member => member['alias'] === name);
    if (player) {
      found = `${config.relic.leaderboardsProfileURL}${player.name}`;
      break;
    }
  }
  return found;
};

module.exports = getPlayerProfileURL;
