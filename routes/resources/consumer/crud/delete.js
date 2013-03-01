var Consumer = require('../../../../data/models/consumer');

module.exports = function(req, res, next) {
  
  Consumer.findOneByIdAndRemove(req.params.consumer_id, function(err, consumer){
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