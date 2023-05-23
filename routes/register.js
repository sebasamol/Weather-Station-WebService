var express = require('express');
var router = express.Router();
const User = require('../models/users');

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(req.session.admin);
  res.render('register', { title: 'Strona rejestracji' });
  //res.redirect('index');

});

router.post('/register', function(req, res, next) {
  const body = req.body;
  console.log(body);

  const newUser = new User(body);

  newUser.save((err) =>{
    if(err){
      return;
    }
    res.redirect('/');
  });

});



module.exports = router;
