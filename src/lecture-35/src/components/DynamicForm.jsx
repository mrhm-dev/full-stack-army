import { useState } from 'react';

const formFields = {
	name: {
		label: 'What is your name?',
		type: 'text',
		placeholder: 'John Doe',
	},
	email: {
		label: 'What is your email?',
		type: 'email',
		placeholder: 'john@example.com',
	},
	phone: {
		label: 'What is your phone number?',
		type: 'tel',
		placeholder: '+8801711111111',
	},
	password: {
		label: 'What is your password?',
		type: 'password',
		placeholder: '******',
	},
	color: {
		label: 'What is your color?',
		type: 'color',
		placeholder: 'red',
	},
	birthday: {
		label: 'What is your birth date?',
		type: 'date',
		placeholder: '1-1-2022',
	},
	age: {
		label: 'What is your age?',
		type: 'number',
		placeholder: '20',
	},
};

const transformObject = (obj) => {
	return Object.keys(obj).reduce((acc, cur) => {
		acc[cur] = {
			...obj[cur],
			value: '',
		};
		return acc;
	}, {});
};

const mapObjectToArray = (obj) => {
	return Object.keys(obj).map((key) => ({ name: key, ...obj[key] }));
};

const DynamicForm = () => {
	const [formState, setFormState] = useState(transformObject(formFields));
	const formData = mapObjectToArray(formState);

	const handleSubmit = (event) => {
		event.preventDefault();
		const values = Object.keys(formState).reduce((acc, cur) => {
			acc[cur] = formState[cur].value;
			return acc;
		}, {});

		console.log(values);
	};

	const handleChange = (event) => {
		setFormState({
			...formState,
			[event.target.name]: {
				...formState[event.target.name],
				value: event.target.value,
			},
		});
	};

	return (
		<form onSubmit={handleSubmit}>
			{formData.map((item, index) => (
				<div key={index}>
					<label htmlFor={item.name}>{item.label}</label>
					<input
						type={item.type}
						name={item.name}
						placeholder={item.placeholder}
						value={item.value}
						onChange={handleChange}
					/>
				</div>
			))}
			<div>
				<button type="submit">Submit</button>
			</div>
		</form>
	);
};

export default DynamicForm;
