import { Button } from '@ds.e/react/lib';

const App = () => {
	return (
		<div>
			<h1>Hello MonoRepo</h1>
			<Button
				title='I am a cute little button'
				onClick={() => alert('Hello World')}
			>
				Click Me
			</Button>
		</div>
	);
};

export default App;
