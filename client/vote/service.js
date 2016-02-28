(function() {
  'use strict';

  angular.module('ballotime')
    .factory('voteF', voteF);

  voteF.$inject = ['$http'];

  function voteF($http) {

    function submitVote(option, ballotId) {
      var url = '/ballot/' + ballotId + '/' + option;
      $http.put(url).then(function(response) {
        console.log('the server responded with', response);
      });
    }

    return {
      submitVote: submitVote
    };
  }

})();
