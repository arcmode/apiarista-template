var mongoose = require('mongoose'),
	ResourceSchema = require('../schemas/resource'),
	db = require('../config/db'),
	Resource = db.model('Resource', ResourceSchema);

module.exports = Resource;