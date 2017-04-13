CriminalsShowController.$inject = ['$stateParams', 'CriminalsService'];

function CriminalsShowController($stateParams, CriminalsService) {
	const vm = this;

	vm.current = {};

	activate();

	function activate() {
<<<<<<< HEAD
		loadCurrentCriminals();
	}

	function loadCurrentCriminals() {
		CriminalsService
			.loadCurrent($stateParams.criminalId)
			.then(function resolve(response){
=======
		loadCurrentCriminal();
	}

	function loadCurrentCriminal() {
		console.log($stateParams);

		CriminalsService
			.loadCurrent($stateParams.criminalId)
			.then(function resolve(response) {
>>>>>>> 64bdf58ad785d374ccb2a68cf6448fd5d3ccd61a
				vm.current = response.data.criminal;
			});
	}
}

module.exports = CriminalsShowController;
