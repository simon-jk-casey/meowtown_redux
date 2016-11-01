var express = require('express');
var router = express.Router();

var catsDB = require('../db/cats.js')

router.get('/', function(req, res, next) {
  catsDB.getCats()
    .then(function(cats){
      res.render('catsIndex', {cats})
    })
    .catch(function(err){
      res.status(500)
    })
});

module.exports = router;
