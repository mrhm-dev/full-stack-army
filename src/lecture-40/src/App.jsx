import { useState } from 'react';

const CONTACT_FORM_INIT_STATE = {
	name: '',
	email: '',
};

const ContactForm = () => {
	const [values, setValues] = useState({ ...CONTACT_FORM_INIT_STATE });
	const { name, email } = values;

	return (
		<form>
			<div>
				<label htmlFor="name">Name:</label>
				<input type="text" id="name" name="name" value={name} />
			</div>
			<div>
				<label htmlFor="email">Email:</label>
				<input type="email" id="email" name="email" value={email} />
			</div>
			<input type="button" value="Create New Contact" />
		</form>
	);
};

const App = () => {
	return (
		<div>
			<h1>Contact App</h1>
			<ContactForm />
		</div>
	);
};

export default App;
