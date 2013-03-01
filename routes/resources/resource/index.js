var load = require('../../middleware/load')('$resource'),
    create = require('./crud/create'),
    list = require('./crud/list'),
    update = require('./crud/update'),
    _delete = require('./crud/delete'),
    //IF_OWNER load$Owner = require('../../middleware/load')('$owner'),
    //IF_OWNER auth$OwnerOwnership = require('../../middleware/ownership')('$resource', '$owner'),
    //IF_OWNER auth$Owner = require('../../middleware/auth')('$owner'),
    //IF_AUTH auth$Resource = require('../../middleware/auth')('$resource'),
    //IF_AUTH same = require('../../middleware/same')('$resource'),
    send = require('../../middleware/send')('$resource');

module.exports = function(app) {

  app.namespace('/$resources', function(){

    app.all('/:$resource_id', 
                            //IF_AUTH auth$Resource,
                            load);

    app
      .get('/',
              //IF_OWNER //IF_PPRIVATE load$Owner,
              //IF_OWNER //IF_PPRIVATE auth$Owner,
              list,
              send)

      .post('/',
                //IF_OWNER load$Owner,
                //IF_OWNER auth$Owner,
                create,
                send)

      .get('/:$resource_id',
                            //IF_OWNER //IF_PPRIVATE load$Owner,
                            //IF_OWNER //IF_PPRIVATE auth$Owner,
                            send)

      .put('/:$resource_id',
                            //IF_OWNER load$Owner,
                            //IF_OWNER auth$Owner,
                            //IF_OWNER auth$OwnerOwnership,
                            //IF_AUTH same,
                            update,
                            send)

      .del('/:$resource_id',
                            //IF_OWNER load$Owner,
                            //IF_OWNER auth$Owner,
                            //IF_OWNER auth$OwnerOwnership,
                            //IF_AUTH same,
                            _delete,
                            send);
  });
};