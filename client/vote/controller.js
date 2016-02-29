(function() {
  'use strict';

  angular.module('ballotime')
    .controller('voteC', voteC);

  voteC.$inject = ['$scope', 'voteF', '$stateParams'];

  function voteC($scope, voteF, $stateParams) {
    var self = this;
    self.ballot = $stateParams.ballot;

    // self.ballot.totalVotes = self.ballot.option_1_votes + self.ballot.option_2_votes + self.ballot.option_3_votes + self.ballot.option_4_votes

    self.getBallot = function() {
      voteF.getBallot(self.ballotIdInput)
        .then(function(data) {
          if (data === '') {
            voteF.getBallotByPrettyId(self.ballotIdInput)
              .then(function(data) {
                self.ballot = data;
              });
          } else {
            self.ballot = data;
          }
        });
    };

    self.submitVote = function($event) {
      var option = $event.currentTarget.attributes.id.value;
      var ballotId = self.ballot.id;
      voteF.submitVote(option, ballotId)
        .then(function(data) {
          self.ballot = data;
        });
    };
  }

})();
