var router = require('express').Router();
var userRoutes = require('./routes/users');
var ballotRoutes = require('./routes/ballots');
var jsonparser = require('body-parser').json();


/***************/
/* User Routes */
/***************/

//get all users
router.get('/users', userRoutes.getAllUsers);

//get a single user
router.get('/user/:id', userRoutes.getUser);

//add new user
router.post('/users', jsonparser, userRoutes.saveUser);

//delete a specific user
router.delete('/user/:id', userRoutes.deleteUser);


/*****************/
/* Ballot Routes */
/*****************/

//get all ballots
router.get('/ballots', ballotRoutes.getAllBallots);

//get a single ballot
router.get('/ballot/:id', ballotRoutes.getBallot);

//get a single ballot
router.get('/ballot/:id/pretty', ballotRoutes.getBallotByPrettyId);

//create a new ballot
router.post('/ballots', jsonparser, ballotRoutes.saveBallot);

//delete a specific ballot
router.delete('/ballot/:id', ballotRoutes.deleteBallot);

//submit a vote for a specific ballot
router.put('/ballot/:id/:option', jsonparser, ballotRoutes.submitVote);



module.exports = router;
