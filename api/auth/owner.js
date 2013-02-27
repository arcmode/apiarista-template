
/*
 * Ownership verification.
 */

var User = require('../../data/models/user');

module.exports = function(name){

	var Model = require('../../data/models/' + name);

	return function(req, res, next) {

		var object_id = req.params[name + '_id'];

		Model
			.findById(object_id)
			.exec(function(err, object){
				if (err) {
					return next(err);
				} else {
					if (object) {

						if (String(object.user) === req.query.uid) {
							req[name] = object;
							next();
						} else {
							res.send(401, 'Unauthorized, the given User doesn\'t owns the requested' + Model.modelName + '.');
						}
					} else {
						res.send(404, 'Not Found');
					}
				}
			});
	}
}