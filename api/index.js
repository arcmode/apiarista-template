
module.exports = function (app) {

  app.all('*', require('./middleware/attr'));

  app.namespace('/$namespace', function(){
    
    //CRUDs PLACEHOLDER
  });
};