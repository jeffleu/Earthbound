// Modules
var fs = require('fs');
var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var tables = require('./db/schema');

// Connect to mongoDB
mongoose.connect('mongodb://localhost/earthbound');

// Get all data of the body (POST) parameters parse application/json 
app.use(bodyParser.json()); 

app.use(express.static(__dirname + "/../client"));
app.use(express.static(__dirname + "/../client/lib"));

// Configure our routes
// require('./app/routes')(app);

// Set up port
var port = process.env.PORT || 8080;

// Start app at http://localhost:8080
app.listen(port, function () {
  console.log(`The party is getting started on port ${port}!`);
});

// Allow requests from all origins
app.use(function(request, response, next) {
 response.header("Access-Control-Allow-Origin", "*");
 response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
 next();
});

app.get('/enemies', function(request, response, next) {
  tables.Enemies.find(function(err, enemy) {
    if (err) {
      console.log('Error retrieving data.', enemy);
    }
    console.log('No errors getting data.', enemy);
    response.send(enemy);
  });
});

// Save to DB helper function
var save = function(char) {
  char.save(function(err, data) {
    if (err) {
      console.log('Error adding data...', err);
    } else {
      console.log('Successfully add data', data);
    }
  });
};

/****************************************************
  Insert into heroes table
****************************************************/

// var ness = new tables.Heroes({
//   name: 'Ness',
//   level: 1,
//   hp: 100,
//   atk: 25,
//   def: 10,
//   exp: 0,
//   expToGo: 500,
//   money: 0
// });

// save(ness);

// // Select from DB example
// var ness = tables.Heroes.findOne({'name': 'Ness'}).then(function(data) {
//   console.log(data);
// });

// console.log(ness);

/****************************************************
  Insert into enemies table
****************************************************/

// var zombieDog = new tables.Enemies({
//   id: 1,
//   name: 'Zombie Dog',
//   hp: 210,
//   atk: 39,
//   def: 51,
//   exp: 1354,
//   money: 54,
//   img: 'http://walkthrough.starmen.net/earthbound/image/enemies/zombiedog.png'
// });

// save(zombieDog);

// var urbanZombie = new tables.Enemies({
//   id: 2,
//   name: 'Urban Zombie',
//   hp: 171,
//   atk: 31,
//   def: 24,
//   exp: 700,
//   money: 58,
//   img: 'http://walkthrough.starmen.net/earthbound/image/enemies/urbanzombie.png'
// });

// save(urbanZombie);

// var coilSnake = new tables.Enemies({
//   id: 3,
//   name: 'Thirsty Coil Snake',
//   hp: 270,
//   atk: 52,
//   def: 80,
//   exp: 2786,
//   money: 276,
//   img: 'http://walkthrough.starmen.net/earthbound/image/enemies/thirstycoilsnake.png'
// });

// save(coilSnake);

// var starman = new tables.Enemies({
//   id: 4,
//   name: 'Starman',
//   hp: 545,
//   atk: 103,
//   def: 126,
//   exp: 23396,
//   money: 720,
//   img: 'http://walkthrough.starmen.net/earthbound/image/enemies/starman.png'
// });

// save(starman);

// var guardianDigger = new tables.Enemies({
//   id: 5,
//   name: 'Guardian Digger',
//   hp: 386,
//   atk: 59,
//   def: 129,
//   exp: 17301,
//   money: 1467,
//   img: 'http://walkthrough.starmen.net/earthbound/image/enemies/guardiandigger.png'
// });

// save(guardianDigger);

module.exports = app;
