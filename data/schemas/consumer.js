var tokenize = require('../utils/tokenize');

var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	ObjectId = Schema.ObjectId,
	User = require('../models/user');

var ConsumerSchema = new Schema({

	secret: { 
		type: String,
		default: tokenize,
		unique: true,
		required: true },

	date: { type: Date, default: Date.now }
});

module.exports = ConsumerSchema;