angular.module('ballotime')

.config(function($stateProvider, $urlRouterProvider) {

	$stateProvider

	.state('homeView', {
		url: '/',
		views: '../homeView/view.html',
		controller: ''
	})

	.state('createBallot', {
		url: '/create',
		views: '../createBallot/view.html',
		controller: ''
	})

	.state('votingSheet', {
		url: '/vote',
		views: '../votingSheet/view.html',
		controller: ''
	})

	.state('resultsPage', {
		url: '/results',
		views: '../resultsPage/view.html'
		controller: ''
	})



})