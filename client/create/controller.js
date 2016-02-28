(function() {
  'use strict';

  angular.module('ballotime')
    .controller('createC', createC);

  createC.$inject = ['$scope', 'createF', '$state'];

  function createC($scope, createF, $state) {
    var self = this;

    self.message = 'create';

    self.submitBallot = function() {
      var ballot = {
        topic: self.ballot.topic,
        option1: self.ballot.option1,
        option2: self.ballot.option2,
        option3: self.ballot.option3 || null,
        option4: self.ballot.option4 || null
      };

      createF.submitBallot(ballot).then(function(ballot) {
        $state.go('vote', {
          ballot: ballot
        });
      });
    };
  }

})();
