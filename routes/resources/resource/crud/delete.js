module.exports = function(req, res, next) {
  
  req.$resource.remove(function(err, $resource){
    if (err) {
      next(err);
    } else {
      if ($resource) {
        res.$resource = $resource;
        next();
      } else {
        res.send(404, 'Not found');
      }
    }
  });
};