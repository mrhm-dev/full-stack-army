import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
	const [color, setColor] = useState('red');
	const buttonText = color === 'red' ? 'Blue' : 'Red';

	const [isDisabled, setIsDisabled] = useState(false);

	const handleClick = () => {
		if (color === 'red') {
			setColor('blue');
		} else {
			setColor('red');
		}
	};

	const handleCheckbox = () => {
		setIsDisabled(!isDisabled);
	};

	return (
		<div className='App'>
			<button
				style={{ backgroundColor: isDisabled ? 'gray' : color }}
				onClick={handleClick}
				disabled={isDisabled}
			>
				Change to {buttonText}
			</button>
			<div>
				<input
					type='checkbox'
					id='checkbox'
					onChange={handleCheckbox}
				/>
				<label htmlFor='checkbox'>Change the button state</label>
			</div>
		</div>
	);
}

export default App;
