const gm = require('gm').subClass({ imageMagick: '7+' });

const convertImage = (inputPath, outputPath, cb) => {
	gm(inputPath)
		.setFormat('jpg')
		.write(outputPath, (err) => {
			if (err) {
				console.error(err);
				return;
			}
			cb();
		});
};
module.exports = convertImage;
