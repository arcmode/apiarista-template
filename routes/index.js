
module.exports = function (app) {

  app.namespace('/api', function(){

    app.all('*', require('./auth/consumer'));

    require('./resources/user')(app);
    require('./resources/consumer')(app);
    
    //CRUDs PLACEHOLDER
  });
};