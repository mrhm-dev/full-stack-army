import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserList() {
	const [users, setUsers] = useState([]);
	const [error, setError] = useState(null);

	useEffect(() => {
		axios
			.get('/api/users')
			.then((response) => {
				setUsers(response.data);
			})
			.catch((error) => {
				setError(error.message);
			});
	}, []);

	if (error) {
		return <div>Error: {error}</div>;
	}

	return (
		<table role='table'>
			<thead>
				<tr>
					<th>ID</th>
					<th>Name</th>
					<th>Email</th>
				</tr>
			</thead>
			<tbody>
				{users.map((user) => (
					<tr key={user.id}>
						<td>{user.id}</td>
						<td>{user.name}</td>
						<td>{user.email}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}

export default UserList;
