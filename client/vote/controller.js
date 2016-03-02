(function() {
  'use strict';

  angular.module('ballotime')
    .controller('voteC', voteC);

  voteC.$inject = ['$scope', 'voteF', '$stateParams'];

  function voteC($scope, voteF, $stateParams) {
    var self = this;
    self.ballot = $stateParams.ballot;
    if (self.ballot) {
      getTotalVotes();
    }


    self.getBallot = function() {
      voteF.getBallot(self.ballotIdInput)
        .then(function(data) {
          if (!data) {
            voteF.getBallotByPrettyId(self.ballotIdInput)
              .then(function(data) {
                self.ballot = data;
                getTotalVotes();
                setBarType();
              });
          } else {
            self.ballot = data;
            getTotalVotes();
            setBarType();
          }
        });
    };

    self.submitVote = function($event) {
      var option = $event.currentTarget.attributes.id.value;
      var ballotId = self.ballot.id;
      voteF.submitVote(option, ballotId)
        .then(function(data) {
          self.ballot = data;
          getTotalVotes();
          setBarType();
        });
    };

    function getTotalVotes() {
      self.ballot.totalVotes = self.ballot.option_1_votes + self.ballot.option_2_votes + self.ballot.option_3_votes + self.ballot.option_4_votes;
    }

    function setBarType() {
      var one = self.ballot.option_1_votes;
      var two = self.ballot.option_2_votes;
      var three = self.ballot.option_3_votes;
      var four = self.ballot.option_4_votes;
      if (Math.max(one, two, three, four) === one) {
        self.type1 = 'success';
        self.type2 = '';
        self.type3 = '';
        self.type4 = '';
      } else
      if (Math.max(one, two, three, four) === two) {
        self.type1 = '';
        self.type2 = 'success';
        self.type3 = '';
        self.type4 = '';
      } else
      if (Math.max(one, two, three, four) === three) {
        self.type1 = '';
        self.type2 = '';
        self.type3 = 'success';
        self.type4 = '';
      } else
      if (Math.max(one, two, three, four) === four) {
        self.type1 = '';
        self.type2 = '';
        self.type3 = '';
        self.type4 = 'success';
      }
    }
  }

})();
