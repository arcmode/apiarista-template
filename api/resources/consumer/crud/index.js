var create = require('./create'),
	_delete = require('./delete'),
	sameConsumer = require('../../../auth/same')('consumer');

module.exports = function(app) {
	app
		.post('/consumers', create)
		.del('/consumers/:consumer_id', sameConsumer, _delete);
};