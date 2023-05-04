const http = require('http');
const fs = require('fs');

const routes = {
	'/': {
		GET: (_req, res) => {
			sendResponse(res, {
				body: {
					msg: 'Welcome to Full-stack Army Advanced Backend Course',
				},
			});
		},
	},
	'/students': {
		GET: (_req, res) => {
			const raw = fs.readFileSync('./data/db.json');
			const students = JSON.parse(raw);
			sendResponse(res, { body: students });
		},
		POST: (req, res) => {
			let body = '';
			req.on('data', (chunk) => {
				body += chunk.toString();
			});

			req.on('end', () => {
				const payload = JSON.parse(body);

				const raw = fs.readFileSync('./data/db.json');
				const students = JSON.parse(raw);

				students.push(payload);
				fs.writeFileSync('./data/db.json', JSON.stringify(students));

				sendResponse(res, {
					body: { msg: 'Student created', students },
					status: 201,
				});
			});
		},
	},
	default: (_req, res) => {
		sendResponse(res, { status: 404, body: { msg: 'Resource not found' } });
	},
};

const sendResponse = (
	res,
	{ contentType = 'application/json', status = 200, body = {} }
) => {
	res.writeHead(status, { 'Content-Type': contentType });
	res.write(JSON.stringify(body));
	res.end();
};

const server = http.createServer((req, res) => {
	const { url, method } = req;
	const currentRoute = routes[url] || routes.default;
	const handler = currentRoute[method] || routes.default;

	handler(req, res);
});

server.listen(4000, () => {
	console.log('Server is listening on PORT 4000');
});
