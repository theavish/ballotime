(function() {
  'use strict';

  angular.module('ballotime')
    .factory('createF', createF);

  createF.$inject = ['$http'];

  function createF($http) {
    return {};
  }

})();
