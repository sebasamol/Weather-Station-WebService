var express = require('express');
var router = express.Router();
const User = require('../models/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(req.session.admin);
  res.render('login', { title: 'Strona logowania' });
  //res.redirect('index');

});


module.exports = router;
