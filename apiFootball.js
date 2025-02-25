const axios = require('axios');

const API_KEY = process.env.API_FOOTBALL_KEY;
const BASE_URL = 'https://v3.football.api-sports.io/';

const getTodayAndFutureFixtures = async () => {
  try {
    const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format
    const response = await axios.get(`${BASE_URL}/fixtures`, {
      headers: {
        'x-apisports-key': API_KEY
      },
      params: {
        date: today
      }
    });
    return response.data;
  } catch (error) {
    throw new Error('Error fetching data from API-Football');
  }
};

module.exports = {
  getTodayAndFutureFixtures
};