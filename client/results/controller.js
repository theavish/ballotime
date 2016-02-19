(function() {
  'use strict';

  angular.module('ballotime')
    .controller('resultsC', resultsC);

  resultsC.$inject = ['$scope', 'resultsF'];

  function resultsC($scope, resultsF) {
    var self = this;

    self.message = 'results';
  }

})();
