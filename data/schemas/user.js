var tokenize = require('../utils/tokenize');

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var UserSchema = new Schema({

	username: { type: String, required: true },
	name: { first: String, last: String },
	email: { type: String, unique: true, required: true },

	token: { 
		type: String,
		default: tokenize,
		unique: true,
		required: true },

	date: { type: Date, default: Date.now }
});


module.exports = UserSchema;