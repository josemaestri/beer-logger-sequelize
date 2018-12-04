// req vars
var express = require('express');
var beer = require('../models/beer.js');

// vars
var router = express.Router();

// routes
router.get('/',function(req,res){
  res.redirect('/beers');
});

router.get('/beers', function(req,res){
  beer.all(function(data){
    var hbsObj = {beers: data};
    console.log(hbsObj);
    res.render('index',hbsObj);
  });
});

router.post('/beers/create', function(req,res){
  beer.create(['beer','consumed'], [req.body.beer,JSON.parse(req.body.consumed)],function(){
    res.redirect('/beers');
  })
});

router.put('/beers/update/:id', function(req,res){
  var condition = 'id = ' + req.params.id;

  console.log('condition: ' + condition);

  console.log(req.body);

  beer.update({consumed: req.body.consumed}, condition, function(){
    //res.redirect('/beers');
    res.json(true);
  });
});

module.exports = router;