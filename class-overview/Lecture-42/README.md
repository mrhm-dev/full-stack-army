# Lecture 42 - React Custom Hooks

## Introduction

আমরা এই পর্যন্ত `useState` এবং `useEffect` হুক সম্পর্কে জেনেছি। আজকের লেকচারে আমরা শিখবো কাস্টম হুক সম্পর্কে। যেটা রিয়্যাক্টের অনেক গুরুত্বপূর্ণ একটা কনসেপ্ট। গত লেকচারে যদিও আমরা কাস্টম হুক তৈরি করেছিলাম, কিন্তু সেটা সম্পর্কে বিশদ আমরা জানিনি। আজকের লেকচারে আমরা কাস্টম হুক নিয়ে বিশদভাবে আলোচনা করবো।

## Custom hooks

রিয়্যাক্টের পুরনো ভার্সনে higher order component, render props এই ধরণের কিছু কনসেপ্ট ছিল। যেগুলো আসলে খুবই জটিল ছিল। সেই জটিল কনসেপ্টকে সিমপ্লিফাই করেছে হুক। যদি আমাদের কাস্টম হুক তৈরি করার ক্ষমতা না থাকতো তাহলে এখনও আমাদের এসব কনসেপ্ট ব্যবহার করতে হতো। তখন আমাদের আবার ক্লাস বেইজড কম্পোনেন্ট ব্যবহার করতে হতো। বা আমরা যদি ফাংশনাল কম্পোনেন্টে এসব ব্যবহার করতে চাইতাম, প্যাটার্নগুলো অনেক জটিল হয়ে যেতো। সেই সমস্যা থেকে মুক্তি দিয়েছে আমাদেরকে কাস্টম হুক।

## Difference between custom hook and component

কখন আমরা একটা কম্পোনেন্টকে কাস্টম হুক বলবো আর কখন কম্পোনেন্ট বলবো সেই বিষয়টা আমাদের বুঝতে হবে। আমরা সাধারণত সকল কাস্টম হুক `hooks` নামে একটা ফোল্ডারের ভিতরে রাখি। কাস্টম হুক আর কম্পোনেন্টের মধ্যে কি কি পার্থক্য সেটা একটু দেখি।

- প্রথম পার্থক্য হলো একটা কম্পোনেন্টের নাম শুরু হয় ক্যাপিটাল লেটার দিয়ে। যেমন - `Counter`। পক্ষান্তরে একটা কাস্টম হুকের নাম শুরু হয় `use` লেখাটা দিয়ে। যেমন - `useCounter`। `use` লেখা দেখলেই রিয়্যাক্ট বুঝে যাবে এটা একটা হুক।
- দ্বিতীয় পার্থক্য হলো একটা কম্পোনেন্টে যেহেতু `jsx` কোড থাকে তাই এর এক্সটেনশন আমরা দিই `.jsx`, যেমন - `Counter.jsx`। কিন্তু কাস্টম হুকে সাধারণত আমরা কোনো `jsx` কোড লিখি না। তাই এর এক্সটেনশন হিসেবে আমরা লিখি `.js`, যেমন - `useCounter.js`।

## Difference between normal function and custom hook function

নরমাল ফাংশন এবং কাস্টম হুকের মধ্যে তফাৎ হলো নরমাল ফাংশনে আমরা রিয়্যাক্টের বিল্টইন হুকস, স্টেট কোনো কিছুই ব্যবহার করতে পারবো না। কিন্তু হুক ফাংশনের মধ্যে আমরা এসব ব্যবহার করতে পারবো। এই যে এতসব কথা এসব কথা ততক্ষণ মাথায় ঢুকবে না যতক্ষণ না আমরা একটা প্রব্লেম সলভ করবো। চলুন আমরা একটা প্রব্লেম তৈরি করি।

## Counter app

আমরা সিম্পল একটা কাউন্টার বানাই।

```jsx
// App.jsx

import { useState } from 'react';

const App = () => {
	const [counter1, setCounter1] = useState(0);

	return (
		<div>
			<button onClick={() => setCounter1(counter1 + 1)}>+</button>
			<span>{counter1}</span>
			<button onClick={() => setCounter1(counter1 - 1)}>-</button>
		</div>
	);
};

export default App;
```

অনেকেই ভাবতে পারেন এটা আর এমন কি? খুব সহজ অ্যাপ। কিন্তু ধরেন এরকম কম্পোনেন্ট আরো ১০০টা আছে। ধরি আমাদের আরেকটা এরকম কাউন্টার বানাতে হবে। আমরা আরেকটা স্টেট নিবো এবং সব কাজ রিপিট করবো আবার।

```jsx
import { useState } from 'react';

const App = () => {
	const [counter1, setCounter1] = useState(0);
	const [counter2, setCounter2] = useState(0);

	return (
		<div>
			<div>
				<button onClick={() => setCounter1(counter1 + 1)}>+</button>
				<span>{counter1}</span>
				<button onClick={() => setCounter1(counter1 - 1)}>-</button>
			</div>
			<div>
				<button onClick={() => setCounter2(counter2 + 1)}>+</button>
				<span>{counter2}</span>
				<button onClick={() => setCounter2(counter2 - 1)}>-</button>
			</div>
		</div>
	);
};

export default App;
```

এটা যদিও খুব জটিল না। কিন্তু ধরেন এখানে অনেক লজিক আছে। ধরেন আমরা যদি `counter` এর ভ্যালু ১০ এর নিচে হয় তাহলে বাড়াতে দিবো। আর এর ভ্যালু ০ এর নিচে আসতে পারবে না। তাহলে সেটা কিভাবে লেখা যায় দেখি।

```jsx
import { useState } from 'react';

const App = () => {
	const [counter1, setCounter1] = useState(0);
	const [counter2, setCounter2] = useState(0);

	const handleCounter1Inc = () => {
		if (counter1 < 10) {
			setCounter1(counter1 + 1);
		}
	};

	const handleCounter1Dec = () => {
		if (counter1 > 0) {
			setCounter1(counter1 - 1);
		}
	};

	const handleCounter2Inc = () => {
		if (counter2 < 10) {
			setCounter2(counter2 + 1);
		}
	};

	const handleCounter2Dec = () => {
		if (counter2 > 0) {
			setCounter2(counter2 - 1);
		}
	};

	return (
		<div>
			<div>
				<button onClick={handleCounter1Inc}>+</button>
				<span>{counter1}</span>
				<button onClick={handleCounter1Dec}>-</button>
			</div>
			<div>
				<button onClick={handleCounter2Inc}>+</button>
				<span>{counter2}</span>
				<button onClick={handleCounter2Dec}>-</button>
			</div>
		</div>
	);
};

export default App;
```

এখন এখানে যদি আরেকটা কাউন্টার বাড়ে তাহলে আরেকটা স্টেট নিতে হবে এবং সেই রিলেটেড সকল হ্যান্ডলার ফাংশন বানাতে হবে। যদি আরেকটা বাড়ে তাহলে আরেকটা স্টেট নিয়ে সব কাজ আবার করতে হবে। এখন ভাবুন যদি কোনো চেইঞ্জ আসে তাহলে সবগুলোতেই ধরে ধরে আমাদের চেইঞ্জ করতে হবে। যেটা অনেক ঝামেলার কাজ। এই সমস্যা থেকে মুক্তি দিতে পারে আমাদেরকে হুক। আমরা হুকের মধ্যে কাস্টম স্টেট নিতে পারি, কাস্টম হুক বসাতে পারি, যা খুশি তা করতে পারি। এবং শেষে আমরা চাইলে ফাংশনও রিটার্ন করতে পারি আবার স্টেটও রিটার্ন করতে পারি। এটাই হচ্ছে হুকের পাওয়ার।

আমরা কম্পোনেন্ট নিবো একটা প্রথমে। আমাদের UI কোড ডুপ্লিকেশন যেন না হয় তার জন্য। তার জন্য আমরা `App.jsx` এ `CountController` নামে একটা কম্পোনেন্ট নিবো।

```jsx
import { useState } from 'react';

const CountController = ({ count, handleInc, handleDec }) => {
	return (
		<div>
			<button onClick={handleInc}>+</button>
			<span>{count}</span>
			<button onClick={handleDec}>-</button>
		</div>
	);
};

const App = () => {
	const [counter1, setCounter1] = useState(0);
	const [counter2, setCounter2] = useState(0);
	const [counter3, setCounter3] = useState(0);

	const handleCounter1Inc = () => {
		if (counter1 < 10) {
			setCounter1(counter1 + 1);
		}
	};

	const handleCounter1Dec = () => {
		if (counter1 > 0) {
			setCounter1(counter1 - 1);
		}
	};

	const handleCounter2Inc = () => {
		if (counter2 < 10) {
			setCounter2(counter2 + 1);
		}
	};

	const handleCounter2Dec = () => {
		if (counter2 > 0) {
			setCounter2(counter2 - 1);
		}
	};

	const handleCounter3Inc = () => {
		if (counter3 < 10) {
			setCounter3(counter3 + 1);
		}
	};

	const handleCounter3Dec = () => {
		if (counter3 > 0) {
			setCounter3(counter3 - 1);
		}
	};

	return (
		<div>
			<CountController
				count={counter1}
				handleInc={handleCounter1Inc}
				handleDec={handleCounter1Dec}
			/>
			<CountController
				count={counter2}
				handleInc={handleCounter2Inc}
				handleDec={handleCounter2Dec}
			/>
			<CountController
				count={counter3}
				handleInc={handleCounter3Inc}
				handleDec={handleCounter3Dec}
			/>
		</div>
	);
};

export default App;
```

এখনও আমাদের অ্যাপ কাজ করবে। কিন্তু আমরা কম্পোনেন্টকে রিউজেবল করলাম। কিন্তু আমাদের লজিক কিন্তু এখনও ডুপ্লিকেট হচ্ছে। সেটার জন্য আমরা src/hooks/useCounter.js এ যাবো এবং নিচের কোড লিখবো।

```jsx
const useCounter = () => {
	const [count, setCount] = useState(0);

	const handleInc = () => {
		if (count < 10) {
			setCount(count + 1);
		}
	};

	const handleDec = () => {
		if (count > 0) {
			setCount(count - 1);
		}
	};

	return {
		count,
		handleInc,
		handleDec,
	};
};

export default useCounter;
```

এবার আমরা এই হুককে আমাদের কম্পোনেন্টে ব্যবহার করবো।

```jsx
const App = () => {
	const { count, handleInc, handleDec } = useCounter();

	return (
		<div>
			<CountController
				count={count}
				handleInc={handleInc}
				handleDec={handleDec}
			/>
		</div>
	);
};
```

এখন দেখবো আমাদের অ্যাপ্লিকেশন আগের মতোই কাজ করছে। এই হুক আমরা যে শুধুমাত্র এই কম্পোনেন্টেই ব্যবহার করতে পারবো তা নয়। পুরো অ্যাপ্লিকেশনের যেখানে যেখানে কাউন্টার দরকার হবে সেখানেই আমরা আমাদের এই কাস্টম হুক ব্যবহার করতে পারবো।

এখন যদি আমাদের আরেকটা কাউন্টার দরকার হয় আমরা যেভাবে কাস্টম হুককে ডিস্ট্রাকচার করেছি সেটাই আবার রিপিট হবে। কিন্তু রিপিট হলে এখানে একটা নেমিং কনফ্লিক্ট তৈরি হবে। সেক্ষেত্রে দুইটা উপায় আছে। এক এক করে দুইটাই নিচে দেখানো হলো।

```jsx
const App = () => {
	const {
		count: count1,
		handleInc: handleInc1,
		handleDec: handleDec1,
	} = useCounter();
	const {
		count: count2,
		handleInc: handleInc2,
		handleDec: handleDec2,
	} = useCounter();
	const {
		count: count3,
		handleInc: handleInc3,
		handleDec: handleDec3,
	} = useCounter();

	return (
		<div>
			<CountController
				count={count1}
				handleInc={handleInc1}
				handleDec={handleDec1}
			/>
			<CountController
				count={count2}
				handleInc={handleInc2}
				handleDec={handleDec2}
			/>
			<CountController
				count={count3}
				handleInc={handleInc3}
				handleDec={handleDec3}
			/>
		</div>
	);
};
```

```jsx
const App = () => {
	const counter1 = useCounter();
	const counter2 = useCounter();
	const counter3 = useCounter();

	return (
		<div>
			<CountController
				count={counter1.count}
				handleInc={counter1.handleInc}
				handleDec={counter1.handleDec}
			/>
			<CountController
				count={counter2.count}
				handleInc={counter2.handleInc}
				handleDec={counter2.handleDec}
			/>
			<CountController
				count={counter3.count}
				handleInc={counter3.handleInc}
				handleDec={counter3.handleDec}
			/>
		</div>
	);
};
```

উপরের দুইটার যেকোনো একভাবে করা যায়।

এখন যদি ক্লায়েন্ট আমাদেরকে বলে যে কাউন্টার আপার বাউন্ড ১০ এর পরিবর্তে ১৫ করে দিতে। আমরা আমাদের `useCounter.js` ফাইলে গিয়ে চেইঞ্জ করে দিলেই যদি ১০০০টাও কাউন্টার থাকে সবগুলোতে তা চেইঞ্জ হয়ে যাবে। তাহলে বুঝতেই পারছেন হুক আমাদের জন্য কী আশীর্বাদ নিয়ে এসেছে।

এই হুক বানানোর ফলে আমরা নিচের সুবিধাগুলো পাবো -

- কোডের সর্বোচ্চ রিইউজ হচ্ছে
- যতবার খুশি ততবার ব্যবহার করতে পারবো
- পুরো অ্যাপ্লিকেশনের যেকোনো জায়গায় এটা ব্যবহার করতে পারবো

আমাদের তিনটা কাউন্টারেই প্রাথমিক ভ্যালু ০, আপার বাউন্ড ১০ এবং লোয়ার বাউন্ড করা আছে ০। অর্থাৎ ০ থেকে শুরু হয়ে ১০ এর উপরে যেতে পারবেনা এবং ০ এর নিচে নামতে পারবে না। এখন আমরা চাইছি প্রতিটা কাউন্টারের এসব ভ্যালু আলাদা আলাদা হবে। সেটা আমরা আমাদের হুকে গিয়ে আর্গুমেন্ট আকারে দিয়ে দিতে পারি।

```jsx
import { useState } from 'react';

const useCounter = ({ initial = 0, lowerBound = 0, upperBound = 10 }) => {
	const [count, setCount] = useState(initial);

	const handleInc = () => {
		if (count < upperBound) {
			setCount(count + 1);
		}
	};

	const handleDec = () => {
		if (count > lowerBound) {
			setCount(count - 1);
		}
	};

	return {
		count,
		lowerBound,
		upperBound,
		handleInc,
		handleDec,
	};
};

export default useCounter;
```

আমরা ডিফল্টভাবে ইনিশিয়াল ভ্যালু ০, লোয়ার বাউন্ড ০ এবং আপার বাউন্ড ১০ রেখেছি। আমরা চাইলে আমাদের মতো করে ভ্যালু সেট করতে পারি।

```jsx
const App = () => {
	const counter1 = useCounter({ lowerBound: -10 });
	const counter2 = useCounter({ initial: 5, lowerBound: 5, upperBound: 15 });
	const counter3 = useCounter({ initial: 10, upperBound: 20 });

	return <div>...</div>;
};
```

প্রথমটার ক্ষেত্রে ০ থেকে শুরু হবে, সর্বোচ্চ ১০ পর্যন্ত যেতে পারবে এবং সর্বনিম্ন -১০ পর্যন্ত যেতে পারবে। দ্বিতীয় ক্ষেত্রে ৫ থেকে শুরু হয়ে সর্বোচ্চ ১৫ এবং সর্বনিম্ন ৫ পর্যন্ত যেতে পারবে। তৃতীয় ক্ষেত্রে ১০ থেকে শুরু হয়ে সর্বোচ্চ ২০ এবং সর্বনিম্ন ০ পর্যন্ত যেতে পারবে।

এখন আমরা চাইলে আমাদের হুককে আলাদা কম্পোনেন্টের মধ্যে ব্যবহার করে সেই কম্পোনেন্টকে অ্যাপের মধ্যে ব্যবহার করতে পারি। তবে আগের মতো আমরা এই কম্পোনেন্টের মধ্যে count, handleInc, handleDec এসব ব্যবহার করবো না। আমরা শুরু আর্গুমেন্টগুলো দিবো। চলুন দেখি কিভাবে সেটা করা যায়। প্রথমে আমরা একটা কম্পোনেন্ট বানাই।

```jsx
const CountController = (props) => {
	const { count, handleInc, handleDec } = useCounter({ ...props });
	return (
		<div>
			<button onClick={handleInc}>+</button>
			<span>{count}</span>
			<button onClick={handleDec}>-</button>
		</div>
	);
};
```

অর্থাৎ এক্ষেত্রে আমরা প্রপ্স আকারে আমাদের হুক ফাংশনের আর্গুমেন্টগুলো পাস করবো। তাহলে আমাদের প্রতিটা কাউন্টারের জন্য আলাদা আলাদাভাবে হুক নিতে হলো না। কিভাবে করা যায় দেখি আমরা -

```jsx
const App = () => {
	return (
		<div>
			<CountController lowerBound={-10} />
			<CountController initial={5} lowerBound={-10} upperBound={15} />
			<CountController initial={10} upperBound={20} />
		</div>
	);
};
```

এখানে আমরা শুধু প্রপ্স আকারে আর্গুমেন্টগুলোকে পাস করে দিলাম। আমাদের অ্যাপ্লিকেশন আগের মতোই কাজ করবে।

## Data fetch example

এবার আমরা আরেকটা উদাহরণ দেখবো। আমাদের রিয়েল লাইফ অ্যাপ্লিকেশনে প্রতিনিয়ত ডাটা ফেচিং এর কাজ চলে। কখনও ইউজারের ডাটা ফেচ করতে হয়, কখনও প্রোডাক্টের, কখনও কমেন্টের ইত্যাদি। কোনো ডাটা ফেচ করতে হলে আমাদের তিনটা কাজ মাথায় রাখতে হবে।

- fetch and update data
- handle loading
- handle error

ধরি আমরা এমন একটা সিস্টেম বানাতে চাই যেখানে দুইটা পার্ট থাকবে। একটা ইউজার পার্ট, আরেকটা ইউজারের পোস্টের পার্ট।

```jsx
import React from 'react';

const App = () => {
	return (
		<div
			style={{
				width: '600px',
				display: 'flex',
				gap: '1rem',
				justifyContent: 'space-between',
			}}
		>
			<div>
				<h1>Users</h1>
				<hr />
			</div>
			<div>
				<h1>Posts</h1>
				<hr />
			</div>
		</div>
	);
};

export default App;
```

![l42-01.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1663569206646/LrCqXYaqw.png)

আমরা [jsonplaceholder](https://jsonplaceholder.typicode.com/) থেকে ডাটা নিয়ে এসে একই পেইজে একদিকে ইউজারের ডাটা লোড করবো অন্যদিকে পোস্টের ডাটা লোড করবো।

আমরা প্রথমে কিছু স্টেট নিয়ে নিই।

```jsx
import { useState } from 'react';

const App = () => {
	const [users, setUsers] = useState([]);
	const [userLoading, setUserLoading] = useState(false);
	const [userError, setUserError] = useState('');
	const [posts, setPosts] = useState([]);
	const [postLoading, setPostLoading] = useState(false);
	const [postError, setPostError] = useState('');

	return <div>...</div>;
};
```

আমরা ইউজার এবং পোস্টের জন্য স্টেট নিলাম, এদের লোডিং হ্যান্ডেল এর জন্য স্টেট নিলাম এবং এদের এরর হ্যান্ডেলের জন্য স্টেট নিলাম।

এবার আমরা ইউজার এবং পোস্ট ফেচ করার জন্য দুইটা ফাংশন বানাবো।

```jsx
const fetchUsers = async () => {
	setUserLoading(true);
	try {
		const res = await fetch('https://jsonplaceholder.typicode.com/users');
		const data = await res.json();
		setUserLoading(false);
		setUserError('');
		setUsers(data);
	} catch (error) {
		setUserLoading(false);
		setUserError('Server error occurred while fetching users');
	}
};

const fetchPosts = async () => {
	setPostLoading(true);
	try {
		const res = await fetch('https://jsonplaceholder.typicode.com/posts');
		const data = await res.json();
		setPostLoading(false);
		setPostError('');
		setPosts(data);
	} catch (error) {
		setPostLoading(false);
		setPostError('Server error occurred while fetching posts');
	}
};
```

এবার আমরা এই ফাংশনগুলোকে `useEffect` এর মধ্যে কল করবো। আলাদাভাবে ফাংশন নেয়ার কারণ হলো আমরা `useEffect` এর মধ্যে `async await` ব্যবহার করতে পারবো না। তাই আলাদাভাবে ফাংশন বানিয়ে এরপর তা `useEffect` হুকের মধ্যে কল করে দিবো।

```jsx
useEffect(() => {
	fetchUsers();
	fetchPosts();
}, []);
```

এবার এই ডাটাগুলোকে রেন্ডার করবো। সবগুলোকে একসাথে করলে দাঁড়াবে -

```jsx
import { useEffect, useState } from 'react';

const App = () => {
	const [users, setUsers] = useState([]);
	const [userLoading, setUserLoading] = useState(false);
	const [userError, setUserError] = useState('');
	const [posts, setPosts] = useState([]);
	const [postLoading, setPostLoading] = useState(false);
	const [postError, setPostError] = useState('');

	useEffect(() => {
		fetchUsers();
		fetchPosts();
	}, []);

	const fetchUsers = async () => {
		setUserLoading(true);
		try {
			const res = await fetch('https://jsonplaceholder.typicode.com/users');
			const data = await res.json();
			setUserLoading(false);
			setUserError('');
			setUsers(data);
		} catch (error) {
			setUserLoading(false);
			setUserError('Server error occurred while fetching users');
		}
	};

	const fetchPosts = async () => {
		setPostLoading(true);
		try {
			const res = await fetch('https://jsonplaceholder.typicode.com/posts');
			const data = await res.json();
			setPostLoading(false);
			setPostError('');
			setPosts(data);
		} catch (error) {
			setPostLoading(false);
			setPostError('Server error occurred while fetching posts');
		}
	};

	return (
		<div
			style={{
				display: 'flex',
				gap: '1rem',
				justifyContent: 'space-around',
				margin: 'auto',
			}}
		>
			<div>
				<h1>Users</h1>
				<hr />
				{userLoading && <h3>Loading...</h3>}
				{userError && <h3>{userError}</h3>}
				{users.map((user) => (
					<li key={user.id}>{user.name}</li>
				))}
			</div>
			<div>
				<h1>Posts</h1>
				<hr />
				{postLoading && <h3>Loading...</h3>}
				{postError && <h3>{postError}</h3>}
				{posts.map((post) => (
					<li key={post.id}>{post.title}</li>
				))}
			</div>
		</div>
	);
};

export default App;
```

এবং আমাদের ui এ আমরা ডাটাগুলো দেখতে পাবো।

![l42-02.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1663572056913/CugmBi7Sz.png)

কিন্তু আমরা দেখতে পাচ্ছি ইউজার এবং পোস্ট দুইটার জন্যই আমরা একইরকম কোড লিখেছি। অর্থাৎ কোড ডুপ্লিকেশন হয়েছে। তাই আমাদের একটা হুক বানাতে হবে। আমরা src/hooks/useFetchData.js নামে একটা ফাইল ক্রিয়েট করবো।

```jsx
import { useEffect, useState } from 'react';

const useFetchData = (url) => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		setLoading(true);
		try {
			const res = await fetch(url);
			const result = await res.json();
			setLoading(false);
			setError('');
			setData(result);
		} catch (error) {
			setLoading(false);
			setData(error.message);
		}
	};

	return {
		data,
		loading,
		error,
	};
};

export default useFetchData;
```

এবার এই হুককে আমরা আমাদের App.jsx এ ব্যবহার করবো।

```jsx
import useFetchData from './hooks/useFetchData';

const App = () => {
	const users = useFetchData('https://jsonplaceholder.typicode.com/users');
	const posts = useFetchData('https://jsonplaceholder.typicode.com/posts');

	return (
		<div
			style={{
				display: 'flex',
				gap: '1rem',
				justifyContent: 'space-around',
				margin: 'auto',
			}}
		>
			<div>
				<h1>Users</h1>
				<hr />
				{users.loading && <h3>Loading...</h3>}
				{users.error && <h3>{users.error}</h3>}
				{users.data.map((user) => (
					<li key={user.id}>{user.name}</li>
				))}
			</div>
			<div>
				<h1>Posts</h1>
				<hr />
				{posts.loading && <h3>Loading...</h3>}
				{posts.error && <h3>{posts.error}</h3>}
				{posts.data.map((post) => (
					<li key={post.id}>{post.title}</li>
				))}
			</div>
		</div>
	);
};

export default App;
```

আমাদের অ্যাপ্লিকেশন ঠিকমতোই কাজ করছে। কিন্তু কোনো কোড রিপিট হয়নি। আমরা চাইলে কমেন্টও শো করতে পারবো।

```jsx
import useFetchData from './hooks/useFetchData';

const App = () => {
	const users = useFetchData('https://jsonplaceholder.typicode.com/users');
	const posts = useFetchData('https://jsonplaceholder.typicode.com/posts');
	const comments = useFetchData(
		'https://jsonplaceholder.typicode.com/comments'
	);

	return (
		<div
			style={{
				display: 'flex',
				gap: '1rem',
				justifyContent: 'space-around',
				margin: 'auto',
			}}
		>
			<div>
				<h1>Users</h1>
				<hr />
				{users.loading && <h3>Loading...</h3>}
				{users.error && <h3>{users.error}</h3>}
				{users.data.map((user) => (
					<li key={user.id}>{user.name}</li>
				))}
			</div>
			<div>
				<h1>Posts</h1>
				<hr />
				{posts.loading && <h3>Loading...</h3>}
				{posts.error && <h3>{posts.error}</h3>}
				{posts.data.map((post) => (
					<li key={post.id}>{post.title}</li>
				))}
			</div>
			<div>
				<h1>Comments</h1>
				<hr />
				{comments.loading && <h3>Loading...</h3>}
				{comments.error && <h3>{comments.error}</h3>}
				{comments.data.map((comment) => (
					<li key={comment.id}>{comment.name}</li>
				))}
			</div>
		</div>
	);
};

export default App;
```

আমাদের পেইজে কমেন্টও শো করবে এখন।

![l42-03.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1663575445862/f68z2a0Jz.png)

এখন আমরা যদি আমাদের হুকে গিয়ে `data` এর ইনিশিয়াল ভ্যালু `null` করে দিই তাহলে আমাদের অ্যাপ্লিকেশন ক্র্যাশ করবে। কারণ `useEffect` কল হবে পরে আগে রেন্ডার হবে। রেন্ডার করতে গিয়ে দেখছে ডাটা `null`। আর `null` এর উপর তো কখনও ম্যাপ হতে পারে না। সেক্ষেত্রে আমরা ম্যাপ করার সময় [optional chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining) ব্যবহার করতে পারি।

```jsx
import useFetchData from './hooks/useFetchData';

const App = () => {
	const users = useFetchData('https://jsonplaceholder.typicode.com/users');
	const posts = useFetchData('https://jsonplaceholder.typicode.com/posts');
	const comments = useFetchData(
		'https://jsonplaceholder.typicode.com/comments'

	return (
		<div
			style={{
				display: 'flex',
				gap: '1rem',
				justifyContent: 'space-around',
				margin: 'auto',
			}}
		>
			<div>
				<h1>Users</h1>
				<hr />
				{users.loading && <h3>Loading...</h3>}
				{users.error && <h3>{users.error}</h3>}
				{users.data?.map((user) => (
					<li key={user.id}>{user.name}</li>
				))}
			</div>
			<div>
				<h1>Posts</h1>
				<hr />
				{posts.loading && <h3>Loading...</h3>}
				{posts.error && <h3>{posts.error}</h3>}
				{posts.data?.map((post) => (
					<li key={post.id}>{post.title}</li>
				))}
			</div>
			<div>
				<h1>Comments</h1>
				<hr />
				{comments.loading && <h3>Loading...</h3>}
				{comments.error && <h3>{comments.error}</h3>}
				{comments.data?.map((comment) => (
					<li key={comment.id}>{comment.name}</li>
				))}
			</div>
		</div>
	);
};

export default App;
```

Optional chaining করার অর্থ হলো, যদি ভ্যালু `null` হয় তাহলে এরর থ্রো করার পরিবর্তে সে `undefined` রিটার্ন করবে। সেক্ষেত্রে অ্যাপ্লিকেশন আর ক্র্যাশ হলো না।

## Modify the incoming data

ধরেন আমরা যে ডাটা পাচ্ছি ইউজার, পোস্ট বা কমেন্টের, আমাদের স্টেটের দিকে তাকালে দেখবো সেখানে এমন কিছু ডাটা আছে যা আমাদের প্রয়োজনই নেই। আমাদের দরকার শুধু নাম বা টাইটেল। অর্থাৎ আমাদেরকে ইনকামিং ডাটাগুলো মডিফাই করার দরকার হতে পারে। অর্থাৎ যে ডাটাগুলো আমাদের দরকার নেই সেগুলোকে আমরা আমাদের স্টেটে রাখবো না। কারণ শুধু শুধু আমরা মেমোরি জ্যাম করে লাভ কি? সেক্ষেত্রে আমরা কি করতে পারি তা এখন দেখবো। আমরা ধরেন যে `users` ডাটা পাচ্ছি সেই ডাটাকে আবার ম্যাপ করতে পারি। কিন্তু ম্যাপ করলেও আমাদের স্টেটে ঠিকই অপ্রয়োজনীয় ডাটা থেকে যাচ্ছে। তাহলে কি করা যায়? আর সবচেয়ে বড় কথা আমাদের হুক সবার জন্য কাজ করবে। তাহলে স্পেসিফিকভাবে কিভাবে আমরা ফিল্টার করবো। এই জায়গায় যে কনসেপ্টটা আমাদের সাহায্য করবে তা হলো কলব্যাক ফাংশন। আমরা দ্বিতীয় প্যারামিটার হিসেবে একটা কলব্যাক নিতে পারি। এবং চেক করে দেখতে পারি যে কলব্যাক পাস করা হয়েছে কিনা। যদি পাস করা হয়ে থাকে তাহলে সেই অনুযায়ী কাজ করবে। আর পাস করা না হলে এখন যেভাবে কাজ করছে সেভাবে করবে।

```jsx
import { useEffect, useState } from 'react';

const useFetchData = (url, cb) => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		setLoading(true);
		try {
			const res = await fetch(url);
			const result = await res.json();
			if (cb) {
				setData(cb(result));
			} else {
				setData(result);
			}
			setLoading(false);
			setError('');
		} catch (error) {
			setLoading(false);
			setData(error.message);
		}
	};

	return {
		data,
		loading,
		error,
	};
};

export default useFetchData;
```

যেহেতু আমরা এখনও কোনো কলব্যাক পাস করিনি তাই আমরা আমাদের অ্যাপ্লিকেশনের চেহারার পরিবর্তন দেখতে পাচ্ছি না। এই কলব্যাক যা রিটার্ন করবে সেটাই আমাদের পেইজে শো হবে।
`users` এর ক্ষেত্রে আমাদের দরকার শুধু নাম আর আইডি। আমরা সেটাকেই শুধু আমাদের স্টেটে রাখবো।

```jsx
const users = useFetchData(
	'https://jsonplaceholder.typicode.com/users',
	(data) => data.map((item) => ({ id: item.id, name: item.name }))
);
```

এভাবে যদি লিখি তাহলে আমাদের স্টেটের দিকে তাকালে আমরা দেখতে পাবো শুধু আইডি আর নামই স্টোর হয়েছে। আর কিছু না।

![l42-04.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1663578599421/dIfzGhmqQ.png)

এভাবে আমরা আমাদের ইনকামিং ডাটাকে মডিফাই করতে পারি। এবার আমরা চাইছি পোস্ট এবং কমেন্ট ১০০টার পরিবর্তে ১০টা শো করতে। এবং সেই সাথে আমাদের স্টেটে পোস্টের ক্ষেত্রে শুধু আইডি ও টাইটেল এবং কমেন্টের ক্ষেত্রে আইডি ও নাম স্টোর হবে। সেটাও আমরা পারি।

```jsx
const posts = useFetchData(
	'https://jsonplaceholder.typicode.com/posts',
	(data) =>
		data.map((item) => ({ id: item.id, title: item.title })).slice(0, 10)
);
const comments = useFetchData(
	'https://jsonplaceholder.typicode.com/comments',
	(data) => data.map((item) => ({ id: item.id, name: item.name })).slice(0, 10)
);
```

দেখবো আমাদের শুধু ১০টি ডাটা শো হচ্ছে।

![l42-05.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1663578790972/Xzqv8U25p.png)

সেই সাথে স্টেটেও শুধু যেই ডাটা আমরা চাইছি সেই ডাটাগুলোই স্টোর হচ্ছে। অপ্রয়োজনীয় কোনো ডাটা স্টোর হচ্ছে না।

![l42-06.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1663579167853/apIYGqENz.png)

## Important Link

[react-use](https://github.com/streamich/react-use) লিংকে অনেক ডেভেলপার অনেক সুন্দর সুন্দর কাস্টম হুক তৈরি করে রেখেছেন। এবং এগুলো সব টেস্টেড। কখনও কোনো কাস্টম হুক বানানোর দরকার পড়লে এখানে এসে চেক করে দেখতে পারেন। যদি পেয়ে যান তাহলে আর নিজে না বানিয়ে এখান থেকে ব্যবহার করতে পারেন।

## Source Code

এই লেকচারের সমস্ত সোর্স কোড আপনারা এই [লিংক](https://github.com/mrhm-dev/full-stack-army/tree/master/src/lecture-42) এ পাবেন।
