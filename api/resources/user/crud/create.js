var User = require('../../../../data/models/user');

module.exports = function(req, res, next) {

	User.create(req.body, function(err, user){
		if (err) {
			next(err);
		} else {
			if (user) {
				res.send(user);
			} else {
				res.send(404, 'User not found')
			}
		}
	});
};