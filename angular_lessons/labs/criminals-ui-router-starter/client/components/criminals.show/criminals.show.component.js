const controller = require('./criminals.show.controller.js');
const template = require('./criminals.show.html');

const component = {
	controller: controller,
	template: template
};

angular
	.module('criminals')
<<<<<<< HEAD
=======
	// call this with <criminals-show></criminals-show>
>>>>>>> 64bdf58ad785d374ccb2a68cf6448fd5d3ccd61a
	.component('criminalsShow', component);
