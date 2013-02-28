var dbURL = 'mongodb://localhost/apiarista-template-api'
  , db = require('mongoose').createConnection(dbURL);

module.exports = db;