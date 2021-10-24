var express = require('express');
var router = express.Router();

var jsonObject = {name: 'meg', age: 25, hobby: 'soccer'}

router.get('/', function(req, res){
  res.send('Wiki home page');
})

router.get('/about', function(req, res){
  res.json(jsonObject);
})

module.exports = router;