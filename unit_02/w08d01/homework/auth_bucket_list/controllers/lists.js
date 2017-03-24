//======================
// REQUIREMENTS
//======================
//require express,router,  mongoose, List schema, User schema, authHelpers
var express = require('express');
router = express.Router({mergeParams: true});
var mongoose = require('mongoose');
var User = require('../models/user.js');
var List = require('../models/list.js');
var authHelpers = require('../helpers/auth.js');

//======================
// CREATE
//======================
//create a POST "/" route that saves the list item to the logged in user

router.get('/new', function(req, res){
  User.findById(req.params.id)
    .exec(function (err, user) {
        if(err) {
          console.log(err);
        }
          console.log(user);
          res.render('lists/new.hbs', {
            user: user
          });
    });
});

router.post('/', function createList(req, res){
  User.findById(req.params.userId)
    .exec(function (err, user){
      if (err) {
        console.log(err);
      }
      var newList = new List ({
        name: req.body.name,
        completed: req.body.completed
      });
      newList.save();
      user.list.push(newList);

      user.save(function (err) {
        if (err) {
          console.log(err);
        }
        console.log('List created');
        res.redirect('/users');
      });
      });
    });

//======================
// EDIT
//======================
//create a GET "/:id/edit" route that renders the list's edit page

router.get('/:id/edit', function editList(req, res) {
  User.findById(req.params.userId)
    .exec(function (err, user) {
      if (err) {
        console.log(err);
      }
      console.log(user);
      var listItem = user.list.id(req.params.listId);
      res.render('lists/edit.hbs', {
        listItem: listItem,
        user: user
      });
    });
});

//======================
// UPDATE
//======================
//create a PUT "/:id" route that saves the changes from the list.
router.put('/:listId', function updateList(req, res){
  User.findById(req.params.userId)
    .exec(function (err, user){
      if (err) {
        console.log(err);
      }
      var listItem = user.project_ideas.id(req.params.id);
      listItem.name = req.body.name;
      listItem.completed = req.body.completed;
      user.save(function(err, item){
      if (err){
        console.log(err);
      }
      console.log(item);
      res.redirect('/users');
      });
    });
});

//======================
// DELETE
//======================
//create a DELETE "/:id" route that deletes the list item
// router.delete('/:id', function deleteList(req, res) {
//   User.findById(req.params.userId{)
//     .exec(function (err, user){
//       if (err) { console.log(err); }
//       user.project_ideas.id(req.params.id).remove();
//       user.save(function (err) {
//         if (err) console.log(err);
//         console.log('Project Idea was removed')
//       });
//       res.render('project_ideas/index', {
//         user: user
//       });
//     });
// });
//======================
// EXPORTS
//======================
module.exports = router;
