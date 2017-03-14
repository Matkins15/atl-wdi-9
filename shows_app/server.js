var express = require('express'); // Loading the express module on our server
var app = express(); // Create a new instance of express on our server
var hbs = require('hbs'); // loads handlebars
app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/Public')); // VERY IMPORTANT!! Make sure to add a '/

var favoriteShows = ["Vikings", 'ATL', 'Insecure', 'Game of Thrones', 'Peaky Blinders', 'Black Mirrors', 'Breaking Bad'];

app.get('/shows', function(req, res){

  res.render('shows', {
      data: favoriteShows
  });
});

app.get('/shows', function(req, res) {
  res.send(`I really like, ${favoriteShows}!`);
});

var port = process.env.PORT || 3001; // tells the server where to listen for requests

app.listen(port, function() {
// tells the server where to listen for requests on port 3000

  console.log('shows is listening on port 3001');
}); // actualizing the line above
