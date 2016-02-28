(function() {
  'use strict';

  angular.module('ballotime')
    .factory('createF', createF);

  createF.$inject = ['$http'];

  function createF($http) {

    function submitBallot(ballot) {
      var url = '/ballots';
      return $http.post(url, ballot).then(function(response) {
        console.log('ballot', response);
        return response.data;
      });
    }

    return {
      submitBallot: submitBallot
    };
  }

})();
