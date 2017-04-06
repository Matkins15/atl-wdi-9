angular
	.module('criminals')
	.service('CriminalsService', CriminalsService);

CriminalsService.$inject = ['$http'];

function CriminalsService($http) {
	const self = this;

	// WHAT THIS SERVICE DOES / HAS AVAILABLE TO CALL
	self.loadAll = loadAll;
	self.loadCurrent = loadCurrent;
	self.addNewCriminal = addNewCriminal;
	self.deleteCriminal = deleteCriminal;


	// HOW IT DOES STUFF
	function loadAll() {
		return $http.get('/api/criminals');
	}
	function loadCurrent (id) {
		return $http.get('/api/criminals/' + id);
	}
	function addNewCriminal (newCriminal) {
		return $http.post('/api/criminals/', newCriminal);
	}
	function deleteCriminal (criminal) {
    return $http.delete("/api/criminals/" + criminal._id)
  }
}
