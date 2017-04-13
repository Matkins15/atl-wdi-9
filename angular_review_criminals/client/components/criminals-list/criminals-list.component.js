var criminalsListTemplate = require(__dirname + '/criminals-list.html');
var criminalsListController = require(__dirname + '/criminals-list.controller.js');

var CriminalsListComponent = {
  template: criminalsListTemplate,
  controller: criminalsListController
};

angular.module('criminalsApp').component('criminalsList', CriminalsListComponent);
