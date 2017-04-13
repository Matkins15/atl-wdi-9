function CriminalsListController(CriminalsService) {
  var vm = this;
  vm.greeting = "ayyye yo";
  vm.message = CriminalsService.message;
}

CriminalsListController.$inject = ['CriminalsService']

module.exports = CriminalsListController;
