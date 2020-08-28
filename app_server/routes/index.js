const express = require('express');
const router = express.Router();
const ctrlMain = require('../controllers/main');

/*const homepageController = (req, res) => {
  res.render('index', {title: 'Book A Teacher'});
};*/
/* GET home page. */
router.get('/', ctrlMain.index);

module.exports = router;
