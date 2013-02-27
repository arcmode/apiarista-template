
/*
 * Ownership verification.
 */

var User = require('../../data/models/user');
var Resource = require('../../data/models/resource');

module.exports = function(req, res, next) {

	Resource
		.findById(req.params.resource_id)
		.exec(function(err, resource){
			if (err) {
				return next(err);
			} else {
				if (resource) {

					if (String(resource.user) === req.query.uid) {
						req.resource = resource;
						next();
					} else {
						res.send(401, "Unauthorized, the given User doesn't owns the requested Resource.");
					}
				} else {
					res.send(404, 'Not Found');
				}
			}
		});
}