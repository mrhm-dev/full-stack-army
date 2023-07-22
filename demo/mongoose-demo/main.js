require('dotenv').config();
const connect = require('./db');
const Product = require('./Product');

const main = async () => {
	// database connection
	await connect();

	// main codes
	const product = new Product({
		name: 'Microsoft Surface Pro',
		price: 1000,
		tags: ['microsoft', 'laptop'],
		color: 'Gray',
	});
	try {
		await product.save();
		console.log('new product crated with id -', product._id);
		// await Product.deleteMany({});
		// console.log('Done');
	} catch (e) {
		console.log(e.message);
	}
};

main();
