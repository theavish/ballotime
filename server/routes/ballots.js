var Model = require('../db/models/Ballot');

function getAllBallots(req, res) {
  new Model.Ballot().fetchAll()
    .then(function(ballot) {
      res.send(ballot);
    })
    .catch(function(error) {
      res.send(error);
    });
}

function saveBallot(req, res) {
  console.log(req.body);
  new Model.Ballot({
      topic: req.body.topic,
      option_1: req.body.option1,
      option_2: req.body.option2,
      option_3: req.body.option3,
      option_4: req.body.option4,
      date_created: new Date
    }).save()
    .then(function(ballot) {
      res.send(ballot);
    })
    .catch(function(error) {
      res.send(error);
    });
}

function deleteBallot(req, res) {
  var ballotId = req.params.id;
  new Model.Ballot().where('id', ballotId)
    .destroy()
    .catch(function(error) {
      res.send(error);
    });
}

function getBallot(req, res) {
  var ballotId = req.params.id;
  new Model.Ballot().where('id', ballotId)
    .fetch()
    .then(function(ballot) {
      res.send(ballot);
    })
    .catch(function(error) {
      res.send(error);
    });
}

module.exports = {
  getAllBallots: getAllBallots,
  saveBallot: saveBallot,
  deleteBallot: deleteBallot,
  getBallot: getBallot
};
