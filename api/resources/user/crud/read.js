var User = require('../../../..//data/models/user');

module.exports = function(req, res) {
	
	User.findById(req.params.user_id, function(err, user){
		if (err) { next(err); }
		if (user) {
			res.send(user);
		} else {
			res.send(404, 'User not found')
		}
	});
};