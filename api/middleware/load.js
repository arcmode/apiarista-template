module.exports = function(resource){

  var Model = require('../../data/models/' + resource);

  return function load(req, res, next){

    Model.findById(req.params[resource + '_id'], function(err, result){
      
      if (err) {

        next(err);

      } else {

        if (result) {

          res[resource] = result;
          next();

        } else {

          res.send(404, 'Not Found')
        }

      }
    });
  }
}