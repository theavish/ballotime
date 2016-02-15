var express = require('express');
var app = express();
var root = __dirname + '/..';

var routes = require('./routes');

var port = process.env.PORT || 8000;

app.use('/', express.static(root + '/client'));
app.use('/', routes);

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.listen(port, function() {
  console.log('Server running on port: ' + port);
});

module.exports = app;
