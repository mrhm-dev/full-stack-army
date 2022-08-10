import { useState } from 'react';
import Buttons from '../components/buttons/Buttons';
import DisplayCount from '../components/display-count/DisplayCount';
import Layout from '../components/layout/Layout';
import UpdateIncrementDecrement from '../components/update-incre-decre/UpdateIncrementDecrement';

const About = () => {
	const [count, setCount] = useState(0);
	const [incrementValue, setIncrementValue] = useState(10);
	const [decrementValue, setDecrementValue] = useState(5);

	// const o = count ?? 50;

	// console.log(o);

	// count && console.log('Count has a value', count);

	function increment() {
		setCount(count + incrementValue);
	}

	function decrement() {
		setCount(count - decrementValue);
	}

	function handleIncrementChange(event) {
		setIncrementValue(parseInt(event.target.value));
	}

	function handleDecrementChange(event) {
		setDecrementValue(parseInt(event.target.value));
	}

	return (
		<Layout>
			<DisplayCount count={count} />
			<UpdateIncrementDecrement
				incrementValue={incrementValue}
				decrementValue={decrementValue}
				handleIncrementChange={handleIncrementChange}
				handleDecrementChange={handleDecrementChange}
			/>
			<Buttons increment={increment} decrement={decrement} />
		</Layout>
	);
};

export default About;
