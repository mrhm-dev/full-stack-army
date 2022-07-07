/**
 * DONE: Handle user input fields
 * DONE: Handle operations
 * DONE: Handle a list of histories
 * DONE: Render history list
 * DONE: Restore the history
 */

import { useState } from 'react';
import InputSection from './components/inputs/InputSection';
import OperationSection from './components/operations/OperationSection';
import HistorySection from './components/history/HistorySection';

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

			<InputSection
				inputs={inputState}
				handleInputFields={handleInputFields}
			/>

			<OperationSection
				handleArithmeticOps={handleArithmeticOps}
				handleClearOps={handleClearOps}
			/>

			<HistorySection
				histories={histories}
				restoredHistory={restoredHistory}
				handleRestoreBtn={handleRestoreBtn}
			/>
		</div>
	);
};

export default App;
