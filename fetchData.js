const axios = require('axios');

const fetchApiFootballData = async () => {
  try {
    const response = await axios.get('https://football-outcome-app.onrender.com/api-football');
    console.log('API Football Data:', response.data);
  } catch (error) {
    console.error('Error fetching API Football data:', error.response ? error.response.data : error.message);
  }
};

const fetchOpenLigaDBMatches = async () => {
  try {
    const response = await axios.get('https://football-outcome-app.onrender.com/openligadb/matches');
    console.log('OpenLigaDB Match Data:', response.data);
  } catch (error) {
    console.error('Error fetching OpenLigaDB match data:', error.response ? error.response.data : error.message);
  }
};

const fetchOpenLigaDBLeagues = async () => {
  try {
    const response = await axios.get('https://football-outcome-app.onrender.com/openligadb/leagues');
    console.log('OpenLigaDB Leagues:', response.data);
  } catch (error) {
    console.error('Error fetching OpenLigaDB leagues:', error.response ? error.response.data : error.message);
  }
};

fetchApiFootballData();
fetchOpenLigaDBMatches();
fetchOpenLigaDBLeagues();