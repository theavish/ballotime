(function() {
  'use strict';

  angular.module('ballotime')
    .config(routes);

  routes.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

  function routes($stateProvider, $urlRouterProvider, $locationProvider) {

    // $locationProvider.html5Mode(true);

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: '../home/view.html'
      })
      .state('create', {
        url: '/create',
        templateUrl: '../create/view.html'
      })
      .state('vote', {
        url: '/vote/:id',
        templateUrl: '../vote/view.html',
        params: {
          ballot: null
        }
      })
      .state('results', {
        url: '/results/:id',
        templateUrl: '../results/view.html',
        params: {
          ballot: null
        }
      });

    $urlRouterProvider.otherwise('/');
  }

})();
