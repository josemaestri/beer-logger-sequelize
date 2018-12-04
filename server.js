// req vars
var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var path = require('path');
// vars
var app = express();
var PORT = process.env.PORT || 8080;

// middleware
app.engine('handlebars', exphbs({defaultLayout:'main'}));
app.set('view engine','handlebars');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'./public')));


var routes = require('./controllers/beer_controller.js');
app.use('/', routes);

app.listen(PORT, function(){
  console.log('listening on port ' + PORT);
});
