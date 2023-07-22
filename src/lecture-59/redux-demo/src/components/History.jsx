import { useStoreActions, useStoreState } from 'easy-peasy';

const History = () => {
	const { items } = useStoreState((state) => state.history);
	const { clearHistory } = useStoreActions((actions) => actions.history);

	return (
		<div>
			<p>
				Histories: <button onClick={clearHistory}>Clear Histories</button>
			</p>
			<ul>
				{items &&
					items.map((item) => (
						<li key={item.id}>
							{item.action} - {item.count} - {item.time.toLocaleString()}
						</li>
					))}
			</ul>
		</div>
	);
};

export default History;

// * Implementing Redux and react-redux
/*
import { useDispatch, useSelector } from 'react-redux';
import { clearHistory } from '../store';

const History = () => {
	const history = useSelector((state) => state.history);
	const dispatch = useDispatch();

	const clearHistories = () => {
		dispatch(clearHistory());
	};

	return (
		<div>
			<p>
				Histories: <button onClick={clearHistories}>Clear Histories</button>
			</p>
			<ul>
				{history.map((item) => (
					<li key={item.id}>
						{item.action} - {item.count} - {item.time.toLocaleString()}
					</li>
				))}
			</ul>
		</div>
	);
};

export default History;
*/
