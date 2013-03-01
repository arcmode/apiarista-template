var $Resource = require('../../../../data/models/$resource');

module.exports = function(req, res, next) {

  //IF_OWNER req.body.owner = req.$owner;

  $Resource.create(req.body, function(err, $resource){

    if (err) { 
      
      res.send(err); 
    
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