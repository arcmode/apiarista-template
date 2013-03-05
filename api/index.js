
module.exports = function (app) {

  app.all('*', require('./middleware/attr'));

  app.namespace('/$namespace', function(){
    
    //CRUDs PLACEHOLDER
  });

  var io = app.io.of('/resources/io');

  io.on('connection', function (socket) {
    socket.emit('connected', { message: 'ok' });

    socket.on('subscribe', function(data) {
      socket.join(data.room);
      socket.emit('subscribed', {
        message: 'ok',
        room: data.room
      });
    });

    socket.on('unsubscribe', function(data) {
      socket.leave(data.room);
      socket.emit('unsubscribed', {
        message: 'ok',
        room: data.room
      });
    });
  });

};