const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const reviewSchema = new Schema(
	{
		user: String,
		rating: Number,
		text: String,
	},
	{ timestamps: true }
);

const Review = model('Review', reviewSchema);
module.exports = Review;
