# Lecture 48.2 - Track Zone Project Breakdown | Component Tree and Clock Logic

## Introduction

আমরা এই লেকচারে আমাদের কম্পোনেন্ট ট্রী এবং রিকোয়ারমেন্ট ব্রেকডাউন অনুযায়ী কোড করা শুরু করবো। প্রথমে [vite](https://vitejs.dev/) এর মাধ্যমে আমাদের প্রজেক্ট সেটআপ করে নিবো।

```sh
yarn create vite
```

## Project Structure

আমরা নিচের মতো করে আমাদের প্রজেক্ট স্ট্রাকচার তৈরি করে নিবো।

```txt
|- src
    |- App.jsx
    |- main.jsx
    |- components
        |- shared
        |- ui
    |- hooks
    |- utils
```

## Installing styled-components and date-fns

আমরা এবার _styled-components_ এবং _date-fns_ ইনস্টল করে নিবো।

```sh
yarn add styled-components
yarn add date-fns
```

## App Component

আমরা গত লেকচারে বানানো Component Tree লক্ষ্য করি প্রথমে।

![app.jpg](https://cdn.hashnode.com/res/hashnode/image/upload/v1666361105359/qYcHsXUfO.jpg)

আমরা দেখতে পাচ্ছি App কম্পোনেন্টের দুইটা কম্পোনেন্ট আছে। একটা হলো `LocalClock`, অন্যটা `ClockList`। আমরা `components` ডিরেক্টরির মধ্যে এই দুইটা কম্পোনেন্ট বানাবো।

![l48.1-01.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1666413281431/C3-mrwsrL.png)

এরপর সেগুলোকে আমরা App কম্পোনেন্টের মধ্যে সেগুলোকে ব্যবহার করবো।

```jsx
// App.jsx

import ClockList from './components/clock-list';
import LocalClock from './components/local-clock';

const App = () => {
	return (
		<div>
			<LocalClock />
			<ClockList />
		</div>
	);
};

export default App;
```

## Clock logic with useClock hook

আমরা _hooks_ ফোল্ডারের মধ্যে `useClock.js` নামে একটা ফাইল ক্রিয়েট করবো। এখানেই আমরা আমাদের ক্লকের সমস্ত লজিক লিখবো।

প্রথমে আমরা কিছু জিনিস ইনস্পেক্ট করি।

![l48.1-02.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1666416433357/tQDdzawfm.png)

এখানে প্রথমে আমরা জাভাস্ক্রিপ্টের ডিফল্ট `Date` অবজেক্ট কি রিটার্ন করছে সেটা চেক করলাম। দেখা যাচ্ছে আমাদের টাইমজোন _GMT+6_। এবার আমরা `date` এর অফিসিয়াল [mdn documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) এ গেলে `Date.prototype.getTimezoneOffset()` নামে একটা মেথড পাবো। যেটা দিয়ে আমরা আমাদের টাইমজোন অফসেট পাবো। সেটা আমরা পাবো মিনিটে এবং নেগেটিভ। আমরা সামনে মাইনাস দিয়ে গুণ করে এবং ৬০ দিয়ে ভাগ করে আমাদের টাইমজোন অফসেট ঘন্টায় পেয়ে যাবো। এখানে মাইনাস হওয়ার ব্যাপারটা একটু বুঝিয়ে দিই। এখানে যে আউটপুট আমাদেরকে দিচ্ছে সেটা হলো UTC টাইমজোন এবং লোকাল টাইমজোনের মধ্যে পার্থক্য। আমাদের টাইমজোন UTC থেকে ৬ ঘন্টা এগিয়ে। তার মানে আমাদের টাইমজোন, UTC টাইমজোন থেকে বড়। সুতরাং UTC থেকে যদি আমাদের টাইম বাদ দেয়া হয়, অর্থাৎ ছোট থেকে বড় বিয়োগ করলে সেটা তো অবশ্যই মাইনাস হবে। তাই না? আশা করি এই কনফিউশনটা দূর করতে পেরেছি।

এবার আমরা আমাদের লজিক বিল্ডিং এর দিকে মনোযোগ দিই।

আমাদের প্রথম কাজ হলো আমাদের ক্লক ডিফল্টভাবে UTC টাইমজোনে দেখাবে। কিন্তু আমরা `new Date().toLocaleTimeString()` দিয়ে টাইম বের করি সেটা আমাদেরকে লোকাল টাইম দেখাচ্ছে। আমাদের কাজ হলো অফসেট দিয়ে লোকাল টাইমকে UTC তে কনভার্ট করা। আমরা প্রথমে একটা অবজেক্ট নিবো ইনিশিয়াল ডাটার জন্য।

```jsx
const init = {
	id: '',
	title: '',
	timezone: {
		type: '',
		offset: '',
	},
	date_utc: null,
	date: null,
};
```

আমাদের ক্লকের একটা আইডি থাকবে। টাইটেল থাকবে একটা। এরপর টাইমজোনের ক্ষেত্রে টাইপ অর্থাৎ কোন টাইমজোন সেটা থাকবে এবং অফসেট থাকবে। অফসেট শুধুমাত্র UTC এবং GMT এর জন্য অ্যাপ্লিকেবল হবে। PST এবং EST এর জন্য অ্যাপ্লিকেবল হবে না। এরপর আমরা UTC 0 তে ডেট রাখবো date_utc তে। এটা শুধুমাত্র ক্যালকুলেশনের ক্ষেত্রে ব্যবহার হবে। ইউজার ক্লক আমরা date প্রোপার্টির মধ্যে রাখবো।

এবার আমরা স্টেট নিবো একটা। সেটার ইনিশিয়াল ভ্যালু হিসেবে আমরা আমাদের `init` অবজেক্ট ব্যবহার করবো। এরপর আমরা আমাদের UTC ডেইটের জন্য একটা স্টেট নিবো।

```jsx
import { useState } from 'react';

const init = {
	id: '',
	title: '',
	timezone: {
		type: '',
		offset: '',
	},
	date_utc: null,
	date: null,
};

const useClock = (timezone, offset) => {
	const [state, setState] = useState({ ...init });
	const [utc, setUtc] = useState(null);

	return {
		clock: state,
	};
};

export default useClock;
```

এবার আমরা প্রথমে আমাদের UTC টাইম বের করার লজিক লিখে ফেলি।

```js
const useClock = (timezone, offset) => {
	const [state, setState] = useState({ ...init });
	const [utc, setUtc] = useState(null);

	useEffect(() => {
		let d = new Date();
		const localOffset = d.getTimezoneOffset();
		d = addMinutes(d, localOffset);
		setUtc(d);
	}, []);

	return {
		clock: state,
	};
};
```

আমরা যখন পেইজ লোড হবে তখন শুধু প্রথমবার UTC টাইম সেট হবে সেই সিস্টেম করবো। আমরা প্রথমে `d` নামক ভ্যারিয়েবলে একটা ডেইট অবজেক্ট নিয়ে নিলাম। এরপর অফসেট বের করে নিলাম। এরপর আমরা সেই অফসেটের সাথে লোকাল টাইম অ্যাড করে নিলাম _date-fns_ এর `addMinutes()` মেথডের মাধ্যমে। সেই প্রাপ্ত টাইমকে আমরা utc স্টেটের মধ্যে রেখে দিলাম।

এবার আসা যাক বিভিন্ন টাইমজোন অনুসারে টাইম কিভাবে কনভার্ট হবে সেট প্রক্রিয়াতে। আগে আমরা লজিকটা লিখি, এরপর ব্যাখ্যা করবো। তবে তার আগে আমরা একটা অবজেক্ট নিবো। কেন সেটা একটু পরেই বুঝা যাবে।

```js
const TIMEZONE_OFFSET = {
	PST: -7 * 60,
	EST: -4 * 60,
	EDT: -4 * 60,
	BST: 1 * 60,
	MST: -6 * 60,
};
```

এখানে সমস্ত টাইমজোনের অফসেট অবজেক্ট আকারে দিয়ে দেয়া হয়েছে। একটা জিনিস মাথায় রাখবেন যদি টাইমজোন UTC এর থেকে এগিয়ে থাকে তাহলে টাইম নেগেটিভ ধরবেন আর যদি পিছিয়ে থাকে তাহলে পজিটিভ ধরবেন। কেন সেই ব্যাখ্যা উপরে দিয়েছি আমি। চলুন লজিক লিখে ফেলি।

```js
const useClock = (timezone, offset = 0) => {
	const [state, setState] = useState({ ...init });
	const [utc, setUtc] = useState(null);

	useEffect(() => {
		let d = new Date();
		const localOffset = d.getTimezoneOffset();
		d = addMinutes(d, localOffset);
		setUtc(d);
	}, []);

	useEffect(() => {
		if (utc !== null && timezone) {
			offset = TIMEZONE_OFFSET[timezone] ?? offset;
			const newUtc = addMinutes(utc, offset);
			setState({
				...state,
				date_utc: utc,
				date: newUtc,
			});
		} else {
			setState({
				...state,
				date_utc: utc,
				date: utc,
			});
		}
	}, [utc]);

	return {
		clock: state,
	};
};
```

এখানে আমরা প্রথমে দেখলাম যদি আমাদের `utc !== null` হয় এবং কোনো টাইমজোন সিলেক্ট করা হয়, তবে অফসেট আমরা আমাদের `TIMEZONE_OFFSET` থেকে বের করে নিতে পারবো। এরপর নতুন utc ডেইট আমরা আগের মতো করে বের করে নিলাম। শেষে state এর মধ্যে আমরা date_utc এবং date প্রোপার্টিজ আপডেট করে দিলাম। যদি আমাদের শর্ত ফুলফিল না করে তবে আমাদের ডেইট utc ডেইটই শো করবে। চলুন এবার দেখি আমাদের লজিক কাজ করে কিনা।

আমরা App.jsx এ গিয়ে নিচের কোডগুলো লিখবো।

```jsx
import ClockList from './components/clock-list';
import LocalClock from './components/local-clock';
import useClock from './hooks/useClock';

const App = () => {
	const { clock: local } = useClock();
	const { clock: est } = useClock('EST');
	const { clock: pst } = useClock('PST');
	const { clock: pakistan } = useClock('UTC', 5 * 60);
	const { clock: edt } = useClock('EDT');
	const { clock: british } = useClock('BST');
	const { clock: mst } = useClock('MST');

	console.log('local', local.date);
	console.log('est', est.date);
	console.log('pst', pst.date);
	console.log('pakistan', pakistan.date);
	console.log('edt', edt.date);
	console.log('british', british.date);
	console.log('mst', mst.date);

	return (
		<div>
			<LocalClock />
			<ClockList />
		</div>
	);
};

export default App;
```

এবার আমরা আমাদের অ্যাপ্লিকেশন রান করে ব্রাউজারের কনসোলে পাওয়া আউটপুটগুলো গুগলে সার্চ দিয়ে ক্রসচেক করবো। যদি আমাদের প্রাপ্ত আউটপুট এবং গুগলের রেজাল্ট একই হয় তাহলে আমাদের লজিক সঠিকভাবে কাজ করছে। আমার লজিক কাজ করছে। আমি কোনো স্ক্রিনশট দিলাম না কারণ আমি যখন আর্টিকেল লিখছি তখনের টাইম আপনি যে সময়ে পড়ছেন সেই টাইমের সাথে মিলবে না। তাই হয়তো কনফিউজড হতে পারেন। তাই আপনি যে আউটপুট পাবেন সেটা আপনি একটু চেক করে নিলেই আপনি শিওর হবেন আপনার লজিক কাজ করছে কি করছে না।

## Source Code

এই লেকচারে সোর্স কোড এই [লিংক](https://github.com/mrhm-dev/full-stack-army/tree/master/src/lecture-48.2/track-zone) এ পাবেন।
