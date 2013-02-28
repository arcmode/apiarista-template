var Resource = require('../../../..//data/models/resource');

module.exports = function(req, res) {
	
	Resource.findOneByIdAndUpdate(req.params.resource_id, function(err, resource){
		if (err) { next(err); }
		if (resource) {
			res.send(resource);
		} else {
			res.send(404, 'Resource not found')
		}
	});
};