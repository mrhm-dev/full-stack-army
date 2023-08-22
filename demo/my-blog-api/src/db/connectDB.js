const mongoose = require('mongoose');

let connectionURL = process.env.DB_CONNECTION_URL;
connectionURL = connectionURL.replace('<username>', process.env.DB_USERNAME);
connectionURL = connectionURL.replace('<password>', process.env.DB_PASSWORD);
// connectionURL = `${connectionURL}/${process.env.DB_NAME}?${process.env.DB_URL_QUERY}`;

const connectDB = async () => {
	await mongoose.connect(connectionURL, { dbName: process.env.DB_NAME });
	console.log('Database connected');
};

module.exports = connectDB;
