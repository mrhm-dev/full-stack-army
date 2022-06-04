// * Raw node
/* const http = require('http');

const server = http.createServer((req, res) => {
	if (req.url === '/') {
		res.write('<h1>Hello World</h1>');
		res.statusCode = 200;
		res.end();
	} else if (req.url === '/hello') {
		res.write('<h1>Hello Guest</h1>');
		res.statusCode = 200;
		res.end();
	} else {
		res.write('<h1>404 not found!</h1>');
		res.statusCode = 200;
		res.end();
	}
});

server.listen(8000, () => {
	console.log('Server is listening on port 8000');
}); */

// * By ExpressJs
const express = require('express');

const app = express();
app.use(express.json());

const books = [
	{
		id: '1',
		name: 'Personal Finance',
		price: 500,
	},
	{
		id: '2',
		name: 'Javascript for dummies',
		price: 1000,
	},
	{
		id: '3',
		name: 'JavaScript the definitive guide',
		price: 1500,
	},
	{
		id: '4',
		name: "You don't know js yet",
		price: 2500,
	},
	{
		id: '5',
		name: 'Atomic Habits',
		price: 100,
	},
	{
		id: '6',
		name: 'JavaScript the good parts',
		price: 1200,
	},
];

app.get('/books', (req, res) => {
	if (req.query.show === 'all') {
		return res.json(books);
	}

	if (req.query.price === '500') {
		const result = books.filter((book) => book.price <= 500);
		return res.json(result);
	}

	if (req.query.price === '1000') {
		const result = books.filter((book) => book.price <= 1000);
		return res.json(result);
	}

	return res.json(books);
});

app.post('/books', (req, res) => {
	const book = req.body;
	books.push(book);

	res.json(books);
});

app.listen(8000, () => {
	console.log('Server is listening on port 8000');
});
