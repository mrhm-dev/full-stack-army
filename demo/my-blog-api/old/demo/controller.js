const demoService = require('./service');

const demoController = (req, res) => {
	// parse the request
	// process the request
	demoService.execute();
	// generate response
	res.send();
};

module.exports = { demoController };
