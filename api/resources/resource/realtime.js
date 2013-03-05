var $ResourceSchema = require('../../../data/schemas/$resource');

module.exports = function(app) {

  var io = app.io,
      sockets = io.of('/$namespace/io');

  function emit$Resource(instance) {
    var $resource = instance,
        isNew = instance.isNew;

    process.nextTick(function(){
      sockets
        .in('consumers')
        .emit('Consumer', { $resource: $resource, isNew: isNew });
    });
  };

  $ResourceSchema.pre('save', function(next){
    emit$Resource(this);
    next();
  });

  $ResourceSchema.pre('update', function(next){
    emit$Resource(this);
    next();
  });

  app.get('/io/$resources/test', function(req, res, next){
    res.send([

      '<script src="/socket.io/socket.io.js"></script>',
      '<script>',
        "var socket = io.connect('http://localhost:3000/$namespace/io');",
        "socket.on('connected', function (data) {",
          "console.log(data);",
          "socket.emit('subscribe', { 'room': '$resources' });",
        '});',
        "socket.on('$Resource', function (data) {",
          "console.log(data);",
        '});',
        "socket.on('subscribed', function (data) {",
          "console.log(data);",
        '});',
        "socket.on('unsubscribed', function (data) {",
          "console.log(data);",
        '});',
      '</script>'

    ].join('\n'));
  });

};