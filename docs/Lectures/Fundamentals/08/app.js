/**
 * * Name: Human_Lifecycle
 * * Param: human_name
 * * :human_name, awake from sleep
 * * :human_name, go to washroom
 * * :human_name, take breakfast
 * * :human_name, go to school/college/office
 * * :human_name, Return from office
 * * :human_name, Take dinner
 * * :human_name", Go to sleep
 */

// Call Human_Lifecycle for 'Abu Musa'
// Call Human_Lifecycle for 'Easin Islam'
// Call Human_Lifecycle for 'Saiful Islam'
// Call Human_Lifecycle for 'Akib Ahmed'
// Call Human_Lifecycle for 'Alamin Mir'

/**
 * Function: Sleep
 * Param: name
 * Definition: How to sleep
 */

function sleep(name) {
	console.log(`${name} is sleeping`);
}

/**
 * Function: Awake
 * Param: name
 * Definition: How to awake
 */

function awake(name) {
	console.log(`${name} is awake`);
}

/**
 * Function: Eat
 * Param: name
 * Param: Time
 * Definition: How to eat
 */

function eat(name, time) {
	console.log(`${name} is taking ${time}`);
}

/**
 * Function: Walk
 * Param: name
 * Param: Destination
 * Definition: How to walk
 */

function walk(name, destination) {
	console.log(`${name} is walking to ${destination}`);
}

/**
 * Function: Study
 * Param: name
 * Definition: How to study
 */

function study(name) {
	console.log(`${name} is studying`);
}

/**
 * Function: Work
 * Param: name
 * Definition: How to work
 */

function work(name) {
	console.log(`${name} is working`);
}

/**
 * Function: Job_Holder_Lifecycle
 * Param: name
 * Definition:
 * - Awake -> name
 * - Eat -> name, 'breakfast'
 * - Walk -> name, 'office'
 * - Work -> name
 * - Eat -> name, 'lunch'
 * - Walk -> name, 'home'
 * - Eat -> name, 'dinner'
 * - Sleep -> name
 */

function jobHolderLifecycle(name) {
	awake(name);
	eat(name, 'breakfast');
	walk(name, 'office');
	work(name);
	eat(name, 'lunch');
	walk(name, 'home');
	eat(name, 'dinner');
	sleep(name);
}

console.log('Jobholders Lifecycle');
console.log('**********************');
jobHolderLifecycle('Shayed Hasan');
console.log('-----------------------');
jobHolderLifecycle('Sh Pabel');
console.log('-----------------------');
jobHolderLifecycle('Tarikul Islam');
console.log('-----------------------');
jobHolderLifecycle('Nahian Sikder');
console.log('-----------------------');
jobHolderLifecycle('Mizan Rahman');
console.log('-----------------------');

/**
 * Function: Student Lifecycle
 * Param: name
 * Definition:
 * - Awake -> name
 * - Eat -> name, 'breakfast'
 * - Study -> name
 * - Eat -> name, 'lunch'
 * - Study -> name
 * - Eat -> name, 'dinner'
 * - Sleep -> name
 */

function studentsLifecycle(name) {
	awake(name);
	eat(name, 'breakfast');
	study(name);
	eat(name, 'lunch');
	study(name);
	eat(name, 'dinner');
	sleep(name);
}

console.log('Students Lifecycle');
console.log('**********************');
studentsLifecycle('Faruk');
console.log('--------------------');
studentsLifecycle('Elias');
console.log('--------------------');
studentsLifecycle('Faisal');
console.log('--------------------');

// Students_Lifecycle -> 'Faruk'
// Students_Lifecycle -> 'Elias'
// Students_Lifecycle -> 'Faisal'

// Job_Holder_Lifecycle -> 'Musa'
// Job_Holder_Lifecycle -> 'Akib'
// Job_Holder_Lifecycle -> 'Bipon'

// * Function Template
function name_of_the_function(/** Input something  */) {
	// Function body
	// any valid js code
	// return a result
}

// There are two steps
// - Define a function
// - Invoke a function

/* function testFunction() {
	const a = 10;
	const b = 20;
	const result = a + b + Math.max(a, b);
	console.log(result);
} */

function testFunction(a = 10, b = 20) {
	const result = a + b + Math.max(a, b);
	console.log(result);
}

// testFunction(100, 200);
// testFunction(50, 30);
// testFunction(5);
// testFunction();

// function composition
function sum(a, b) {
	return a + b;
}

function subtract(a, b) {
	return a - b;
}

function times(a, b) {
	return a * b;
}

const a = 10;
const b = 20;

// const r1 = sum(a, b);
// console.log('R1', r1);
// const r2 = subtract(a, b);
// console.log('R2', r2);
const r = Math.abs(times(sum(a, b), subtract(a, b)));
console.log(r);

// Function definition
// Function Invoking
// Function Parameters/Arguments
// Return result from function

// Function is a first class citizen
// We can treat function as value
// 10, 'test', true, false -> function

/**
 * * Benefits:
 * * - we can store functions in a variable
 * * - we can store function inside an object / array
 * * - we can pass function as an argument
 * * - we can also return a function from another function
 */

// * Proof -> Function is a value
function testFunction() {
	console.log('I am a test function');
}

// * store function in a variable
const fn = testFunction;
console.log(fn.toString());
fn();

// * store function inside an object / array
const arr = [fn, testFunction];
const obj = {
	fn: testFunction,
};

// * pass function as an argument
function fnArgument(fn) {
	return fn();
}
fnArgument(testFunction);

// * return a function from another function
function returnFn() {
	return testFunction;
}

// * Let's construct a function
const newFn = new Function(
	'str',
	`let obj = {};
	for (let s of str) {
		if (s !== ' ') {
			obj[s] = s;
		}
	}
	return obj;`
);

console.log(newFn('HM Nayem'));

const fData = {
	params: ['a', 'b'],
	body: ['const r = a + b', 'return r'],
};

const fBody = fData.body.reduce((acc, cur) => {
	acc += cur + ';';
	return acc;
}, '');

const tf = new Function(...fData.params, fBody);
console.log(tf(100, 200));

const greetFn = new Function(
	'name',
	'email',
	`
	const fName = name.split(' ')[0];
	console.log('Hello,', fName, 'Is that your email?', email);
	console.log('Yeah, this is mine.');
	return fName;
	`
);

console.log(typeof greetFn);
console.log(greetFn.__proto__);
// console.log(greetFn.toString());
const fName = greetFn('HM Nayem', 'nayem@gmail.com');
console.log('First Name:', fName);

const operations = [
	{
		args: [10, 20],
		params: ['a', 'b'],
		body: 'console.log("a + b",a + b)',
	},
	{
		args: [10, 20],
		params: ['a', 'b'],
		body: 'console.log("a - b",a - b)',
	},
	{
		args: [10, 20],
		params: ['a', 'b'],
		body: 'console.log("a * b",a * b)',
	},
	{
		args: [],
		params: [],
		body: 'console.log("Hello World! No params, no args")',
	},
	{
		args: [5],
		params: ['n'],
		body: `
			for (let i = 0; i < n; i++) {
				let line = '';
				for (let j = 0; j < n; j++) {
					line += '* ';
				}
				console.log(line);
			}
		`,
	},
];

operations.forEach((operation) => {
	const fn = new Function(...operation.params, operation.body);
	fn(...operation.args);
});
