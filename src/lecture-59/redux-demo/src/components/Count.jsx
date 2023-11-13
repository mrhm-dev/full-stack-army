import { useStoreState } from 'easy-peasy';

const Count = () => {
	const { value } = useStoreState((state) => state.count);

	return (
		<div>
			<h1>Counter: {value}</h1>
		</div>
	);
};

export default Count;

// * Implementing Redux and react-redux

/*
import { useSelector } from 'react-redux';

const Count = () => {
	const count = useSelector((state) => state.count);

	return (
		<div>
			<h1>Counter: {count}</h1>
		</div>
	);
};

export default Count;
*/
