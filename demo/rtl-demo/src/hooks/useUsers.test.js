import { renderHook, waitFor } from '@testing-library/react';
import axios from 'axios';
import useUsers from './useUsers';

jest.mock('axios');

describe('useUsers', () => {
	afterEach(() => {
		jest.resetAllMocks();
	});

	it('should fetch users when the hook is called', async () => {
		const expectedUsers = [
			{ id: 1, name: 'Biswas Bipon', email: 'bipon@gmal.com' },
			{ id: 2, name: 'Elias Emon', email: 'elias@gmal.com' },
		];
		axios.get.mockResolvedValueOnce({ data: expectedUsers });

		const { result } = renderHook(() => useUsers());

		expect(result.current.users).toBeNull();
		expect(result.current.error).toBeNull();
		expect(result.current.loading).toBe(true);

		// await waitFor(() => {
		// 	expect(result.current.users).toEqual(expectedUsers);
		// 	expect(result.current.error).toBeNull();
		// 	expect(result.current.loading).toBe(false);
		// });

		await waitFor(() => expect(result.current.loading).toBe(false));
		expect(result.current.users).toEqual(expectedUsers);
		expect(result.current.error).toBeNull();
	});

	it('should set an error message when the request fails', async () => {
		const expectedErrorMessage = 'Network error';
		axios.get.mockRejectedValueOnce({ message: expectedErrorMessage });

		const { result } = renderHook(() => useUsers());

		expect(result.current.users).toBeNull();
		expect(result.current.error).toBeNull();
		expect(result.current.loading).toBe(true);

		await waitFor(() => expect(result.current.loading).toBe(false));
		expect(result.current.users).toBeNull();
		expect(result.current.error).toEqual(expectedErrorMessage);
	});
});
