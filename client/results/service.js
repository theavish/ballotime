(function() {
  'use strict';

  angular.module('ballotime')
    .factory('resultsF', resultsF);

  resultsF.$inject = ['voteF'];

  function resultsF(voteF) {

    function setBarType(ballot, context) {
      var one = ballot.option_1_votes;
      var two = ballot.option_2_votes;
      var three = ballot.option_3_votes;
      var four = ballot.option_4_votes;
      if (Math.max(one, two, three, four) === one) {
        context.type1 = 'success';
        context.type2 = '';
        context.type3 = '';
        context.type4 = '';
      } else
      if (Math.max(one, two, three, four) === two) {
        context.type1 = '';
        context.type2 = 'success';
        context.type3 = '';
        context.type4 = '';
      } else
      if (Math.max(one, two, three, four) === three) {
        context.type1 = '';
        context.type2 = '';
        context.type3 = 'success';
        context.type4 = '';
      } else
      if (Math.max(one, two, three, four) === four) {
        context.type1 = '';
        context.type2 = '';
        context.type3 = '';
        context.type4 = 'success';
      }
    }

    function getTotalVotes(ballot) {
      ballot.totalVotes = ballot.option_1_votes + ballot.option_2_votes + ballot.option_3_votes + ballot.option_4_votes;
    }

    return {
      setBarType: setBarType,
      getTotalVotes: getTotalVotes,
      submitVote: voteF.submitVote,
      getBallot: voteF.getBallot,
      getBallotByPrettyId: voteF.getBallotByPrettyId
    };
  }

})();
