require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const swaggerUI = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDoc = YAML.load('./swagger.yaml');
const OpenApiValidator = require('express-openapi-validator');
const User = require('./model/User');

// express app
const app = express();
app.use(express.json());
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDoc));
app.use(
	OpenApiValidator.middleware({
		apiSpec: './swagger.yaml',
	})
);

app.use((req, _res, next) => {
	req.user = {
		id: 999,
		name: 'HM Nayem',
	};
	next();
});

app.get('/health', (_req, res) => {
	res.status(200).json({
		health: 'OK',
	});
});

app.use((err, req, res, next) => {
	// format error
	res.status(err.status || 500).json({
		message: err.message,
		errors: err.errors,
	});
});

let connectionURL = process.env.DB_CONNECTION_URL;
connectionURL = connectionURL.replace('<username>', process.env.DB_USERNAME);
connectionURL = connectionURL.replace('<password>', process.env.DB_PASSWORD);
connectionURL = `${connectionURL}/${process.env.DB_NAME}?${process.env.DB_URL_QUERY}`;

mongoose
	.connect(connectionURL)
	.then(() => {
		console.log('Database connected');
		app.listen(4000, async () => {
			console.log('Server is listening on port 4000');
		});
	})
	.catch((e) => {
		console.log('Database Connection Failed');
		console.log('Message:', e.message);
	});
