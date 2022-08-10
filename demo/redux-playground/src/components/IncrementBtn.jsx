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
