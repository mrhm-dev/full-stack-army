import React, { useState } from 'react';
import InputField from './InputField';

function UserForm() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');

	function handleSubmit(event) {
		event.preventDefault();
		console.log(`Name: ${name}, Email: ${email}`);
	}

	return (
		<form onSubmit={handleSubmit}>
			<InputField
				label='Name'
				value={name}
				onChange={(event) => setName(event.target.value)}
			/>
			<InputField
				label='Email'
				value={email}
				onChange={(event) => setEmail(event.target.value)}
			/>
			<button type='submit'>Submit</button>
		</form>
	);
}

export default UserForm;
