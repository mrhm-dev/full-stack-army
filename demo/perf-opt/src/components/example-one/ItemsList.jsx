const ItemsList = ({ items, handleDeleteItems }) => {
	return (
		<div>
			List:
			<ul>
				{items.map((item, index) => (
					<li key={index}>
						{item} -{' '}
						<span onClick={() => handleDeleteItems(item)}>X</span>
					</li>
				))}
			</ul>
		</div>
	);
};

export default ItemsList;
