var knex = require('knex')({
  client: 'mysql',
  connection: {
    host: 'mysqlcluster8.registeredsite.com',
    user: 'theavish',
    password: '!Qaz2wsx3edc',
    database: 'ballotime',
    charset: 'utf8'
  }
});

var bookshelf = require('bookshelf')(knex);

module.exports = {
  bookshelf: bookshelf
};
