import './App.css';
import Count from './components/Count';
import DecrementBtn from './components/DecrementBtn';
import History from './components/History';
import IncrementBtn from './components/IncrementBtn';

function App() {
	return (
		<div className="App">
			<Count />
			<div>
				<IncrementBtn />
				<DecrementBtn />
			</div>
			<History />
		</div>
	);
}

export default App;
