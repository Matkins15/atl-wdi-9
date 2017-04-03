angular
  .module('InfamousCriminals')
  .controller('CriminalsController', CriminalsController);

CriminalsController.$inject = ['$http'];

function CriminalsController($http){
  var vm = this;

vm.addCriminal = addCriminal;
vm.all = [];
vm.newCriminal = {};
vm.removeCriminal = removeCriminal;

  activate();

  function activate() {
    loadAllCriminals();
  }

  function addCriminal(){
    $http
      .post('/criminals', vm.newCriminal)
      .then(function someName(response){
        vm.all.push(response.data.criminal);
        vm.newCriminal = {};
      });
  }

  function removeCriminal(criminal){
    $http
      .delete('/criminals/' + criminal._id )
      .then(function byeBye(response){
        var index = vm.all.indexOf(criminal)
        vm.all.splice(index, 1);
      });
  }

  function loadAllCriminals(){
    $http
      .get('/criminals')
      .then(function setAll(response){
        vm.all = response.data.criminals;
      });
  }
}
