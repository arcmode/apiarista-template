
module.exports = function (app) {

	require('./resources/user/crud')(app);
	require('./resources/consumer/crud')(app);

	//CRUDs PLACEHOLDER
};