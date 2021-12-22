let express = require('express');
let router = express.Router();

let about = require('../views/about');

router.get('about', function(req, res, next) {
    res.render('index');
  });

module.exports = router;
