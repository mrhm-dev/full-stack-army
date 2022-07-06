## Async Iterator & Generator in JavaScript | Project Requirements

## Introduction

আমরা গত ক্লাসে Asynchronous Programming নিয়ে আলোচনা করেছিলাম। আজকের ক্লাসে আমরা আমাদের প্রোগ্রামিং ফান্ডামেটালস নিয়ে ক্লাস শেষ করবো। এরপর থেকে প্রজেক্ট শুরু করবো। আজকের ক্লাসের এজেন্ডাগুলো দেখা যাক একটু।

- Iterator and Generator
- For of loop
- Async Iterator and Generator
- Project Requirements

## Iterator

ইটারেটর এমন একটা অবজেক্ট যা বর্তমানে কি হচ্ছে সেটা জানে, ভবিষ্যতে কিছু একটা হবে সেটা জানে, কিন্তু কি হবে তা জানে না। এটা ছাড়াও আমরা আমাদের প্রোগ্রামিং ক্যারিয়ার পার করে দিতে পারি। তাহলে আমাদের ইটারেটরের প্রয়োজন কি? এটা এমন একটা অবজেক্ট যেটা আমরা লুপ চালিয়ে কাজ করতে পারি। একটা ফর লুপ যে কাজ করে ইটারেটর দিয়েও আমরা একই কাজ করতে পারি। একটা লিস্ট যেখানে আছে সেখানেই আমাদের ইটারেট করার প্রয়োজন হয়। লুপকে আমরা বলি ইটারেট করা। ইটারেট, ইটারেবল, ইটারেটর তিনটা একই জিনিস না। ইটারেট হলো কোনো একটা লিস্টের শুরু থেকে শেষ পর্যন্ত লুপ চালিয়ে বা কোনো উপায়ে পারফর্ম করা। এর জন্য ফর লুপ আছে, জাভাস্ক্রিপ্টে forEach, map এসব আছে। এগুলো কিন্তু আবার ইটারেবলের মধ্যে পড়ে না। ইটারেবল মানে হচ্ছে যাকে ইটারেট করা সম্ভব। আর ইটারেটর হলো একটা অবজেক্ট, যা মূলত একটা ডিজাইন প্যাটার্ন। এটাকে ইটারেট করা যায়। এখন প্রশ্ন হচ্ছে যদি লুপ চালিয়ে আমরা ইটারেট করতে পারি তাহলে ইটারেটরের দরকার কি? আমরা একটা ফর লুপ দেখি।

```js
const arr = [1, 2, 3, 4];

for (let i = 0; i < arr.length; i++) {
	console.log(arr[i]);
}
```

আমরা যখন একবার লুপ চালিয়ে দিবো তখন এটা কোথাও pause করে রাখার উপায় নেই। চলা শুরু করলে পুরোটা কমপ্লিট না করে সে থামবে না। আর যদি break ইউজ করে থামিয়ে দেয়া হয় তাহলে পুরোটাই থেমে যাবে। pause করে রাখা যাবে না। ধরেন আপনি একজন টিচার। আপনি রোল কল করছেন। করতে করতে হঠাৎ একজনের সাথে গল্পে মজে গেলেন। এরপর কিছুক্ষণ পর খেয়াল হলো আপনার তো রোলকল করা বাকি। তখন যেখানে শেষ করেছিলেন সেখান থেকেই আবার শুরু করলেন। মাঝখানের যে সময়টা সেটা কিন্তু লুপ আপনাকে দিবে না। কিন্তু এই pause করার ব্যাপারটা আমাদের কিছু কিছু ক্ষেত্রে দরকার হয়। যেমন আমরা ইন্টারনেট থেকে কিছু নিয়ে আসার জন্য এই সুবিধাটা দরকার। ধরেন আপনি কিছু ডাটার জন্য রিকোয়েস্ট দিলেন। সব একসাথে আসলো না। যেটা আসলো সেটা প্রিন্ট করলেন। পরবর্তীতে আরেকটা ডাটা ক্রিয়েট হওয়ার পর আসলো, তা প্রিন্ট করলেন। এটা কখনও লুপ চালিয়ে সম্ভব না। লুপ তখনই দরকার যখন আমি কোনো ইন্টেরাপশন চাই না, আমার ডাটা ফিক্সড আছে। এই সুবিধা আমরা ইটারেটর থেকে পাবো। ধরেন আমি ইটারেটর কি চিনিই না। আমরা চাইছি অ্যারের সমস্ত ডাটা আমরা প্রিন্ট করবো। যখন আমার প্রথম ডাটা লাগবে আমি প্রথম ডাটা নিবো, যখন দ্বিতীয়টা লাগবে সেটা নিবে। এভাবে যেতে যেতে যখন আর ডাটা পাবে না তখন undefined বা false রিটার্ন করবে। ইটারেটর ব্যবহার না করে সেটা আমরা কিভাবে করতে পারি একটু দেখি।

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

যতক্ষণ ডাটা পেয়েছে ততক্ষণ সে দিয়েছে। যেই ডাটা পায়নি, সে undefined রিটার্ন করে দিয়েছে। এখন সব যে আজকে নিয়েই কাজ করতে হবে এমন কথা নেই। আমি চাই প্রথম বছর প্রথম ডাটা নিয়ে কাজ করবে, দ্বিতীয় বছর দ্বিতীয় ডাটা নিয়ে কাজ করবে। এভাবেও আমি সেট করে দিতে পারি। এখন আর কোনো লুপ নেই। আমি কন্ট্রোল করতে পারছি। আমি যদি প্রথমবার next কল করে এর মাঝখানে আরো হাজারটা কাজ করে পরের আবার কল করি দেখা যাবে সেকেন্ড কলে আউটপুট আসছে 2. মাঝখানে কি ঘটে গেলো তা বিবেচ্য বিষয় না। যতবার next কল হবে ততবার পরের ডাটা দিবে। এখানে আবার একটা সমস্যা আছে। আমাদের ট্র্যাক রাখতে হচ্ছে বিষয়টা। index আমরা গ্লোবালি নিয়েছি। যে কেউ চাইলে তা এক্সেস নিয়ে যা খুশি করে দিতে পারে। এখানেই আমাদের ইটারেটর দরকার। আমরা একটা স্ট্রিং নিই।

```js
const channel = 'Stack';
```

স্ট্রিং মূলত একটা ডাটা টাইপ হলেও এটা আসলে একটা ক্যারেক্টারের অ্যারে। এবং স্ট্রিং একটা ইটারেবল অবজেক্ট। জাভাস্ক্রিপ্টে যেকোনো কিছুকে আমরা ইটারেবল বানাতে পারি বা ইটারেবল বলতে পারি যদি তার মধ্যে একটা স্পেশাল প্রোপার্টি থাকে। সেটা কি আর কিভাবে ইটারেবল বানাবো। সেটা হলো `channel[Symbol.iterator]`. এই Symbol.iterator আগে থেকেই স্ট্রিং এর মধ্যে দেয়া আছে ফাংশন হিসেবে। আমরা যদি একটু দেখতে চাই লগ করে তাহলে দেখবো, এটা একটা ফাংশন রিটার্ন করছে।

```js
const channel = 'Stack';
console.log(channel[Symbol.iterator]); // [Function: [Symbol.iterator]]
console.log(channel[Symbol.iterator].toString()); // function [Symbol.iterator]() { [native code] }
```

যেহেতু প্রমাণ পেলাম এটা একটা ফাংশন এখন ফাংশনটাকে একটু কল করে দেখে নিই কি আউটপুট দিচ্ছে।

```js
const channel = 'Stack';
const channelIterator = channel[Symbol.iterator]();
console.log(channelIterator); // Object [String Iterator] {}
```

এটা একটা অবজেক্ট রিটার্ন করছে। এই অবজেক্টের মধ্যে তিনটা মেথড আছে। next, return, throw. আমাদের দরকার next। তাহলে এই next মেথড কল করে দেখি কি আসে।

```js
const channel = 'Stack';
const channelIterator = channel[Symbol.iterator]();
console.log(channelIterator.next()); // { value: 'S', done: false }
```

প্রথমবার next কল করলে একটা অবজেক্ট এসেছে। এখানে আমাদের value এসেছে 'Stack' এর 'S' এবং আরেকটা প্রোপার্টি এসেছে সেটা হলো `done: false`. এর মানে হলো আমার ইটারেশন এখনও শেষ হয়নি। এর মধ্যে এখনও ডাটা আছে। এবার আরো কয়েকবার next কল করে দেখা যাক।

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

দেখা যাচ্ছে একে একে পরবর্তী সব ডাটা পেয়ে গেছি। যখন আর ডাটা পায়নি তখন ভ্যালু undefined রিটার্ন করেছে এবং done true হয়ে গেছে। এর মানে ইটারেশনের কাজ শেষ। এর মধ্যে আর কোনো ডাটা নাই।

এখন এটা করে আমাদের লাভ কি হচ্ছে? আমাদের লাভ হচ্ছে আমরা এটার কারণে for of লুপ ব্যবহার করতে পারছি। for of লুপ তখনই ব্যবহার করা যাবে যখন সেটা ইটারেটর হবে। নাহয় ব্যবহার করা যাবে না।

```js
for (const v of channel) {
	console.log(v);
}
/* 
S
t
a
c
k
*/
```

এখন যদি আমাদের for of লুপ না থাকতো তাহলে কিভাবে লুপ চালাতাম। সেক্ষেত্রে আমরা একটা while লুপ চালাতাম।

```js
const channel = 'Stack';
const channelIterator = channel[Symbol.iterator]();

while (true) {
	const data = channelIterator.next();
	if (data.done) {
		break;
	}
	console.log(data.value);
}
```

এটাও ঠিক একই আউটপুট দিবে। কিন্তু এত কাজ করতে পারছি জাস্ট তিন লাইনে for of লুপ ব্যবহার করে।

এবার আমরা আমাদের ইটারেটর বানিয়ে ফেলি।

```js
const range = {
	start: 0,
	stop: 100,
	step: 5,
};
```

প্রথমে আমরা একটা অবজেক্ট নিলাম যেটা ০ থেকে শুরু হবে, ১০০ তে গিয়ে শেষ হবে এবং ৫ করে বৃদ্ধি পাবে। এখন এটার উপর কি for of লুপ চালানো যাবে? দেখা যাক।

```js
for (let v of range) {
	console.log(v);
}
```

এটা আমাদের একটা এরর দিবে এরকম `TypeError: range is not iterable` বলে। এখন প্রশ্ন হলো range কে iterable বানাবো কেমনে? চলুন একটু প্রসেসটা দেখি ইটারেবল বানানোর।

```js
range[Symbol.iterator] = function () {
	return {
		next() {},
	};
};
```

প্রথমে আমাদের `range[Sybol.iterator]` নিতে হবে। এটার মধ্যে থাকবে একটা ফাংশন, যা রিটার্ন করবে একটা অবজেক্ট। আর সেই অবজেক্টের মধ্যে থাকবে next ফাংশন। এই next ফাংশন আমাদের রিটার্ন করবে দুইটা প্রোপার্টি। value এবং done.

```js
range[Symbol.iterator] = function () {
	return {
		next() {
      value: 0,
      done: false,
    },
	};
};
```

এবার যদি ফর অফ লুপ চালাই তাহলে একটা ইনফিনিটি লুপ চলতে থাকবে এবং সারা জীবন ০ দিবে। এখন অন্তত এটা বুঝা যাচ্ছে range অবজেক্ট ইটারেবল হয়েছে। এখন আমাদের next ফাংশন নিয়ে কাজ করতে হবে।

```js
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
```

এবার আমাদের ইটারেটর ফাংশন রেডি। এবার এটাকে আমরা কল করবো।

```js
const rangeIterator = range[Symbol.iterator]();
console.log(rangeIterator.next()); // { value: 0, done: false }
console.log(rangeIterator.next()); // { value: 5, done: false }
console.log(rangeIterator.next()); // { value: 10, done: false }
```

তার মানে আমাদের ইটারেটর ফাংশন কাজ করছে। এবার যদি আমরা ফর অফ লুপ চালাই তাহলে কি ঘটবে একটু দেখা যাক।

```js
for (let v of range) {
	console.log(v);
}
```

দেখা যাচ্ছে প্রতি ৫ ঘর পরপর ১০০ পর্যন্ত ভ্যালুগুলো আউটপুট দিয়েছে।

## Generator

Promise এর কাজ সহজে করার জন্য যেমন Async await এসেছে, ইটারেটরের কাজও সহজে করার জন্য এসেছে জেনারেটর। জেনারেটর ফাংশন লেখার জন্য জাস্ট funtion কীওয়ার্ডের পরে একটা (\*) চিহ্ন বসিয়ে দিলেই হয়ে যাবে।

```js
function* myGenerator() {}
```

আমরা যেমন জানি ফাংশন কিছু রিটার্ন করুক বা না করুক অন্ততপক্ষে undefined রিটার্ন করবে। সেরকম জেনারেটর ফাংশন কিছু রিটার্ন করুক বা না করুক অন্ততপক্ষে ইটারেটর রিটার্ন করবে। প্রমাণ নিচে দেয়া হলোঃ

![Genrator](./Screenshot_1.png)

আমরা পূর্বে যেভাবে ইটারেটর বানিয়েছিলাম সেখানে প্রথম [Symbol.iterator] লিখেছিলাম, এরপর ফাংশন নিয়েছিলাম, সেটা একটা অবজেক্ট রিটার্ন করেছিল, এর ভিতরে আবার নেক্সট ফাংশন বানাতে হয়েছিল। এত কাজ আমরা খুব সহজেই জেনারেটর ফাংশন বানিয়ে করতে পারি।

```js
function* myGenerator() {
	yield 1;
	yield 2;
	yield 3;
}

const iterator = myGenerator();
console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: undefined, done: false }
```

ইটারেটরের এত এত কাজ জাস্ট আমরা চার লাইনেই করে ফেললাম। yield বলতে বুঝাচ্ছে একটা ডাটা দাও একটা সময়ে। yield 1 মানে আমাকে 1 দাও, yield 2 মানে আমাকে 2 দাও। যতবার next কল করবো, তখন একটা একটা yield আমাদের আউটপুট দিবে। যখন yield শেষ হয়ে যাবে তখন undefined রিটার্ন করবে।

এখন যদি প্রতিটা ডাটার জন্য আমাকে এসে এসে yield লিখতে হয় তাহলে তো মুশকিল। আমরা আগের প্রব্লেমটা সলভ করি। তবে এবার আর ইটারেটর বানাবো। জেনারেটর ব্যবহার করে খুব সহজেই আমরা range ফাংশন বানাবো।

```js
function* range(start = 0, stop = 100, step = 5) {
	for (let i = start; i <= stop; i += step) {
		yield i;
	}
}

const rangeIt = range(1, 10, 3);
console.log(rangeIt.next()); // { value: 1, done: false }
console.log(rangeIt.next()); // { value: 4, done: false }
console.log(rangeIt.next()); // { value: 7, done: false }
console.log(rangeIt.next()); // { value: 10, done: false }
console.log(rangeIt.next()); // { value: undefined, done: true }
console.log(rangeIt.next()); // { value: undefined, done: true }
console.log(rangeIt.next()); // { value: undefined, done: true }
console.log(rangeIt.next()); // { value: undefined, done: true }
console.log(rangeIt.next()); // { value: undefined, done: true }
```

এটাই জেনারেটরের পাওয়ার। আমাকে আর ইটারেটর বানানোর জন্য অতকিছু লিখতে হচ্ছে না। আমি জেনারেটর ফাংশন বানিয়ে সহজেই ইটারেটর বানাতে পারছি। আমরা চাইলে ফর অফ লুপও চালাতে পারি।

```js
for (let v of range()) {
	console.log(v);
}
```

০ থেকে ১০০ পর্যন্ত ৫ ঘর ব্যবধানে প্রিন্ট হয়ে যাবে। জেনারেটর কত সহজ করে দিয়েছে ইটারেটরের কাজকে এটা আশা করি বুঝতে পেরেছেন।

এখন এর রিয়েল লাইফ এক্সাম্পল কি? যেখানে আমাদের অ্যাসিনক্রোনাস টাস্কের কাজ আছে, সেখানে আমরা জেনারেটর ইটারেটরের কাজ করতে পারি। আমরা একটা আইডি মেকার বানাতে পারি।

```js
function* generateId() {
	let index = 1;
	while (true) {
		yield index++;
	}
}

const generateUserId = generateId();
const generateProductId = generateId();
console.log('User', generateUserId.next().value); // User 1
console.log('User', generateUserId.next().value); // User 2
console.log('User', generateUserId.next().value); // User 3

console.log('Product', generateProductId.next().value); // Product 1
console.log('Product', generateProductId.next().value); // Product 2
console.log('Product', generateProductId.next().value); // Product 3
console.log('Product', generateProductId.next().value); // Product 4
console.log('Product', generateProductId.next().value); // Product 5
console.log('Product', generateProductId.next().value); // Product 6
```

## Async iterator and Async generator

Async iterator and Async generator মূলত অ্যাসিনক্রোনাস টাস্কের জন্য ব্যবহৃত হয়। চলুন আমরা একটা উদাহরণ দেখি। আমরা চাইছি আমাদের API থেকে আমরা আমাদের ইউজারকে বের করে আনতে।

```js
const axios = require('axios').default;

async function getUsers() {
	const url = 'https://jsonplaceholder.typicode.com/users';
	const { data: users } = await axios.get(url);
	return users;
}

getUsers()
	.then(async (users) => {
		console.log(users);
	})
	.catch((e) => {
		console.log(e);
	});
```

আমরা ইউজার পাচ্ছি। কিন্তু এই ডাটা দিয়ে আমাদের কাজ নেই। আমাদের দরকার এই ইউজারের কতগুলো পোস্ট আছে তা নির্দিষ্ট সময় পরপর নিয়ে আসা। সেক্ষেত্রে আমরা একটা জেনারেটর ফাংশন বানাতে পারি।

```js
async function* getPostsByUser(users) {
	const url = 'https://jsonplaceholder.typicode.com/posts';
	for (let i = 0; i < users.length; i++) {
		const { data: posts } = await axios.get(`${url}?userId=${users[i].id}`);
		yield posts;
	}
}
```

এখানে আমরা আগে যে ইউজার ডাটা পেয়েছিলাম সেটাকে প্যারামিটার হিসেবে নিয়ে আসলাম। এরপর ফর লুপ চালিয়ে প্রতিটা পোস্ট আমরা yield করে রাখবো। যখন প্রয়োজন হবে তখন আমরা একটা একটা করে নিয়ে আসবো। যেহেতু এটা async টাস্ক তাই এখানে async await ইউজ করা হয়েছে। এটাকে বলে async generator.

এবার আমরা এই ফাংশন থেকে একটা ইটারেটর বানিয়ে ফেলতে পারি।

```js
getUsers()
	.then(async (users) => {
		const userIterator = await getPostsByUser(users);
		await userIterator.next();
		await userIterator.next();
		console.log((await userIterator.next()).value);
	})
	.catch((e) => {
		console.log(e);
	});
```

যেহেতু এখানে প্রথমে দুইবার ইটারেটরের নেক্সট ফাংশন কল হয়ে গেছে তাই প্রিন্ট হবে ৩ নাম্বার ইউজার আইডির পোস্টগুলো। এবার আশা করি আপনারা বুঝতে পারছে ইটারেটরের কাজটা ঠিক কোথায়। আমি লুপ চালালে কিন্তু শুধু ৩ নাম্বার আইডির জন্য ডাটা আনতে পারতাম না। জেনারেটর আরো সহজ করে দিয়েছে ইটারেটরের কাজ।

এবার আমি যদি চাই একসাথে সব ইউজারের ডাটা দেখতে তাহলে ফর অফ লুপ চালিয়ে দিলেই কাজ শেষ।

```js
getUsers()
	.then(async (users) => {
		for await (let v of getPostsByUser(users)) {
			console.log(v);
		}
	})
	.catch((e) => {
		console.log(e);
	});
```

সব ইউজারের ডাটা আমরা পেয়ে যাবো।

আমরা চাইলে উপরের কাজকে একটু অন্যভাবে করতে পারি।

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
		console.log(v.data);
	}
})();
```

আমরা এখানে getUsers ফাংশন থেকে কোনো ইউজার রিটার্ন করবো না। আমরা রিটার্ন করবো প্রতিটা ইউজারের জন্য একটা প্রমিজ বা API কল করে রাখা যেন আমরা যখন চাই তখন পোস্ট বের করে আনতে পারি। তাহলে আর আমাদের জেনারেটর ফাংশন বা ইটারেটরের কোনো প্রয়োজন হচ্ছে না। তবে এখানে আমরা কোনো কন্ট্রোল পাবো না। সব একসাথে চলে আসবে ডাটা।

## Project Requirements

আমাদের প্রজেক্ট শুরু হতে যাচ্ছে। প্রথম প্রজেক্ট হিসেবে আমরা একটা অ্যাটেন্ডেন্স সিস্টেম বানাবো। সেই সিস্টেমের জন্য আমাদের ক্লায়েন্ট কিছু রিকোয়ারমেন্ট দিয়েছেন। সেটা নিচে দেয়া হলো।

We need an attendance system. Students can create their own profile. Admin can see list of students and their attendances. Admin can enable and disable attend button. Also this button can be disabled based on a timer. Each time admin enable attend button, students can participate for only once. Each day, student will have a time sheet of attendance.

Student can see their own time logs and attend button when enable.

এর পরের ক্লাস থেকে আমরা একজন ডেভেলপার কিভাবে কোনো প্রজেক্ট শুরু করবো সেগুলো ধাপে ধাপে দেখবো।



## AUTHOR

[Aditya Chakraborty](https://github.com/adityackr)
