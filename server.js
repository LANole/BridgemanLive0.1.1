var express = require('express');
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');
var path = require('path');
require('colors');

var app = express();
app.use(favicon(path.join(__dirname, 'client/assets/images', 'tom_bridgeman.ico')))
require('./server/config/mongoose.js');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json({extended:true}))
app.use(express.static(path.join(__dirname, 'client')));
var routes = require('./server/config/routes.js');
routes(app);
app.all('/*', function(req, res, next) {			    
    res.sendFile('index.html', { root: 'client'});
});

app.listen(8080, '172.31.12.40');
//app.listen(8080, function () {
//  console.log("I'm listening...".blue);
//})