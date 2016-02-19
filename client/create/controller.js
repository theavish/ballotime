(function() {
  'use strict';

  angular.module('ballotime')
    .controller('createC', createC);

  createC.$inject = ['$scope', 'createF'];

  function createC($scope, createF) {
    var self = this;

    self.message = 'create'
  }

})();
