import { useEffect, useState } from 'react';

const App = () => {
	const [user, setUser] = useState({});
	const [id, setId] = useState(1);
	const max = 10;

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
			.then((res) => res.json())
			.then((data) => setUser(data));
	}, [id]);

	const nextHandler = () => {
		if (id < max) {
			setId(id + 1);
		}
	};

	const prevHandler = () => {
		if (id > 1) {
			setId(id - 1);
		}
	};

	return (
		<div>
			<h1>User Detail: {id}</h1>
			{user && (
				<div>
					name: {user.name}
					<br />
					email: {user.email}
					<br />
					phone: {user.phone}
				</div>
			)}
			<div>
				<button disabled={id === 1} onClick={prevHandler}>
					previous
				</button>
				<button disabled={id === max} onClick={nextHandler}>
					next
				</button>
			</div>
		</div>
	);
};

export default App;
