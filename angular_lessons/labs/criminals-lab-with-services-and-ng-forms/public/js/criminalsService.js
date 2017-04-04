angular
  .module('InfamousCriminals')
  .service('$CriminalsService', CriminalsService);

CriminalsService.$inject = ['$http'];

function CriminalsService($http) {
  console.log("$CriminalsService ready for action");

// getCriminals();
  this.getCriminals = function() {
    return $http.get('/criminals')
      .then(function(criminalsResponse) {
        // code in here
        return criminalsResponse;
      });
  };

  this.addCriminal = function(newCriminal) {
    return $http.post('/criminals', newCriminal)
  }

  this.deleteCriminal = function(criminal) {
    return $http.delete("/criminals/" + criminal._id)
  }
}
