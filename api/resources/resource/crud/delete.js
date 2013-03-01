module.exports = function(req, res, next) {
  
  req.$resource.remove(function(err, $resource){
    
    if (err) {
    
      next(err);
    
    } else {
    
      next();
    }
  });
};