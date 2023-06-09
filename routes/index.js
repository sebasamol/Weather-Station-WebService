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
  //res.render('index', { title: 'Stacja pogodowa', time: actual});

  const url = 'http://worldtimeapi.org/api/ip'
  

  fetch(url)
    .then(res => res.json())
    .then(json =>{
      //console.log(json.day_of_week);
      //console.log(json.day_of_year);
      res.render('index', {
        title: 'Stacja pogodowa',
        time: json.datetime,
        day: json.day_of_week,
        year: json.day_of_year,
        week: json.week_number
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
