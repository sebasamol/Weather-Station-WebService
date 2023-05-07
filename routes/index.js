var express = require('express');
var router = express.Router();
const login = 'admin';
const password = '123';

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Stacja pogodowa' });
});

router.get('/login', function(req, res) {
  res.render('login');
});

router.post('/login', function(req, res) {
  console.log(req.body);
  const body = req.body;

  if(body.login === login && body.password === password){
    res.redirect('/');
  } else {
    res.redirect('/login');
  }
});

module.exports = router;
