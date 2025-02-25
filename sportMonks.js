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
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error('Error fetching data from SportMonks:', error.response.data);
      console.error('Status:', error.response.status);
      console.error('Headers:', error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      console.error('Error fetching data from SportMonks: No response received');
      console.error('Request:', error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error('Error fetching data from SportMonks:', error.message);
    }
    throw new Error('Error fetching data from SportMonks');
  }
};

module.exports = {
  getTodayAndFutureFixtures
};