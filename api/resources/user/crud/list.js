var User = require('../../../../data/models/user');

module.exports = function(req, res, next) {

	User.find({}, function(err, users){
		if (err) {
			next(err);
		} else {
			if (user) {
				res.send(users);
			} else {
				res.send(404, 'Users not found')
			}
		}
	});
};