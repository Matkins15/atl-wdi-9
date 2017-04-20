const controller = require('./criminals.show.controller.js');
const template = require('./criminals.show.html');

const component = {
  controller: controller,
  template: template
};

angular
<<<<<<< HEAD
	.module('criminals')
<<<<<<< HEAD
=======
	// call this with <criminals-show></criminals-show>
>>>>>>> 64bdf58ad785d374ccb2a68cf6448fd5d3ccd61a
	.component('criminalsShow', component);
=======
  .module('criminals')
  .component('criminalsShow', component);
>>>>>>> 203a9eef1f30cd471464002baf3e3139f87d4dee
