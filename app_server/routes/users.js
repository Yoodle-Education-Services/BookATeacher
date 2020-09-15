var express = require('express');
var router = express.Router();

//Get Teacher Listing
//const Teacher = require('../controllers/teacherController')


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
