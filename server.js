/*--------------------------------------------------------------------

author: Khushboo Mandlecha

Date Created: 1st June 2016
GSoC2016
This is the main server file which will have all GET/POST routes.

------------------------------------------------------------------------ */

// all Packages That have been installed 

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();
var d3 = require('d3');
var methodOverride = require('method-override');

// Creating the Application and defining all the controllers

var app = express();

var authenticationController = require('./server/controllers/authentication-controller');

var profileController = require('./server/controllers/profile-controller');

var uploadFileController = require('./server/controllers/uploadFile-controller');


/*
Database Connection. Change the server address as required.*/

mongoose.connect('mongodb://localhost:27017/time-waste');
app.listen('3000', function () {
    console.log("Listening to localhost port 3000!");
});

// App.use modules

app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 
app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(multipartMiddleware);
app.use('/app', express.static(__dirname + "/app" )); 
app.use('/node_modules', express.static(__dirname + "/node_modules" )); 
//app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users

// routes ==================================================
//require('./app/routes')(app); // pass our application into our routes

// Get Modules
app.get('/', function( req, res){
    res.sendfile('index.html');
});


/* POST Modules */

//Authentication

app.post('/api/user/signup', authenticationController.signup);
app.post('/api/user/login',authenticationController.login);

//upload image  : Profile

app.post('/api/profile/editPhoto', multipartMiddleware, profileController.updatePhoto);


//upload file : CSV Format

app.post('/api/upload/uploadDataFile',uploadFileController.uploadDataFile);

// visualize 

//static data query : from the backend

//app.post('api/static-visualize/staticDataGraph',)
