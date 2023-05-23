var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

const Users = require("../models/users");


/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Stacja pogodowa' });
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
