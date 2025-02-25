const axios = require('axios');

const fetchApiFootballData = async () => {
  try {
    const response = await axios.get('https://football-outcome-app.onrender.com/api-football');
    console.log('API Football Data:', response.data);
  } catch (error) {
    console.error('Error fetching API Football data:', error.response ? error.response.data : error.message);
  }
};

const fetchSportMonksData = async () => {
  try {
    const response = await axios.get('https://api.sportmonks.com/v3/football/fixtures', {
      params: {
        api_token: 'YOUR_SPORTMONKS_API_KEY',
        include: 'teams,stats'
      }
    });
    console.log('SportMonks Data:', response.data);
  } catch (error) {
    console.error('Error fetching SportMonks data:', error.response ? error.response.data : error.message);
  }
};

fetchApiFootballData();
fetchSportMonksData();