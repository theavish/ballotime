(function() {
  'use strict';

  angular.module('ballotime')
    .controller('voteC', voteC);

  voteC.$inject = ['$scope', 'voteF', '$stateParams', 'cookiesF', '$location'];

  function voteC($scope, voteF, $stateParams, cookiesF, $location) {

    var self = this;

    self.ballot = $stateParams.ballot;

    self.getBallot = function(id) {
      id = id || self.ballotIdInput;
      voteF.getBallot(id)
        .then(function(data) {
          if (!data) {
            voteF.getBallotByPrettyId(id)
              .then(function(data) {
                if (!data) {
                  swal({
                    title: 'Error',
                    text: 'That ballot could not be found. Please check the id and try again.',
                    type: 'error'
                  });
                } else {
                  self.ballot = data;
                  voteF.getTotalVotes(self.ballot);
                  voteF.setBarType(self.ballot, self);
                }
              });
          } else {
            self.ballot = data;
            voteF.getTotalVotes(self.ballot);
            voteF.setBarType(self.ballot, self);
          }
        });
    };

    self.getBallotFromUrl = function() {
      var id = $location.path().replace('/vote/', '');
      if (id !== '/vote') {
        self.getBallot(id);
      }
    };

    self.submitVote = function($event) {
      var votedBallots = cookiesF.getCookie('votedCookie');
      var option = $event.currentTarget.attributes.id.value;
      var ballotId = self.ballot.id;
      if (_.includes(votedBallots, ballotId)) {
        swal({
          title: 'Error',
          text: 'You\'ve already voted on this ballot.',
          type: 'error'
        });
      } else {
        voteF.submitVote(option, ballotId)
          .then(function(data) {
            self.ballot = data;
            voteF.getTotalVotes(self.ballot);
            voteF.setBarType(self.ballot, self);
            cookiesF.addToCookie('votedCookie', ballotId);
            swal({
              title: 'Success',
              text: 'Your vote has been recorded.',
              type: 'success'
            });
          });
      }
    };
  }

})();
