import { computeSomethingExpensive } from '../../utils/utils';

const ExpensiveComponent = () => {
	const result = computeSomethingExpensive(); // utility function
	return <div data-testid='expensive-node'>{result}</div>;
};

export default ExpensiveComponent;
