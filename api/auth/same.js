module.exports = function(key) {

	key += '_id';

	return function(req, res, next) {
		if (req.params[key] === req.query[key]) {
			next();
		} else {
			res.send(309, 'Conflict. Not the same ' + key + '.');
		}
	}
}