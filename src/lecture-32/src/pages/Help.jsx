import { useState } from 'react';
import Layout from '../components/layout/Layout';

const Help = () => {
	const [name, setName] = useState('');
	// const [state, setState] = useState({});

	// setTimeout(() => {
	// 	setState({ name: 'HM Nayem' });
	// }, 1 * 1000);

	// console.log('Rendering');

	const data = [
		{
			name: 'Abdullah Turky',
			email: 'turky@test.com',
		},
		{
			name: 'Arjun Roy',
			email: 'arjun@test.com',
		},
		{
			name: 'Fahim Faisal',
			email: 'fahim@test.com',
		},
	];

	return (
		<Layout>
			{/* {name && <h1>Hello {name}, I am Help page</h1>}
			{!name && <h1>Hello Guest, I am Help page</h1>} */}

			{name ? (
				<h1>Hello {name}, I am Help page</h1>
			) : (
				<h1>Hello Guest, I am Help page</h1>
			)}

			<ul>
				{data.map((item) => (
					<li>
						{item.name}, ({item.email})
					</li>
				))}
			</ul>
		</Layout>
	);
};

export default Help;
