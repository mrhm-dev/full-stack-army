import axios from 'axios';

export const getUserData = async (userId) => {
	const response = await axios.get(`https://myapi.com/users/${userId}`);
	return response.data;
};
