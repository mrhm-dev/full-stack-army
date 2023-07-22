// const ListItem = (props) => (
// 	<li
// 		style={{
// 			listStyle: 'none',
// 			display: 'flex',
// 			alignItems: 'center',
// 		}}
// 	>
// 		<input type="checkbox" checked={props.checked} />
// 		<p>
// 			{props.title} <span>{props.children}</span>
// 		</p>
// 		<button style={{ marginLeft: 'auto' }}>Delete</button>
// 	</li>
// );

import { useState } from 'react';

// const tasksList = [
// 	{
// 		id: 1,
// 		title: 'Checkbox 1',
// 		checked: true,
// 	},
// 	{
// 		id: 2,
// 		title: 'Checkbox 2',
// 		checked: false,
// 	},
// 	{
// 		id: 3,
// 		title: 'Checkbox 3',
// 		checked: false,
// 	},
// 	{
// 		id: 4,
// 		title: 'Checkbox 4',
// 		checked: false,
// 	},
// 	{
// 		id: 5,
// 		title: 'Checkbox 5',
// 		checked: true,
// 	},
// 	{
// 		id: 6,
// 		title: 'Checkbox 6',
// 		checked: false,
// 	},
// ];

// function App() {
// 	return (
// 		<div>
// 			<ul>
// 				{tasksList.map((item) => (
// 					<ListItem key={item.id} title={item.title} checked={item.checked}>
// 						<button>Edit</button>
// 					</ListItem>
// 				))}
// 			</ul>
// 		</div>
// 	);
// }

// const ProductListItem = ({ productName, stock }) => {
// 	const [count, setCount] = useState(0);

// 	const increment = () => {
// 		if (count < stock) {
// 			setCount(count + 1);
// 		}
// 	};

// 	const decrement = () => {
// 		if (count > 0) {
// 			setCount(count - 1);
// 		}
// 	};
// 	return (
// 		<div>
// 			<p>{productName}</p>
// 			<p>
// 				{count} / {stock}
// 			</p>
// 			<div>
// 				<button onClick={increment} disabled={count === stock}>
// 					Increment
// 				</button>
// 				<button onClick={decrement} disabled={count === 0}>
// 					Decrement
// 				</button>
// 			</div>
// 		</div>
// 	);
// };

// function App() {
// 	return (
// 		<div>
// 			<ProductListItem productName={'Keyboard'} stock={10} />
// 			<ProductListItem productName={'Mouse'} stock={5} />
// 			<ProductListItem productName={'Headphone'} stock={0} />
// 		</div>
// 	);
// }

const productList = [
	{
		id: 'P1',
		productName: 'Keyboard',
		stock: 10,
		price: 2000,
	},
	{
		id: 'P2',
		productName: 'Mouse',
		stock: 5,
		price: 1500,
	},
	{
		id: 'P3',
		productName: 'Headphone',
		stock: 15,
		price: 2500,
	},
];

const TableRow = ({
	id,
	name,
	stock,
	price,
	quantity,
	total,
	increment,
	decrement,
}) => {
	return (
		<tr>
			<td>{id}</td>
			<td>{name}</td>
			<td>{stock}</td>
			<td>{price}</td>
			<td>{quantity}</td>
			<td>{total}</td>
			<td>
				<button disabled={quantity === stock} onClick={() => increment(id)}>
					+
				</button>
				<button disabled={quantity === 0} onClick={() => decrement(id)}>
					-
				</button>
			</td>
		</tr>
	);
};

const App = () => {
	const [products, setProducts] = useState(
		productList.map((item) => ({
			...item,
			quantity: 0,
			total: 0,
		}))
	);

	const incrementQuantity = (id) => {
		setProducts(
			products.map((product) => {
				if (id === product.id && product.stock > product.quantity) {
					product.quantity++;
					product.total = product.quantity * product.price;
				}
				return product;
			})
		);
	};

	const decrementQuantity = (id) => {
		setProducts(
			products.map((product) => {
				if (id === product.id && product.quantity > 0) {
					product.quantity--;
					product.total = product.quantity * product.price;
				}
				return product;
			})
		);
	};

	const total = products.reduce((acc, cur) => acc + cur.total, 0);

	return (
		<div>
			<h1>Product List</h1>
			<table>
				<thead>
					<tr>
						<th>ID</th>
						<th>Name</th>
						<th>Stock</th>
						<th>Price</th>
						<th>Quantity</th>
						<th>Total</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{products.map((product) => (
						<TableRow
							key={product.id}
							{...product}
							increment={incrementQuantity}
							decrement={decrementQuantity}
						/>
					))}
				</tbody>
			</table>
			{total > 0 && <p>Total: {total}</p>}
		</div>
	);
};

export default App;
