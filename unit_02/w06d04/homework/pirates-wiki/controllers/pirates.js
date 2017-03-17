//requirements
var express = require("express");
var router = express.Router();
var pirates = require('../models/pirates.js');

//index route
router.get('/', function(req, res) {
    res.render('pirates/index', {
      pirates: pirates.famousPirates
    });
});

/* CREATE TODO */
router.post('/', function(req, res){
    var newPirate = {
        name: req.body.name,
        birthplace: req.body.birthplace,
        death_year: req.body.death_year,
        base: req.body.base,
        nickname: req.body.birthplace
    };
    console.log(newPirate);
    pirates.famousPirates.push(newPirate);
    res.redirect('/pirates');
});

//new route //why do we place the new route above the show route?
router.get('/new', function(req, res){
    res.render('pirates/new');
  });

//show route
router.get('/:id', function(req, res){
    var whichPirate = pirates.famousPirates

    res.render('pirates/show', {
      whichPirate: whichPirate
  });
});



//exports
module.exports = router;
