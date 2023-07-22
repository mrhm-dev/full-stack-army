import { useState } from 'react';
import { generate } from 'shortid';
import ClockList from './components/clock-list';
import LocalClock from './components/local-clock';

const LOCAL_CLOCK_INIT = {
	title: 'My Clock',
	timezone: '',
	offset: 0,
	date: null,
};

const App = () => {
	const [localClock, setLocalClock] = useState({ ...LOCAL_CLOCK_INIT });
	const [clocks, setClocks] = useState([]);

	const updateLocalClock = (data) => {
		setLocalClock({
			...localClock,
			...data,
		});
	};

	const createClock = (clock) => {
		clock.id = generate();
		setClocks([...clocks, clock]);
	};

	const updateClock = (updatedClock) => {
		const updatedClocks = clocks.map((clock) => {
			if (clock.id === updatedClock.id) {
				return updatedClock;
			}
			return clock;
		});
		setClocks(updatedClocks);
	};

	const deleteClock = (id) => {
		const updatedClocks = clocks.filter((clock) => clock.id !== id);
		setClocks(updatedClocks);
	};

	return (
		<div>
			<LocalClock
				clock={localClock}
				updateClock={updateLocalClock}
				createClock={createClock}
			/>
			<ClockList
				clocks={clocks}
				localClock={localClock.date}
				updateClock={updateClock}
				deleteClock={deleteClock}
			/>
		</div>
	);
};

export default App;
