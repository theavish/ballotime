(function() {
  'use strict';

  angular.module('ballotime')
    .controller('resultsC', resultsC);

  resultsC.$inject = ['$scope', 'resultsF', '$stateParams'];

  function resultsC($scope, resultsF, $stateParams) {
    var self = this;

    self.ballot = $stateParams.ballot;

    self.getBallot = function(id) {
      id = id || self.ballotIdInput;
      resultsF.getBallot(id)
        .then(function(data) {
          if (!data) {
            resultsF.getBallotByPrettyId(id)
              .then(function(data) {
                if (!data) {
                  swal({
                    title: 'Error',
                    text: 'That ballot could not be found. Please check the id and try again.',
                    type: 'error'
                  });
                } else {
                  self.ballot = data;
                  resultsF.getTotalVotes(self.ballot);
                  resultsF.setBarType(self.ballot, self);
                }
              });
          } else {
            self.ballot = data;
            resultsF.getTotalVotes(self.ballot);
            resultsF.setBarType(self.ballot, self);
          }
        });
    };

    self.getBallotFromUrl = function() {
      var id = $stateParams.id || null;
      console.log(id)
      if (id) {
        self.getBallot(id);
      }
    };


  }

})();
