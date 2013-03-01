var dbURL = 'mongodb://localhost/$apiarista-template'
  , db = require('mongoose').createConnection(dbURL);

module.exports = db;