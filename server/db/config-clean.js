var knex = require('knex')({
  client: 'mysql',
  connection: {
    host: '',
    user: '',
    password: '',
    database: 'ballotime',
    charset: 'utf8'
  }
});

var bookshelf = require('bookshelf')(knex);

module.exports = {
  knex: knex,
  bookshelf: bookshelf
};
