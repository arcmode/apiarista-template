var load = require('../../middleware/load')('$resource'),
    create = require('./crud/create'),
    list = require('./crud/list'),
    update = require('./crud/update'),
    _delete = require('./crud/delete'),
    //IF-OWNER load$Owner = require('../../middleware/load')('$owner'),
    //IF-OWNER auth$OwnerOwnership = require('../../middleware/ownership')('$resource', '$owner'),
    //IF-OWNER auth$Owner = require('../../middleware/auth')('$owner'),
    //IF_AUTH auth$Resource = require('../../middleware/auth')('$resource'),
    //IF_AUTH same = require('../../middleware/same')('$resource'),
    send = require('../../middleware/send')('$resource');

module.exports = function(app) {

  app.namespace('/$resources', function(){

    app.all('/:$resource_id', load);

    //IF-AUTH app.all('/:$resource_id', auth$Resource);

    app
      .get('/',
              //IF-OWNER //IF-PPRIVATE load$Owner,
              //IF-OWNER //IF-PPRIVATE auth$Owner,
              list,
              send)

      .post('/',
                //IF-OWNER load$Owner,
                //IF-OWNER auth$Owner,
                create,
                send)

      .get('/:$resource_id',
                            //IF-OWNER //IF-PPRIVATE load$Owner,
                            //IF-OWNER //IF-PPRIVATE auth$Owner,
                            send)

      .put('/:$resource_id',
                            //IF-OWNER load$Owner,
                            //IF-OWNER auth$Owner,
                            //IF-OWNER auth$OwnerOwnership,
                            //IF_AUTH same},
                            update,
                            send)

      .del('/:$resource_id',
                            //IF-OWNER load$Owner,
                            //IF-OWNER auth$Owner,
                            //IF-OWNER auth$OwnerOwnership,
                            //IF_AUTH same,
                            _delete,
                            send);
  });
};