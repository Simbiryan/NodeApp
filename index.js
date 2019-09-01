const express = require('express');
const bodyParser  = require('body-parser');
const app = express();
const weatherRequest = require('./requests/weather.requests.js');

// 

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

app.listen(3000, () => {
  console.log('Server has started on port 3000...');
})

app.get('/', (rec, res) => {
  res.render('index', {weather: null, error: null});
})

app.post('/', async (req,res) => {
  const { city } = req.body;
  
  const { weather, error } = await weatherRequest(city);
  res.render('index', {weather, error});
})