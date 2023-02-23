import { myFunction } from './myModule';
import * as addModule from './add';

jest.mock('./add', () => {
	return {
		add: jest.fn(),
	};
});

describe('Mocking My Module to Test MyFunction', () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	it('should return "Big" when the sum is 10 or greater', () => {
		addModule.add.mockReturnValue(10);

		const result = myFunction(5, 5);

		expect(addModule.add).toHaveBeenCalledTimes(1);
		expect(addModule.add).toHaveBeenCalledWith(5, 5);
		expect(result).toBe('Big');
	});

	it('should return "Small" when the sum is less than 10', () => {
		addModule.add.mockReturnValue(4);

		const result = myFunction(1, 3);

		expect(addModule.add).toHaveBeenCalledTimes(1);
		expect(addModule.add).toHaveBeenCalledWith(1, 3);
		expect(result).toBe('Small');
	});
});
