import { useCallback, useState } from 'react';

import Navbar from '../Navbar';
import Counter from './Counter';
import ItemsList from './ItemsList';
import TextInput from './TextInput';

const ExampleOne = () => {
	const [items, setItems] = useState([]);

	const handleDeleteItems = (item) => {
		setItems(items.filter((oldItem) => oldItem !== item));
	};

	const handleAddItems = useCallback(
		(item) => {
			setItems((items) => [...items, item]);
		},
		[setItems]
	);

	return (
		<>
			<Navbar />
			<main>
				<Counter />
				<TextInput addItems={handleAddItems} />
				<ItemsList
					items={items}
					handleDeleteItems={handleDeleteItems}
				/>
			</main>
		</>
	);
};

export default ExampleOne;
