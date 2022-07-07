const express = require('express');
const connectDB = require('./db');
const bcrypt = require('bcryptjs');
const User = require('./models/User');

const app = express();

app.use(express.json());

app.post('/register', async (req, res, next) => {
	/**
	 * Request Input Sources:
	 * req Body
	 * req Param
	 * req Query
	 * req Header
	 * req Cookies
	 */
	// const name = req.body.name;
	// const email = req.body.email;
	// const password = req.body.password;

	const { name, email, password } = req.body;
	if (!name || !email || !password) {
		return res.status(400).json({ message: 'Invalid Data' });
	}

	try {
		let user = await User.findOne({ email });
		if (user) {
			return res.status(400).json({ message: 'User already exists' });
		}

		user = new User({ name, email, password });

		const salt = await bcrypt.genSalt(10);
		const hash = await bcrypt.hash(password, salt);
		user.password = hash;

		await user.save();

		return res.status(201).json({ message: 'User Created Successfully', user });
	} catch (error) {
		next(error);
	}
});

app.post('/login', async (req, res, next) => {
	const { email, password } = req.body;
	try {
		const user = await User.findOne({ email });

		if (!user) {
			return res.status(400).json({ message: 'Invalid Credential' });
		}

		const isMatch = await bcrypt.compare(password, user.password);
		if (!isMatch) {
			return res.status(400).json({ message: 'Invalid Credential' });
		}

		delete user._doc.password;
		return res.status(200).json({ message: 'Login Successful', user });
	} catch (e) {
		next(e);
	}
});

app.get('/', (_req, res) => {
	const obj = {
		name: 'Ayman',
		email: 'ayman@example.com',
	};
	res.json(obj);
});

app.use((err, req, res, next) => {
	console.log(err);
	res.status(500).json({ message: 'Server Error Occurred' });
});

connectDB('mongodb://localhost:27017/attendance-db')
	.then(() => {
		console.log('Database Connected');
		app.listen(4000, () => {
			console.log("I'm listening on port 4000");
		});
	})
	.catch((e) => console.log(e));
