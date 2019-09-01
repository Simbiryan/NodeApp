const rp = require('request-promise');

module.exports = async (city = '') => {
  if (!city) {
    throw new Error ('Имя города не может быть пустым');
  }
  
  const KEY = 'aa8fd76774ffaa21bb2ed10ff2e552bb';
  const uri = 'http://api.openweathermap.org/data/2.5/weather?';
  
  const options = {
    uri,
    qs: {
      appid: KEY,
      q: city,
      units: 'metric'
    },
      json: true
  }

 try {
  const data = await rp(options);
  return {
    weather: `${data.name}: ${data.main.temp}`,
    error: null
  }

  } catch (error) {
    return {
      weather: null,
      error: error.error.message
    };
  }
};