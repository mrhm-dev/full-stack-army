import { forEach } from './forEach';

test('forEach mock function', () => {
	const mockCB = jest.fn((value) => value + 42); // it was out of scope
	forEach([10, 11, 12], mockCB);

	// The mock function was called twice
	expect(mockCB.mock.calls).toHaveLength(3);

	// The first argument of the first call to the function was 10
	expect(mockCB.mock.calls[0][0]).toBe(10);
	expect(mockCB).toHaveBeenCalledWith(10);

	// The first argument of the second call to the function was 11
	expect(mockCB.mock.calls[1][0]).toBe(11);
	expect(mockCB).toHaveBeenCalledWith(11);

	// The first argument of the third call to the function was 12
	expect(mockCB.mock.calls[2][0]).toBe(12);
	expect(mockCB).toHaveBeenCalledWith(12);

	// The return value of the first call to the function was 52
	expect(mockCB.mock.results[0].value).toBe(52);

	// The return value of the second call to the function was 53
	expect(mockCB.mock.results[1].value).toBe(53);

	// The return value of the third call to the function was 54
	expect(mockCB.mock.results[2].value).toBe(54);
});
