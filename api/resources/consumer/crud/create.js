var Consumer = require('../../../../data/models/consumer');

module.exports = function(req, res, next) {

	Consumer.create(req.body, function(err, consumer){
		if (err) {
			next(err);
		} else {
			if (consumer) {
				res.send(consumer);
			} else {
				res.send(404, 'Consumer not found')
			}
		}
	});
};