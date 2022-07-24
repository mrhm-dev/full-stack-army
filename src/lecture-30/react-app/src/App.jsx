import Button from './components/button/Button';
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
				<InputGroup label="What is your name?" type="text" id="name" />
				<InputGroup label="What is your email?" type="email" id="email" />
				<InputGroup
					label="What is your password?"
					type="password"
					id="password"
				/>

				<div>
					<Button type="reset" text="Reset" variant="warning" size="small" />
					<Button type="submit" text="Submit" variant="primary" size="medium" />
					<Button type="button" text="Cancel" variant="error" size="large" />
				</div>
			</form>
		</div>
	);
}

export default App;
