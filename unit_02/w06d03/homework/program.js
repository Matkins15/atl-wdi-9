var express = require('express');
var app = express();
var bodyparser = require('body-parser')

app.use(bodyparser.urlencoded({extended: false}))

 // ------------------------------------------------
  //Hello World - Exercise 1
  // app.get('/home', function(req, res) {
  //  res.end('Hello World!');
  // })

  // ----------------------------------------------
  // STACTIC - Exercise 2

  // app.use(express.static(process.argv[3] || path.join(__dirname, 'public')))

  // ----------------------------------------------
  // GOOD OLD FORM - Exercise 3

  app.post('/form', function(req, res){
    req.body.str.split('').reverse().join('');
  });

  app.listen(process.argv[2])
