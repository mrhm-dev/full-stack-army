import { useState } from 'react';
import useCounter from './hooks/useCounter';

const CountController = ({ count, handleInc, handleDec }) => {
	return (
		<div>
			<button onClick={handleInc}>+</button>
			<span>{count}</span>
			<button onClick={handleDec}>-</button>
		</div>
	);
};

const CountController2 = (props) => {
	const { count, handleInc, handleDec } = useCounter({ ...props });
	return (
		<div>
			<button onClick={handleInc}>+</button>
			<span>{count}</span>
			<button onClick={handleDec}>-</button>
		</div>
	);
};

const App = () => {
	// const {
	// 	count: count1,
	// 	handleInc: handleInc1,
	// 	handleDec: handleDec1,
	// } = useCounter({ initial: 1, lowerBound: -10 });
	// const {
	// 	count: count2,
	// 	handleInc: handleInc2,
	// 	handleDec: handleDec2,
	// } = useCounter({ initial: 5, lowerBound: 5, upperBound: 15 });
	// const counter3 = useCounter({ initial: 10 });

	return (
		<div>
			<h1>App</h1>
			{/* <CountController
				count={count1}
				handleInc={handleInc1}
				handleDec={handleDec1}
			/>
			<CountController
				count={count2}
				handleInc={handleInc2}
				handleDec={handleDec2}
			/>
			<CountController
				count={counter3.count}
				handleInc={counter3.handleInc}
				handleDec={counter3.handleDec}
			/> */}

			<CountController2 lowerBound={-10} />
			<CountController2 initial={5} upperBound={15} />
			<CountController2 />
		</div>
	);
};

export default App;
