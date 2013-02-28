var create = require('./create'),
	list = require('./list'),
	read = require('./read'),
	update = require('./update'),
	_delete = require('./delete'),
	authUser = require('../../../auth/user'),
	sameUser = require('../../../auth/same')('user');

module.exports = function(app) {

	app.all('/users', require('../../../auth/consumer'));

	app
		.get('/users', list)

		.post('/users', create)

		.get('/users/:user_id', read)

		.put('/users/:user_id', authUser,
								sameUser,
								update)

		.del('/users/:user_id', authUser,
								sameUser,
								_delete);
};