angular
  .module('InfamousCriminals')
  .controller('CriminalsController', CriminalsController);
  // .service('CriminalsService', CriminalsService


CriminalsController.$inject = ['$http', '$CriminalsService'];


function CriminalsController($http, $CriminalsService){
  var self = this;
  self.all = [];
  self.addCriminal = addCriminal;
  self.newCriminal = {};
  self.getCriminals = getCriminals;
  self.deleteCriminal = deleteCriminal;

  getCriminals();
  function getCriminals(){
    // $http
    //   .get('/criminals')
    $CriminalsService.getCriminals()
      .then(function(response){
        self.all = response.data.criminals;
    });
  }

  function addCriminal(){
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
      .then(function(response){
        var index = self.all.indexOf(criminal);
        self.all.splice(index, 1);
      });
  }

}

this.fordata
