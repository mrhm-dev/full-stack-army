/**
 * DONE: Handle User Input Fields
 * Done: Handle operations
 * DONE: Handle a list of histories
 * DONE: Render history list
 * TODO: Restore the history
 */

import { useState } from 'react';

function* generateId() {
	let id = 0;

	while (true) {
		yield id++;
	}
}

const getId = generateId();

const initialInputState = {
	a: 0,
	b: 0,
};

const App = () => {
	const [inputState, setInputState] = useState({ ...initialInputState });
	const [result, setResult] = useState(0);
	const [histories, setHistories] = useState([]);
	const [restoredHistory, setRestoredHistory] = useState(null);

	const handleInputChange = (e) => {
		setInputState({
			...inputState,
			[e.target.name]: parseInt(e.target.value),
		});
	};

	const handleClearOps = () => {
		setInputState({ ...initialInputState });
		setResult(0);
	};

	const handleArithmeticOps = (operation) => {
		if (!inputState.a || !inputState.b) {
			alert('Invalid Input');
			return;
		}

		const f = new Function(
			'operation',
			`return ${inputState.a} ${operation} ${inputState.b}`
		);
		const result = f(operation);
		setResult(result);

		// setResult(eval(`${inputState.a} ${operation} ${inputState.b}`));

		const history = {
			id: getId.next().value,
			inputs: { ...inputState },
			operation,
			result,
			date: new Date(),
		};
		setHistories([history, ...histories]);
	};

	const handleRestoreBtn = (history) => {
		setInputState({ ...history.inputs });
		setResult(history.result);
		setRestoredHistory(history.id);
	};

	// const handleInputA = (e) => {
	// 	setInputState({
	// 		...inputState,
	// 		a: parseInt(e.target.value),
	// 	});
	// };

	// const handleInputB = (e) => {
	// 	setInputState({
	// 		...inputState,
	// 		b: parseInt(e.target.value),
	// 	});
	// };

	// const handleInputChange = (key, value) => {
	// 	setInputState({
	// 		...inputState,
	// 		[key]: parseInt(value),
	// 	});
	// };

	// const handleInputChange = (inp) => {
	// 	setInputState({
	// 		...inputState,
	// 		...inp,
	// 	});
	// };

	return (
		<div style={{ width: '50%', margin: '0 auto' }}>
			<h1>Result: {result}</h1>
			<div>
				<p>Inputs</p>
				<input
					type="number"
					value={inputState.a}
					onChange={handleInputChange}
					name="a"
				/>
				<input
					type="number"
					value={inputState.b}
					onChange={handleInputChange}
					name="b"
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
						{histories.map((history) => (
							<li key={history.id}>
								<p>
									Operations: {history.inputs.a} {history.operation}{' '}
									{history.inputs.b}, Result = {history.result}
								</p>
								<small>
									{history.date.toLocaleDateString()}{' '}
									{history.date.toLocaleTimeString()}
								</small>
								<br />
								<button
									onClick={() => handleRestoreBtn(history)}
									disabled={
										restoredHistory !== null && restoredHistory === history.id
									}
								>
									Restore
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
