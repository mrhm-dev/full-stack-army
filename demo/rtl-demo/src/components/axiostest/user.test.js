import axios from 'axios';
import { getUserData } from './user';

jest.mock('axios');

test('getUserData should return the user data', async () => {
	const expectedResult = { id: 1, name: 'Biswas Bipon' };
	axios.get.mockResolvedValueOnce({ data: expectedResult });

	const userData = await getUserData(1);
	expect(userData).toEqual(expectedResult);
});
