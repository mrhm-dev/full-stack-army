import { useEffect, useState } from 'react';
import Layout from '../components/layout/Layout';

const Help = () => {
	// const [name, setName] = useState('');
	const [state, setState] = useState({ name: '' });

	useEffect(() => {
		setTimeout(() => {
			setState({ name: 'HM Nayem' });
		}, 3000);
		console.log('Set timeout');
	}, []);

	console.log('Rendering');

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
		{
			name: 'Faruk Ahmed',
			email: 'faruk@test.com',
		},
		{
			name: 'Firoz Ahmed',
			email: 'firoz@test.com',
		},
	];

	// const data = [];

	return (
		<Layout>
			{/* {name && <h1>Hello {name}, I am Help page</h1>}
			{!name && <h1>Hello Guest, I am Help page</h1>} */}

			{state.name ? (
				<h1>Hello {state.name}, I am Help page</h1>
			) : (
				<h1>Hello Guest, I am Help page</h1>
			)}

			{data.length > 0 ? (
				<ul>
					{data.map((item) => (
						<li>
							{item.name}, ({item.email})
						</li>
					))}
				</ul>
			) : (
				<p>There is no data</p>
			)}
		</Layout>
	);
};

export default Help;
