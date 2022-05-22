const express = require('express');
const app = express();

app.get('/', (_, res) => {
	const obj = {
		name: 'Ayman',
		email: 'ayman@example.com',
	};
	res.json(obj);
});

app.listen(4000, () => {
	console.log("I'm listening on port 4000");
});
