# Lecture 35 [Frontend 8] - JSON to JSX | Importance of Structuring Data

%[https://youtu.be/rp97rUwOcjs]

## Introduction

আজকের ক্লাসে ডাটা ইঞ্জিনিয়ারিং নিয়ে কিভাবে রিয়্যাক্টে বা ফ্রন্তএন্ড অ্যাপ্লিকেশনের ক্ষেত্রে কাজ করা যেতে পারে সেটা নিয়ে আলোচনা করা হবে। আমরা জানি ফ্রন্টএন্ড অ্যাপ্লিকেশনে তৈরি করতে গেলে খুব সুন্দরভাবে ডাটা ম্যানেজ করতে হয়। মডার্ন অ্যাপ্লিকেশন এবং ওল্ড অ্যাপ্লিকেশনের মধ্যে তফাৎ কোথায় সেটা আমাদের জানতে হবে। ওল্ড অ্যাপ্লিকেশনে ডাটা নিয়ে তেমন কাজ ছিল না। তখন ডাটা মূলত সার্ভার থেকে রেন্ডারিং হয়ে আমাদের সামনে শো করতো। কিন্তু মডার্ন অ্যাপ্লিকেশন যেমন ফেসবুকে রিঅ্যাকশনের উপর হোভার করলে অনেক রিয়্যাকশন আমাদের সামনে চলে আসে, আমরা কমেন্ট করতে পারছি, নেস্টেড রিপ্লাই করতে পারছি, মেনশন করতে পারছি। তার মানে আমরা কি সিলেক্ট করছি সেটার উপর ভিত্তি করে আমাদের UI চেইঞ্জ হয়ে যাচ্ছে। এসব কিছুই হচ্ছে ডাটার উপর। এই ডাটাগুলো স্ট্যাটিক না। এগুলো ডায়নামিক ডাটা। ওল্ড অ্যাপ্লিকেশন যেমন উইকিপিডিয়াতে আমরা একটা পেইজ লোড দিলে সেটা একইরকম থেকে যাবে, কোনো চেইঞ্জ আসবে না। কিন্তু মডার্ন অ্যাপ্লিকেশনে আমাদের ইন্ট্যারেক্টিভিটির উপর নির্ভর করে ডাটা ডায়নামিক্যালি চেইঞ্জ হচ্ছে, এবং সেই চেইঞ্জের উপর ভিত্তি করে আমাদের UI ও চেইঞ্জ হচ্ছে। সুতরাং মডার্ন অ্যাপ্লিকেশন এবং ওল্ড অ্যাপ্লিকেশনের মধ্যে তফাৎ হচ্ছে এই ডাটা ম্যানেজমেন্টে। আমাদের এখন কাজ করতে হয় কিভাবে ডাটাগুলোকে ম্যানেজ করলে সেগুলো সুন্দরভাবে মুভ করতে পারবে। যেকোনো অ্যাপ্লিকেশন ডেভেলপ করতে গেলে প্রথমে আমাদের চিন্তা করতে হবে ডাটাগুলোকে আমরা কিভাবে স্ট্রাকচার করবো। ডাটা বলতে এখানে বুঝানো হচ্ছে ডাটা মডেল। আমরা ব্যাকএন্ডের ক্লাসগুলোতে মডেল কিভাবে বানাতে হয় দেখেছিলাম। আমরা একটা প্রোডাক্ট তৈরি করতে গেলে সেখানে কি কি প্রোপার্টিজ থাকবে, তার টাইপ কেমন হবে, কি কি অবজেক্ট থাকবে, অ্যারের শেইপ কেমন হবে সব আগে থেকেই ডিফাইন করে দিতে হবে।

কিন্তু প্রশ্ন হচ্ছে এই যে ডাটা আমি ডিফাইন করবো সেটা কোন লজিকের উপর ভিত্তি করে আমরা করবো? সেটা খুবই সিম্পল। সবার প্রথমে আমাদের বের করতে হবে, এই যে ডাটাটাকে আমরা তৈরি করতে চাইছি বা কোথাও স্টোর করে রাখবো, সেখানে আমার এই ডাটাটা কি কাজে লাগবে। কিছু ডাটা আছে যা সারাজীবন স্ট্যাটিক থাকবে। আবার কিছু ডাটা আছে যেগুলো বিভিন্ন ফাংশনালিটিজের উপর ভিত্তি করে আপডেট হবে। এই কাজের উপর ভিত্তি করেই আমাদের ডাটার শেইপ আমরা ডিফাইন করতে পারি। অনেক সময় এমন হতে পারে আমাদের ব্যাকএন্ড থেকে ডাটা আসছে একরকম, কিন্তু ফ্রন্টএন্ডে ডাটার শেইপ পুরো ভিন্ন। এটা কেন হয়? কারণ অ্যাপ্লিকেশন ব্যবহার করা হবে ফ্রন্টএন্ডে। আর এই অ্যাপ্লিকেশন ব্যবহার করার জন্য আমাদের কিছু মেটাডাটার প্রয়োজন হতে পারে। যেমন - ফিল্টারিং এর বিষয়বস্তু। এরকম কিছু ছোট ছোট প্রোপার্টিজ আমাদের রিকোয়ারমেন্টের উপরে ভিত্তি করে অ্যাড হতে পারে।

এরপর আমাদের মাথায় রাখতে হবে যে ডাটাটা ডিজাইন করছি এতে অ্যাক্সেস কি পরিমাণ হবে। অর্থাৎ এতে কি একবার অ্যাক্সেস হবে নাকি বারবার আপডেট বা ডিলিট টাস্ক করার জন্য আমাদের বারবার এতে অ্যক্সেস করা লাগবে। এই বিষয়গুলো আমাদের মাথায় রাখতে হবে।

তৃতীয় আরেকটা বিষয় মাথায় রাখতে হবে, সেটা হলো এই যে আমরা ডাটা মডেল করবো, সেটা কি একবারেই সার্ভার থেকে আপডেট হয়ে এসে স্থির থাকবে নাকি আমাদের বারবার আপডেট করতে হবে।

এসব বিষয়সমূহ মাথায় রেখে ফ্রন্টএন্ড ডেভেলপমেন্টে মূলত ডাটার শেইপ ডিজাইন করা হয়। এটা ব্যাকএন্ডের সাথে মিলতেও পারে নাও মিলতে পারে। মূল বিষয়বস্তুসমূহ সবসময় একই থাকবে, কিন্তু আমাদের প্রয়োজনে কিছু অতিরিক্ত বিষয়বস্তু যুক্ত করতে হতে পারে।

ফ্রন্টএন্ড ডেভেলপারদের মূল চ্যালেঞ্জটাই হলো এই ডাটা ইঞ্জিনিয়ারিং করা বা ডাটার মডেলিং করাটা। কারণ এটা অনেক কমপ্লেক্স। শুধুমাত্র UI দেখে ডাটার বিহেভিয়ার ধারণা করাটা অনেক কঠিন। এক একটা ফিচারের জন্য এক একটা এক্সট্রা প্রোপার্টির প্রয়োজন হতে পারে। এটা অনেক কঠিন। কিন্তু যদি এই কাজটাই ঠিকঠাকভাবে করে ফেলা যায় তাহলে ফ্রন্টএন্ড ডেভেলপমেন্ট সহজ হয়ে যায় অনেক। সেটা রিয়্যাক্ট, ভিউ, অ্যাঙ্গুলার যেটা দিয়েই করা হোক না কেন, মূল ব্যাপারটা হলো ডাটা ইঞ্জিনিয়ারিং করাটা।

ট্রেডিশনাল ওয়েটে HTML, CSS জেনারেট করার কাজটা করা হতো কোনো একটা UI দেখে। কিন্তু মডার্ন ওয়েতে আমরা ডাটা দেখে বা JSON দেখে HTML, CSS জেনারেট করবো। ফ্রন্টএন্ড ডেভেলপার হিসেবে এটাই আমাদের দায়িত্ব।

## Working with form

আমাদেরকে প্রথমে বুঝতে হবে HTML থেকে কিভাবে JSON পেতে পারি। সেটা বুঝার জন্য আমরা খুব সাধারণ একটা ফর্ম তৈরি করার চেষ্টা করি।

```jsx
// App.jsx

import React from 'react';

const App = () => {
	return (
		<form>
			<div>
				<label htmlFor="name">What is your name?</label>
				<input type="text" name="name" placeholder="John Doe" />
			</div>
			<div>
				<label htmlFor="email">What is your email?</label>
				<input type="email" name="email" placeholder="john@example.com" />
			</div>
			<div>
				<label htmlFor="phone">What is your phone number?</label>
				<input type="tel" name="phone" placeholder="+8801711111111" />
			</div>
			<div>
				<button type="submit">Submit</button>
			</div>
		</form>
	);
};

export default App;
```

আমাদের অ্যাপ্লিকেশন রান করলে আমাদের UI দেখতে হবে নিচের মতো -

![ui-01.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1659938394974/JqrL4-Xe7.png align="center")

এখন এই ফর্মটা আমাদের কন্ট্রোলে নাই। মানে আমরা এর প্রতিটা স্টেট হ্যান্ডেল করতে পারছি না। এখন যদি আমরা উল্টোপাল্টা ডাটা দিয়ে সাবমিট করি পেইজ রিফ্রেশ হয়ে যাবে। এটা রিয়্যাক্ট বা ফ্রন্টএন্ড অ্যাপ্লিকেশনের স্ট্যান্ডার্ড কোনো বিহেভিয়ার না। তাই আমাদের প্রথমে সাবমিট বাটনকে ব্লক করতে হবে।

এটা ব্লক করার জন্য শুরুতেই আমাদের একটা হ্যান্ডেল ফাংশন বানিয়ে নিই এবং সেটাকে ফর্ম ট্যাগের সাথে যুক্ত করে দিই।

```jsx
const App = () => {
	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(event);
	};

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label htmlFor="name">What is your name?</label>
				<input type="text" name="name" placeholder="John Doe" />
			</div>
			<div>
				<label htmlFor="email">What is your email?</label>
				<input type="email" name="email" placeholder="john@example.com" />
			</div>
			<div>
				<label htmlFor="phone">What is your phone number?</label>
				<input type="tel" name="phone" placeholder="+8801711111111" />
			</div>
			<div>
				<button type="submit">Submit</button>
			</div>
		</form>
	);
};

export default App;
```

এইটুকু কাজ করলে দেখবো আমাদের পেইজ আর রিফ্রেশ নিচ্ছে না। তার মানে আমরা সাবমিট ব্লক করে ফেললাম।

এখানে `preventDefault` বলতে যা বুঝায় তা হলো ব্রাউজার এই ফর্মের যে যে ডিফল্ট বিহেভিয়ার দিয়ে দিয়েছে তা আমরা prevent করে দিলাম। অর্থাৎ যেমন সাবমিট বাটনে ক্লিক করলে ব্রাউজার অটোমেটিক্যালি রিফ্রেশ নিয়ে নিবে। আমরা `preventDefault` ব্যবহার করে এই রিফ্রেশ করাটাকে বন্ধ করে দিলাম।

এবার আমরা যদি ইভেন্টকে কনসোলে লগ করে দেখার চেষ্টা করি এখানে কি আছে, দেখবো `SyntheticBaseEvent` নামে একটা কিছু পাচ্ছি। রিয়্যাক্ট ডম, জাভাস্ক্রিপ্ট ডমের ইভেন্টকে নিয়ে একটা নতুন নাম দিয়েছে যেটা হলো `SyntheticBaseEvent`। এর ভিতর `target` নামে একটা প্রোপার্টি আছে। এর ভিতর আমরা আমাদের ইনপুট ভ্যালুগুলো সব পাবো। নিচের ইমেজগুলোতে মার্ক করা অংশ দেখুন আপনারা।

![event-01.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1659939497916/bytdSNDlh.png align="center")

![event-02.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1659939511876/8HGxjuLBM.png align="center")

![event-03.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1659939525309/l0QL5s8FV.png align="center")

তার মানে আমরা চাইলে আমাদের ইনপুট ভ্যালুগুলোকেও বের করে আনতে পারি। কিভাবে? আমরা SyntheticBaseEvent এর ভিতর গিয়ে target এ গিয়ে ইনডেক্স নাম্বার ধরে ভ্যালুগুলো পাবো।

আমরা যদি এবার আমাদের `handleSubmit` এর ভেতরে `console.log(event.target[0])` লিখে কনসোলে লগ করি দেখি পাই।

![event-04.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1659940577237/TuOzTlb5E.png align="left")

আমরা দেখছি আমাদের প্রথম ইনপুটের এইচটিএমএল চলে এসেছে। এবার যদি আমরা আমাদের হ্যান্ডেল ফাংশনে আমরা `console.log(event.target[0].value)`, `console.log(event.target[1].value)` এবং `console.log(event.target[2].value)` লিখি তাহলে কনসোলে কি পাই একটু দেখি।

![event-05.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1659940763489/ITXtG3-4M.png align="left")

দেখা যাচ্ছে আমাদের ইনপুটের ভ্যালুগুলো চলে এসেছে।

এই ভ্যালুগুলো কিন্তু আমরা কন্ট্রোল করছি না, ব্রাউজার আমাদের হয়ে কন্ট্রোল করছে কিভাবে কি করতে হবে। এই ধরণের ফর্মগুলোকে আমরা বলবো আনকন্ট্রোলড ফর্ম। কারণ এই ফর্মগুলোর উপরে আমাদের কোনো কন্ট্রোল নেই। আমরা যদি আমাদের ফর্ম কন্ট্রোল করতে চাই তাহলে target এর কথা ভুলে যাবো। আমরা আমাদের নিজস্ব স্টেট ডিফাইন করবো, যার মধ্যে আমাদের ভ্যারিয়েবলগুলো থাকবে।

আমরা প্রথমে একটা স্টেট ডিফাইন করি।

```jsx
const [formStates, setFormStates] = useState({
	name: '',
	email: '',
	phone: '',
});
```

এবার আমরা আমাদের ফর্ম ইনপুটের ভেতর এই স্টেটের ডিফল্ট ভ্যালুগুলো ভ্যালু আকারে দিয়ে দিবো।

```jsx
<input type="text" name="name" placeholder="John Doe" value={formStates.name} />
```

```jsx
<input
	type="email"
	name="email"
	placeholder="john@example.com"
	value={formStates.email}
/>
```

```jsx
<input
	type="tel"
	name="phone"
	placeholder="+8801711111111"
	value={formStates.phone}
/>
```

এবার যদি আমরা ব্রাউজারে গিয়ে আমাদের ইনপুটে লিখতে চাই দেখবো আমরা কিছু লিখতে পারছি না। কারণ আমরা স্টেট ডিফাইন করার সাথে সাথে ব্রাউজার এই ফর্মের উপর থেকে কন্ট্রোল ছেড়ে দিয়ে তা আমাদের হাতে দিয়ে দিয়েছে। এবার আমরা যেভাবে চাই সেভাবে এই ফর্মকে আপডেট করতে পারবো। অর্থাৎ পুরো কন্ট্রোল আমাদের হাতে চলে এসেছে। এটা এখন একটা কন্ট্রোলড ফর্ম। কিন্তু আমরা তো আপডেটই করতে পারছি না। তাহলে কিভাবে আমরা এই ফর্ম কন্ট্রোল করবো? কেন আপডেট করতে পারছি না সেটা আগে বুঝতে হবে। যেহেতু কন্ট্রোল আমাদের হাতে, তাই নতুন কিছু আপডেট হলে কি হবে সেটাও আমাদের বলে দিতে হবে। কিন্তু এখানে আমরা তা বলে দিইনি। তাই এখানে কিছু আপডেট করা যাচ্ছে না।

আমাদের স্টেটে ডিফল্ট হিসেবে ভ্যালু দেয়া আছে Empty String। এখন সেটা তো আপডেট হচ্ছে না। যেহেতু আপডেট হচ্ছে না, সেহেতু আমরা যাই লিখিনা কেন সবসময় সে Empty String পেয়ে যাচ্ছে। এই প্রব্লেম সলভ করতে পারি আমাদের কাস্টম হ্যান্ডলার ব্যবহার করার মাধ্যমে। আমাদের মাথায় রাখতে হবে আমরা যখন কোনো ইনপুট ফিল্ডের ভ্যালু আমাদের নিজস্ব ভ্যালু দিয়ে বাইন্ড করে দিবো তখন সেটা আমাদের কন্ট্রোলে চলে আসবে। সেটার জন্য ইউজার যখন টাইপ করবে তখন ভ্যালু কিভাবে চেইঞ্জ হবে তাও আমাদের বলে দিতে হবে। সেটা আমরা `onChange` এর মাধ্যমে খুব সহজেই করতে পারি।

আমরা এবার একটা কাস্টম চেইঞ্জ হ্যান্ডলার ফাংশন বানিয়ে নিই।

```jsx
const handleChange = (event) => {
	setFormStates({
		...formStates,
		[event.target.name]: event.target.value,
	});
};
```

এবার সব ইনপুট ট্যাগের মধ্যে onChange এর মধ্যে এই ফাংশনটা দিয়ে দিই।

```jsx
<input
	type="text"
	name="name"
	placeholder="John Doe"
	value={formStates.name}
	onChange={handleChange}
/>
```

```jsx
<input
	type="email"
	name="email"
	placeholder="john@example.com"
	value={formStates.email}
	onChange={handleChange}
/>
```

```jsx
<input
	type="tel"
	name="phone"
	placeholder="+8801711111111"
	value={formStates.phone}
	onChange={handleChange}
/>
```

এবার যদি ব্রাউজারে গিয়ে দেখি দেখবো আমরা আবার আমাদের ডাটা আপডেট করতে পারছি।

এবার যদি আমাদের `handleSubmit` ফাংশনের মধ্যে আমরা `formStates` কে লগ করি তাহলে দেখবো আমাদের ইনপুট ডাটাই formStates এর অবজেক্টের মধ্যে চলে এসেছে।

![event-06.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1659945040445/Tm1qDEdz9.png align="left")

এখন আমাদের কাছে একটা JSON আছে। এবার আমরা দেখবো কিভাবে আমরা এই JSON থেকে ফর্মটা বানাতে পারি।

## JSON to JSX

আমাদের ডায়নামিক অ্যাপ্লিকেশনে ধরে নিই আমাদের প্রাপ্ত ফর্মের ডাটাগুলো রেন্ডার করতে হতে পারে। অর্থাৎ আমাদের কাছে একটা JSON আছে সেখানে থেকে এরকম একটা ফর্ম জেনারেট করতে হবে। কিভাবে আমরা এই ডাটা শেইপ করতে পারি? এটাই হচ্ছে আমাদের আজকে আলোচ্য বিষয়।

ধরি আমাদের কাছে একটা json আছে নিচের মতো।

```json
{
	"name": "",
	"email": "",
	"phone": ""
}
```

এখন এটা থেকে আমাদের ফর্মটা বানাতে হবে। তাহলে একটা ইনপুটের মধ্যে কি কি থাকতে পারে তা আগে আমাদের বুঝতে হবে। আমরা আমাদের ফর্মটা যদি অ্যানালাইসিস করি দেখবো ইনপুট ফিল্ডের মধ্যে অনেকগুলো প্রোপার্টি আছে। সুতরাং আমাদের json এ ডাটাটাইপ স্ট্রিং হবে না, হবে অবজেক্ট। প্রথমে আমরা name এর প্রথম প্রোপার্টি হিসেবে label নিবো। `”label”: “What is your name?”`। এরপর আমরা নিবো type প্রোপার্টি। এখানে নাম, ইমেইল, ফোন নাম্বারের জন্য টাইপ আলাদা আলাদা হবে। সুতরাং এটাও আমাদের এখানে দিয়ে দিতে হবে `"type": "text"`। এভাবে প্রতিটি ইনপুট ফিল্ডের মধ্যে যেগুলো ইউনিক প্রোপার্টি সেগুলোকে আমরা আমাদের json এ আমরা নিয়ে নিবো।

```json
{
	"name": {
		"label": "What is your name?",
		"type": "text",
		"placeholder": "John Doe"
	},
	"email": {
		"label": "What is your email?",
		"type": "email",
		"placeholder": "john@example.com"
	},
	"phone": {
		"label": "What is your phone number?",
		"type": "tel",
		"placeholder": "+8801711111111"
	}
}
```

আমরা পূর্বে ফর্মের যে jsx লিখেছিলাম সেটা এবং এই json দুইটা ইক্যুইভ্যালেন্ট। দুইটা জিনিস ইক্যুইভ্যালেন্ট হলে আমরা সহজেই একটাকে আরেকটাতে রূপান্তর করতে পারি। এখন একটা প্রশ্ন মনে আসতেই পারে আমাদের কাছে সুন্দর একটা jsx ফরম্যাট থাকতে কেন আমরা json নিয়ে মাথা ঘামাতে যাবো? তার কারণ হলো HTML, JSX এসব হলো XML ফরম্যাট। আর XML টাইপ ফরম্যাটের ডাটা প্রসেসিং খুবই জটিল এবং কষ্টসাধ্য। এই ডাটাগুলোকে অটোমেট করা অনেক কঠিন। সেই জায়গায় আমাদের JSON ফরম্যাটকে খুব সহজেই অটোমেট করা যায়। যেমন যদি আমরা আমাদের JSON অবজেক্টকে অ্যারে হিসেবে কল্পনা করি নিচের মতো -

```json
[
	{
		"name": "name",
		"label": "What is your name?",
		"type": "text",
		"placeholder": "John Doe"
	},
	{
		"name": "email",
		"label": "What is your email?",
		"type": "email",
		"placeholder": "john@example.com"
	},
	{
		"name": "phone",
		"label": "What is your phone number?",
		"type": "tel",
		"placeholder": "+8801711111111"
	}
]
```

তবে আমরা একটা সুবিধা পাবো। সেটা হলো আমরা লুপ চালাতে পারবো। এখন লুপ চালিয়ে কি সুবিধা পাবো? ধরেন এখানে তিনটা ইনপুট ফিল্ড আছে। এখন এখানে কয়েকদিন পর আরো দশটা ইনপুট ফিল্ড বাড়লো, তারপর আর কয়েকদিন পর ২৫ টা বাড়লো। এখন যদি আমরা jsx এর মধ্যে গিয়ে বারবার কোড লিখতে থাকি তাহলে সেটা খুবই কষ্টসাধ্য হয়ে পড়বে। সবচেয়ে বড় কথা আমাদের ডায়নামিক কনসেপ্টটাই আর এখানে থাকলো না। এখন ধরেন এই json কে আমরা আমাদের সার্ভারের মধ্যে রেখে দিলাম। আমরা শুধু আমাদের কোডে লুপ চালিয়ে দিলাম। এখন যতোই ফিল্ড বাড়ুক আমাদের আর কোডে হাত দিতে হবে না। আমরা শুধু আমাদের সার্ভারে json কে আপডেট করবো। আর অটোমেটিক্যালি তা আমাদের অ্যাপ্লিকেশনে আপডেট হয়ে যাবে। একজন ডেভেলপার হিসেবে আমাদের টার্গেটই থাকবে কম কোড করে কিভাবে আমরা বেশি উপকার পাবো সেটা। কিন্তু আমাদের তো ডাটা অ্যারে আকারে আসবে না। আসবে অবজেক্ট আকারে। আমাদের ঐ অবজেক্টকে অ্যারেতে কনভার্ট করে নিতে হবে।

আমরা DynamicForm.jsx নামে একটা কম্পোনেন্ট ক্রিয়েট করে নিই। এবং সেটা আমাদের অ্যাপ ফাইলে ইমপোর্ট করে নিই।

```jsx
const formFields = {
	name: {
		label: 'What is your name?',
		type: 'text',
		placeholder: 'John Doe',
	},
	email: {
		label: 'What is your email?',
		type: 'email',
		placeholder: 'john@example.com',
	},
	phone: {
		label: 'What is your phone number?',
		type: 'tel',
		placeholder: '+8801711111111',
	},
};

const DynamicForm = () => {
	return <div>DynamicForm</div>;
};

export default DynamicForm;
```

এবার প্রথমে আমাদের অবজেক্টকে অ্যারেতে পরিণত করার কাজটা করি। কিভাবে করা যায় চলুন দেখা যাক।

### Convert Object to Array

আমাদের প্রথম কাজই হলো অবজেক্টকে অ্যারেতে রূপান্তর করা। তার জন্য আমরা একটা ফাংশন বানিয়ে কনসোলে লগ করে দেখি।

```jsx
const mapObjectToArray = (obj) => {
	return Object.keys(obj).map((key) => ({ name: key, ...obj[key] }));
};

console.log(mapObjectToArray(formFields));
```

![json-01.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1659951437220/kBpbEMrtg.png align="left")

ব্রাউজারে গিয়ে দেখলে দেখবো আমাদের যেরকম অ্যারে দরকার ছিল ঠিক সেরকম অ্যারে আমরা পেয়ে গেছি।

এবার আমরা ডায়নামিকভাবে কিভাবে ফর্ম তৈরি করা যায় সেটা দেখি।

```jsx
const DynamicForm = () => {
	const formData = mapObjectToArray(formFields);

	return (
		<form>
			{formData.map((item, index) => (
				<div key={index}>
					<label htmlFor={item.name}>{item.label}</label>
					<input
						type={item.type}
						name={item.name}
						placeholder={item.placeholder}
					/>
				</div>
			))}
			<div>
				<button type="submit">Submit</button>
			</div>
		</form>
	);
};
```

এখন যদি আমরা আমাদের ব্রাউজারে গিয়ে দেখি। দেখবো আমাদের তিনটা ফিল্ড তৈরি হয়ে গিয়েছে। আমরা যদি Devtools এ ইনস্পেক্ট করি দেখবো সেখানেও তিনটা div তৈরি হয়েছে ডায়নামিক্যালি।

![json-02.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1659953044302/Plgq_5ryf.png align="left")

কি হবে যদি আমরা আরেকটা ফিল্ড বাড়াই আমাদের অবজেক্টে। আমরা আমাদের jsx কোডে হাত দিবো না। শুধু অবজেক্টে নিচের ফিল্ডটা অ্যাড করবো।

```json
password: {
  label: 'What is your password?',
  type: 'password',
  placeholder: '******',
},
color: {
  label: 'What is your color?',
  type: 'color',
  placeholder: 'red',
},
```

এবার যদি ব্রাউজারে যাই দেখবো আমাদের ফিল্ডগুলো অ্যাড হয়ে গেছে।

![json-03.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1659953525402/ICa5VFmLZ.png align="center")

আশা করি এতক্ষণে আপনারা বুঝে গেছেন কেন ডাটা এত গুরুত্বপূর্ণ ফ্রন্টএন্ড ডেভেলপমেন্টে।

আমাদের এই অ্যাপ এখনও ওয়ার্কেবল না। একে ওয়ার্কেবল করতে হলে প্রত্যেকটা অবজেক্টের সাথে কিছু অতিরিক্ত প্রোপার্টিজ যোগ করতে হবে। সেগুলো কি? কি করলে আমরা আমাদের আগের ফর্মের মতো ওয়ার্কেবল করতে পারবো? আমাদের ভ্যালু প্রোপার্টিটা আমাদের দরকার। এই ভ্যালু প্রোপার্টি আমাদের কোথায় দরকার হবে? যখন আমরা অবজেক্টটাকে ম্যাপ করলাম তখন আমাদের এই ভ্যালু প্রোপার্টি দরকার হবে। কিন্তু এখানে একটা সমস্যা আছে। আমাদের `mapObjectToArray` ফাংশন রিটার্ন করছে একটা অ্যারে। এই অ্যারে থেকেই আমরা আমাদের ফর্ম বানিয়েছি। এখন এই ফর্মকে ওয়ার্কেবল করতে হলে প্রতিটা প্রোপার্টির সাথে আমাদের `value`, `onChange` যুক্ত করতে হবে। আমাদেরকে অ্যারেকে একটা স্টেটে রাখতে হবে। যদি আমরা স্টেটে এই অ্যারেকে রাখি তাহলে আমরা একটা প্রব্লেম ফেস করবো। সেটা হলো প্রতিটা keystroke এর জন্য প্রতিবার পুরো অ্যারে ফাইন্ড করে করে দেখতে হবে। অর্থাৎ প্রতিবার একই কাজ বারবার করে করত হবে। আমাদের এখানে চ্যালেঞ্জ হলো ডাটা আমরা কতো সহজে এক্সেস করতে পারছি। আর যেহেতু প্রতিটা keystroke এর জন্য আমাদের বারবার পুরো অ্যারের উপর অপারেশন চালাতে হচ্ছে সুতরাং এই কাজের জন্য অ্যারে সঠিক সমাধান নয়। এই কাজের জন্য সমাধান হলো অবজেক্ট। সুতরাং আমরা স্টেটের মধ্যে অ্যারে রাখবো না। আমরা রাখবো অবজেক্ট।

ব্যাকএন্ড এবং ফ্রন্টএন্ডের ডাটার শেইপ এক নাও হতে পারে। ব্যাকএন্ড জাস্ট ফর্ম রেন্ডার করার জন্য যা যা লাগবে সেটা প্রোভাইড করবে। এবার এটাকে ওয়ার্কেবল করার দায়িত্ব ফ্রন্টএন্ড ডেভেলপারের। তাহলে এক্ষেত্রে আমাদের কাজের স্টেপগুলো হলো -

- **স্টেপ-১** - আমাদের প্রয়োজন অনুযায়ী অবজেক্টকে ট্রান্সফর্ম করা। সেটার জন্য আমরা একটা ফাংশন বানিয়ে নিতে পারি। যেহেতু আমরা অ্যারে চাইছি না তাই আমরা `map` মেথড ব্যবহার করবো না। আমরা করবো `reduce` মেথড।

```jsx
const mapObjectToArray = (obj) => {
	return Object.keys(obj).reduce((acc, cur) => {
		acc[cur] = {
			...obj[cur],
			value: '',
		};
		return acc;
	}, {});
};
```

যদি আমরা এটাকে কনসোলে লগ করি তাহলে দেখবো আমরা একটা অবজেক্ট পেয়েছি।

![json-04.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1659962652679/GLKDkT_bq.png align="left")

এখানে দেখুন অবজেক্টের প্রতিটা প্রোপার্টির সাথে value নতুন করে অ্যাড হয়েছে। যারা `reduce` মেথড নিয়ে কনফিউশনে আছেন তা এই [আর্টিকেলটা](https://stacklearner.com/lecture-5-array-operations-imperative-vs-declarative-and-lecture-6-javascript-array-and-object-deep-dive-full-stack-army#heading-reduce) পড়ুন।

এখন এই অবজেক্টটা আমাদের স্টেটে আমরা রাখতে পারি। আমরা এবার আমাদের স্টেট বানিয়ে ফেলি। সেই স্টেটকে আমরা আমাদের mapObjectToArray ফাংশনের আর্গুমেন্ট হিসেবে পাস করে দিবো। নিচের কোডটি দেখুন।

```jsx
const DynamicForm = () => {
	const [formState, setFormState] = useState(transformObject(formFields));
	const formData = mapObjectToArray(formState);

	return (
		<form>
			{formData.map((item, index) => (
				<div key={index}>
					<label htmlFor={item.name}>{item.label}</label>
					<input
						type={item.type}
						name={item.name}
						placeholder={item.placeholder}
						value={item.value}
					/>
				</div>
			))}
			<div>
				<button type="submit">Submit</button>
			</div>
		</form>
	);
};
```

এবার আমাদের ব্রাউজারে গেলে দেখবো আমরা আর টাইপ করতে পারছি না। কারণ আমরা আমাদের ইনপুট ফিল্ডে value দিয়ে বাইন্ড করে দিয়েছি।

কিন্তু আমরা সাবমিট করলে রিফ্রেশ হচ্ছে। তার মানে আমাদের সাবমিট বাটন এখনও বাইন্ড হয়নি। আমরা আগের handleSubmit ফাংশনটাকে কপি করে নিয়ে আসবো। এবং সেটা onSubmit এ দিয়ে দিবো।

```jsx
const DynamicForm = () => {
	const [formState, setFormState] = useState(transformObject(formFields));
	const formData = mapObjectToArray(formState);

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(formState);
	};

	return (
		<form onSubmit={handleSubmit}>
			{formData.map((item, index) => (
				<div key={index}>
					<label htmlFor={item.name}>{item.label}</label>
					<input
						type={item.type}
						name={item.name}
						placeholder={item.placeholder}
						value={item.value}
					/>
				</div>
			))}
			<div>
				<button type="submit">Submit</button>
			</div>
		</form>
	);
};
```

এখন সাবমিট বাটনে ক্লিক করলে আমাদের কাছে পুরো অবজেক্টটা চলে আসছে।

![json-05.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1659963954906/yxEBAeBGV.png align="left")

কিন্তু আমাদের পুরো অবজেক্ট লাগবে না। লাগবে শুধু এর ভ্যালু। তাহলে আমাদের `handleSubmit` ফাংশনকে একটু ঘষামাজা করি।

```jsx
const handleSubmit = (event) => {
	event.preventDefault();
	const values = Object.keys(formState).reduce((acc, cur) => {
		acc[cur] = formState[cur].value;
		return acc;
	}, {});

	console.log(values);
};
```

এবার যদি আমাদের ব্রাউজারে গিয়ে আমরা সাবমিট বাটনে ক্লিক করি দেখা যাবে আমাদের ভ্যালুগুলো চলে আসছে।

![json-06.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1659964333152/fEVaWRpTO.png align="left")

এবার আমাদের `handleChange` ফাংশন বানাতে হবে। চলুন বানিয়ে ফেলি।

```jsx
const DynamicForm = () => {
	const [formState, setFormState] = useState(transformObject(formFields));
	const formData = mapObjectToArray(formState);

	const handleSubmit = (event) => {
		event.preventDefault();
		const values = Object.keys(formState).reduce((acc, cur) => {
			acc[cur] = formState[cur].value;
			return acc;
		}, {});

		console.log(values);
	};

	const handleChange = (event) => {
		setFormState({
			...formState,
			[event.target.name]: {
				...formState[event.target.name],
				value: event.target.value,
			},
		});
	};

	return (
		<form onSubmit={handleSubmit}>
			{formData.map((item, index) => (
				<div key={index}>
					<label htmlFor={item.name}>{item.label}</label>
					<input
						type={item.type}
						name={item.name}
						placeholder={item.placeholder}
						value={item.value}
						onChange={handleChange}
					/>
				</div>
			))}
			<div>
				<button type="submit">Submit</button>
			</div>
		</form>
	);
};
```

এবার ব্রাউজারে গিয়ে দেখি আমাদের ফর্ম সাবমিট করা যাচ্ছে কিনা অর্থাৎ আপডেট করা যাচ্ছে কিনা।

![json-07.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1659965153663/zLViQ3kmK.png align="left")

ওয়াও! আমাদের ফর্ম এখন পুরোপুরি ডায়নামিক।

এবার যদি আমাদের কোনো ফিল্ড যুক্ত করতে হয় আমরা শুধু আমাদের অবজেক্টে যুক্ত করবো। আমাদের কম্পোনেন্টে আমরা হাতই দিবো না।

ধরেন আমরা বার্থ ডেইট যুক্ত করতে চাইছি। তাহলে জাস্ট আমাদের অবজেক্টে এটা যুক্ত করে দিবো।

```js
const formFields = {
	name: {
		label: 'What is your name?',
		type: 'text',
		placeholder: 'John Doe',
	},
	email: {
		label: 'What is your email?',
		type: 'email',
		placeholder: 'john@example.com',
	},
	phone: {
		label: 'What is your phone number?',
		type: 'tel',
		placeholder: '+8801711111111',
	},
	password: {
		label: 'What is your password?',
		type: 'password',
		placeholder: '******',
	},
	color: {
		label: 'What is your color?',
		type: 'color',
		placeholder: 'red',
	},
	birthday: {
		label: 'What is your birth date?',
		type: 'date',
		placeholder: '1-1-2022',
	},
};
```

এবার যদি ব্রাউজারে গিয়ে দেখি দেখবো সেটা যুক্ত হয়ে গেছে।

![json-08.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1659965655138/VqToawyTq.png align="left")

এবার যদি চাই বয়স অ্যাড করতে তাও পারবো একই সিস্টেমে।

```js
const formFields = {
	name: {
		label: 'What is your name?',
		type: 'text',
		placeholder: 'John Doe',
	},
	email: {
		label: 'What is your email?',
		type: 'email',
		placeholder: 'john@example.com',
	},
	phone: {
		label: 'What is your phone number?',
		type: 'tel',
		placeholder: '+8801711111111',
	},
	password: {
		label: 'What is your password?',
		type: 'password',
		placeholder: '******',
	},
	color: {
		label: 'What is your color?',
		type: 'color',
		placeholder: 'red',
	},
	birthday: {
		label: 'What is your birth date?',
		type: 'date',
		placeholder: '1-1-2022',
	},
	age: {
		label: 'What is your age?',
		type: 'number',
		placeholder: '20',
	},
};
```

![json-09.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1659966029871/evN1DjTc4.png align="left")

আশা করি আপনারা বুঝতে পারছেন রিয়্যাক্ট কতটা অসাম একটা লাইব্রেরী।

সুতরাং আপনারা দেখতেই পারছেন ডাটা ইঞ্জিনিয়ারিং হচ্ছে ফ্রন্টএন্ড ডেভেলপমেন্টের মূল বিষয়। এই জিনিসটা আয়ত্ত্বে চলে আসলে ফ্রন্টএন্ড ডেভেলপমেন্ট অনেক সহজ হয়ে যায়। নরমালি সবাই ভাবে এইচটিএমএল, সিএসএস দিয়ে ওয়েবপেইজ ডিজাইন করা মানেই হলো ফ্রন্টএন্ড। কিন্তু ফ্রন্টএন্ড যে তা না সেটাই এই লেকচারের আলোচ্য বিষয় ছিল। এখানেও লজিক লাগে, এখানেও ডাটা নিয়ে কাজ করা লাগে। এই কনসেপ্টটাই আমাদের আয়ত্ত্ব করতে হবে।

## সোর্স কোড

এই লেকচারের সকল সোর্স কোড এই [লিংক](https://github.com/mrhm-dev/full-stack-army/tree/master/src/lecture-35) এ পাবেন।
