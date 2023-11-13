import { render, screen, waitFor, act } from '@testing-library/react';
import axios from 'axios';
import UserListSpinner from './UserListSpinner';

jest.mock('axios');

describe('UserListSpinner', () => {
	afterEach(() => {
		jest.resetAllMocks();
	});

	it('should display a loading spinner while the request is in progress', async () => {
		render(<UserListSpinner />);
		const loadingSpinner = await screen.findByText(/loading/i);
		expect(loadingSpinner).toBeInTheDocument();
	});

	it('should display a list of users when the request is successful', async () => {
		const expectedUsers = [
			{ id: 1, name: 'Biswas Bipon', email: 'bipon@gmal.com' },
			{ id: 2, name: 'Elias Emon', email: 'elias@gmal.com' },
		];
		axios.get.mockResolvedValueOnce({ data: expectedUsers });

		render(<UserListSpinner />);

		await waitFor(() =>
			expect(screen.queryByText(/loading/i)).not.toBeInTheDocument()
		);

		const listItems = screen.getAllByRole('listitem');
		listItems.forEach((item, index) => {
			expect(item).toHaveTextContent(expectedUsers[index].name);
			expect(item.textContent).toBe(expectedUsers[index].name);
		});
	});

	it('should display an error message when the request fails', async () => {
		const expectedErrorMessage = 'Network Error';
		axios.get.mockRejectedValueOnce({ message: expectedErrorMessage });

		render(<UserListSpinner />);

		await waitFor(() =>
			expect(screen.queryByText(/loading/i)).not.toBeInTheDocument()
		);

		const errorElement = screen.getByText(/error/i);
		expect(errorElement).toHaveTextContent(
			`Error: ${expectedErrorMessage}`
		);
	});
});
