
module.exports = function (app) {

	require('./resources/user')(app);
	require('./resources/consumer')(app);

	//CRUDs PLACEHOLDER
};