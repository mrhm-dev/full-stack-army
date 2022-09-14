# Lecture 41 - Understand The Usage of useEffect Hook

## Introduction

আজ আমরা রিয়্যাক্টের একটি গুরুত্বপূর্ণ হুক সম্পর্কে আলোচনা করবো যার নাম হচ্ছে `useEffect`। রিয়্যাক্টের দুইটি হুক খুবই গুরুত্বপূর্ণ - `useState` এবং `useEffect`। `useState` নিয়ে আমরা ইতোমধ্যে অনেক কাজ করেছি। এবার আমরা `useEffect` হুক সম্পর্কে জানবো।

## useEffect

রিয়্যাক্টের অফিসিয়াল [সাইটে](https://reactjs.org/docs/hooks-effect.html) হুকের সংজ্ঞা দেয়া আছে `Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.`। আগে আমরা যে ক্লাস বেইজড কম্পোনেন্ট তৈরি করতাম সেখানে খুব বেশি ফিচার্স যুক্ত করা যেতো না। অ্যাডভান্স লেভেলের কাজের জন্য যা যা দরকার ছিল তা যুক্ত করতে গেলে অনেক ঝামেলা হতো, কিছু কিছু ক্ষেত্রে করা যেতোও না। আগে আমাদের কম্পোনেন্ট ম্যানেজ করার জন্য কি কি ব্যবহার করতে হতো তা আপনারা এই [লিংক](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/) এ গেলে বুঝতে পারবেন। এখানে অনেকগুলো কাজ করতে হতো। এবং এগুলো মেইনটেইন করা ছিল অনেক কঠিন। কিন্তু এখন এই সব জিনিস আমরা একটা মাত্র কনসেপ্ট দিয়ে কন্ট্রোল করছি। সেটা হলো `useEffect` হুক। এই হুক আমরা ইমপোর্ট করার মাধ্যমে ব্যবহার করতে পারি আমাদের অ্যাপ্লিকেশনে। কিন্তু প্রাথমিক অবস্থায় এই হুক কঠিন বলে মনে হতে পারে। কিন্তু আমরা যখন এই হুক কেন, কোথায়, কিভাবে ব্যবহার করবো এই তিনটি প্রশ্নের উত্তর পেয়ে যাবো, তখন এটা আমাদের কাছে অনেক সহজ হয়ে যাবে। শিক্ষানবীশ হিসেবে হয়তো এটা আমাদেরকে অনেক প্যাড়া দিবে, কিন্তু ডেভেলপার হিসেবে এটা আমাদের জীবনকে অনেক সহজ করে দিয়েছে। `useEffect` মূলত একটি ফাংশন যার আর্গুমেন্ট হিসেবে আমরা একটা ফাংশন পাস করতে পারি।

## useEffect এর কাজ

এটি পূর্বের ভার্সনের তিনটি বড় বড় কাজ একাই করে থাকে। সেগুলো হলো -

- `componentDidMount` এর কাজ
- `componentDidUpdate` এর কাজ
- `componentWillUnmount` এর কাজ

এছাড়াও `shouldComponentUpdate` এর কাজও করে থাকে `useEffect` হুক।

আমরা এবার একটা উদাহরণ দেখবো `useEffect` এর।

```jsx
function App() {
	console.log(document.getElementById('test').innerHTML);

	return <h1 id="test">App</h1>;
}

export default App;
```

আমরা চাইছি `html` element এর টেক্সটটা দেখতে। কিন্তু যখন আপনি উপরের কোডটা লিখবেন আপনাকে নিচের এরর শো করবে।

![L41-01.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1663130864662/vhOb9TgHF.png)

এর কারণ হলো আমরা জানি কোড উপর থেকে নিচে রান করে। যখন আমরা element কে ধরছি তখন তা রেন্ডারই হয়নি। যার কারণে আমাদের কোড test নামক আইডির এলিমেন্টকে চিনতে পারছে না। সে কারণে একটা এরর থ্রো করেছে। এবার যদি আমরা কোডটাকে নিচের মতো করে লিখি তাহলে কি হয় দেখা যাক।

```jsx
import { useEffect } from 'react';

function App() {
	useEffect(() => {
		console.log(document.getElementById('test').innerHTML);
	});

	return <h1 id="test">App</h1>;
}

export default App;
```

এবার দেখবো আমাদের কোড সুন্দরভাবে রান করেছে। এবং যা চেয়েছিলাম সেটাও আউটপুট দিয়েছে। আমরা চাইলে `h1` এর `innerHTML` কে চেইঞ্জও করতে পারি `useEffect` এর মাধ্যমে।

```jsx
function App() {
	useEffect(() => {
		document.getElementById('test').innerHTML = 'Hello World';
		console.log(document.getElementById('test').innerHTML);
	});

	return <h1 id="test">App</h1>;
}
```

এবার যদি ব্রাউজারে গিয়ে দেখি, দেখবো আমাদের App লেখা পরিবর্তিত হয়ে Hello World হয়ে গেছে।

তাহলে `useEffect` এর কাজ আমরা দেখতে পাচ্ছি যদি কখনও আমার কোনো এইচটিএমএল এলিমেন্টকে আমরা এক্সেস নিতে চাই রেন্ডার হওয়ার পরে এবং পিওর ডম ম্যানিপুলেশনের মাধ্যমে ম্যানিপুলেট করতে চাই কোনো কম্পোনেন্টের ভিতরে তখন আমরা `useEffect` ব্যবহার করবো। অর্থাৎ আগে আমাদের UI রেন্ডার হবে, এরপর `useEffect` কল হবে। আমাদের এরকম করতে হতে পারে। যেমন অ্যানিমেশন প্রজেক্টে আমাদের `height`, `width`, position ইত্যাদির এক্সেস নেয়া জরুরী হয়ে পড়ে সেক্ষেত্রে আমরা `useEffect` ব্যবহার করবো। স্ক্রল ইফেক্ট দিতেও এটা অনেক কাজে লাগে। যেমন কিছু কিছু অ্যাপ্লিকেশনে আমরা দেখি একটা নির্দিষ্ট পজিশন পর্যন্ত স্ক্রল করার পর নতুন ডাটা আসে। সেখানে `useEffect` ব্যবহার করা হয়। এছাড়াও জেকুয়েরি প্লাগিন্স, বিভিন্ন থার্ড পার্টি ডম লাইব্রেরি যেগুলো রিয়্যাক্টের সাথে সম্পর্কিত না সেগুলো অ্যাড করার ক্ষেত্রেও `useEffect` ব্যবহার করা হয়। আমরা জেকুয়েরি ব্যবহার করে একটা উদাহরণ দেখি এখন। প্রথমে আমরা `yarn add jquery` কমান্ড দিয়ে সেটা ইনস্টল করে নিবো। আমরা চাইছি কোনো একটা বাটন ক্লিক করলে সেটা আমাদের `alert` শো করবে। এবং এই কাজটা আমরা [jquery](https://jquery.com/) দিয়ে করবো।

```jsx
import $ from 'jquery';

function App() {
	$('#btn').on('click', function () {
		alert('I am jQuery. Still Alive');
	});
	return (
		<div>
			<h1 id="test">Hello World</h1>
			<button id="btn">Click Me</button>
		</div>
	);
}
```

কি মনে হয়? কি পাবেন? দেখবেন বাটন কাজ করছে না। অর্থাৎ তার এক্সেস আপনি পাননি। কারণ আপনি এমন একটা কিছু এক্সেস করতে চাইছেন যা এখনও রেন্ডার হয়নি। আর রেন্ডার না হলে সেই এলিমেন্টের এক্সেস কিভাবে পাবেন আপনি? তাহলে উপায় হলো `useEffect` হুক ব্যবহার করা।

```jsx
import $ from 'jquery';
import { useEffect } from 'react';

const App = () => {
	useEffect(() => {
		$('#btn').on('click', () => {
			alert('I am jQuery. Still Alive');
		});
	});

	return (
		<div>
			<h1 id="test">Hello World</h1>
			<button id="btn">Click Me</button>
		</div>
	);
};
```

এখন দেখবেন বাটনে ক্লিক করলেই সেই `alert` ম্যাসেজ আসছে।

> অর্থাৎ ডমের এমন কোনো কিছু আপনি এক্সেস নিতে চাইছেন তেমন কোনো সিচুয়েশন যদি আসে তবে আপনাকে `useEffect` হুক ব্যবহার করতে হবে। নাহয় ঐ এলিমেন্টের এক্সেস আপনি পাবেন না।

এখন আমরা চাইছি সেই বাটনের পজিশন জানতে। সেটাও করা যায় `useEffect` হুকের মাধ্যমে।

```js
useEffect(() => {
	const btn = document.getElementById('btn');
	console.log(btn.offsetHeight, btn.offsetWidth);
});
```

তাহলে বুঝতে পারছেন এই ছোট একটা কনসেপ্ট আমাদের ভবিষ্যতে অনেক কাজে লাগবে।

ডম এলিমেন্ট এক্সেস ছাড়া আর কি কি কাজে এই হুক ব্যবহার করা হয়। সহজ ভাষায় বলতে গেলে একটা প্রোপার ফাংশনাল কম্পোনেন্ট বানাতে গেলে সবচেয়ে বেশি যা যা দরকার হয় তার মধ্যে অন্যতম হলো এই `useEffect` হুক। সব জায়গাতেই এটি কাজে লাগবে।

আমরা এবার অন্য একটি উদাহরণ দেখি। আমরা এমন একটা সিস্টেম চাইছি যেখানে কাউন্ট করতে করতে যখন একটা নির্দিষ্ট নাম্বারে পৌঁছুবে তখন তা লক হয়ে যাবে। সেই কাজটা কিভাবে করা যায় আমরা দেখি। প্রথমে আমরা দুইটা স্টেট নিয়ে নিবো।

```jsx
const App = () => {
	const [count, setCount] = useState(0);
	const [lock, setLock] = useState(false);

	return (
		<div>
			<h1 id="count">{count}</h1>
			<button id="btn" disabled={lock} onClick={() => setCount(count + 1)}>
				Add {lock && '(locked)'}
			</button>
		</div>
	);
};
```

এবার আমরা চাইছি আমাদের কাউন্ট যখন ৫ হবে তখন `lock` এর ভ্যালু `true` হয়ে যাবে। সেটা করার জন্য আমরা একটা কন্ডিশন অ্যাড করতে পারি।

```jsx
const App = () => {
	const [count, setCount] = useState(0);
	const [lock, setLock] = useState(false);

	if (count === 5) {
		setLock(true);
	}

	return (
		<div>
			<h1 id="count">{count}</h1>
			<button id="btn" disabled={lock} onClick={() => setCount(count + 1)}>
				Add {lock && '(locked)'}
			</button>
		</div>
	);
};
```

কি দেখলেন? আমাদের অ্যাপ্লিকেশন ক্র্যাশ করেছে। এর কারণ হলো কাউন্টের ভ্যালু যখন ৫ হচ্ছে তখন লকের স্টেট আপডেট হচ্ছে। যখনই স্টেট আপডেট হয় আমরা জানি কম্পোনেন্ট রিরেন্ডার হয়। তার মানে আবার শুরু থেকে পুরো কোড রান হয়। রান হতে হতে যখনই আবার এই কন্ডিশনের আসবে তখনই আবার স্টেট আপডেট দেখতে পেয়ে সে আবার স্টেট আপডেট করবে। এবং কম্পোনেন্ট আবারও রিরেন্ডার হয়ে যাচ্ছে। এটা দেখতে যদিও ছোট মনে হচ্ছে। কিন্তু আপনি বৃহৎ পরিসরে চিন্তা করেন। ধরেন আপনি একটা ওয়েবপেইজে গেলেন। সেখানে কিছু ডাটা সার্ভার থেকে এনে রেন্ডার করে আপনাকে দেখাবে। এখন সেই কম্পোনেন্টেরেরই কোনো এক জায়গায় সার্ভার থেকে ডাটা নিয়ে আসার লজিক লেখা আছে। তাহলে ঐ জায়গাতে এসে কম্পোনেন্ট বারবার রিরেন্ডার হবে। কারণ স্টেট আপডেট হচ্ছে। এরকম চলতে থাকবে যতক্ষণ না পর্যন্ত অ্যাপ্লিকেশন ক্র্যাশ করছে। এই সমস্যার সমাধানের জন্য আমাদের দরকার `useEffect` হুক।

```jsx
import { useEffect, useState } from 'react';

const App = () => {
	const [count, setCount] = useState(0);
	const [lock, setLock] = useState(false);

	useEffect(() => {
		if (count === 5) {
			setLock(true);
		}
		console.log('count', count);
	});

	return (
		<div>
			<h1 id="count">{count}</h1>
			<button id="btn" disabled={lock} onClick={() => setCount(count + 1)}>
				Add {lock && '(locked)'}
			</button>
		</div>
	);
};

export default App;
```

![L41-02.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1663142239633/Xh1GllCF2.png)

কিন্তু দেখেন আপনারা `count 5` দুইবার প্রিন্ট হচ্ছে। তার কারণ হচ্ছে প্রথমবার যখন `useEffect` কল হচ্ছে তখন একবার প্রিন্ট হচ্ছে এবং পরে যখন স্টেট আপডেটের কারণে রিরেন্ডার হচ্ছে তখন আবার প্রিন্ট হচ্ছে। কারণ `count` এর স্টেট আপডেট হচ্ছে না। তাই রিরেন্ডার হওয়ার পরও যখন কাউন্টের ভ্যালু পাচ্ছে তখন সে আবার কল করছে। আমি যদি কোনোভাবে `useEffect` এর সাথে কাউন্টের একটা ডিপেন্ডেন্সি ক্রিয়েট করতে পারি তাহলেই এই প্রব্লেম থেকে মুক্তি পাবো। তার জন্য `useEffect` এর সেকেন্ড আর্গুমেন্ট হিসেবে আমরা `[count]` দিয়ে দিতে পারি। এর মানে হলো `useEffect` ততক্ষণ কল হবে যতক্ষণ পর্যন্ত `count` এর ভ্যালু ৫ না হয়। যেই ৫ হয়ে যাবে `useEffect` আর কল হবে না।

```jsx
useEffect(() => {
	if (count === 5) {
		setLock(true);
	}
	console.log('count', count);
}, [count]);
```

এবার দেখবেন `count 5` একবারই প্রিন্ট হচ্ছে। যদি আমরা `[count]` এর জায়গায় `[]` দিই তাহলে শুধুমাত্র একবারই `useEffect` কল হবে এবং সেটা প্রথমবার। এরপর আর `useEffect` কাজ করবে না। অর্থাৎ `[]` দেয়া মানে হলো আমাদের `useEffect` একবারই কল হবে শুধু।

`useEffect` এর কলব্যাক ফাংশন থেকে একটা ফাংশনও রিটার্ন করা যায়। এই ফাংশন আমরা তখন রিটার্ন কবো, যখন আমাদের কোনো কম্পোনেন্ট ডিলিট হয়ে যাওউয়ার কারণে এর সাথে সম্পর্কিত কিছু ইভেন্ট ডিলিট করে দেয়ার প্রয়োজন পড়বে। এটা কাজ করবে পুরনো ভার্সনের `componentWillUnmount` এর মতো। যখন আমরা ডিপেন্ডেন্সি ছাড়া `useEffect` লিখছি সেটা কাজ করছে `componentDidMount` এর মতো। যখন আমরা একটা ডিপেন্ডেন্সি অ্যারে দিয়ে লিখছি তখন সেটা কাজ করছে `componentDidUpdate` এর মতো। যখন কোনো স্টেট আপডেট হবে কিনা তার জন্য লজিক লিখছি তখন সেটা কাজ করছে `shouldComponentUpdate` এর মতো। তার মানে এই একটা `useEffect` হুক টোটাল ৪টা কাজ করছে।

## Multiple `useEffect` in a single component

একটা কম্পোনেন্টের মধ্যে `useEffect` চাইলে কয়েকবারও নেয়া যাবে। ধরেন আমরা চাইছি যখন lock = true হবে তখন শুধু ৫ সেকেন্ডের জন্য হবে, ৫ সেকেন্ড পরে সেটা আবার false হয়ে যাবে এরকম একটা সিস্টেম করতে এবং সেই সাথে বাটনের পাশে কয় সেকেন্ড বাকি আছে অর্থাৎ একটা কাউন্টডাউন শো যুক্ত করতে।

```jsx
import { useEffect, useState } from 'react';

let timeInterval = null;

const App = () => {
	const [count, setCount] = useState(0);
	const [lock, setLock] = useState(false);
	const [timeCount, setTimeCount] = useState(5);

	useEffect(() => {
		if (count === 5) {
			setLock(true);
		}
		console.log('count', count);

		return () => {};
	}, [count]);

	useEffect(() => {
		if (lock && timeInterval === null) {
			timeInterval = setInterval(() => {
				setTimeCount((prev) => prev - 1);
			}, 1000);
		}
	}, [lock]);

	useEffect(() => {
		if (timeCount === 0) {
			clearInterval(timeInterval);
			setCount(0);
			setLock(false);
			setTimeCount(5);
		}
	}, [timeCount]);

	return (
		<div>
			<h1 id="count">{count}</h1>
			<button id="btn" disabled={lock} onClick={() => setCount(count + 1)}>
				Add {lock && `(locked: ${timeCount}s)`}
			</button>
		</div>
	);
};

export default App;
```

আমরা আমাদের প্রয়োজনে মাল্টিপল `useEffect` হুকও ব্যবহার করতে পারি একটা সিঙ্গেল কম্পোনেন্টে।

## Another Example

এবার আমরা দেখবো কেন `useEffect` খুবই গুরুত্বপূর্ণ সেটা। আমরা `https://jsonplaceholder.typicode.com/users` থেকে ডাটা `fetch` করে আনার একটা অ্যাপ্লিকেশন বানাবো।

```jsx
import { useState } from 'react';

const App = () => {
	const [users, setUsers] = useState([]);

	fetch('https://jsonplaceholder.typicode.com/users')
		.then((res) => res.json())
		.then((data) => setUsers(data));
	return (
		<div>
			<h1>Users</h1>
			<ul>
				{users.map((user) => (
					<li key={user.id}>{user.name}</li>
				))}
			</ul>
		</div>
	);
};

export default App;
```

এবার ব্রাউজারে গিয়ে দেখলে দেখবো আমাদের যে কজন ইউজার আছে তাদের নাম সুন্দরভাবে আমাদেরকে শো করছে। কিন্তু যদি আমরা ডেভেলপার টুলের নেটয়ার্ক ট্যাবে গিয়ে দেখি, দেখবো সেখানে প্রতি সেকেন্ডে অনেক অনেক রিকোয়েস্ট চলে যাচ্ছে, সব একই জায়গায়। এরকম চলতে থাকলে একসময় আইপি এড্রেস ব্লক হয়ে যাবে। কারণটা আগেই বলেছিলাম রিরেন্ডারের কারণে স্টেট আপডেট হচ্ছে এবং স্টেট আপডেটের কারণে রিরেন্ডার হচ্ছে। একটা অসীম লুপ সৃষ্টি হচ্ছে। তাহলে সেটা থেকে বাঁচার উপায় কি? অবশ্যই `useEffect`।

```jsx
useEffect(() => {
	fetch('https://jsonplaceholder.typicode.com/users')
		.then((res) => res.json())
		.then((data) => setUsers(data));
}, []);
```

এখন সব ঠিকঠাক। কারণ আমরা ডিপেন্ডেন্সি আকারে বলেই দিয়েছি যেন একবারই ডাটা সার্ভার থেকে আনে। একের অধিকবার যেন কল না হয়।

এখন যদি আমরা একজন ইউজারের ডাটা দেখতে চাইতাম তাহলে কি করতাম? তাহলে আমাদের `useEffect` কোনো কাজ করতো না। সেটার একটা খুব সুন্দর সমাধান আছে। তার আগে আমরা একটু আমাদের অ্যাপ্লিকেশনকে সেটআপ করে নিই।

```jsx
import { useEffect, useState } from 'react';

const App = () => {
	const [user, setUser] = useState({});

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users/1')
			.then((res) => res.json())
			.then((data) => setUser(data));
	}, []);

	return (
		<div>
			<h1>User Detail</h1>
			{user && (
				<div>
					name: {user.name}
					<br />
					email: {user.email}
					<br />
					phone: {user.phone}
				</div>
			)}
		</div>
	);
};

export default App;
```

UI দেখলে দেখবো `id: 1` এর ইউজারের নাম, ইমেইল এবং ফোন নাম্বার রেন্ডার হয়েছে। এবার আমরা এমন একটা সিস্টেম করতে চাইছি যেন সেটা করলে আমরা পরবর্তী ইউজারের ডিটেইল পেতে পারি।

```jsx
import { useEffect, useState } from 'react';

const App = () => {
	const [user, setUser] = useState({});
	const [id, setId] = useState(1);
	const max = 10;

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
			.then((res) => res.json())
			.then((data) => setUser(data));
	}, [id]);

	const nextHandler = () => {
		if (id < max) {
			setId(id + 1);
		}
	};

	const prevHandler = () => {
		if (id > 1) {
			setId(id - 1);
		}
	};

	return (
		<div>
			<h1>User Detail: {id}</h1>
			{user && (
				<div>
					name: {user.name}
					<br />
					email: {user.email}
					<br />
					phone: {user.phone}
				</div>
			)}
			<div>
				<button disabled={id === 1} onClick={prevHandler}>
					previous
				</button>
				<button disabled={id === max} onClick={nextHandler}>
					next
				</button>
			</div>
		</div>
	);
};

export default App;
```

আমরা নেক্সট বাটনে ক্লিক করলে পরের ইউজারের ডিটেইল পাবো এবং previous বাটনে ক্লিক করলে আগের ইউজারের ডিটেইল পাবো।

এখন এক একটা ডাটা লোড হতে একটু সময় নিচ্ছে দেখতে পাচ্ছি। সেক্ষেত্রে আমরা একটা লোডিং স্পিনার দিয়ে দিতে পারি।

```jsx
import { useEffect, useState } from 'react';

const App = () => {
	const [user, setUser] = useState({});
	const [loading, setLoading] = useState(false);
	const [id, setId] = useState(1);
	const max = 10;

	useEffect(() => {
		setLoading(true);
		fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
			.then((res) => res.json())
			.then((data) => setUser(data))
			.finally(() => setLoading(false));
	}, [id]);

	const nextHandler = () => {
		if (id < max) {
			setId(id + 1);
		}
	};

	const prevHandler = () => {
		if (id > 1) {
			setId(id - 1);
		}
	};

	return (
		<div>
			<h1>User Detail: {id}</h1>
			{loading && <p>loading...</p>}
			{!loading && user && (
				<div>
					name: {user.name}
					<br />
					email: {user.email}
					<br />
					phone: {user.phone}
				</div>
			)}
			<div>
				<button disabled={id === 1} onClick={prevHandler}>
					previous
				</button>
				<button disabled={id === max} onClick={nextHandler}>
					next
				</button>
			</div>
		</div>
	);
};

export default App;
```

এবার দেখা যাবে ডাটা লোড হওয়ার সময় `loading...` দেখাবে।

এবার আমরা এমন একটা সিস্টেম করবো, যদি কোনো ডাটা একবার লোড হয়ে যায় তাহলে সেটা কোনো একটা জায়গায় স্টোর হয়ে থাকবে এবং যতক্ষণ এই অ্যাপ্লিকেশন রানিং থাকবে ততক্ষণ আর সেই ডাটা লোড হবে না, ঐ স্টোর থেকে নিয়ে আসবে।

```jsx
import { useEffect, useState } from 'react';

const cacheData = {};

const App = () => {
	const [user, setUser] = useState({});
	const [loading, setLoading] = useState(false);
	const [id, setId] = useState(1);
	const max = 10;

	useEffect(() => {
		if (cacheData[`user-${id}`]) {
			setUser(cacheData[`user-${id}`]);
			return;
		}
		setLoading(true);
		fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
			.then((res) => res.json())
			.then((data) => {
				setUser(data);
				cacheData[`user-${id}`] = data;
			})
			.finally(() => setLoading(false));
	}, [id]);

	const nextHandler = () => {
		if (id < max) {
			setId(id + 1);
		}
	};

	const prevHandler = () => {
		if (id > 1) {
			setId(id - 1);
		}
	};

	return (
		<div>
			<h1>User Detail: {id}</h1>
			{loading && <p>loading...</p>}
			{!loading && user && (
				<div>
					name: {user.name}
					<br />
					email: {user.email}
					<br />
					phone: {user.phone}
				</div>
			)}
			<div>
				<button disabled={id === 1} onClick={prevHandler}>
					previous
				</button>
				<button disabled={id === max} onClick={nextHandler}>
					next
				</button>
			</div>
		</div>
	);
};

export default App;
```

এখন যদি আমরা বাটনে ক্লিক করে নেটওয়ার্ক ট্যাবের দিকে তাকাই তাহলে দেখবো প্রথমবার একটা fetch রিকোয়েস্ট যাচ্ছে। কিন্তু পরবর্তীতে ঐ ডাটা লোড হতে আর কোনো রিকোয়েস্ট যাচ্ছে না। সেটা `cacheData` থেকে আমরা পেয়ে যাচ্ছি।

আমরা এবার একটা ফাংশন বানাবো।

```js
const fetchUser = (id) => {
	return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
		.then((res) => res.json())
		.then((data) => {
			cacheData[`user-${id}`] = data;
			return data;
		});
};
```

এবার এই ফাংশনকে আমরা আমাদের `useEffect` ফাংশনের মধ্যে ব্যবহার করবো।

```jsx
useEffect(() => {
	if (cacheData[`user-${id}`]) {
		setUser(cacheData[`user-${id}`]);
		return;
	}
	setLoading(true);
	fetchUser(id)
		.then((data) => {
			setUser(data);
		})
		.finally(() => setLoading(false));
}, [id]);
```

এবার আমরা ডাটা লোড হওয়ার সময় যে flickering বা loading... লেখা দেখি সেটা দেখতে চাই না। তার জন্য আমরা আরেকটা `useEffect` হুক ব্যবহার করবো।

```jsx
useEffect(() => {
	if (!cacheData[`user-${id + 1}`] && id < max) {
		fetchUser(id + 1);
	}
}, [id]);
```

নেটওয়ার্ক ট্যাবের দিকে তাকালে দেখবেন যখন আমরা অ্যাপ্লিকেশন লোড করলাম তখন প্রথম ও দ্বিতীয় ডাটা লোড হয়ে আছে। এরপর যখন আমরা নেক্সট বাটনে ক্লিক করে দ্বিতীয় ডাটাকে আনলাম সেই মুহূর্তে তৃতীয় ডাটা লোড হয়ে গেলো। এভাবে প্রতি ক্লিকে পরবর্তী ডাটা লোড হয়ে যাওয়ায় আমাদের আর ডাটা দেখার জন্য অপেক্ষা করতে হচ্ছে না।

এবার আমরা একটা নতুন প্যাটার্ন দেখবো। এই প্যাটার্নে বর্তমানে বেশিরভাগ অ্যাপ্লিকেশন তৈরি হয়। সেটা হলো কাস্টম হুকের মাধ্যমে।

আমরা `App_Hook.jsx` নামে একটা ফাইল ক্রিয়েট করবো। এবং সেখানে নিচের কোডগুলো রাখবো।

```jsx
import { useEffect, useState } from 'react';

const cacheData = {};

const useApp = () => {
	const [user, setUser] = useState({});
	const [loading, setLoading] = useState(false);
	const [id, setId] = useState(1);
	const max = 10;

	useEffect(() => {
		if (cacheData[`user-${id}`]) {
			setUser(cacheData[`user-${id}`]);
			return;
		}
		setLoading(true);
		fetchUser(id)
			.then((data) => {
				setUser(data);
			})
			.finally(() => setLoading(false));
	}, [id]);

	useEffect(() => {
		if (!cacheData[`user-${id + 1}`] && id < max) {
			fetchUser(id + 1);
		}
	}, [id]);

	const fetchUser = (id) => {
		return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
			.then((res) => res.json())
			.then((data) => {
				cacheData[`user-${id}`] = data;
				return data;
			});
	};

	const nextHandler = () => {
		if (id < max) {
			setId(id + 1);
		}
	};

	const prevHandler = () => {
		if (id > 1) {
			setId(id - 1);
		}
	};

	return {
		user,
		id,
		loading,
		max,
		prevHandler,
		nextHandler,
	};
};

export default useApp;
```

আর `App.jsx` এর মধ্যে আমাদের `jsx` কোড এবং `App_Hook.jsx` থেকে `useApp` ফাংশনকে ইমপোর্ট করে নিবো।

```jsx
import useApp from './App_Hook';

const App = () => {
	const { user, id, loading, max, prevHandler, nextHandler } = useApp();

	return (
		<div>
			<h1>User Detail: {id}</h1>
			{loading && <p>loading...</p>}
			{!loading && user && (
				<div>
					name: {user.name}
					<br />
					email: {user.email}
					<br />
					phone: {user.phone}
				</div>
			)}
			<div>
				<button disabled={id === 1} onClick={prevHandler}>
					previous
				</button>
				<button disabled={id === max} onClick={nextHandler}>
					next
				</button>
			</div>
		</div>
	);
};

export default App;
```

অ্যাপ্লিকেশন আগে যেমন রান করেছিল সেরকমই রান করবে। কোনো সমস্যা হবে না।

## Source Code

এই লেকচারের সমস্ত সোর্স কোড এই [লিংক](https://github.com/mrhm-dev/full-stack-army/tree/master/src/lecture-41) এ পাবেন।
