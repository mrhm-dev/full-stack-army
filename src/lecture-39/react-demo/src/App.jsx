/**
 * DONE: Handle User Input Fields
 * Done: Handle operations
 * DONE: Handle a list of histories
 * DONE: Render history list
 * DONE: Restore the history
 */

import { useState } from 'react';
import HistorySection from './components/history/HistorySection';
import InputSection from './components/inputs/InputSection';
import OperationSection from './components/operations/OperationSection';

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

	return (
		<div style={{ width: '50%', margin: '0 auto' }}>
			<h1>Result: {result}</h1>
			<InputSection inputs={inputState} handleInputChange={handleInputChange} />
			<OperationSection
				handleArithmeticOps={handleArithmeticOps}
				handleClearOps={handleClearOps}
			/>
			<HistorySection
				histories={histories}
				handleRestoreBtn={handleRestoreBtn}
				restoredHistory={restoredHistory}
			/>
		</div>
	);
};

export default App;
