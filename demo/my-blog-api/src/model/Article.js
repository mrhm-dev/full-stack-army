const { Schema, model } = require('mongoose');

const articleSchema = new Schema(
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
	{ timestamps: true, id: true, strict: false }
);

const Article = model('Article', articleSchema);
module.exports = Article;
