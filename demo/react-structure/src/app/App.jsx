import InputGroup from '../components/shared/forms/InputGroup';
import Button from '../components/UI/buttons/Button';
import TextInput from '../components/UI/inputs/TextInput';
import Text from '../components/UI/texts/Text';

const App = () => {
	return (
		<div className='root'>
			<InputGroup
				name='title'
				placeholder={'Enter Your Title'}
				label={'Title'}
				error={'Something went wrong'}
			/>
		</div>
	);
};

export default App;
