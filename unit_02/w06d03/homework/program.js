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

  // app.post('/form', function(req, res){
  //   res.send(req.body.str.split('').reverse().join(''));
  // });

  // ----------------------------------------------
  // PARAMS PAM PAM - Exercise 4

      // app.put('/message/:id', function(req, res) {
      //       var id = req.params.id;
      //       var str = require('crypto')
      //       .createHash('sha1')
      //       .update(new Date().toDateString() + id)
      //       .digest('hex')
      //
      //       res.send(str);
      //     })
      //

  // -----------------------------------------------
  //WHATS IN QUERY - Lesson 7

    app.get('/search', function(req, res) {
        var query = req.query;
            res.send(query);
        })

    app.listen(process.argv[2])
  // -----------------------------------------------
