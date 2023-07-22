import { useState, useEffect } from 'react';
import axios from 'axios';

function useUsers() {
	const [users, setUsers] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		axios
			.get('/api/users')
			.then((response) => {
				setUsers(response.data);
			})
			.catch((error) => {
				setError(error.message);
			})
			.finally(() => {
				setLoading(false);
			});
	}, []);

	return { users, error, loading };
}

export default useUsers;
