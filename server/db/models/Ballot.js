var bookshelf = require('../config').bookshelf;

var Ballot = bookshelf.Model.extend({
  tableName: 'ballots'
});

module.exports = {
  Ballot: Ballot
};
