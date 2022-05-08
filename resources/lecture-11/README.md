# Lecture 11 - Async Iterator & Generator in JavaScript | Project Requirements

#### Agenda

- Iterator and Generator
- For of loop
- Async Iterator and Generator
- Github Collaboration
- Project Requirements

---

##### Iterator

We use iterator because we cannot pause a loop. When a loop starts it will not stop until the execution of last element. Let's look the below example:

```js
const arr = [1, 2, 3, 4];
let index = 0;
function next() {
	return arr[index++];
}

console.log(next()); // 1
console.log(next()); // 2
console.log(next()); // 3
console.log(next()); // 4
console.log(next()); // undefined
```

In iterator if there is no value it returns simply `undefined`.

```js
const channel = 'Stack';
const channelIterator = channel[Symbol.iterator]();
console.log(channelIterator.next()); // { value: 'S', done: false }
console.log(channelIterator.next()); // { value: 't', done: false }
console.log(channelIterator.next()); // { value: 'a', done: false }
console.log(channelIterator.next()); // { value: 'c', done: false }
console.log(channelIterator.next()); // { value: 'k', done: false }
console.log(channelIterator.next()); // { value: undefined, done: true }
console.log(channelIterator.next()); // { value: undefined, done: true }
```

```js
const range = {
	start: 0,
	stop: 100,
	step: 5,
};
range[Symbol.iterator] = function () {
	let current = this.start;
	const stop = this.stop;
	const step = this.step;
	return {
		next() {
			const o = {
				value: current,
				done: current > stop,
			};
			current += step;
			return o;
		},
	};
};

for (let v of range) {
	console.log(v);
}
```

---

##### Generator

Generator is used to create an iterator more easily. Generator always returns an iterator. To create a `generator` function we need to add an asterisk(\*) after `function` keyword like this `function*`. For example:

```js
function* myGenerator() {
	yield 1;
	yield 2;
	yield 3;
}

const iterator = myGenerator();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
```

```js
function* range(start = 0, stop = 100, step = 5) {
	for (let i = start; i <= stop; i += step) {
		yield i;
	}
}

// const rangeIt = range(1, 10, 3);
// console.log(rangeIt.next());
// console.log(rangeIt.next());
// console.log(rangeIt.next());
// console.log(rangeIt.next());
// console.log(rangeIt.next());
// console.log(rangeIt.next());
// console.log(rangeIt.next());
// console.log(rangeIt.next());
// console.log(rangeIt.next());

for (let v of range()) {
	console.log(v);
}
```

```js
function* generateId() {
	let index = 1;
	while (true) {
		yield index++;
	}
}

const generateUserId = generateId();
const generateProductId = generateId();
console.log('User', generateUserId.next().value);
console.log('User', generateUserId.next().value);
console.log('User', generateUserId.next().value);

console.log('Product', generateProductId.next().value);
console.log('Product', generateProductId.next().value);
console.log('Product', generateProductId.next().value);
console.log('Product', generateProductId.next().value);
console.log('Product', generateProductId.next().value);
console.log('Product', generateProductId.next().value);
```

---

##### for of loop

```js
const channel = 'Stack';
const channelIterator = channel[Symbol.iterator]();
for (let v of channel) {
	console.log(v); // S t a c k
}
```

---

##### Async Iterator and Generator

```js
const axios = require('axios').default;

async function getUsers() {
	const url = 'https://jsonplaceholder.typicode.com/users';
	const { data: users } = await axios.get(url);
	return users;
}

async function* getPostsByUser(users) {
	const url = 'https://jsonplaceholder.typicode.com/posts';
	for (let i = 0; i < users.length; i++) {
		const { data: posts } = await axios.get(`${url}?userId=${users[i].id}`);
		yield posts;
	}
}

getUsers()
	.then(async (users) => {
		// const userIterator = await getPostsByUser(users);
		// await userIterator.next();
		// await userIterator.next();
		// console.log((await userIterator.next()).value);

		for await (let v of getPostsByUser(users)) {
			console.log(v.map((d) => d.title));
		}
	})
	.catch((e) => {
		console.log(e);
	});
```

We can write the above program as below:

```js
const axios = require('axios').default;

async function getUsers() {
	const url = 'https://jsonplaceholder.typicode.com/users';
	const { data: users } = await axios.get(url);
	return users.map((user) =>
		axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)
	);
}

(async () => {
	const users = await getUsers();
	for await (let v of users) {
		console.log(v.data.map((post) => post.title));
	}
})();
```

---

##### Project Requirements

We need an attendance system. Students can create their own profile. Admin can see list of students and their attendances. Admin can enable and disable attend button. Also this button can be disabled based on a timer. Each time admin enable attend button, students can participate for only once. Each day, student will have a time sheet of attendance.

Student can see their own time logs and attend button when enable.

---

##### References

- [Iterators and generators - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators)
- [JavaScript iterators and generators: A complete guide - LogRocket Blog](https://blog.logrocket.com/javascript-iterators-and-generators-a-complete-guide/)
- [for await...of - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of)
- [JavaScript async iterators](https://www.nodejsdesignpatterns.com/blog/javascript-async-iterators/)

---

##### Source Code

- [Source Code](../../src/lecture-11/app.js)
