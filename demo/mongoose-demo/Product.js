const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const productSchema = new Schema({
	name: {
		type: String,
		unique: true,
		required: true,
		minLength: [10, 'Name is too short'],
		maxLength: [75, 'Name is too long'],
		validate: {
			validator: (v) => {
				// write your validation logic here
				return true;
			},
			message: 'Custom validation failed',
		},
		index: true,
	},
	price: {
		type: Number,
		required: true,
		validate: {
			validator: (v) => {
				return v > 0;
			},
			message: 'Price can not be zero or negative',
		},
	},
	tags: {
		type: [String],
	},
	color: {
		type: String,
		enum: ['Silver', 'Gray', 'Black'],
		default: 'Silver',
	},
	reviews: [
		{
			type: Schema.ObjectId,
			ref: 'Review',
		},
	],
});

productSchema.virtual('tagCount').get(function () {
	return this.tags.length;
});

productSchema.methods.findAllWithSameName = function (cb) {
	return mongoose.model('Product').find({ name: this.name }, cb);
};

const Product = model('Product', productSchema);
module.exports = Product;

/**
 * Car - basic information
 * Engine
 * Tier
 * Doors
 *
 *
 * Car {
 * 	info {}
 * 	engine {}
 * 	tiers [{}]
 * 	doors [{}]
 * }
 */
