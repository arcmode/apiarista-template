
/*
 * Validation of Consumer Credentials
 */

var Consumer = require('../../data/models/consumer');

module.exports = function(req, res, next){

	var consumer_id = req.query.consumer_id,
		secret = req.query.secret;

    if (consumer_id && secret) {
    	Consumer 
    	    .findOne({ _id: consumer_id, secret: secret })
    		.exec(function(err, consumer) {
    			if (err) {
                    return next(err);
                } else {
                    if (consumer) {
                        req.consumer = consumer;
                    	next();
                    } else {
                    	res.send(404, 'Not Found, Consumer doesn\'t exists or wrong credentials');
                    }
                }
    		});
    } else {
    	res.send(400, 'You must provide Consumer consumer_id and Secret');
    }
};