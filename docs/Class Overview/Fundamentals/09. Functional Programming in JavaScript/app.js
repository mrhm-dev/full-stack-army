// function statement
function func() {}

// Function expression
const myFn = function () {};

// Fat Arrow function
const myFatArrowFn = () => {};

// Pure Function
function sum(a, b) {
	return a + b;
}

sum(10, 20); // 30

// // Side effect
// let limit = 100;
// function changeLimit() {
// 	limit = 500;
// }

// console.log(changeLimit(limit)); // undefined
// console.log(limit); // 500

// Pure
// const arr = [1, 2, 3];
// function add(arr, data) {
// arr = [...arr, data]
// return arr;
// }

// Side Effect
const arr = [1, 2, 3];
function add(data) {
	arr.push(data);
}

// Impure Function
function log(msg) {
	console.log(msg);
}

// Higher order function
function generateTwoRandNumber(max, cb) {
	const random1 = Math.floor(Math.random() * max);
	const random2 = Math.floor(Math.random() * max);
	const result = cb(random1, random2);
	return result;
}
// const cb = function (rand1, rand2) {
// 	console.log(rand1, rand2);
// };
// generateTwoRandNumber(100, cb);

// console.log(generateTwoRandNumber(1000, (rand1, rand2) => rand1 + rand2));
// console.log(generateTwoRandNumber(10, (rand1, rand2) => rand1 * rand2));
// console.log(
// 	generateTwoRandNumber(10, (rand1, rand2) => rand1 * rand1 + rand2 * rand2)
// );

// function randomSum(max) {
// 	const random1 = Math.floor(Math.random() * max);
// 	const random2 = Math.floor(Math.random() * max);
// 	return random1 + random2; // placeholder
// }

// function randomSub(max) {
// 	const random1 = Math.floor(Math.random() * max);
// 	const random2 = Math.floor(Math.random() * max);
// 	return random1 - random2; // placeholder
// }

// function randomSqrSum(max) {
// 	const random1 = Math.floor(Math.random() * max);
// 	const random2 = Math.floor(Math.random() * max);
// 	return random1 * random1 + random2 * random2; // placeholder
// }

// function sqr(n) {
// 	return n * n;
// }

// function cube(n) {
// 	return n * n * n;
// }

function power(p) {
	return function (n) {
		let result = 1;
		for (let i = 1; i <= p; i++) {
			result *= n;
		}
		return result;
	};
}

const sqr = power(2);
const cube = power(3);
const power8 = power(8);
console.log('SQR', sqr);
console.log('CUBE', cube);
console.log('Power8', power8);

console.log(power8(2));
console.log(power8(3));
console.log(power8(4));

const a = 10;
function mostOuter() {
	function outer() {
		console.log(a);
	}
}

{
	const notScoped = 'scoped';
	{
		{
			{
				console.log(notScoped);
			}
		}
	}
}

function A(a) {
	console.log('I am A');
	if (a >= 10) {
		console.log('a = ', a);
	}
	for (let i = 0; i < a; i++) {
		console.log(i);
	}
}

function B() {
	A(5);
}

function C() {
	B();
	B();
}
function D() {
	C();
	A(3);
}

D();

function randomSum(max) {
	const random1 = Math.floor(Math.random() * max);
	const random2 = Math.floor(Math.random() * max);
	t();
	function t() {
		console.log(test);
	}
	var test = 'something';
	t();
	return random1 + random2; // placeholder
}

const r = randomSum(15);

(function (name) {
	console.log(name);
})('Nayem');

(() => {
	console.log('Test');
})();
