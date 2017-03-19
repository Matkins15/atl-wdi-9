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
router.get('/:id/edit', function(req, res){
  res.render('pirates/edit', {
    pirates: {
      name: pirates[req.params.id].name,
      birthplace: pirates[req.params.id].birthplace,
			death_year: pirates[req.params.id].death_year,
			base: pirates[req.params.id].base,
			nickname: pirates[req.params.id].nickname,
      id: req.params.id
    }
  });
});

router.put('/:id', function(req, res) {
  var piratesEdit = pirates[req.params.id];

  piratesEdit.name = req.body.name;
  piratesEdit.birthplace = req.body.birthplace;
	piratesEdit.death_year = req.body.death_year;
	piratesEdit.base = req.body.base;
	piratesEdit.nickname = req.body.nickname;

  res.redirect('/pirates');
})

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
