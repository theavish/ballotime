(function() {
  'use strict';

  angular.module('ballotime')
    .factory('voteF', voteF);

  voteF.$inject = ['$http'];

  function voteF($http) {

    function submitVote(option, ballotId) {
      var url = '/ballot/' + ballotId + '/' + option;
      return $http.put(url).then(function(response) {
        console.log('the server responded with', response);
        return response.data;
      });
    }

    function getBallot(ballotId) {
      var url = '/ballot/' + ballotId;
      return $http.get(url).then(function(response) {
        console.log('the server responded with', response);
        return response.data;
      });
    }

    function getBallotByPrettyId(ballotId) {
      var url = '/ballot/' + ballotId + '/pretty';
      return $http.get(url).then(function(response) {
        console.log('the server responded with', response);
        return response.data;
      });
    }

    return {
      submitVote: submitVote,
      getBallot: getBallot,
      getBallotByPrettyId: getBallotByPrettyId
    };
  }

})();
