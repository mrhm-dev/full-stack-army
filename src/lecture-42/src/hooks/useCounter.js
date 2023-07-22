import { useState } from 'react';

const useCounter = ({ initial = 0, lowerBound = 0, upperBound = 10 }) => {
	const [count, setCount] = useState(initial);

	const handleInc = () => {
		if (count < upperBound) {
			setCount(count + 1);
		}
	};

	const handleDec = () => {
		if (count > lowerBound) {
			setCount(count - 1);
		}
	};

	return {
		count,
		lowerBound,
		upperBound,
		handleInc,
		handleDec,
	};
};

export default useCounter;
