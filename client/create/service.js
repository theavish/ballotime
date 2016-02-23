(function() {
  'use strict';

  angular.module('ballotime')
    .factory('createF', createF);

  createF.$inject = ['$http'];

  function createF($http) {

    function submitBallot(ballot) {
      console.log('Ballot', ballot);
      return $http.post('/ballots', ballot).then();
    }

    return {
      submitBallot: submitBallot
    };
  }

})();
