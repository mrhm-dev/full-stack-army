const express = require('express');
const bcrypt = require('bcryptjs');
const connectDB = require('./db');
const User = require('./models/User');

const app = express();
app.use(express.json());
/**
name = Input()
email = Input()
password = Input()
If name && email && password is Invalid:
return 400 error
user = find user with email
if user found:
return 400 error
hash = hash password
user = save name, email, hash to user model
return 201
End
 */
app.post('/register', async (req, res, next) => {
	/**
	* Request Input Sources:
		- req Body
		- req Param
		- req Query
		- req Header
		- req Cookies
  */
	const { name, email, password, accountStatus } = req.body;
	if (!name || !email || !password) {
		return res.status(400).json({ message: 'Invalid Data' });
	}

	try {
		let user = await User.findOne({ email });
		if (user) {
			return res.status(400).json({ message: 'User already exist' });
		}

		user = new User({ name, email, password, accountStatus });

		const salt = await bcrypt.genSalt(10);
		const hash = await bcrypt.hash(password, salt);
		user.password = hash;

		await user.save();
		return res
			.status(201)
			.json({ message: 'User Created Successfully', user });
	} catch (e) {
		next(e);
	}
});

app.post('/login', async (req, res, next) => {
	/**
	 * Start
			email = Input()
			password = Input()
			user = find user with email
			if user not found:
			return 400 error
			if password not equal to user.hash:
			return 400 error
			token = generate token using user
			return token
			end
	 */
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

app.get('/', (_, res) => {
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
			console.log('I am listening on port 4000');
		});
	})
	.catch((e) => console.log(e));
