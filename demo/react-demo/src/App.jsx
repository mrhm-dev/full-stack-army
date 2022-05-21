import { useState } from 'react';
import ContactForm from './components/contact-app/ContactForm';
import Table from './components/contact-app/Table';

const App = () => {
	const [contacts, setContacts] = useState([]);
	const getContact = (contact) => {
		setContacts([].concat(contacts, contact));
	};

	return (
		<div>
			<h1>Contact APP</h1>
			<ContactForm getContact={getContact} />
			<Table contacts={contacts} />
		</div>
	);
};

export default App;
