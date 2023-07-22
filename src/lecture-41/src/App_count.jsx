import { useEffect, useState } from 'react';

let timeInterval = null;

const App = () => {
	const [count, setCount] = useState(0);
	const [lock, setLock] = useState(false);
	const [timeCount, setTimeCount] = useState(5);

	useEffect(() => {
		if (count === 5) {
			setLock(true);
		}
		console.log('count', count);

		return () => {};
	}, [count]);

	useEffect(() => {
		if (lock && timeInterval === null) {
			timeInterval = setInterval(() => {
				setTimeCount((prev) => prev - 1);
			}, 1000);
		}
	}, [lock]);

	useEffect(() => {
		if (timeCount === 0) {
			clearInterval(timeInterval);
			setCount(0);
			setLock(false);
			setTimeCount(5);
		}
	}, [timeCount]);

	return (
		<div>
			<h1 id="count">{count}</h1>
			<button id="btn" disabled={lock} onClick={() => setCount(count + 1)}>
				Add {lock && `(locked: ${timeCount}s)`}
			</button>
		</div>
	);
};

export default App;
