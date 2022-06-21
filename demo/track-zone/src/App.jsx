import ClockList from './components/clock-list';
import LocalClock from './components/local-clock';
import useClock from './hooks/useClock';

function App() {
	const { clock: local } = useClock();
	const { clock: est } = useClock('EST');
	const { clock: pst } = useClock('PST');
	const { clock: pakistan } = useClock('UTC', 5 * 60);
	const { clock: edt } = useClock('EDT');
	const { clock: british } = useClock('BST');
	const { clock: mst } = useClock('MST');

	return (
		<div>
			<LocalClock />
			<ClockList />
		</div>
	);
}

export default App;
