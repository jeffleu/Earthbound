// Modules
var express = require('express');
var app = express();

// Config files
var db = require('./db/db-config');

// Set up port
var port = process.env.PORT || 8080;

// Connect to mongoDB
mongoose.connect(db.url);

// Get all data of the body (POST) parameters parse application/json 
app.use(bodyParser.json()); 

// set the static files location /public/img will be /img for users
// app.use(express.static(__dirname + '/public')); 

// Configure our routes
require('./app/routes')(app);

// Start app at http://localhost:8080
app.listen(port);               
console.log('Listening on port ' + port);

// expose app           
exports = module.exports = app;