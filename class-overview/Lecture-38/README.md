# Lecture 38 - JSON to JSX to JSON Thinking with A Small Project

%[https://youtu.be/3JUvn3uoUBI]

## Introduction

এতদিন আমরা JSON to JSX ডাটা রূপান্তরিত করেছি। JSON থেকে ডাটা নিয়ে তা কম্পোনেন্ট আকারে শো করেছি। কিন্তু আমরা যা করেছি সেটার জন্য রিয়্যাক্ট শেখার কোনো প্রয়োজন নাই। আমরা ডাটা ব্যাকএন্ড থেকে নিয়ে ejs টেমপ্লেট ইঞ্জিন, পিএইচপি, জ্যাঙ্গো মাধ্যমে এইচটিএমএল পেইজটাকে শো করতে পারি, বিভিন্ন কন্ডিশন, লজিক, লুপ, ম্যাপ সব করতে পারি। এই পার্টটা করার জন্য আমাদের এত কষ্ট করে রিয়্যাক্ট শেখার প্রয়োজন নেই। তাহলে প্রশ্ন করতে পারেন এত কষ্ট করে আমরা এটা শিখলাম কেন? এটা শিখলাম কারণ এটা হচ্ছে রিয়্যাক্টের একটা বোনাস পার্ট। এটা না শিখলে আমরা রিয়্যাক্টের আসল কাজ বুঝতে পারতাম না। আমরা যা যা শিখছি তার সবই আমরা ব্যবহার করবো ভবিষ্যতে। কিন্তু শুধুমাত্র এগুলোর জন্য রিয়্যাক্ট আসেনি। কারণ এই কাজটা বছরের পর বছর জুড়ে পিএইচপি করে আসছে। তাহলে রিয়্যাক্ট কেন এসেছে?

## রিয়্যাক্ট কেন শিখবো নতুন করে

আমরা এখন অ্যাপ্লিকেশন ইনস্টল করে ব্যবহার করার চেয়ে ওয়েবে গিয়ে ব্যবহার করাতেই স্বাচ্ছন্দ্যবোধ করি। একটা অ্যাপ্লিকেশন নামিয়ে ইনস্টল করে রেগুলার আপডেট রাখা অনেক বিরক্তিকর। তার চেয়ে জাস্ট ব্রাউজারে গিয়ে আমরা সেই ওয়েব অ্যাপের লিংকে ঢুকে তা ব্যবহার করা অনেক সহজ। কিছু গুরুত্বপূর্ণ ওয়েব অ্যাপের উদাহরণও আমরা দিতে পারি যা প্রতিদিন আমরা ব্যবহার করি। যেমন - গুগল ডকস, গুগল স্লাইডস, গুগল শীটস, ফিগমা, ক্যানভা ইত্যাদি। যতই দিন যাচ্ছে মানুষ পিসিতে অ্যাপ ব্যবহার করার চেয়ে ওয়েব অ্যাপের দিকে বেশি ঝুঁকছে। কারণ পিসিতে ইনস্টল করলে সেটা আমার পিসির অ্যাক্সেস পেয়ে যাচ্ছে। সেক্ষেত্রে অনেক সিকিউরিটি সমস্যা হতে পারে। কিন্তু ব্রাউজারে কোনো ওয়েবসাইট সরাসরি আমাদের পিসির অ্যাক্সেস নিতে পারে না। সেক্ষেত্রে আমরা নিশ্চিন্ত। এখন ওয়েবে গিয়ে ব্যবহার করাটাতো বড় ব্যাপার না। সেই অ্যাপকে ইউজার যেন স্বচ্ছন্দে ব্যবহার করতে পারি সেটা মেইনটেইন করাটাই বড় ব্যাপার। যেমন একটা ফটো এডিটিং অ্যাপের শত শত ফিচার্স থাকতে পারে। সেগুলো তো আর সার্ভারে থাকবে না। সেগুলো থাকতে হবে ফ্রন্টএন্ডে। অর্থাৎ তার সম্পূর্ণ এক্সেস থাকতে হবে ইউজারের কাছে। ইউজার যেমন খুশি সেভাবে ক্লিক করে করে এডিটিং করবে। এখন প্রতি ক্লিকে যদি লোড নিয়ে নিয়ে কাজ করতে হয় সেক্ষেত্রে ইউজার কেন সেই অ্যাপ ইউজ করবে। যার ইউজার এক্সপেরিয়েন্স খুবই বাজে। ইউজার চায় ইনস্ট্যান্ট অ্যাকশন। ক্লিক করবো আর সাথে সাথে সেই কাজটা হবে। আবার প্রতিটা ক্লিকের সাথে সাথেই আমরা যা করছি তা ইনস্ট্যান্ট ডাটাবেজে সেইভ হয়ে যাচ্ছে। সেটা আমরা টেরও পাচ্ছি না। আমাদের আলাদাভাবে সেইভ করা নিয়ে ভাবতে হচ্ছে না। তা সাথে সাথেই সেইভ হয়ে যাচ্ছে। এই এক্সপেরিয়েন্সটা আমরা ডেস্কটপ অ্যাপ্লিকেশনে পেয়ে থাকি। এখন সেই এক্সপেরিয়েন্সটা আমরা পেতে চাই ওয়েব অ্যাপের ক্ষেত্রেও। মোটকথা ইউজার এখন কোনো স্ট্যাটিক পেইজ পড়তে চায় না। তারা ইনট্যারেক্ট করতে চায়। তারা চায় ফেসবুকে পোস্ট করতে, ইনস্ট্যান্ট লাইক, কমেন্ট, শেয়ার করতে। অর্থাৎ দিন দিন ইউজারে ডিমান্ড বেড়ে যাচ্ছে। যেহেতু ইউজারে ডিমান্ড বেড়ে গেছে সেহেতু ডেভেলপমেন্ট জগতও অনেক চেইঞ্জ হতে হয়েছে। এই ইউজার ইনট্যারেক্টিভিটিই হলো সবচেয়ে কঠিন কাজ। ইউজারকে ডাটা দেখানো কোনো কঠিন কাজ না। ইউজার থেকে ডাটা নেয়াটা হচ্ছে কঠিন। এই কাজের জন্য আমাদের দরকার রিয়্যাক্ট। কারণ ইউজার যা ক্রিয়েট করবে সেই ডাটাগুলো আমাদের সার্ভারে ক্রিয়েট হয় না। সেগুলো ক্রিয়েট হবে ফ্রন্টএন্ডে অর্থাৎ ব্রাউজারে। এখন কারো ব্রাউজার কিন্তু সার্ভারের সাথে কানেক্টেড না। আমরা এপিআই দিয়ে কানেক্ট করতে পারি। কিন্তু করলেও যে কাজটা ব্রাউজারে হচ্ছে সেই কাজটাই হুবুহু আমাদের সার্ভারে পৌঁছানো দরকার। অর্থাৎ আমাদের স্টেটকে ব্যাকএন্ডে সেইভ করে রাখার জন্য একটা সহজ সিস্টেম দরকার। সেই সিস্টেমটাই আমাদেরকে প্রোভাইড করে থাকে রিয়্যাক্ট এবং এর মতো ফ্রন্টএন্ড ফ্রেমওয়ার্কগুলো। সহজ কথায় রিয়্যাক্ট ওয়েবসাইট বানানোর জন্য আসেনি, এসেছে ওয়েব অ্যাপ বানানোর জন্য। আমরা ম্যাক্সিমাম ক্ষেত্রেই রিয়্যাক্ট ব্যবহার করে ওয়েবসাইট বানাই। প্র্যাকটিস করি ওয়েবসাইট বানিয়ে। যেটা ভুল। আমাদের প্র্যাকটিস প্রজেক্ট হিসেবেও এমন প্রজেক্ট বানাতে হবে যেখানে প্রচুর ইউজার ইনট্যারেকশন হবে।

এখন ইউজার ইনট্যারেকশন বলতে আমরা কি বুঝি? ধরেন একটা বাটন ক্লিক করলাম আমরা। সেটা কিছু একটা করলো। সেই ক্লিক ইভেন্টটাকেই আমাদের নিতে হবে। বাটন ক্লিক করার পর ধরেন একটা স্পেসিফিক কিছু হলো। সেই স্পেসিফিক কিছুর রেফারেন্সটা আমাদের থাকতে হবে। তারপর ধরেন একটা অ্যানিমেশন চলবে। সেটা কিভাবে চলবে, কিভাবে শেষ হবে, কতক্ষণ চলবে সেই কন্ট্রোলও আমাদের হাতে রাখতে হবে। তারপর ক্লিকের কারণে কোথাও ডাটা চেইঞ্জ হলো। সেটাও আমাদের মাথায় রাখতে হবে। আমরা ক্লিক করছি এটাই কাজ না। আমরা ডাটা শো করছি, সেটাকে স্টোর করছি, কোনো ডাটাকে রিকোয়ারমেন্ট অনুসারে শো করছি এই জিনিসগুলোই হলো ইউজার ইন্ট্যারেক্টিভিটি। অর্থাৎ ইউজার যা চায় তাই যেন আমরা তাকে দিতে পারি, তার জন্য যা যা করা লাগে সেগুলোই হলো ইউজার ইন্ট্যারেক্টিভিটি। এই ইন্ট্যারেক্টিভিটি করার জন্যই আমরা আসলে রিয়্যাক্ট শিখছি।

## ফ্রন্টএন্ড ডেভেলপারদের কাজ

ফ্রন্টএন্ড ডেভেলপার হিসেবে আমাদের কাজ মূলত দুইটা।

- JSON থেকে ডাটা JSX এ রূপান্তর করা।
- ইউজার যে ডাটা ক্রিয়েট করবে সেটা ডাটাবেজে স্টোর করা।

এই দুইটাই মূলত ফ্রন্টএন্ডের কাজ। এই দুইটা কাজ করার জন্যই মূলত ফ্রন্টএন্ড ফেমওয়ার্কগুলো এসেছে।

## প্রজেক্ট টাইম

প্রথমে আমরা আমাদের রিয়্যাক্ট অ্যাপ্লিকেশন scaffold করে নিবো [vite](https://vitejs.dev/) এর মাধ্যমে।

## UI তৈরি

প্রথমে আমরা আমাদের UI এর জন্য কোড লিখে ফেলি।

```jsx
// App.jsx

const App = () => {
	return (
		<div style={{ width: '50%', margin: '0 auto' }}>
			<h1>Result: 0</h1>
			<div>
				<p>Inputs</p>
				<input type="number" />
				<input type="number" />
			</div>
			<div>
				<p>Operations</p>
				<button>+</button>
				<button>-</button>
				<button>*</button>
				<button>/</button>
				<button>Clear</button>
			</div>
			<div>
				<p>History</p>
			</div>
		</div>
	);
};

export default App;
```

![ui-01.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1661752109496/FKkdDlmGl.png align="center")

আমরা প্রতিটা অপারেশনের পরে সেই অপারেশন হিস্টোরি নিচে শো করবো। প্রতিটা হিস্টোরির সাথে একটা করে রিস্টোর বাটন থাকবে। আমরা সেই অপারেশনকে চাইলে পরে রিস্টোর করতে পারবো। অর্থাৎ আমরা আমাদের অপারেশনকে ট্র্যাকিং করবো।

## অ্যাপ্লিকেশনের কাজগুলো কি কি

আমরা অ্যাপ্লিকেশনের কি কি কাজ থাকতে পারে সেগুলো ডিভাইড করে ফেলি।

- Handle User Input Fields - আমরা ব্রাউজারে গেলে দেখবো আমাদের ইনপুট ফিল্ডগুলোতে লেখা যাচ্ছে। অর্থাৎ ইনপুট ফিল্ডগুলো আনকন্ট্রোল্ড ভাবে আছে। আমাদের কাজ হলো এই ফিল্ডগুলোকে নিজেদের কন্ট্রোলে নিয়ে আসা। যখনই সেগুলো আমাদের কন্ট্রোলে নিয়ে আসতে পারবো তখনই সেটা হয়ে যাবে কন্ট্রোলড কম্পোনেন্ট।
- Handle operations - আমাদের রেজাল্ট জেনারেট হবে ইনপুট আর অপারেশন্সের উপর ভিত্তি করে। তাই আমাদের আর আলাদা করে রেজাল্ট হ্যান্ডেল করতে হবে না। আমরা যদি শুরুতেই রেজাল্ট হ্যান্ডেল করতে যেতাম সেক্ষেত্রে ভুল করতাম।
- Handle a list of histories
- Render history list
- Restore the history

এবার এক এক করে আমরা আমাদের কাজ শুরু করবো।

### Handle User Input Fields

আমরা আমাদের বিগত ক্লাসগুলোর অভিজ্ঞতার আলোকে বুঝতে পারছি ইনপুট ফিল্ডগুলোর জন্য আমাদের স্টেট নিতে হবে। এখন যেহেতু দুইটা ফিল্ড আমরা স্টেটগুলো দুইটা ভ্যারিয়েবলের মধ্যেও নিতে পারি বা একটা ভ্যারিয়েবলের মধ্যে অবজেক্ট আকারে নিতে পারি। এক্ষেত্রে যদি একটা ভ্যারিয়েবলের মধ্যে নিই আমাদের সেই ডাটাগুলো নিয়ে কাজ করতে সুবিধা হবে। যদি দুইটা ভ্যারিয়েবলে রাখি সেক্ষেত্রে সব কাজ আমাদের দুইভাবে করতে হবে। তাই আমরা একটা ভ্যারিয়েবলের মধ্যে অবজেক্ট আকারে স্টেটগুলো নিবো।

```jsx
import { useState } from 'react';

const initialInputState = {
	a: 0,
	b: 0,
};

onst App = () => {
	const [inputState, setInputState] = useState({ ...initialInputState });
	return (
		<div style={{ width: '50%', margin: '0 auto' }}>
			<h1>Result: 0</h1>
			<div>
				<p>Inputs</p>
				<input type="number" value={inputState.a} />
				<input type="number" value={inputState.b} />
			</div>
			<div>
				<p>Operations</p>
				<button>+</button>
				<button>-</button>
				<button>*</button>
				<button>/</button>
				<button>Clear</button>
			</div>
			<div>
				<p>History</p>
				<p>
					<small>There is no history</small>
				</p>
			</div>
		</div>
	);
};

export default App;
```

এখানে আলাদাভাবে বাইরে অবজেক্টটি নেয়ার কারণ হলো যেহেতু এখানে একটি ক্লিয়ার অপশন আছে, অর্থাৎ যখন আমরা ক্লিয়ার বাটনে ক্লিক করবো তখন ডাটা আবার প্রাথমিক অবস্থায় ফিরে যাবে। সেক্ষেত্রে আমাদেরকে এই অবজেক্টটা দুইবার ব্যবহার করতে হবে। তাই আমরা এটাকে একটা ভ্যারিয়েবলের মধ্যে নিয়ে নিলাম। আর স্টেট ডিফাইনের সময় স্প্রেড অপারেটর ব্যবহার করার উদ্দেশ্য হলো আমাদের মেইন অবজেক্ট যেন যেকোনো ডাটা চেইঞ্জের পর অক্ষত থাকে। আমরা যেন কোনো রিস্ক না রাখি। এরপর আমরা আমাদের ইনপুট ফিল্ডে ভ্যালু হিসেবে এই ভ্যালুগুলো দিয়ে দিলাম। এবার যদি আমাদের UI খেয়াল করি দেখবো আমাদের ইনপুট ফিল্ডে 0 চলে এসেছে। সেটা ছাড়াও একটা এরর এসেছে কনসোলে।

![ui-02.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1661754239203/BS-79olih.png align="center")

এখানে বলা হচ্ছে `A component is changing an uncontrolled input to be controlled.`। সেটা কিভাবে কন্ট্রোল্ড হলো? কারণ আমরা স্টেট দিয়ে সেটাকে বাইন্ড করে দিয়েছি। আর যখনই আমরা কোনো ফিল্ডকে আমাদের কন্ট্রোলে নিয়ে আসবো তখন ব্রাউজার সেটার উপর থেকে সমস্ত কর্তৃত্ব ছেড়ে দিয়ে আমাদের হাতে দিয়ে দিবে। সেক্ষেত্রে কিভাবে সেই ডাটা আপডেট করতে হবে সেটাও আমাদের লিখতে হবে। নাহয় আপনারা চেষ্টা করে দেখলে দেখবেন ডাটা কোনোভাবেই আপডেট হবে না। সেই ওয়ার্নিংটাই রিয়্যাক্ট আমাদের কনসোলে দিয়ে দিচ্ছে। এটা আমরা করতে পারি `onChange` হ্যান্ডলার ব্যবহারের মাধ্যমে। আমরা একটা ফাংশন বানাবো প্রথমে। এরপর সেটা আমরা দুইটা ইনপুট ফিল্ডে onChange হ্যান্ডলার হিসেবে বসিয়ে দিবো।

```jsx
const App = () => {
	const [inputState, setInputState] = useState({ ...initialInputState });

	const handleInputChange = (e) => {
		console.log(e.target);
	};
	return (
		<div style={{ width: '50%', margin: '0 auto' }}>
			<h1>Result: 0</h1>
			<div>
				<p>Inputs</p>
				<input
					type="number"
					value={inputState.a}
					onChange={handleInputChange}
				/>
				<input
					type="number"
					value={inputState.b}
					onChange={handleInputChange}
				/>
			</div>
			<div>
				<p>Operations</p>
				<button>+</button>
				<button>-</button>
				<button>*</button>
				<button>/</button>
				<button>Clear</button>
			</div>
			<div>
				<p>History</p>
				<p>
					<small>There is no history</small>
				</p>
			</div>
		</div>
	);
};
```

কিন্তু এখানে একটা সমস্যা আছে। সেটা কি আমরা ব্রাউজারে দেখি।

![ui-03.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1661755100140/7gKoP1nLF.png align="left")

আমরা যে ইনপুটেই চেইঞ্জ করিনা কেন সবসময় একই রকম টার্গেট আসছে। তাহলে আমরা কিভাবে বুঝবো কোন ইনপুট ফিল্ডে চেইঞ্জ হচ্ছে? সেটা খুব সহজেই করা যায়। আমরা আমাদের ইনপুট ফিল্ডে name অ্যাট্রিবিউট ব্যবহার করে আলাদা আলাদা নাম দিয়ে দিতে পারি। অর্থাৎ -

```jsx
<div>
	<p>Inputs</p>
	<input
		type="number"
		value={inputState.a}
		onChange={handleInputChange}
		name="a"
	/>
	<input
		type="number"
		value={inputState.b}
		onChange={handleInputChange}
		name="b"
	/>
</div>
```

এবং আমাদের ফাংশনে আমরা e.target ব্যবহারের পরিবর্তে e.target.name ব্যবহার করবো।

```jsx
const handleInputChange = (e) => {
	console.log(e.target.name);
};
```

এবার যদি আমরা ব্রাউজারে যায় দেখবো যেই ইনপুট চেইঞ্জ হচ্ছে তার না দেখাচ্ছে।

![ui-04.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1661755714381/C5eFmb0SF.png align="left")

এবার আমাদের ফাংশনটার মেইন লজিক আমরা লিখে ফেলি। আমাদের মেইন কাজ স্টেট আপডেট করা। কিন্তু আগের ডাটাও হারিয়ে ফেলা যাবেনা। আগের ডাটা সহ কিভাবে নতুন ডাটা পেতে পারি তা দেখা যাক। এর অনেক সল্যুশন আছে। এক এক করে আমরা দেখবো।

#### Solution 01

```jsx
const handleInputChange = (e) => {
	setInputState({
		...inputState,
		[e.target.name]: parseInt(e.target.value),
	});
};
```

এবার স্টেট চেইঞ্জ হচ্ছে কিনা ঠিকভাবে তা দেখার জন্য আমরা [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en) নামে একটা ক্রোম এক্সটেনশন ব্যবহার করবো। এটা ইনস্টল করার পর নিচের ছবির মতো পাবেন। সেখান থেকে Component এ ক্লিক করবেন।

![react-tools.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1661756324832/3PDcIwW8T.png align="center")

আপনারা খেয়াল করলে দেখবেন নিচের ছবির মার্ক করা জায়গায় প্রাথমিক স্টেটের ভ্যালু দেখাচ্ছে।

![ui-05.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1661756384401/ckaGme9Fh.png align="left")

এরপর যদি ইনপুট ফিল্ডে চেইঞ্জ করি তাহলে স্টেটও চেইঞ্জ হবে।

![ui-06.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1661756422395/qm4-XUS1V.png align="left")

এটা খুবই সুন্দর একটা সমাধান। কিন্তু এই কোডটা একটু জটিল। কোনো বিগিনার যদি আমাদের কোম্পানিতে নতুন জয়েন করে তাহলে সে এই কোড দেখে ঘাবড়ে যেতে পারে। তাই এই সল্যুশনটা আমরা ব্যবহার না করে সহজ কোনো সল্যুশন বানাতে পারি কিনা দেখি।

#### Solution 02

আমরা আলাদাভাবে দুইটা হ্যান্ডলার ফাংশন বানিয়ে নিতে পারি।

```jsx
const handleInputA = (e) => {
	setInputState({
		...inputState,
		a: parseInt(e.target.value),
	});
};

const handleInputB = (e) => {
	setInputState({
		...inputState,
		b: parseInt(e.target.value),
	});
};
```

এক্ষেত্রে যদিও আমাদের কাজ হবে এবং কোডটা দেখতেও অনেক সহজ কিন্তু এখানে বড় সমস্যা হচ্ছে কোড ডুপ্লিকেশন হচ্ছে। আমাদের যদি কোনোকিছু ডিবাগ করতে হয় বা কিছু চেইঞ্জ করতে হয় প্রতিটা ফাংশনে গিয়ে সেটা করতে হবে। সুতরাং এটাও ভাল কোনো সল্যুশন না। আমরা আরো একটা কাজ করতে পারি।

#### Solution 03

```jsx
const handleInputChange = (key, value) => {
	setInputState({
		...inputState,
		[key]: parseInt(value),
	});
};
```

এবং আমাদের ইনপুট ট্যাগে গিয়ে onChange হ্যান্ডলারকে লিখতে পারি -

```jsx
<div>
	<p>Inputs</p>
	<input
		type="number"
		value={inputState.a}
		onChange={(e) => handleInputChange('a', e.target.value)}
		name="a"
	/>
	<input
		type="number"
		value={inputState.b}
		onChange={(e) => handleInputChange('b', e.target.value)}
		name="b"
	/>
</div>
```

আমরা প্রথমে যেটা করেছিলাম সেটাই তো তাহলে ভাল ছিল। কারণ এখানে আবার আলাদাভাবে onChange এর মধ্যে ফাংশন লিখতে হচ্ছে। সুতরাং এটাও ভাল সল্যুশন না।

#### Solution 04

```jsx
const handleInputChange = (inp) => {
	setInputState({
		...inputState,
		...inp,
	});
};
```

```jsx
<div>
	<p>Inputs</p>
	<input
		type="number"
		value={inputState.a}
		onChange={(e) => handleInputChange({ a: parseInt(e.target.value) })}
		name="a"
	/>
	<input
		type="number"
		value={inputState.b}
		onChange={(e) => handleInputChange({ b: parseInt(e.target.value) })}
		name="b"
	/>
</div>
```

তার মানে আমরা বুঝলাম একটা সমস্যা অনেকভাবে সলভ করা যায়। কিন্তু বেস্ট অ্যাপ্রোচ হচ্ছে প্রথম সল্যুশনটা। আমরা সেটাই ব্যবহার করবো।

### Handle operations

প্রথমে আমরা clear অপারেশনের কাজ করবো।

```jsx
const handleClearOps = () => {
	setInputState({ ...initialInputState });
};

<div>
	<p>Operations</p>
	<button>+</button>
	<button>-</button>
	<button>*</button>
	<button>/</button>
	<button onClick={handleClearOps}>Clear</button>
</div>;
```

এবার ক্লিয়ার বাটনে ক্লিক করলে সেটা ইনপুট ফিল্ডে যাই থাক আগের অবস্থানে ফিরিয়ে নিয়ে যাবে।

এবার অন্যান্য অপারেশনের জন্য একটা ফাংশন বানাবো।

```jsx
const handleArithmeticOps = (operation) => {
	console.log(operation);
};
```

এবার সব বাটনে এই হ্যান্ডলার ফাংশন যুক্ত করবো।

```jsx
<div>
	<p>Operations</p>
	<button onClick={() => handleArithmeticOps('+')}>+</button>
	<button onClick={() => handleArithmeticOps('-')}>-</button>
	<button onClick={() => handleArithmeticOps('*')}>*</button>
	<button onClick={() => handleArithmeticOps('/')}>/</button>
	<button onClick={handleClearOps}>Clear</button>
</div>
```

এবার যদি ব্রাউজারে গিয়ে দেখি দেখবো যেই বাটনে ক্লিক করছি সেটাই কনসোলে প্রিন্ট হচ্ছে।

![ui-07.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1661760586494/etGuxDtDg.png align="left")

এখন এখানে একটা প্রশ্ন আসতে পারে আমরা innerText দিয়েই তো অপারেশন পেতে পারতাম, কেন নিলাম না? কারণ এখানে একটা সমস্যা আছে। সেটা হলো ধরেন আমরা বাটনের নাম চেইঞ্জ করে 'Add' রাখলাম। যদি আমরা innerText বা textContent নিয়ে কাজ করতাম তাহলে আমাদের আউটপুট আসতো Add। সেক্ষেত্রে কি আমরা অপারেশন করতে পারতাম Add দিয়ে? এই সমস্যার কারণেই মূলত আমরা এই কাজটা করবো না। আমরা এভাবে ফাংশন বানিয়ে কাজ করবো। এবার আমরা আমাদের ফাংশনের কাজ শেষ করি।

```jsx
const handleArithmeticOps = (operation) => {
	const f = new Function(
		'operation',
		`return ${inputState.a} ${operation} ${inputState.b}`
	);
	console.log(f(operation));
};
```

এবার যদি চেক করি দেখবো আমাদের অপারেশনগুলো পারফেক্টলি কাজ করছে।

![ui-08.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1661761482947/tnpSBa9ZU.png align="left")

এবার কাজ কিন্তু শেষ হয় নাই। কারণ আমরা যে রেজাল্ট পেলাম সেটাকে সবার উপরে শো করতে হবে। এখানে স্টেট চেইঞ্জ হচ্ছে। সুতরাং আমাদেরকে একটা স্টেট নিতে হবে App ফাংশনের মধ্যে।

```jsx
const [result, setResult] = useState(0);
```

এবার আমাদের `h1` ট্যাগে 0 এর পরিবর্তে আমরা result বসিয়ে দিবো।

```jsx
<h1>Result: {result}</h1>
```

এরপর আমাদের handleArithmeticOps ফাংশনে আমরা রেজাল্টের স্টেট আপডেট করবো।

```jsx
const handleArithmeticOps = (operation) => {
	const f = new Function(
		'operation',
		`return ${inputState.a} ${operation} ${inputState.b}`
	);
	setResult(f(operation));
};
```

এবার এক এক করে আমরা সমস্ত অপারেশন দেখবো।

![plus.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1661762640825/qGg1_0Ahg.png align="left")

![minus.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1661762651794/TIGBOU4da.png align="left")

![multiply.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1661762661549/CWU7HUetd.png align="left")

![divide.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1661762666920/h0tgq0WW0.png align="left")

কিন্তু ক্লিয়ার বাটনে ক্লিক করলে দেখুন ইনপুট ক্লিয়ার হচ্ছে, কিন্তু রেজাল্ট ক্লিয়ার হচ্ছে না।

![clear.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1661762712269/F17cy-yDH.png align="left")

সেজন্য আমাদের handleClearOps ফাংশনে `setResult(0)` এই কোডটি লিখতে হবে।

```jsx
const handleClearOps = () => {
	setInputState({ ...initialInputState });
	setResult(0);
};
```

এবার দেখবেন ক্লিয়ার বাটনে ক্লিক করলে রেজাল্টও প্রাথমিক স্টেটে ফিরে যাবে অর্থাৎ ০ হয়ে যাবে।

আমরা handleArithmeticOps এর ভিতর কাস্টম ফাংশন না বানিয়ে `eval` ব্যবহার করেও কাজটা করতে পারতাম।

```jsx
const handleArithmeticOps = (operation) => {
	setResult(eval(`${inputState.a} ${operation} ${inputState.b}`));
};
```

আপনারা চেক করলেই বুঝতে পারবেন সঠিকভাবেই আমরা আউটপুট পাচ্ছি। কাস্টম ফাংশন বা `eval` দুইটার যেকোনো একটা ব্যবহার করে এই কাজ করা যায়। সুবিধা হচ্ছে যদি ধরেন আমাদের আরেকটা অপারেশন বৃদ্ধি পেলো। আমরা ভাগশেষ বের করতে চাইছি।

```jsx
<div>
	<p>Operations</p>
	<button onClick={() => handleArithmeticOps('+')}>+</button>
	<button onClick={() => handleArithmeticOps('-')}>-</button>
	<button onClick={() => handleArithmeticOps('*')}>*</button>
	<button onClick={() => handleArithmeticOps('/')}>/</button>
	<button onClick={() => handleArithmeticOps('%')}>%</button>
	<button onClick={handleClearOps}>Clear</button>
</div>
```

তাহলে আমাদের ফাংশনে কোনো হাত দেয়ার দরকার নেই। আমরা সঠিকভাবে ভাগশেষ পাবো।

![mod.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1661763497286/LHX66WsEh.png align="left")

যদি আমরা সুইচ কেস নিয়ে কাজ করতাম তাহলে কিন্তু প্রতিটা অপারেশন বৃদ্ধির সাথে সাথে আমাদের ফাংশনকেও আপডেট করতে হতো। সেটা আর ডায়নামিক হলো না।

### Handle a list of histories

এই অংশে আমরা কি করেছি তার বিস্তারিত, একটা টাইমস্ট্যাম্প এবং ঐ স্টেটে রিটার্ন যাওয়ার একটা সিস্টেম এভাবে চাইছি। অর্থাৎ

```jsx
<div>
	<p>History</p>
	<p>
		<small>There is no history</small>
		<ul>
			<li>
				<p>Operations: 10 + 30, Result = 40</p>
				<small>8/29/2022</small>
				<button>Restore</button>
			</li>
		</ul>
	</p>
</div>
```

![history-01.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1661764348205/cr6haka4i.png align="left")

এভাবে চাইছি। এবার আমাদের প্রথম কাজ JSON বের করা। আমরা handleArithmeticOps এ একটা অবজেক্ট বানাবো।

```jsx
const handleArithmeticOps = (operation) => {
	const f = new Function(
		'operation',
		`return ${inputState.a} ${operation} ${inputState.b}`
	);
	setResult(f(operation));

	// setResult(eval(`${inputState.a} ${operation} ${inputState.b}`));

	const history = {
		id: getId.next().value,
		inputs: { ...inputState },
		operation,
		result,
		date: new Date(),
	};

	console.log(history);
};
```

App ফাংশনের বাইরে আমরা জেনারেটরের মাধ্যমে আইডি জেনারেট করবো।

```jsx
function* generateId() {
	let id = 0;

	while (true) {
		yield id++;
	}
}

const getId = generateId();
```

এবার যদি আমরা অপারেশন বাটনগুলোকে ক্লিক করি তাহলে কনসোলে নিচের মতো আউটপুট দেখাবে।

![history-02.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1661766439460/naRNpHw-A.png align="left")

এবার আমরা যদি কোনো ইনপুট না দিই তাহলে আমাদেরকে একটা ম্যাসেজ দিবে সেই সিস্টেমটা করবো।

```jsx
const handleArithmeticOps = (operation) => {
	if (!inputState.a || !inputState.b) {
		alert('Invalid Input');
		return;
	}

	const f = new Function(
		'operation',
		`return ${inputState.a} ${operation} ${inputState.b}`
	);
	setResult(f(operation));

	// setResult(eval(`${inputState.a} ${operation} ${inputState.b}`));

	const history = {
		id: getId.next().value,
		inputs: { ...inputState },
		operation,
		result,
		date: new Date(),
	};
	console.log(history);
};
```

এবার এই হিস্টোরি অবজেক্টকে তো একটা জায়গায় রাখতে হবে। তার জন্য আমরা একটা স্টেট নিবো।

```jsx
const App = () => {
	const [histories, setHistories] = useState([]);
};
```

এবার আমাদের স্টেট আপডেট করার কোড লিখবো।

```jsx
const handleArithmeticOps = (operation) => {
	if (!inputState.a || !inputState.b) {
		alert('Invalid Input');
		return;
	}

	const f = new Function(
		'operation',
		`return ${inputState.a} ${operation} ${inputState.b}`
	);
	const result = f(operation);
	setResult(result);

	// setResult(eval(`${inputState.a} ${operation} ${inputState.b}`));

	const history = {
		id: getId.next().value,
		inputs: { ...inputState },
		operation,
		result,
		date: new Date(),
	};
	setHistories({ history, ...histories });
};
```

এবার আমাদের JSX কোডকে একটু মডিফাই করি।

```jsx
<div>
	<p>History</p>
	{histories.length === 0 ? (
		<p>
			<small>There is no history</small>
		</p>
	) : (
		<ul>
			{histories.map((historyItem) => (
				<li key={historyItem.id}>
					<p>
						Operations: {historyItem.inputs.a} {historyItem.operation}{' '}
						{historyItem.inputs.b}, Result = {historyItem.result}
					</p>
					<small>
						{historyItem.date.toLocaleDateString()}{' '}
						{historyItem.date.toLocaleTimeString()}
					</small>

					<button>Restore</button>
				</li>
			))}
		</ul>
	)}
</div>
```

### Render history list

এবার আমরা এক এক করে এই লিস্ট রেন্ডারিং দেখবো।

![render-01.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1661768417990/iZ8A6yzKU.png align="left")

![render-02.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1661768423522/Z4pgXffwU.png align="left")

![render-03.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1661768432142/nB_snmgSQ.png align="left")

![render-04.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1661768440049/1vPn6c5I8.png align="left")

![render-05.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1661768449236/t2kb9F0I0.png align="left")

![render-06.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1661768457437/Ub6A2IfIH.png align="left")

### Restore the history

যথারীতি আমাদের একটা হ্যান্ডলার ফাংশন লাগবে.

```jsx
const [restoredHistory, setRestoredHistory] = useState(null);

const handleRestoreBtn = (history) => {
	setInputState({ ...history.inputs });
	setResult(history.result);
	setRestoredHistory(history.id);
};
```

এবার আমরা আমাদের বাটনে onClick হিসেবে এই ফাংশন দিয়ে দিবো এবং ডিজেবল লজিক লিখবো।

```jsx
<button
	onClick={() => handleRestoreBtn(history)}
	disabled={restoredHistory !== null && restoredHistory === history.id}
>
	Restore
</button>
```

এবার দেখুন আমাদের রিস্টোর বাটন সঠিকভাবে কাজ করছে।

![restore-01.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1661770115079/E3bOpKYqu.png align="left")

![restore-02.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1661770125903/CMwmXhhZo.png align="left")

## Source Code

এই লেকচারের সমস্ত সোর্স কোড এই [লিংক](https://github.com/mrhm-dev/full-stack-army/tree/master/src/lecture-38/react-demo) এ পাবেন।
