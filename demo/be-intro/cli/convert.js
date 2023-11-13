const gm = require('gm').subClass({ imageMagick: '7+' });

// it will accept a webp format image and convert it to jpg format
const convertImage = (inputPath, outputPath) => {
	gm(inputPath)
		.setFormat('jpg')
		.write(outputPath, (err) => {
			if (err) {
				console.error(err);
				return;
			}
			console.log('Conversion complete');
		});
};
module.exports = convertImage;
