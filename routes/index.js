var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home'});
});

router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home'});
});

router.get('/views/about', function(req, res, next) {
  res.render('about', { title: 'About Me'});
});

router.get('/views/product', function(req, res, next) {
  res.render('product', { title: 'My Product'});
});

router.get('/views/services', function(req, res, next) {
  res.render('services', { title: 'Our Services'});
});

router.get('/views/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Us'});
});

module.exports = router;
