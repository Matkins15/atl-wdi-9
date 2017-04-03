angular.module('ThePresidentsApp')
  .controller('PresidentsController', PresidentsController);

PresidentsController.$inject = ['$http'];

function PresidentsController($http){
  var vm = this;

vm.addPresident = addPresident;
vm.all = [];
vm.newPresident = {};
vm.removePresident = removePresident;

  activate();

  function activate() {
    loadAllPresidents();
  }

  function addPresident(){
    $http
      .post('/presidents', vm.newPresident)
      .then(function someName(response){
        vm.all.push(response.data.president);
        vm.newPresident = {};
      });
  }

  function removePresident(president){
    $http
      .delete('/presidents/' + president._id )
      .then(function byeBye(response){
        var index = vm.all.indexOf(president)
        vm.all.splice(index, 1);
      });
  }

  function loadAllPresidents(){
    $http
      .get('/presidents')
      .then(function setAll(response){
        vm.all = response.data.presidents;
      });
  }
}
