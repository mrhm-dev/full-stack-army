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
