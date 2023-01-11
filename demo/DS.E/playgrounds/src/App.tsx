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
			<Margin>
				{/* <Text>This is a Select Component</Text> */}
				<Margin top bottom space='xs'>
					<Select
						label='Select A Color'
						options={colorOptions}
						onOptionSelected={console.log}
						// renderOption={({
						// 	option,
						// 	getOptionRecommendedProps,
						// 	isSelected,
						// }) => (
						// 	<li
						// 		{...getOptionRecommendedProps({
						// 			className: `custom-select-option ${
						// 				isSelected
						// 					? 'custom-select-option--selected'
						// 					: ''
						// 			}`,
						// 		})}
						// 	>
						// 		<div style={{ display: 'flex' }}>
						// 			<input
						// 				type='checkbox'
						// 				checked={isSelected}
						// 			/>
						// 			<Text>{option.label}</Text>
						// 		</div>
						// 	</li>
						// )}
					/>
				</Margin>
				<Text>End Of Select</Text>
			</Margin>
		</div>
	);
};

export default App;
