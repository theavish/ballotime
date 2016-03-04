(function() {
  'use strict';

  angular.module('ballotime')
    .controller('voteC', voteC);

  voteC.$inject = ['$scope', 'voteF', '$stateParams', 'cookiesF'];

  function voteC($scope, voteF, $stateParams, cookiesF) {

    var self = this;

    self.ballot = $stateParams.ballot;
    self.votedBallots = cookiesF.getCookie('votedCookie');

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
      if (_.includes(self.votedBallots, ballotId)) {
        console.log('you already voted on this ballot');
      } else {
        voteF.submitVote(option, ballotId)
          .then(function(data) {
            self.ballot = data;
            voteF.getTotalVotes(self.ballot);
            voteF.setBarType(self.ballot, self);
            cookiesF.addToCookie('votedCookie', ballotId);
          });
      }

    };

  }

})();
