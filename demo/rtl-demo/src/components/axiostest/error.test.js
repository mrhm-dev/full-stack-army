import axios from 'axios';
import { myFunction } from './error';

jest.mock('axios');

describe('API Error', () => {
	it('should return 400 error', async () => {
		axios.get.mockImplementationOnce(() => {
			const error = new Error('Error');
			error.status = 400;
			throw error;
		});

		const data = await myFunction();
		expect(data).toEqual('Error');
	});
});
