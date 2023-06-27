const express = require('express');

const app = express();

app.use(express.json());

app.get('/api/calculate', (req, res) => {
	try {
		const value = parseInt(req.query.value);
		res.json({ originalValue: value, result: fibonacci(value) });
	} catch {
		res.status(422).json({
			message: 'Invalid Query Params',
			value: req.query.value,
		});
	}
});

app.listen(4000, () => {
	console.log('Server is listening on PORT 4000');
});

// program to calculate fibonacci sequence using recursion
// function fibonacci(num) {
// 	if (num < 2) {
// 		return num;
// 	} else {
// 		return fibonacci(num - 1) + fibonacci(num - 2);
// 	}
// }

function fibonacci(num) {
	// x is representing the first term,
	// y is representing the second term, and
	// z is representing the sum of x and y.
	var answer = [];
	var x = 0;
	var y = 1;
	var z;

	// Since, the first two elements are fixed.
	// Storing the first two terms.
	answer.push(x);
	answer.push(y);

	var i = 2;
	while (i < num) {
		z = x + y;
		x = y;
		y = z;

		// Storing the current element
		answer.push(z);
		i = i + 1;
	}
	return answer.pop();
}

// 0, 1, 1, 2, 3, 5, 8, 13, 21, ...
console.log(fibonacci(6));
