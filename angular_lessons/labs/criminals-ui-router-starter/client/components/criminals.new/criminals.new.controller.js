CriminalsNewController.$inject = ['CriminalsService', '$state'];

function CriminalsNewController(CriminalsService, $state) {
  const vm = this;


  vm.addNewCriminal = addNewCriminal;
  vm.newCriminal = {};

  activate();


  function activate(){

  }

  function addNewCriminal(){
    CriminalsService
      .addNewCriminal(vm.newCriminal)
      .then(function(){
        vm.newCriminal = {};
        $state.go('criminals');
      });
  }
}

module.exports = CriminalsNewController;
