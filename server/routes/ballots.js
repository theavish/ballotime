var Model = require('../db/models/Ballot');

function getAllBallots(req, res) {
  new Model.Ballot().fetchAll()
    .then(function(ballot) {
      res.json(ballot);
    })
    .catch(function(error) {
      res.json(error);
    });
}

function saveBallot(req, res) {
  new Model.Ballot({
      topic: req.body.topic,
      date_created: new Date.now()
    }).save()
    .then(function(ballot) {
      res.json(ballot);
    })
    .catch(function(error) {
      res.json(error);
    });
}

function deleteBallot(req, res) {
  var ballotId = req.params.id;
  new Model.Ballot().where('id', ballotId)
    .destroy()
    .catch(function(error) {
      res.json(error);
    });
}

function getBallot(req, res) {
  var ballotId = req.params.id;
  new Model.Ballot().where('id', ballotId)
    .fetch()
    .then(function(ballot) {
      res.json(ballot);
    })
    .catch(function(error) {
      res.json(error);
    });
}

module.exports = {
  getAllBallots: getAllBallots,
  saveBallot: saveBallot,
  deleteBallot: deleteBallot,
  getBallot: getBallot
};
