import { useStoreActions } from 'easy-peasy';

const DecrementBtn = () => {
	const { count, history } = useStoreActions((actions) => actions);

	const handleClick = () => {
		count.decrement(1);
		history.addHistory({ action: 'decrement', count: 1 });
	};

	return <button onClick={handleClick}>-</button>;
};

export default DecrementBtn;

// * Implementing Redux and react-redux
/*
import { useDispatch } from 'react-redux';
import { addHistory, DECREMENT, decrement } from '../store';

const DecrementBtn = () => {
	const dispatch = useDispatch();

	const handleClick = () => {
		dispatch(decrement(1));
		dispatch(addHistory({ action: DECREMENT, count: 1 }));
	};

	return <button onClick={handleClick}>-</button>;
};

export default DecrementBtn;
*/
