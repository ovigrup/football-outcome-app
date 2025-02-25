const axios = require('axios');

const API_KEY = process.env.SPORTMONKS_KEY; // Use environment variable
const BASE_URL = 'https://soccer.sportmonks.com/api/v2.0/';

const getTodayAndFutureFixtures = async () => {
  try {
    const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format
    const response = await axios.get(`${BASE_URL}/fixtures`, {
      params: {
        api_token: API_KEY,
        include: 'localTeam,visitorTeam',
        filter: `date_from:${today}`
      }
    });
    return response.data;
  } catch (error) {
    throw new Error('Error fetching data from SportMonks');
  }
};

module.exports = {
  getTodayAndFutureFixtures
};