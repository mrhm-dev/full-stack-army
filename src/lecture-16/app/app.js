require('dotenv').config('../.env');

const express = require('express');
const { errorHandler, notFoundHandler } = require('./error');
// const middleware = require('./middlewares/middleware');
const app = express();

// public static folder
app.use(express.static('public'));

// middlewares
app.use(require('./middleware'))
app.use(require('./routes'));
app.use(notFoundHandler);
app.use(errorHandler);

module.exports = app;