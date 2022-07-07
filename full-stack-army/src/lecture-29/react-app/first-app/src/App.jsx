function Button({ text }) {
	return <button style={{ marginRight: '1rem' }}>{text}</button>;
}

function Title() {
	return <h1>Hello React</h1>;
}

function Body() {
	return <p>React is really awesome</p>;
}

function App() {
	return (
		<div>
			<Title />
			<Body />
			<Button text="Button A" />
			<Button text="Button B" />
			<Button text="Button C" />
		</div>
	);
}

export default App;
