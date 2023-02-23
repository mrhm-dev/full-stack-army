import { render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
import UserList from './UserList';

jest.mock('axios');

describe('UserList', () => {
	it('should display the list of users when the request is successful', async () => {
		const expectedUsers = [
			{ id: 1, name: 'Biswas Bipon', email: 'bipon@gmal.com' },
			{ id: 2, name: 'Elias Emon', email: 'elias@gmal.com' },
		];
		axios.get.mockResolvedValueOnce({ data: expectedUsers });

		render(<UserList />);

		await waitFor(() => {
			screen.getByRole('table');
			expectedUsers.forEach((user) => {
				const idElement = screen.queryByText(user.id);
				expect(idElement).toBeInTheDocument();
				const nameElement = screen.queryByText(user.name);
				expect(nameElement).toBeInTheDocument();
				const emailElement = screen.queryByText(user.email);
				expect(emailElement).toBeInTheDocument();
			});
		});
	});

	it('should display an error message when the request fails', async () => {
		const expectedErrorMessage = 'Network Error';
		axios.get.mockRejectedValueOnce({ message: expectedErrorMessage });

		render(<UserList />);

		await waitFor(() => {
			const errorElement = screen.queryByText(/error/i);
			expect(errorElement).toBeInTheDocument();
			// expect(errorElement).toHaveTextContent(
			// 	`Error: ${expectedErrorMessage}`
			// );
		});
	});
});
