
module.exports = function (app) {

	app.configure(function(){
	 	app.use('/', require('./auth/consumer'));
	})

	require('./resources/user/crud')(app);
	require('./resources/consumer/crud')(app);

	//RESOURCES PLACEHOLDER
};