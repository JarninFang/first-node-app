//1. Include 3rd party dependencies
var express = require('express');
var http = require('http');
var path = require('path');

//Express.js obj is instantiated
var app = express();

//2. Configure Express.js using app.set()
//port: number on which our server should listen to requests
//process.env.PORT is port number provided in environmental variables
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//3. Middleware
