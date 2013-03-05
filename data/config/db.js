var dbURL = 'mongodb://localhost/apiarista-template-db'
  , db = require('mongoose').createConnection(dbURL);

module.exports = db;