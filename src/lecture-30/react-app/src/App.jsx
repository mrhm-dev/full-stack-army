import InputGroup from './components/input-group/InputGroup';

function App() {
	return (
		<div
			style={{
				width: '50%',
				margin: '2rem auto',
				backgroundColor: '#fff',
				padding: '2rem',
			}}
		>
			<div
				style={{
					textAlign: 'center',
					display: 'flex',
					flexDirection: 'column',
					gap: '0.5rem',
					marginBottom: '1rem',
				}}
			>
				<h3 style={{ fontFamily: 'Arial', fontSize: '2rem', color: '#222' }}>
					Sign Up
				</h3>
				<p style={{ fontFamily: 'Arial', fontSize: '1rem', color: '#666' }}>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam,
					similique!
				</p>
			</div>

			<form>
				<InputGroup label="What is your name?" />
				<InputGroup label="What is your email?" />
				<InputGroup label="What is your password?" />

				<div>
					<button type="reset">Reset</button>
					<button type="submit">Submit</button>
				</div>
			</form>
		</div>
	);
}

export default App;
