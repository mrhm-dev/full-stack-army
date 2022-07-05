const mongoose = require('mongoose');

function connectDB(connectionStr) {
	return mongoose.connect(connectionStr);
}

module.exports = connectDB;
