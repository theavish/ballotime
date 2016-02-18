var routes = require('../../server/routes');
var _ = require('lodash');

var listOfRoutes = [];

_.forEach(routes.stack, function(value, key, collection) {
  listOfRoutes.push(value.route.path);
});

var testRouteExists = function(route) {
  return _.includes(listOfRoutes, route);
};

module.exports = {
  testRouteExists: testRouteExists
};
