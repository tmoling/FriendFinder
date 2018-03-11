//this requires the path
var path = require('path');


module.exports = function(app){

  //sending a get request to to the url
//response sends the data down the proper path
	app.get('/', function(req, res){
		res.sendFile(path.join(__dirname, '/../public/home.html'));
	});

    //sending a get request to to the survey postion of the url
//response sends the data down the proper path
	app.get('/survey', function(req, res){
		res.sendFile(path.join(__dirname, '/../public/survey.html'));
	});

}