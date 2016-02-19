(function() {
  'use strict';

  angular.module('ballotime')
    .controller('homeC', homeC);

  homeC.$inject = ['$scope', 'homeF'];

  function homeC($scope, homeF) {
    var self = this;

    self.message = 'home';
  }

})();
