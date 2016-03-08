(function() {
  'use strict';

  angular.module('ballotime')
    .factory('cookiesF', cookiesF);

  cookiesF.$inject = ['$cookies'];

  function cookiesF($cookies) {

    function addToCookie(cookie, newData) {
      var current = $cookies.get(cookie);
      if (!current) {
        $cookies.put(cookie, newData);
      } else {
        $cookies.put(cookie, current + ',' + newData);
      }
    }

    function getCookie(cookie) {
      return $cookies.get(cookie);
    }

    return {
      addToCookie: addToCookie,
      getCookie: getCookie
    };

  }

})();
