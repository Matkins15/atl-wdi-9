angular
	.module('criminals')
	.service('CriminalsService', CriminalsService);

CriminalsService.$inject = ['$http'];

function CriminalsService($http) {
	const self = this;

	// WHAT THIS SERVICE DOES / HAS AVAILABLE TO CALL
	self.create = create;
	self.loadAll = loadAll;
	self.loadCurrent = loadCurrent;
<<<<<<< HEAD
	self.addNewCriminal = addNewCriminal;
	self.deleteCriminal = deleteCriminal;
=======
>>>>>>> 64bdf58ad785d374ccb2a68cf6448fd5d3ccd61a


	// HOW IT DOES STUFF
	function create(criminalData) {
		return $http
			.post('/api/criminals', criminalData);
	}

	function loadAll() {
		return $http.get('/api/criminals');
	}
<<<<<<< HEAD
	function loadCurrent (id) {
		return $http.get('/api/criminals/' + id);
	}
	function addNewCriminal (newCriminal) {
		return $http.post('/api/criminals/', newCriminal);
	}
	function deleteCriminal (criminal) {
    return $http.delete("/api/criminals/" + criminal._id)
  }
=======

	function loadCurrent(id) {
		return $http.get('/api/criminals/' + id);
	}
>>>>>>> 64bdf58ad785d374ccb2a68cf6448fd5d3ccd61a
}
