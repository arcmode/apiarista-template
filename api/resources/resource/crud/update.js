module.exports = function(req, res, next) {

  req.$resource.update(req.body, function(err, $resource) {
    
    if (err) {
    
      return next(err);
    
    } else {
    
      next();
    }
  });
};