var create = require('./crud/create'),
	list = require('./crud/list'),
	read = require('./crud/read'),
	update = require('./crud/update'),
	_delete = require('./crud/delete'),
	authUser = require('../../auth/user'),
	authOwner = require('../../auth/owner')('resource');

module.exports = function(app) {

	app.all('/resources', require('../../auth/consumer'));

	app
		.get('/resources', list)

		.post('/resources', create)

		.get('/resources/:resource_id', read)

		.put('/resources/:resource_id', authUser,
										authOwner,
										update)

		.del('/resources/:resource_id', authUser,
										authOwner,
										_delete);
};