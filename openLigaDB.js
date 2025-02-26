const axios = require('axios');

const BASE_URL = 'https://www.openligadb.de/api/';

const getTodayAndFutureFixtures = async () => {
  try {
    const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format
    const response = await axios.get(`${BASE_URL}getmatchdata`, {
      params: {
        fromDate: today
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data from OpenLigaDB:', error.response ? error.response.data : error.message);
    throw new Error('Error fetching data from OpenLigaDB');
  }
};

const getAvailableLeagues = async () => {
  try {
    const response = await axios.get(`${BASE_URL}getavailableleagues`);
    return response.data;
  } catch (error) {
    console.error('Error fetching leagues from OpenLigaDB:', error.response ? error.response.data : error.message);
    throw new Error('Error fetching leagues from OpenLigaDB');
  }
};

module.exports = {
  getTodayAndFutureFixtures,
  getAvailableLeagues
};