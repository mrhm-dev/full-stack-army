# Lecture 8 - Understand JavaScript Functions | Function as a value

> **JavaScript is an Impure Functional Programming Language. Because we can use oop, procedural way in JavaScript.**

- **Function Template**
  ```jsx
  function name_of_the_function(/** Input something  */) {
  	// Function body
  	// any valid js code
  	// return a result
  }
  ```
- **Function Pseudocode**

  ```jsx
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

  /**
   * Function: Awake
   * Param: name
   * Definition: How to awake
   */

  /**
   * Function: Eat
   * Param: name
   * Param: Time
   * Definition: How to eat
   */

  /**
   * Function: Walk
   * Param: name
   * Param: Destination
   * Definition: How to walk
   */

  /**
   * Function: Study
   * Param: name
   * Definition: How to study
   */

  /**
   * Function: Work
   * Param: name
   * Definition: How to work
   */

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

  // Students_Lifecycle -> 'Faruk'
  // Students_Lifecycle -> 'Elias'
  // Students_Lifecycle -> 'Faisal'

  // Job_Holder_Lifecycle -> 'Musa'
  // Job_Holder_Lifecycle -> 'Akib'
  // Job_Holder_Lifecycle -> 'Bipon'
  ```

- **Function code of above psuedocode**

  ```jsx
  function sleep(name) {
  	console.log(`${name} is sleeping`);
  }

  function awake(name) {
  	console.log(`${name} is awake`);
  }

  function eat(name, time) {
  	console.log(`${name} is taking ${time}`);
  }

  function walk(name, destination) {
  	console.log(`${name} is walking to ${destination}`);
  }

  function study(name) {
  	console.log(`${name} is studying`);
  }

  function work(name) {
  	console.log(`${name} is working`);
  }

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

  function studentsLifecycle(name) {
  	awake(name);
  	eat(name, 'breakfast');
  	study(name);
  	eat(name, 'lunch');
  	study(name);
  	eat(name, 'dinner');
  	sleep(name);
  }
  ```

- **Steps of a function**

  - **There are two steps of a function**
    - **Define a function**
      ```jsx
      function testFunction() {
      	const a = 10;
      	const b = 20;
      	const result = a + b + Math.max(a, b);
      	console.log(result);
      }
      ```
    - **Invoke a function**
      ```jsx
      testFunction();
      ```

There are some problems in above defined function. We can't use the function for any value. For this reason we need to use the parameters.

```jsx
function testFunction(a = 10, b = 20) {
	const result = a + b + Math.max(a, b);
	console.log(result);
}
```

a and b are parameters. 10 and 20 are default values. If we don't pass any arguments in the function, it will take the default values as arguments. Now, what is arguments? Please see the below to learn that:

```jsx
testFunction(100, 200); // Here 100 and 200 are arguments
```

- **Function Composition**

  ```jsx
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
  ```

Function is a first class citizen. Because we can treat function as a value.

- **Benefits of a function treat as a value:**

  - **we can store functions in a variable**

    ```jsx
    function testFunction() {
    	console.log('I am a test function');
    }

    const fn = testFunction;
    console.log(fn.toString());
    fn();
    ```

  - **we can store function inside an object / array**
    ```jsx
    const arr = [fn, testFunction];
    const obj = {
    	fn: testFunction,
    };
    ```
  - **we can pass function as an argument**
    ```jsx
    function fnArgument(fn) {
    	return fn();
    }
    fnArgument(testFunction);
    ```
  - **we can also return a function from another function**
    ```jsx
    function returnFn() {
    	return testFunction;
    }
    ```

- **Function Construction**

  ```jsx
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
  ```

On the above code, we can pass arguments as many as we want. But last argument must be the function body. If we don't pass the body as last argument it will throw an error.

**More examples of function construction:**

```jsx
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
```

```jsx
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
```

```jsx
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
```

##### Important Links

- [Meta Programming](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Meta_programming)
- [Source Code of this class](../../src/lecture-08/app.js)
