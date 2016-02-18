var Model = require('./db/models/User');

function getAllUsers(req, res) {
  new Model.User().fetchAll()
    .then(function(users) {
      res.json(users);
    })
    .catch(function(error) {
      res.json(error);
    });
}

function saveUser(req, res) {
  new Model.User({
      name: req.body.name,
      password: req.body.password,
      email: req.body.email,
      phone_number: req.body.phoneNumber,
      last_updated: new Date.now()
    }).save()
    .then(function(user) {
      res.json(user);
    })
    .catch(function(error) {
      res.json(error);
    });
}

function deleteUser(req, res) {
  var userId = req.params.id;
  new Model.User().where('id', userId)
    .destroy()
    .catch(function(error) {
      res.json(error);
    });
}

function getUser(req, res) {
  var userId = req.params.id;
  new Model.User().where('id', userId)
    .fetch()
    .then(function(user) {
      res.json(user);
    })
    .catch(function(error) {
      res.json(error);
    });
}

module.exports = {
  getAllUsers: getAllUsers,
  saveUser: saveUser,
  deleteUser: deleteUser,
  getUser: getUser
};
