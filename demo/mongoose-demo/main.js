require('dotenv').config();
const mongoose = require('mongoose');
const connect = require('./db');
const Product = require('./Product');
const Review = require('./Review');

const main = async () => {
	// database connection
	await connect();

	try {
		const products = await Product.find({})
			.populate({
				path: 'reviews',
				select: 'user rating text -_id',
			})
			.select(['-__v', '-tags', '-color']);
		console.log(JSON.stringify(products, null, 4));
	} catch (e) {
		console.log(e.message);
	}
};

main();
