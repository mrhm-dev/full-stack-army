import { useState } from 'react';
import Layout from '../components/layout/Layout';

const About = () => {
	const [count, setCount] = useState(0);

	function increment() {
		setCount(count + 1);
	}
	return (
		<Layout>
			<h1>Hello, I am About page</h1>
			<h1>COUNT: {count}</h1>
			<button onClick={increment}>Increase by 1</button>
		</Layout>
	);
};

export default About;
