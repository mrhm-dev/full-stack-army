import ClockList from './components/clock-list';
import LocalClock from './components/local-clock';
import useClock from './hooks/useClock';

const App = () => {
	const { clock: local } = useClock();
	const { clock: est } = useClock('EST');
	const { clock: pst } = useClock('PST');
	const { clock: pakistan } = useClock('UTC', 5 * 60);
	const { clock: edt } = useClock('EDT');
	const { clock: british } = useClock('BST');
	const { clock: mst } = useClock('MST');

	console.log('local', local.date);
	console.log('est', est.date);
	console.log('pst', pst.date);
	console.log('pakistan', pakistan.date);
	console.log('edt', edt.date);
	console.log('british', british.date);
	console.log('mst', mst.date);

	return (
		<div>
			<LocalClock />
			<ClockList />
		</div>
	);
};

export default App;
