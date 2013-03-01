var $Resource = require('../../../../data/models/$resource');

module.exports = function(req, res, next) {

  $Resource.find({}, function(err, $resources){
    if (err) {
      next(err);
    } else {
      if ($resources) {
        res.$resource = $resources;
        next();
      } else {
        res.send(404, 'Not found')
      }
    }
  });
};