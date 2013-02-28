var User = require('../../../..//data/models/user');

module.exports = function(req, res) {
	
	User.find({}, function(err, users){
		if (err) { next(err); }
		if (user) {
			res.send(users);
		} else {
			res.send(404, 'Users not found')
		}
	});
};