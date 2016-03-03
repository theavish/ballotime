(function() {
  'use strict';

  angular.module('ballotime')
    .controller('voteC', voteC);

  voteC.$inject = ['$scope', 'voteF', '$stateParams'];

  function voteC($scope, voteF, $stateParams) {
    var self = this;
    self.ballot = $stateParams.ballot;
    if (self.ballot) {
      voteF.getTotalVotes(self.ballot);
    }


    self.getBallot = function() {
      voteF.getBallot(self.ballotIdInput)
        .then(function(data) {
          if (!data) {
            voteF.getBallotByPrettyId(self.ballotIdInput)
              .then(function(data) {
                self.ballot = data;
                voteF.getTotalVotes(self.ballot);
                voteF.setBarType(self.ballot, self);
              });
          } else {
            self.ballot = data;
            voteF.getTotalVotes(self.ballot);
            voteF.setBarType(self.ballot, self);
          }
        });
    };

    self.submitVote = function($event) {
      var option = $event.currentTarget.attributes.id.value;
      var ballotId = self.ballot.id;
      voteF.submitVote(option, ballotId)
        .then(function(data) {
          self.ballot = data;
          voteF.getTotalVotes(self.ballot);
          voteF.setBarType(self.ballot, self);
        });
    };

  }

})();
