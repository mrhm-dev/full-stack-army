import { useSelector } from 'react-redux';
import './App.css';
import Count from './components/Count';
import IncrementBtn from './components/IncrementBtn';
import DecrementBtn from './components/DecrementBtn';
import History from './components/History';

function App() {
	return (
		<div className='App'>
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
