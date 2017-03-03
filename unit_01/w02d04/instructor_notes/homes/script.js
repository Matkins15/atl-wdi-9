console.log('hey');

$(function() {
  console.log('Everything is ready!');

  $('#addHome').removeClass('btn-danger').addClass('btn-success');

  var newLink = $( '<br><br><a id="zillowLink" href="http://www.zillow.com">Visit Zillow.com<a>' );
  $('body').append(newLink);

});

//$('#addHome').on('click', function(home) {
  //  console.log(home)
  //});


$('#homes tbody').on('click', 'button', function () {
  alert("You are about to delete this row.");
  });

var index = 0;
$('#addHome').on('click', function() {
    var home = newHomes[index];
    var thisHouse = "<tr><td>" + home.address + "</td>";
    console.log(thisHouse);
    var thisSf = "<td>" + home.sf + "</td>";
    console.log(thisSf);
    var thisBedroom = "<td>" + home.bedrooms + "</td>";
    var thisBath = "<td>" + home.baths + "</td>";
    var thisPrice = "<td>" + home.price + "</td>";
    var button = '<td><button class="btn btn-xs btn-danger">Remove</button></td></tr>';
    var homeCompleted = thisHouse + thisSf + thisBedroom + thisBath + thisPrice + button;
    $('tbody').append(homeCompleted);
    index++;
    if (index.length > 4) {
      alert("no more homes to vie");
    }
  });

var newHomes = [
    {address: "27569 Cedarwood Drive", sf: "2,535", bedrooms: 3, baths: 2.5, price: "$496,500"},
    {address: "316 Annandale Drive", sf: "1,326", bedrooms: 4, baths: 2, price: "$275,000"},
    {address: "251 Grandview Road", sf: "3,800", bedrooms: 3, baths: 2, price: "$699,900"},
    {address: "28571 Manitoba", sf: "2,960", bedrooms: 4, baths: 3.5, price: "$775,000"}
]
// });
