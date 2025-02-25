const express = require('express');
const apiFootball = require('./apiFootball');
const sportMonks = require('./sportMonks');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Welcome to the Football Outcome App!');
});

app.get('/api-football', async (req, res) => {
  try {
    const data = await apiFootball.getTodayAndFutureFixtures();
    res.json(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.get('/sportmonks', async (req, res) => {
  try {
    const data = await sportMonks.getTodayAndFutureFixtures();
    res.json(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Football Outcome App listening at http://localhost:${port}`);
});