var express = require('express');
var router = express.Router();
const User = require('../models/users');

/* GET users listing. */
router.get('/', function(req, res) {
  
  res.render('login', { title: 'Strona logowania' });
  
});


module.exports = router;
