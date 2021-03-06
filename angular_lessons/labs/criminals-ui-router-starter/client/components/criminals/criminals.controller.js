CriminalsController.$inject = ['CriminalsService'];

function CriminalsController(CriminalsService) {
	const vm = this;

	// WHAT THIS CONTROLLER HAS / DOES THAT IS CONNECTED TO THE VIEW
	vm.all = [];
	vm.criminals = [];
	vm.loading = true;
	vm.deleteCriminal = deleteCriminal;


	// activate === BEST PRACTICE, ALWAYS DO IT, EVEN IF EMPTY
	activate();

	function activate() {
		loadAllCriminals();
	}


	// HOW IT DOES STUFF
	function loadAllCriminals() {
		CriminalsService
			.loadAll()
			.then(function resolve(response) {
				console.log(response)
				vm.criminals = response.data.criminals; // array of criminals
				vm.loading = false;
			});
}

	function deleteCriminal(criminal){
   	CriminalsService
	 	 	.deleteCriminal(criminal)
     	.then(function(response){
       	var index = vm.criminals.indexOf(criminal);
       	vm.criminals.splice(index, 1);
     });
	}
}

module.exports = CriminalsController;
