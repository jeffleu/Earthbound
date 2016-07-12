// Modules
var fs = require('fs');
var express = require('express');
var app = express();
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


/**************************
  Insert data into tables
**************************/

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

// ness.save(function(err, data) {
//   if (err) {
//     console.log('Error adding data...', err);
//   } else {
//     console.log('Successfully add data', data);
//   }
// });










module.exports = app;
