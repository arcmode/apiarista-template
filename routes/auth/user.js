
/*
 * Validation of User Credentials
 */

var User = require('../../data/models/user');

module.exports = function(req, res, next){

	var user_id = req.query.user_id,
		token = req.query.token;

    if (user_id && token) {
    	User 
		    .findById(user_id)
			.exec(function(err, user) {
				if (err) {
	                return next(err);
	            } else {
	                if (user) {
	                	if (user.token === token) {
	                		req.user = user;
	                		next()
	                	} else {
	                		res.send(401, 'Unauthorized, wrong credentials.');
	                	}
	                } else {
	                	res.send(401, 'Not Found, User doesn\'t exists.');
	                }
	            }
			});
	} else {
	   	res.send(400, 'You must provide both user_id and token.');
	}
};