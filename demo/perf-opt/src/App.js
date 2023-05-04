import logo from './logo.svg';
import './App.css';
import colorList from './data/colorList';
import React, { Suspense, useState } from 'react';

const ExampleOne = React.lazy(() =>
	import('./components/example-one/ExampleOne')
);

const Colors = React.lazy(() => import('./components/Colors'));

function App() {
	const [colors, setColors] = useState(colorList);

	const removeColor = (id) => {
		setColors((prev) => prev.filter((color) => color.id !== id));
	};

	return (
		<div className='app'>
			<Suspense fallback={<p>Loading...</p>}>
				<ExampleOne />
			</Suspense>
			<Suspense fallback={<p>Loading...</p>}>
				<Colors colorList={colors} removeColor={removeColor} />
			</Suspense>
		</div>
	);
}

export default App;
