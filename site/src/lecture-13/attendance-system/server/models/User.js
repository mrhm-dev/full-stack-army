const { model, Schema } = require('mongoose');

const userSchema = new Schema({
	name: String,
	email: String,
	password: String,
	roles: [String],
	accountStatus: String,
});

const User = model('User', userSchema);

module.exports = User;
