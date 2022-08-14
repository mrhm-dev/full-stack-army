import { useState } from 'react';

const ListItem = (props) => (
	<li
		style={{
			listStyle: 'none',
			display: 'flex',
			alignItems: 'center',
		}}
	>
		<input type="checkbox" checked={props.checked} />
		<p>
			{props.title} <span>{props.children}</span>
		</p>
		<button style={{ marginLeft: 'auto' }}>Delete</button>
	</li>
);

const tasksList = [
	{
		id: 1,
		title: 'Checkbox 1',
		checked: true,
	},
	{
		id: 2,
		title: 'Checkbox 2',
		checked: false,
	},
	{
		id: 3,
		title: 'Checkbox 3',
		checked: false,
	},
	{
		id: 4,
		title: 'Checkbox 4',
		checked: false,
	},
	{
		id: 5,
		title: 'Checkbox 5',
		checked: true,
	},
	{
		id: 6,
		title: 'Checkbox 6',
		checked: false,
	},
];

// function App() {
// 	return (
// 		<div>
// 			<ul>
// 				{tasksList.map((item) => (
// 					<ListItem key={item.id} title={item.title} checked={item.checked}>
// 						<button>Edit</button>
// 					</ListItem>
// 				))}
// 			</ul>
// 		</div>
// 	);
// }

function App() {
	const [count, setCount] = useState(0);

	const increment = () => {
		if (count < 10) {
			setCount(count + 1);
		}
	};

	const decrement = () => {
		if (count > 0) {
			setCount(count - 1);
		}
	};

	return (
		<div>
			<h1>Count: {count}</h1>
			<div>
				<button onClick={increment} disabled={count === 10}>
					Increment
				</button>
				<button onClick={decrement} disabled={count === 0}>
					Decrement
				</button>
			</div>
			{count >= 10 && <p>Limit Reached!</p>}
		</div>
	);
}

export default App;
