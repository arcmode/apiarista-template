var Resource = require('../../../../data/models/resource');

module.exports = function(req, res, next) {
  
  Resource.findOneByIdAndRemove(req.params.resource_id, function(err, resource){
    if (err) {
      next(err);
    } else {
      if (resource) {
        res.send(resource);
      } else {
        res.send(404, 'Resource not found')
      }
    }
  });
};