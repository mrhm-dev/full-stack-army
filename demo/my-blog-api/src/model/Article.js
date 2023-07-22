const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
	{
		title: String,
		body: String,
		cover: String,
		status: {
			type: String,
			enum: ['draft', 'published'],
			default: 'draft',
		},
		author: {
			type: Schema.ObjectId,
			ref: 'User',
		},
	},
	{ timestamps: true, id: true }
);

const User = model('User', UserSchema);
module.exports = User;
