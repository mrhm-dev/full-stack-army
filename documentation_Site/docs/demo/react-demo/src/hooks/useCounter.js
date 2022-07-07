import { useState } from 'react';

const useCounter = ({ initial = 0, lowerBound = 0, upperBound = 10 }) => {
	const [count, setCounter] = useState(initial);

	const handleInc = () => {
		if (count < upperBound) {
			setCounter(count + 1);
		}
	};

	const handleDec = () => {
		if (count > lowerBound) {
			setCounter(count - 1);
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
