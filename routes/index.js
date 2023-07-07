var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var fetch = require('node-fetch');
const Users = require("../models/users");

// router.all('*', (req, res, next) =>{
//   if(!req.session.index){
//     res.redirect('login');
//   }
//   next();
// });

/* GET home page. */
router.get('/', async function(req, res) {
  // res.render('index', { title: 'Stacja pogodowa' });

  const url = 'http://api.weatherapi.com/v1/current.json?key=a38b0c2762554ae5ab3185508230707&q=Poznan&aqi=yes'
  fetch(url)
    .then(res => res.json())
    .then(json =>{
      console.log('Prędkość wiatru',json.current.condition.icon);
      console.log('Prędkość wiatru',json.current.wind_mph);
      console.log('Odczuwalna temperatura',json.current.feelslike_c);
      console.log('Indeks UV',json.current.uv);
      console.log('NO2',json.current.air_quality.no2);
      console.log('O3',json.current.air_quality.o3);
      console.log('PM2.5',json.current.air_quality.pm2_5);
      console.log('PM10',json.current.air_quality.pm10);
      res.render('index', {
        title: 'Stacja pogodowa',
        // time: json.datetime,
        // day: json.day_of_week,
        // year: json.day_of_year,
        // week: json.week_number
      });
    })
    .catch(err => console.error('error:' + err))
    
});

router.get('/login', function(req, res) {
  res.render('login');
});

router.post('/login', async function(req, res) {
  
  const user = await Users.exists({login: req.body.login, pwd: req.body.pwd}).exec();
  console.log(user);

  if (user) {
    res.redirect("/");
  } else {

    res.status(400).send("Invalid username or password");
  }

});



module.exports = router;
