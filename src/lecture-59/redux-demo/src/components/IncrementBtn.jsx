import { useStoreActions } from 'easy-peasy';

const IncrementBtn = () => {
	const { count, history } = useStoreActions((actions) => actions);

	const handleClick = () => {
		count.increment(1);
		history.addHistory({ action: 'increment', count: 1 });
	};

	return <button onClick={handleClick}>+</button>;
};

export default IncrementBtn;

// * Implementing Redux and react-redux

/*
import { useDispatch } from 'react-redux';
import { addHistory, INCREMENT, increment } from '../store';

const IncrementBtn = () => {
	const dispatch = useDispatch();

	const handleClick = () => {
		dispatch(increment(1));
		dispatch(addHistory({ action: INCREMENT, count: 1 }));
	};

	return <button onClick={handleClick}>+</button>;
};

export default IncrementBtn;
*/
