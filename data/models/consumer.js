var mongoose = require('mongoose'),
	ConsumerSchema = require('../schemas/consumer'),
	db = require('../config/db'),
	Consumer = db.model('Consumer', ConsumerSchema);

module.exports = Consumer;