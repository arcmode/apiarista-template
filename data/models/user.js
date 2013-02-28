var mongoose = require('mongoose'),
	UserSchema = require('../schemas/user'),
	db = require('../config/db'),
	User = db.model('User', UserSchema);

module.exports = User;