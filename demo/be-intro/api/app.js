const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const convert = require('./convert');

const app = express();
app.use(express.json({ limit: '50mb' }));
app.use(cors());

app.post('/convert', (req, res) => {
	const { webp } = req.body;
	const base64Image = webp.replace(/^data:image\/webp;base64,/, '');
	const currentTime = new Date().getTime();
	const srcFile = path.resolve(`./tmp/image-${currentTime}-src.webp`);
	const outputFile = path.resolve(`./tmp/image-${currentTime}-output.jpg`);

	fs.writeFileSync(srcFile, base64Image, { encoding: 'base64' });
	convert(srcFile, outputFile, () => {
		const jpg =
			'data:image/jpeg;base64,' +
			fs.readFileSync(outputFile, { encoding: 'base64' });

		setTimeout(() => {
			fs.unlink(srcFile, () => {});
			fs.unlink(outputFile, () => {});
			console.log('Files deleted');
		}, 1000);
		return res.json({ jpg });
	});
});

app.listen(4000, () => {
	console.log('Server is running on port 4000');
});
