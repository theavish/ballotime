(function() {
  'use strict';

  angular.module('ballotime')
    .controller('voteC', voteC);

  voteC.$inject = ['$scope', 'voteF', '$stateParams'];

  function voteC($scope, voteF, $stateParams) {
    var self = this;
    // self.ballot = $stateParams.ballot;
    self.ballot = {
      topic: 'test topic',
      id: 16,
      option_1: 'option one',
      option_2: 'option two',
      option_3: 'option three',
      option_4: 'option four'
    };

    self.submitVote = function($event) {
      var option = $event.currentTarget.attributes.id.value;
      var ballotId = self.ballot.id;
      voteF.submitVote(option, ballotId);
    };
  }

})();
