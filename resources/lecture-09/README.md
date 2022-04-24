# Lecture 9 - Functional Programming in JavaScript

### Today's Agenda

- Pure Function + Side Effects + Immutability
- Higher Order Function
- Function Scope + Closure + Hoisting
- Callback Function
- IIFE (Immediate Invoke Function Expression)

---

#### Function statement vs Function expression

```js
// function statement
function func() {}

// Function expression
const myFn = function () {};

// Fat Arrow function
const myFatArrowFn = () => {};
```

---

#### Pure Function and Side Effects:

If a function is not able to change any value of a variable, the function is called pure function. If input is same, output is same for forever. For example:

```js
// Pure Function
function sum(a, b) {
	return a + b;
}

sum(10, 20); // 30
```

Now let's talk about the side effect. If a function can update the value of a variable, it's called side effect. Examples are given below:

```js
// Pure Function
let limit = 100;
function changeLimit(limit) {
	limit = 500;
	return limit;
}
```

This will not change the value of limit. That is why This is a pure function.

```js
// Side effect
let limit = 100;
function changeLimit() {
	limit = 500;
}

console.log(changeLimit(limit)); // undefined
console.log(limit); // 500
```

This will change the value of limit. So, it is the example of side effect. There are more examples are given below:

```jsx
// Pure Function
const arr = [1, 2, 3];
function add(arr, data) {
	arr = [...arr, data];
	return arr;
}
```

```js
// Side Effect
const arr = [1, 2, 3];
function add(data) {
	arr.push(data);
}
```

```js
// Impure Function
function log(msg) {
	console.log(msg);
}
```

This function looks like a pure function, but it is an impure function. Because the console logs are side effects because they're logging out to the console. So if a function consists console logs there is a possibility that the function has some side effects.

---

#### Higher Order Function

There are two condition for higher order function.

- Function can be passed as an argument.
- Function can be returned from another function.

**Example**

- Function can be passed as an argument.

  ```js
  function randomSum(max) {
  	const random1 = Math.floor(Math.random() * max);
  	const random2 = Math.floor(Math.random() * max);
  	return random1 + random2; // placeholder
  }

  function randomSub(max) {
  	const random1 = Math.floor(Math.random() * max);
  	const random2 = Math.floor(Math.random() * max);
  	return random1 - random2; // placeholder
  }

  function randomSqrSum(max) {
  	const random1 = Math.floor(Math.random() * max);
  	const random2 = Math.floor(Math.random() * max);
  	return random1 * random1 + random2 * random2; // placeholder
  }
  ```

  There are many repetitive codes in the example. To follow the DRY (Don't Repeat Yourself) we can write the functions like this:

  ```js
  function generateTwoRandNumber(max, cb) {
  	const random1 = Math.floor(Math.random() * max);
  	const random2 = Math.floor(Math.random() * max);
  	const result = cb(random1, random2);
  	return result;
  }
  const cb = function (rand1, rand2) {
  	console.log(rand1, rand2);
  };
  generateTwoRandNumber(100, cb);

  console.log(generateTwoRandNumber(1000, (rand1, rand2) => rand1 + rand2));
  console.log(generateTwoRandNumber(10, (rand1, rand2) => rand1 * rand2));
  console.log(
  	generateTwoRandNumber(10, (rand1, rand2) => rand1 * rand1 + rand2 * rand2)
  );
  ```

  Here generateTwoRandNumber() is a higher order function. Because we pass a function as an argument.

- Function can be returned from another function.
  ```js
  function power(p) {
  	return function (n) {
  		let result = 1;
  		for (let i = 1; i <= p; i++) {
  			result *= n;
  		}
  		return result;
  	};
  }
  ```

---

#### Hidden Concepts

There are some hidden concepts:

- Scope
  - Global
    ```js
    const a = 10;
    function mostOuter() {
    	function outer() {
    		console.log(a);
    	}
    }
    ```
  - Local
    ```js
    function mostOuter() {
    	function outer() {
    		const a = 10;
    		console.log(a);
    	}
    }
    ```
  - Block
    ```js
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
    ```
- Closure: Closure is just a memory, which we can use after a function died.
- Execution context

  ```js
  function A(a) {
  	console.log('I am A');
  }

  function B() {
  	A();
  }

  function C() {
  	B();
  	B();
  }
  function D() {
  	C();
  	A();
  }

  D();
  ```

- Hoisting (Only applicable for var, not applicable for let and const)

  ```js
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
  ```

---

#### Running a code

There are three steps to run a code

1. Lexing/Parsing/tokenize
2. Compile
3. Run

---

#### Defining a Variable

There are two ways to define a variable.

1. Globally
2. Locally

---

### IIFE (Immediately Invoke Function Expression)

```js
(function (name) {
	console.log(name);
})('Nayem');

(() => {
	console.log('Test');
})();
```

- Use case:
  We use IIFE to protect our variable from being accessed by anyone. By IIFE we can store our confidential variable.

---

#### Important Links

- [Functional Programming Languages: Concepts & Advantages](https://hackr.io/blog/functional-programming)
- [9 Functional Programming Concepts Everyone Should Know](https://hackernoon.com/9-functional-programming-concepts-everyone-should-know-uy503u21?source=rss)
- [গল্পে গল্পে ক্লোজার](https://youtu.be/zSlSfqQTeFE)
- [গল্পে গল্পে জাভাস্ক্রিপ্ট স্কোপ](https://youtu.be/nRJPxro5GtY)
- [Source Code](../../src/lecture-09/app.js)

---

#### Task:

- Research about Higher Order Function.
- Create lodash library by immutable way.
