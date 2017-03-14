// app.js

//require express package
var express = require('express');
//save an express module as 'app'
var app     = express();
// assigning 3000 as our port
var port    = 3000;

var hbs = require('hbs');

app.use(express.static(__dirname + '/public')); // VERY IMPORTANT!! Make sure to add a '/'

app.set("view engine", "hbs");
app.set('views', './views');

// tells the server to listen for requests on port 3000
app.listen(port, function(){
  console.log("==========================")
  console.log('LISTENING ON PORT ' + port);
  console.log("==========================")
});

app.get('/', function(req, res) {
  res.render("index.hbs", {
});
  // res.send("Welcome to Pizza Express");
});

app.get('/topping/:type', function(req, res, next) {
  res.render('toppings.hbs', {
    type: req.params.type
  });
    // res.send(`${req.params.type} pizza! Good choice.`);
});

app.get('/order/:amount/:size', function(req, res, next) {
  res.render('order.hbs', {
    amount: req.params.amount,
    size: req.params.size
  });
  //  res.send(`Your order for ${req.params.amount} ${req.params.size} pizzas will be ready in 1 minute!`);
});
