(function() {
  'use strict';

  angular.module('ballotime')
    .config(routes);

  routes.$inject = ['$stateProvider', '$urlRouterProvider'];

  function routes($stateProvider, $urlRouterProvider) {
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
        url: '/vote',
        templateUrl: '../vote/view.html'
      })
      .state('results', {
        url: '/results',
        templateUrl: '../results/view.html'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
