const path = require('path');
const fs = require('fs');
const convertImage = require('./convert');

const main = () => {
	if (process.argv.length !== 4) {
		console.error('Usage: node main.js input.webp output.jpg');
		process.exit(1);
	}

	const inputPath = path.resolve(process.argv[2]);
	const outputPath = path.resolve(process.argv[3]);

	if (!fs.existsSync(inputPath)) {
		console.error(`Error: ${inputPath} does not exist.`);
		process.exit(1);
	}

	convertImage(inputPath, outputPath);
};

if (require.main === module) {
	main();
}
