var router = require('express').Router();
var userRoutes = require('./routes/users');
var ballotRoutes = require('./routes/ballots');
var jsonparser = require('body-parser').json();

//get all ballots
router.get('/ballots', ballotRoutes.getAllBallots);

//get a single ballot
router.get('/ballot/:id', ballotRoutes.getBallot);

//get a single ballot by pretty id
router.get('/ballot/:id/pretty', ballotRoutes.getBallotByPrettyId);

//create a new ballot
router.post('/ballots', jsonparser, ballotRoutes.saveBallot);

//delete a specific ballot
router.delete('/ballot/:id', ballotRoutes.deleteBallot);

//submit a vote for a specific ballot
router.put('/ballot/:id/:option', jsonparser, ballotRoutes.submitVote);



module.exports = router;
