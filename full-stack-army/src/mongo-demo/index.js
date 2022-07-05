const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
	firstName: {
		type: String,
		required: true,
		minlength: [3, 'Minimum 3 chars'],
		maxlength: [20, 'Maximum 20 chars'],
	},
	lastName: {
		type: String,
		required: true,
		minlength: [3, 'Minimum 3 chars'],
		maxlength: [20, 'Maximum 20 chars'],
	},
	email: {
		type: String,
		required: true,
		validate: {
			validator: function (v) {
				return v.endsWith('.com');
			},
			message: 'Invalid email formats',
		},
	},
	age: Number,
	bio: String,
	single: Boolean,
});

const Person = mongoose.model('Person', personSchema);

mongoose
	.connect('mongodb://localhost:27017/mongo-demo')
	.then(async () => {
		console.log('Database connected');
		const person = new Person({
			firstName: 'Aditya',
			lastName: 'Chakraborty',
			email: 'aditya@example.com',
			age: 30,
			bio: 'Backend Developer',
			single: true,
		});
		await person.save();
		console.log('Person created');
		console.log(person);
		// const people = await Person.find({ lastName: 'Chakraborty' });
		// console.log(people);
		// const person = new Person({ firstName: '11' });
		// await person.save();
	})
	.catch((e) => {
		console.log(e);
	})
	.finally(() => {
		mongoose.connection.close();
	});
