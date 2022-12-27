import InputGroup from '../components/shared/forms/InputGroup';

const App = () => {
	return (
		<div className="root">
			<InputGroup
				name="title"
				placeholder={'Enter Your Title'}
				label={'Title'}
				error={'Something went wrong'}
			/>
		</div>
	);
};

export default App;
