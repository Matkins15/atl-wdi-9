<<<<<<< HEAD
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
=======
CriminalsNewController.$inject = ['$state', 'CriminalsService'];

function CriminalsNewController($state, CriminalsService) {
	const vm = this;

	vm.createCriminal = createCriminal;
	vm.newCriminal = {};

	activate();

	function activate() {}

	function createCriminal() {
		CriminalsService
			.create(vm.newCriminal)
			.then(function resolve(response) {
				const id = response.data.criminal._id;
				$state.go('criminalsShow', { criminalId: id });
			});
	}
>>>>>>> 64bdf58ad785d374ccb2a68cf6448fd5d3ccd61a
}

module.exports = CriminalsNewController;
