import useCounter from './hooks/useCounter';

const CountController = (props) => {
	const { count, handleInc, handleDec } = useCounter({ ...props });
	return (
		<div>
			<button onClick={handleInc}>+</button>
			<span>{count}</span>
			<button onClick={handleDec}>-</button>
		</div>
	);
};

// const CountController = ({ count, handleInc, handleDec }) => {
// 	return (
// 		<div>
// 			<button onClick={handleInc}>+</button>
// 			<span>{count}</span>
// 			<button onClick={handleDec}>-</button>
// 		</div>
// 	);
// };

const App = () => {
	// const counter1 = useCounter({ lowerBound: -10 });
	// const counter2 = useCounter({ initial: 5, lowerBound: 5, upperBound: 15 });
	// const counter3 = useCounter({ initial: 10, upperBound: 20 });

	// const {
	// 	count: count1,
	// 	handleInc: handleInc1,
	// 	handleDec: handleDec1,
	// } = useCounter();
	// const {
	// 	count: count2,
	// 	handleInc: handleInc2,
	// 	handleDec: handleDec2,
	// } = useCounter();
	// const {
	// 	count: count3,
	// 	handleInc: handleInc3,
	// 	handleDec: handleDec3,
	// } = useCounter();

	// const [counter2, setCounter2] = useState(0);
	// const [counter3, setCounter3] = useState(0);

	// const handleCounter1Inc = () => {
	// 	if (counter1 < 10) {
	// 		setCounter1(counter1 + 1);
	// 	}
	// };

	// const handleCounter1Dec = () => {
	// 	if (counter1 > 0) {
	// 		setCounter1(counter1 - 1);
	// 	}
	// };

	// const handleCounter2Inc = () => {
	// 	if (counter2 < 10) {
	// 		setCounter2(counter2 + 1);
	// 	}
	// };

	// const handleCounter2Dec = () => {
	// 	if (counter2 > 0) {
	// 		setCounter2(counter2 - 1);
	// 	}
	// };

	// const handleCounter3Inc = () => {
	// 	if (counter3 < 10) {
	// 		setCounter3(counter3 + 1);
	// 	}
	// };

	// const handleCounter3Dec = () => {
	// 	if (counter3 > 0) {
	// 		setCounter3(counter3 - 1);
	// 	}
	// };

	return (
		<div>
			{/* <div>
				<button onClick={handleCounter1Inc}>+</button>
				<span>{counter1}</span>
				<button onClick={handleCounter1Dec}>-</button>
			</div>
			<div>
				<button onClick={handleCounter2Inc}>+</button>
				<span>{counter2}</span>
				<button onClick={handleCounter2Dec}>-</button>
			</div> */}
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
				count={count3}
				handleInc={handleInc3}
				handleDec={handleDec3}
			/> */}
			{/* <CountController
				count={counter2}
				handleInc={handleCounter2Inc}
				handleDec={handleCounter2Dec}
			/>
			<CountController
				count={counter3}
				handleInc={handleCounter3Inc}
				handleDec={handleCounter3Dec}
			/> */}

			{/* <CountController
				count={counter1.count}
				handleInc={counter1.handleInc}
				handleDec={counter1.handleDec}
			/>
			<CountController
				count={counter2.count}
				handleInc={counter2.handleInc}
				handleDec={counter2.handleDec}
			/>
			<CountController
				count={counter3.count}
				handleInc={counter3.handleInc}
				handleDec={counter3.handleDec}
			/> */}

			<CountController lowerBound={-10} />
			<CountController initial={5} lowerBound={-10} upperBound={15} />
			<CountController initial={10} upperBound={20} />
		</div>
	);
};

export default App;
