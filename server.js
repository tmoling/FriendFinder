//this requires express, bodyparser and path
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

//this sets up express to port 3000 localhost
//process.env.port will act as the port when deployed to heroku
var app = express();
var PORT = process.env.PORT || 3000;

// this sets up express to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
// this sets up static files in express
app.use(express.static(path.join(__dirname, 'app/public')));


//this sets up routes by requiring from routing folder 
//this sends api and html pages through require 
//remember server acts as the main js file here
require('./app/routing/api-routes.js')(app);
require('./app/routing/html-routes.js')(app);


// this starts the server to begin listening
app.listen(PORT, function () {
	console.log('App listening on PORT ' + PORT);
});