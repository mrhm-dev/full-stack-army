import { Button, Color, Text, Margin, Select } from '@ds.e/react/lib';
import './App.css';

const colorOptions = [
	{ label: 'Red', value: 'Red' },
	{ label: 'Green', value: 'Green' },
	{ label: 'Blue', value: 'Blue' },
	{ label: 'Yellow', value: 'Yellow' },
	{ label: 'Black', value: 'Black' },
];

const App = () => {
	return (
		<div className='app'>
			<h1>Hello MonoRepo</h1>
			<Margin>
				<Text size='lg'> Hello World </Text>
			</Margin>
			<Color hexCode='#f1f1f1' width='xxxl' height='xxxl' />
			<Button
				title='I am a cute little button'
				onClick={() => alert('Hello World')}
			>
				Click Me
			</Button>
			<Margin>
				<Text>This is a Select Component</Text>
				<Margin top bottom space='xs'>
					<Select
						label='Select A Color'
						options={colorOptions}
						onOptionSelected={console.log}
					/>
				</Margin>
				<Text>End Of Select</Text>
			</Margin>
		</div>
	);
};

export default App;
