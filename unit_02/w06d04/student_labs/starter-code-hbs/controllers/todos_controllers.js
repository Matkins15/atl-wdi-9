var express = require('express');
var router = express.Router();
var data = require('../data.js');
router.get('/', function(req, res){
res.render('todos/index', {
    todos: data.seededTodos
  });
});

router.get('/new', function(req, res){
  res.render('todos/new');
})

router.get('/:id', function(req, res){
  var task = data.seededTodos[req.params.id];

res.render('todos/show', {
  todo: task
});
});

router.post('/', function(req, res){
  var newTodo = {
    description: req.body.description,
    urgent: req.body.urgent
  }
})



module.exports = router;
