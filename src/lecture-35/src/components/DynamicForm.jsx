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
};

const mapObjectToArray = (obj) => {
	return Object.keys(obj).map((key) => ({ name: key, ...obj[key] }));
};

const DynamicForm = () => {
	const formData = mapObjectToArray(formFields);

	return (
		<form>
			{formData.map((item, index) => (
				<div key={index}>
					<label htmlFor={item.name}>{item.label}</label>
					<input
						type={item.type}
						name={item.name}
						placeholder={item.placeholder}
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
