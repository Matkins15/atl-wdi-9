angular
  .module('InfamousCriminals')
  .controller('CriminalsController', CriminalsController);
  // .service('CriminalsService', CriminalsService

<<<<<<< HEAD

CriminalsController.$inject = ['$http', '$CriminalsService'];


function CriminalsController($http, $CriminalsService){
=======
CriminalsController.$inject = ['CriminalsService'];

function CriminalsController(CriminalsService){
>>>>>>> c1ba13c7fa4e87d2c0547a57d23dadaff121eeef
  var self = this;
  self.all = [];
  self.addCriminal = addCriminal;
  self.newCriminal = {};
  self.getCriminals = getCriminals;
  self.deleteCriminal = deleteCriminal;

  getCriminals();
  function getCriminals(){
<<<<<<< HEAD
    // $http
    //   .get('/criminals')
    $CriminalsService.getCriminals()
      .then(function(response){
        self.all = response.data.criminals;
=======
    CriminalsService.getCriminals().then(function (criminalsData) {
      self.all = criminalsData;
>>>>>>> c1ba13c7fa4e87d2c0547a57d23dadaff121eeef
    });
  }

  function addCriminal(){
<<<<<<< HEAD
    // $http
    //   .post('/criminals', self.newCriminal)
    $CriminalsService.addCriminal(self.newCriminal)
      .then(function(){
        self.getCriminals();
        self.newCriminal = {};
    });

  }

  function deleteCriminal(criminal){
    // $http
    //   .delete("/criminals/" + criminal._id)
    $CriminalsService.deleteCriminal(criminal)
=======
   CriminalsService.addCriminal(self.newCriminal).then(function(){
     self.getCriminals();
       self.newCriminal = {};
   });
  }

  function deleteCriminal(criminal){
    CriminalsService.deleteCriminal(criminal)
>>>>>>> c1ba13c7fa4e87d2c0547a57d23dadaff121eeef
      .then(function(response){
        var index = self.all.indexOf(criminal);
        self.all.splice(index, 1);
      });
  }

}

this.fordata
