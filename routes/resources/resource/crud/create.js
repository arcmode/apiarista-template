var $Resource = require('../../../../data/models/$resource');

module.exports = function(req, res, next) {

  $Resource.create(req.body, function(err, $resource){

    if (err) { 
      
      next(err); 
    
    } else {
      
      if ($resource) {
        
        req.$resource = $resource;
        next();
      
      } else {
        
        res.send(404, 'Not found')
      }
    }
  });
};