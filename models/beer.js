var orm = require('../config/orm.js');

var beer = {
  all: function(cb){
    orm.selectAll('beers', function(data){
      cb(data);
    });
  },
  create: function(cols, vals, cb){
    orm.insertOne('beers', cols, vals, function(data){
      cb(data);
    });
  },
  update: function(objColVals, condition, cb){
    orm.updateOne('beers', objColVals, condition, function(data){
      cb(data);
    });
  }
};

module.exports = beer;