var routes = require('../server/routes');
var fxn = require('./helpers/routingHelpers');
var request = require('request');

var server = 'http://localhost:8000';


describe('ROUTING', function() {

  describe('the /users route', function() {
    it('should exist', function() {
      expect(fxn.testRouteExists('/users')).toBe(true);
    });

    it('should return all users on GET', function() {
      request(server + '/users', function(err, response, body) {
        if (err) {
          throw err;
        }
        console.log(body);
        console.log(response);
        done();
        // expect(response.statusCode).toBe(202);
        // expect(users.length).toBe(3);
      });


    });

    it('should create a new user on POST', function() {

    });

  });

  describe('the /user/:id route', function() {

    it('should exist', function() {
      expect(fxn.testRouteExists('/user/:id')).toBe(true);
    });

    it('should return a specific user on GET', function() {

    });

    it('should remove a specific user on DELETE', function() {

    });

  });

  describe('the /ballots route', function() {

    it('should exist', function() {
      expect(fxn.testRouteExists('/ballots')).toBe(true);
    });

    it('should return all ballots on GET', function() {

    });

    it('should create a new ballot on POST', function() {

    });

  });

  describe('the /ballot/:id route', function() {

    it('should exist', function() {
      expect(fxn.testRouteExists('/ballot/:id')).toBe(true);
    });

    it('should return a specific ballot on GET', function() {

    });

    it('should remove a specific ballot on DELETE', function() {

    });

  });


});
