// const arr = [1, 2, 3, 4];
// let index = 0;
// function next() {
// 	return arr[index++];
// }

// console.log(next());
// console.log(next());

// const channel = 'Stack';
// const channelIterator = channel[Symbol.iterator]();
// console.log(channelIterator.next());
// console.log(channelIterator.next());
// console.log(channelIterator.next());
// console.log(channelIterator.next());
// console.log(channelIterator.next());
// console.log(channelIterator.next());
// console.log(channelIterator.next());

// for (let v of channel) {
// 	console.log(v);
// }

// while (true) {
// 	const data = channelIterator.next();
// 	if (data.done) {
// 		break;
// 	}
// 	console.log(data.value);
// }

// const range = {
// 	start: 0,
// 	stop: 100,
// 	step: 5,
// };
// range[Symbol.iterator] = function () {
// 	let current = this.start;
// 	const stop = this.stop;
// 	const step = this.step;
// 	return {
// 		next() {
// 			const o = {
// 				value: current,
// 				done: current > stop,
// 			};
// 			current += step;
// 			return o;
// 		},
// 	};
// };

// for (let v of range) {
// 	console.log(v);
// }

// const rangeIterator = range[Symbol.iterator]();
// console.log(rangeIterator.next());
// console.log(rangeIterator.next());
// console.log(rangeIterator.next());

// function* myGenerator() {
// 	yield 1;
// 	yield 2;
// 	yield 3;
// }

// const iterator = myGenerator();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// Generator always returns iterator

// function* range(start = 0, stop = 100, step = 5) {
// 	for (let i = start; i <= stop; i += step) {
// 		yield i;
// 	}
// }

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

// for (let v of range()) {
// 	console.log(v);
// }

// function* generateId() {
// 	let index = 1;
// 	while (true) {
// 		yield index++;
// 	}
// }

// const generateUserId = generateId();
// const generateProductId = generateId();
// console.log('User', generateUserId.next().value);
// console.log('User', generateUserId.next().value);
// console.log('User', generateUserId.next().value);

// console.log('Product', generateProductId.next().value);
// console.log('Product', generateProductId.next().value);
// console.log('Product', generateProductId.next().value);
// console.log('Product', generateProductId.next().value);
// console.log('Product', generateProductId.next().value);
// console.log('Product', generateProductId.next().value);
const axios = require('axios').default;

async function getUsers() {
	const url = 'https://jsonplaceholder.typicode.com/users';
	const { data: users } = await axios.get(url);
	return users.map((user) =>
		axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)
	);
}

// async function* getPostsByUser(users) {
// 	const url = 'https://jsonplaceholder.typicode.com/posts';
// 	for (let i = 0; i < users.length; i++) {
// 		const { data: posts } = await axios.get(`${url}?userId=${users[i].id}`);
// 		yield posts;
// 	}
// }

// getUsers()
// 	.then(async (users) => {
// 		// const userIterator = await getPostsByUser(users);
// 		// await userIterator.next();
// 		// await userIterator.next();
// 		// console.log((await userIterator.next()).value);

// 		// for await (let v of getPostsByUser(users)) {
// 		// 	console.log(v.map((d) => d.title));
// 		// }

// 		console.log(users);
// 	})
// 	.catch((e) => {
// 		console.log(e);
// 	});

(async () => {
	const users = await getUsers();
	for await (let v of users) {
		console.log(v.data.map((post) => post.title));
	}
})();
