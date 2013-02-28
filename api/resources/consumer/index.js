var create = require('./crud/create'),
	_delete = require('./crud/delete'),
	authConsumer = require('../../auth/consumer'),
	sameConsumer = require('../../auth/same')('consumer');

module.exports = function(app) {

	app
		.post('/consumers', create)

		.del('/consumers/:consumer_id', authConsumer,
										sameConsumer,
										_delete);
};