//this is requiring the friends.js file
var friendsList = require('../data/friends.js');

//this is requiring path ans body parser
var bodyParser = require('body-parser');
var path = require('path');


//sending a get request to to api-friends url
//json response will display friends
module.exports = function (app) {

  app.get('/api/friends', function (req, res) {
    res.json(friendsList);
  });

  //sending a post request to the api-friends url
  //this json request loops thru the friends and finds a match
  app.post('/api/friends', function (req, res) {

    var bestMatch = {
      'name': 'none',
      'photo': 'none'
    };

    //comparative number for user's array total
    var userTotal = sum(req.body.scores);


    //set this to 0 outside of the loop
    var friendTotal = 0;

    //highest amount of points array can equal
    var closest = 50;
    //for loop for finding friend with clest match to user data entered
    ////loop will stop when cloesest match to user data is found
    console.log(friendsList)
    for (var i = 0; i < friendsList.length; i++) {
      friendTotal = sum(friendsList[i].scores);
      var difference = Math.abs(friendTotal - userTotal);
      if (difference <= closest) {
        closest = difference;
        bestMatch.name = friendsList[i].name;
        bestMatch.photo = friendsList[i].photo;
      };
    };


    //function to add the sum from the scores entered by user against the ojects/people in the array
    function sum(array) {
      var total = 0;
      for (var n = 0; n < array.length; n++) {
        total += parseInt(array[n]);
      }
      return total;
    }

    //test answer
    //console.log(bestMatch);

    //return the best match back to webpage
    res.json(bestMatch);
  });
};