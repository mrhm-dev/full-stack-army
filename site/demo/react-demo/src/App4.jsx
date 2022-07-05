/**
 * DONE: Handle user input fields
 * DONE: Handle operations
 * DONE: Handle a list of histories
 * DONE: Render history list
 * DONE: Restore the history
 */

import { useState } from 'react';

function* generateId() {
	let id = 0;

	while (true) {
		yield id++;
	}
}

const getId = generateId();

const InitialInputState = {
	a: 20,
	b: 10,
};

const App = () => {
	const [inputState, setInputState] = useState({ ...InitialInputState });
	const [result, setResult] = useState(0);
	const [histories, setHistories] = useState([]);
	const [restoredHistory, setRestoredHistory] = useState(null);

	const handleInputFields = (e) => {
		setInputState({
			...inputState,
			[e.target.name]: parseInt(e.target.value),
		});
	};

	const handleClearOps = () => {
		setInputState({ ...InitialInputState });
		setResult(0);
	};

	// const handleFieldA = (e) => {
	// 	setInputState({
	// 		...inputState,
	// 		a: parseInt(e.target.value),
	// 	});
	// };

	// const handleFieldB = (e) => {
	// 	setInputState({
	// 		...inputState,
	// 		b: parseInt(e.target.value),
	// 	});
	// };

	// const handleInputFields = (key, value) => {
	//   setInputState({
	//     ...inputState,
	//     [key]: value
	//   })
	// };

	// const handleInputFields = (inp) => {
	// 	setInputState({
	// 		...inputState, // previous state
	// 		...inp, // new state
	// 	});
	// };\

	const handleArithmeticOps = (operation) => {
		if (!inputState.a || !inputState.b) {
			alert('Invalid Input');
			return;
		}

		const f = new Function(
			'operation',
			`
		  return ${inputState.a} ${operation} ${inputState.b}
		`
		);
		const result = f(operation);
		setResult(result);
		// setResult(eval(`${inputState.a} ${operation} ${inputState.b}`));

		const historyItem = {
			id: getId.next().value,
			inputs: { ...inputState },
			operation,
			result,
			date: new Date(),
		};
		setHistories([historyItem, ...histories]);
	};

	const handleRestoreBtn = (historyItem) => {
		setInputState({ ...historyItem.inputs });
		setResult(historyItem.result);
		setRestoredHistory(historyItem.id);
	};

	return (
		<div style={{ width: '50%', margin: '0 auto' }}>
			<h1>Result: {result}</h1>
			<div>
				<p>Inputs</p>
				<input
					type='number'
					value={inputState.a}
					onChange={handleInputFields}
					name='a'
				/>
				<input
					type='number'
					value={inputState.b}
					onChange={handleInputFields}
					name='b'
				/>
			</div>
			<div>
				<p>Operations</p>
				<button onClick={() => handleArithmeticOps('+')}>+</button>
				<button onClick={() => handleArithmeticOps('-')}>-</button>
				<button onClick={() => handleArithmeticOps('*')}>*</button>
				<button onClick={() => handleArithmeticOps('/')}>/</button>
				<button onClick={() => handleArithmeticOps('%')}>%</button>
				<button onClick={handleClearOps}>Clear</button>
			</div>
			<div>
				<p>History</p>
				{histories.length === 0 ? (
					<p>
						<small>There is no history</small>
					</p>
				) : (
					<ul>
						{histories.map((historyItem) => (
							<li key={historyItem.id}>
								<p>
									Operation: {historyItem.inputs.a}{' '}
									{historyItem.operation}{' '}
									{historyItem.inputs.b}, Result:{' '}
									{historyItem.result}
								</p>
								<small>
									{historyItem.date.toLocaleDateString()}{' '}
									{historyItem.date.toLocaleTimeString()}
								</small>
								<br />
								<button
									onClick={() =>
										handleRestoreBtn(historyItem)
									}
									disabled={
										restoredHistory != null &&
										restoredHistory === historyItem.id
									}
								>
									restore
								</button>
							</li>
						))}
					</ul>
				)}
			</div>
		</div>
	);
};

export default App;
