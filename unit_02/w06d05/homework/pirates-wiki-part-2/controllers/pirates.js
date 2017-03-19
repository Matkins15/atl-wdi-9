//==============================
// REQUIREMENTS
//==============================

var express = require("express");
var router = express.Router();
var pirates = require('../models/pirates.js');
var methodOverride = require("method-override");

//==============================
// READ
//==============================
//for root pirate page
router.get('/', function(req, res){
	res.render("pirates/index.hbs", {
		pirates: pirates
	});
});


router.get('/new', function(req, res){
	res.render("pirates/new.hbs");
});


//this is for each pirate page
router.get('/:id', function(req, res){

	//grab the pirate by id
	var showPirate = pirates[req.params.id];

	res.render("pirates/show.hbs", {
		pirate: showPirate
	});
});


//==============================
// CREATE
//==============================

//==============================
// UPDATE
//==============================

//==============================
// DESTROY
//==============================
router.delete('/:id', function(req, res){
	pirates.splice(req.params.id, 1); // remove the item from the array

	res.redirect('/pirates'); //redirect back to index route
});


//==============================
// EXPORTS
//==============================

module.exports = router;
