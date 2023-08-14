const express = require('express');
const applyMiddleware = require('./middleware');
const routes = require('./routes');

// express app
const app = express();
applyMiddleware(app);
app.use(routes);

app.get('/health', (req, res) => {
	res.status(200).json({
		health: 'OK',
		user: req.user,
	});
});

app.use((err, _req, res, next) => {
	// TODO: format error
	console.log(err);
	res.status(err.status || 500).json({
		message: err.message,
		errors: err.errors,
	});
});

module.exports = app;
