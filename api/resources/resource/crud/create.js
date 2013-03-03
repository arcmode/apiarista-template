var $Resource = require('../../../../data/models/$resource');

module.exports = function(req, res, next) {

  //IF_OWNER req.body.owner = req.$owner;

  $Resource.create(req.body, function(err, $resource){

    if (err) { 
      
      res.send(err); 
    
    } else {
      
      req.$resource = $resource;
      next();
    }
  });
};