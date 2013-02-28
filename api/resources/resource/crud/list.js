var Resource = require('../../../../data/models/resource');

module.exports = function(req, res) {
	
	Resource.find({}, function(err, resources){
		if (err) {
			next(err);
		} else {
			if (resources) {
				res.send(resources);
			} else {
				res.send(404, 'Resources not found')
			}
		}
	});
};