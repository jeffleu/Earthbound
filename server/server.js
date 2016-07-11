// Modules
var fs = require('fs');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// Config files
var db = require('./config/db-config');

// Set up port
var port = process.env.PORT || 8080;

// Connect to mongoDB
// mongoose.connect(db.url);

// Get all data of the body (POST) parameters parse application/json 
app.use(bodyParser.json()); 

app.use(express.static(__dirname + "/../client"));

// Configure our routes
// require('./app/routes')(app);

// Start app at http://localhost:8080
app.listen(port, function () {
  console.log(`Listening on port ${port}!`);
});

// expose app           
// exports = module.exports = app;
module.exports = app;
