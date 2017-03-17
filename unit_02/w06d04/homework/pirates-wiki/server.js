var path = require('path');
var express = require('express');
var hbs = require('hbs');
var app = express();

var port = process.env.PORT || 3000;
//controllers for `/pirates` resource
var pirateController = require('./controllers/pirates.js');
var bodyParser = require('body-parser');

app.set('view engine', 'hbs');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use("/pirates", pirateController);

app.listen(3000);
