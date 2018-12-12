// req vars
var db = require('../models');

// routes
module.exports = function(app){
  app.get('/',function(req,res){
    res.redirect('/beers');
  });

  app.get('/beers', function(req,res){
    db.beers.findAll({}).then(function(dbPost){
      var hbsObj = {beers: dbPost};
      res.render('index',hbsObj);
    });
  });

  app.post('/beers/create', function(req,res){
    db.beers.create({
      beer: req.body.beer,
      consumed: JSON.parse(req.body.consumed)
    }).then(function(){
      res.redirect('/beers');
    });
  });

  app.put('/beers/update/:id', function(req,res){
    db.beers.update(req.body, { where: { id: req.params.id } }).then(function(){
        res.json(true);
    });
  });
};
