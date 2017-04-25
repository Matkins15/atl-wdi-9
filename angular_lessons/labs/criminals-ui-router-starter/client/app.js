const angular = require('angular');
require('angular-ui-router');

angular
<<<<<<< HEAD
  .module('criminals', ['ui.router'])
  .config(uiRouterSetup);


uiRouterSetup.$inject = ['$stateProvider', '$urlRouterProvider'];
function uiRouterSetup($stateProvider, $urlRouterProvider){

  $stateProvider
    .state('home', {
      url: '/',
      template: '<home></home>'
    })
    .state('about', {
      url: '/about',
      template: '<about></about>'
    })
    .state('criminals', {
      url: '/criminals',
      template: '<criminals></criminals>'
    })
    .state('criminalsNew', {
      url: '/criminals/new',
      template: '<criminals-new></criminals-new>'
    })
    .state('criminalsShow', {
      url: '/criminals/:criminalId',
      template: '<criminals-show></criminals-show>'
    });


  $urlRouterProvider.otherwise('/');
=======
	.module('criminals', ['ui.router'])
	.config(uiRouterSetup);

uiRouterSetup.$inject = ['$stateProvider', '$urlRouterProvider'];
function uiRouterSetup($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('home', {
			url: '/',
			template: '<home></home>'
		})
		.state('about', {
			url: '/about',
			// template: '<about></about>' // LAB Goal #1 -- get this line to work
			template: '<h1>About</h1><a ui-sref="home">Home</a>'
		})
		.state('criminals', {
			url: '/criminals',
			template: '<criminals></criminals>'
		})
		.state('criminalsNew', {
			url: '/criminals/new',
			template: '<criminals-new></criminals-new>'
		})
		.state('criminalsShow', {
			url: '/criminals/:criminalId',
			template: '<criminals-show></criminals-show>'
		});

	$urlRouterProvider.otherwise('/');
>>>>>>> 64bdf58ad785d374ccb2a68cf6448fd5d3ccd61a
}