import { useState } from 'react';
import ContactForm from './components/ContactForm';
import Table from './components/Table';

const App = () => {
	const [contacts, setContacts] = useState([]);
	const getContact = (contact) => {
		setContacts([].concat(contacts, contact));
	};

	return (
		<div>
			<h1>Contact App</h1>
			<ContactForm getContact={getContact} />
			<Table contacts={contacts} />
		</div>
	);
};

export default App;
