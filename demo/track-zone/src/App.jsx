import { useState } from 'react';
import ClockList from './components/clock-list';
import LocalClock from './components/local-clock';
import ClockDisplay from './components/shared/clock-display';
import useClock from './hooks/useClock';

const LOCAL_CLOCK_INIT = {
	title: 'My Clock',
	timezone: '',
	offset: 0,
	date: null,
};

function App() {
	const [localClock, setLocalClock] = useState({ ...LOCAL_CLOCK_INIT });

	const updateLocalClock = (data) => {
		setLocalClock({
			...localClock,
			...data,
		});
	};

	return (
		<div>
			<LocalClock clock={localClock} updateClock={updateLocalClock} />
			<ClockList />
		</div>
	);
}

export default App;
