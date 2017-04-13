angular
  .module('criminalsApp')
  .service('CriminalsService', CriminalsService);

function CriminalsService(){
  var self = this;

  self.getCriminals = function () {
    console.log('getCriminals is working');

    return $http.get('/criminals')
  }
}

CriminalsService.$inject = ['$http'];
