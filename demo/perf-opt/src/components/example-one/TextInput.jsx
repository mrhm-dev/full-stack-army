import { memo, useState } from 'react';

const TextInput = ({ addItems }) => {
	const [text, setText] = useState('');

	const handleAddItem = () => {
		addItems(text);
		setText('');
	};

	return (
		<div>
			<h3>Add Items</h3>
			<input
				type='text'
				value={text}
				onChange={(e) => setText(e.target.value)}
			/>
			<button onClick={handleAddItem}>Add Item</button>
		</div>
	);
};

export default memo(TextInput);
