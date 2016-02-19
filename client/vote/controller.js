(function() {
  'use strict';

  angular.module('ballotime')
    .controller('voteC', voteC);

  voteC.$inject = ['$scope', 'voteF'];

  function voteC($scope, voteF) {
    var self = this;

    self.message = 'vote';
  }

})();
