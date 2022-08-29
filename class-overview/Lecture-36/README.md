# Lecture 36 - React Functional Component, Props and State

%[https://youtu.be/4X1GkVnoECY]

## Introduction

আজকের ক্লাস এবং পরবর্তী ক্লাসে রিয়্যাক্টের বেসিক বিষয়গুলো আলোচনা করা হবে। এরপর থেকে প্রজেক্টে জাম্প দেয়া হবে। এতদিন ধরে আমরা রিয়্যাক্টের প্রজেক্ট তৈরি করার জন্য ব্যবহার করে আসছিলাম [create-react-app](https://create-react-app.dev/)। কিন্তু আমরা আজ ব্যবহার করবো একটা নতুন টেকনোলজি [vite](https://vitejs.dev/)। কারণ Vite অনেক ফাস্ট। আমরা এদের ডকুমেন্টেশনে গেলে কিভাবে তা ব্যবহার করতে হবে সেই সম্পর্কে জানতে পারবো।

## Install React project using Vite

vite ব্যবহার করে রিয়্যাক্ট অ্যাপ্লিকেশন তৈরি করতে হলে আমাদের `npm create vite@latest` অথবা `yarn create vite` এই কমান্ড ব্যবহার করতে হবে। আমরা yarn দিয়ে আমাদের অ্যাপ্লিকেশন ইনস্টল করে ফেললাম। রিয়্যাক্ট নিয়ে কাজ করতে গেলে আমাদের সবসময় রিয়্যাক্টের অফিসিয়াল [ওয়েবসাইট](https://reactjs.org/) খোলা রাখতে হবে। কারণ সবকিছু মাথায় রাখার প্রয়োজন নেই আর আমরা মাথায় রাখিও না। আমাদের যখন যা দরকার হবে তা ডকুমেন্টেশন দেখে করে নিতে পারবো।

## Project files analysis

এবার যদি আমাদের প্রজেক্টটাকে আমরা দেখি দেখবো এখানে শুধ্মাত্র একটা html ফাইল আছে। এই কারণে একে সিঙ্গেল পেইজ অ্যাপ্লিকেশন বলা হয়। আমরা যখন ভ্যানিলা প্রজেক্ট করি তখন এক একটা পেইজের জন্য ভিন্ন ভিন্ন html ফাইল বানাতাম। কিন্তু এখানে সবসময় এই একটাই html ফাইল থাকবে। তার মানে কি আমরা মাল্টিপল পেইজ বানাবো না? অবশ্যই থাকবে। যত ইচ্ছা আমরা পেইজ বানাতে পারবো। কিন্তু এইচটিএমএল ফাইল থাকবে একটাই। আর এই ফাইলের ভিতর শুধুমাত্র নিচের কোডটাই থাকবে। আর কিছু থাকবে না। বাকি সব কন্ট্রোল করা হবে জাভাস্ক্রিপ্ট দিয়ে।

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<link rel="icon" type="image/svg+xml" href="/vite.svg" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Vite + React</title>
	</head>
	<body>
		<div id="root"></div>
		<script type="module" src="/src/main.jsx"></script>
	</body>
</html>
```

জাস্ট একটা `div` থাকবে `root` আইডি নামে।

আমাদের যা কাজ সবই `src` ফোল্ডারের মধ্যে করবো। আমরা আর প্রজেক্টের অন্য কোথাও হাতও দিবো না। যা কিছু করার আমরা এই ফোল্ডারেই করবো। চলুন দেখা যাক `src` ফোল্ডারের মধ্যে কি কি আছে। তার আগে আমরা আমাদের অ্যাপ্লিকেশনকে রান করি চলুন। আমরা নিচের কমান্ড লিখে আমাদের অ্যাপ্লিকেশন রান করতে পারি।

```sh
yarn dev
```

রান করার পর দেখবেন একটা লিংক আমাদেরকে ক্রিয়েট করে দিবে। আমরা ব্রাউজারের সেই লিংক রান করলে নিচের ছবির মতো উইন্ডো পাবো।

![vite-first-run.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1660459325645/NNeT_rrlc.png align="left")

এবার আমরা আমাদের `src` ফোল্ডারের মধ্যে থাকা App.jsx এ গিয়ে `div` এর মধ্যে থাকা সকল কোড ডিলিট করে সেখানে নিচের কোডটি লিখবো।

```jsx
<div className="App">
	<h1>Hello World</h1>
</div>
```

সেইভ করলে দেখবো আমাদের নিচের পেইজটি দেখাবে।

![vite-2.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1660459594016/R-_MRMcxs.png align="left")

আমরা যখন প্রজেক্ট তৈরি করবো তখন অনেক কিছু থাকবে সেখানে। আমরা `src` ফোল্ডারের মধ্যে শুধু `main.jsx` এই ফাইলটি রেখে বাকি সব ডিলিট করে দিবো। সেগুলো আমাদের দরকার নেই। আমরা আমাদের মতো করে অ্যাপ্লিকেশন তৈরি করবো।

আপনারা ব্রাউজারে গেলে নিচের ছবির মতো উইন্ডো দেখতে পাবেন। ভয় পাওয়ার কিছু নেই। আমরা ফাইলগুলো ডিলিট করে দেয়ায় এরকম ব্রোকেন দেখাচ্ছে। তা আমরা ফিক্স করবো।

![vite-3.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1660459878320/tpAtQJKMo.png align="left")

আমরা আমাদের main.jsx ফাইলকে টাচই করবো না। এটা হচ্ছে একটা রিয়্যাক্ট অ্যাপ্লিকেশনের জন্য বুট ফাইল। বুট ফাইল মানে হচ্ছে যখন রিয়্যাক্ট অ্যাপ্লিকেশন রান শুরু হবে তখন সবার প্রথমে এই ফাইল রান হবে। এটা নাম vite এর main.jsx, create-react-app এ index.js। যে নামেই থাকুক মোটকথা আমরা এটাতে হাতই লাগাবো না।

আমরা করতে পারি আমাদের src ফোল্ডারে গিয়ে App.jsx নামে একটা ফাইল ক্রিয়েট করতে পারি। এখন jsx এবং js এক্সটেনশন কখন ব্যবহার করবো? যখন আমাদের কোনো ফাইলে রিয়্যাক্টের কোনো কাজ থাকবে না, জাস্ট জাভাস্ক্রিপ্ট কোড লিখবো সেক্ষেত্রে js এক্সটেনশন ব্যবহার করবো। আর যখন আমরা কোনো রিয়্যাক্ট কম্পোনেন্ট বানাবো তখন আমরা jsx ব্যবহার করবো।

## React Components

রিয়্যাক্টের দুই ধরণের কম্পোনেন্ট আছে। ক্লাস বেইজড কম্পোনেন্ট এবং ফাংশনাল কম্পোনেন্ট। ক্লাস বেইজড কম্পোনেন্ট ওল্ড। ফাংশনাল কম্পোনেন্টই এখন ব্যবহার করা হয়। কিন্তু ভবিষ্যতে আমাদের ক্লাস বেইজড কম্পোনেন্টও শিখতে হবে যখন পুরোনো অ্যাপ্লিকেশন নিয়ে কাজ করবো, এছাড়াও রিয়্যাক্টের কিছু কিছু কাজ আছে যার জন্য আমাদের ক্লাস বেইজড কম্পোনেন্ট লাগবে। সেটা আমরা তখন দেখবো। আপাতত আমাদের ফোকাস থাকবে ফাংশনাল কম্পোনেন্টের উপর।

## Functional Component

এখন ফাংশনাল কম্পোনেন্ট কি জিনিস? `A function that return a JSX, is a functional component in react` অর্থাৎ রিয়্যাক্টে যে ফাংশন একটা JSX রিটার্ন করে তাকে বলে ফাংশনাল কম্পোনেন্ট।

যেমন -

```js
function App() {
	return;
}
```

এটা একটা নরমাল জাভাস্ক্রিপ্ট ফাংশন। রিয়্যাক্টের সাথে এর কোনো সম্পর্ক নাই। কিন্তু যখনই আমরা নিচের কোডটা লিখবো তখনই সেটা একটা ফাংশনাল কম্পোনেন্টে রূপান্তরিত হবে।

```jsx
function App() {
	return <h1>Hello World</h1>;
}
```

অর্থাৎ যতক্ষণ সে JSX রিটার্ন করছে না ততক্ষণ সে নরমাল একটা ফাংশন। যে মুহূর্তেই সে JSX রিটার্ন করলো সে তখন ফাংশনাল কম্পোনেন্ট।

## Conditions to become a functional component

ফাংশনাল কম্পোনেন্ট বানাতে গেলে আমাদের কিছু জিনিস মাথায় রাখতে হবে। সেগুলো হলো -

- Name must be capital
- Must return a piece of HTML (JSX)
- It always accepts an Object as an argument - একটা ফাংশনাল কম্পোনেন্টের একটাই আর্গুমেন্ট থাকতে পারবে। একাধিক আর্গুমেন্ট ব্যবহার করা যাবে না। এবং সেই আর্গুমেন্ট অবশ্যই অবশ্যই একটা অবজেক্ট হতে হবে।
- We can’t call or invoke this function - আমরা কখনও App() লিখে এভাবে এই ফাংশনকে কল করতে পারবো না। এই ফাংশন কল করার দায়িত্ব আমাদের না। এর দায়িত্ব রিয়্যাক্টের। আমরা শুধুমাত্র একে এইচটিএমএল ট্যাগ হিসেবে ব্যবহার করবো।
- We have to use the function as an html tag

## Export the App function

আমরা এবার আমাদের App ফাংশনকে এক্সপোর্ট করবো। কারণ এক্সপোর্ট না করলে মেইন ফাইল এই ফাইলকে পাবে না।

```jsx
function App() {
	return <h1>Hello World</h1>;
}

export default App;
```

এবার যদি আমাদের ব্রাউজারে গিয়ে দেখি দেখবো সেই বিশাল এরর আর নেই এখনা আমরা অ্যাপ ফাইলে যা লিখেছি সেই `Hello World` শো করছে।

![vite-4.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1660462065745/nRjiHgmd1.png align="left")

## Working with main.jsx

আমরা যদি আমাদের মেইন ফাইলের কোডগুলো দেখি দেখবো সেখানে আছে এরকম -

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
```

দেখুন এখানে App একটা সেলফ ক্লোজিং ট্যাগ হিসেবে লেখা হয়েছে। কল করা হয়নি। এখানে `React.StrictMode` আমরা যখন ডেভেলপমেন্ট অবস্থায় থাকবো আমাদেরকে বিভিন্ন সমস্যা করবে। যেমন আমরা যদি App ফাইলে গিয়ে ফাংশনের ভিতর `console.log(‘Hello’)` লিখি দেখবো ব্রাউজারের কনসোলে দুইবার রান হচ্ছে। একবার ডেভ টুল থেকে পাচ্ছে, আরেকবার অ্যাপ্লিকেশন থেকে। আমরা নিচের ইমেজটা খেয়াল করলে বুঝতে পারবো।

![console-1.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1660462443717/aYphRk_kJ.png align="left")

এই অযাচিত সমস্যা থেকে মুক্তি পাওয়ার জন্য আমরা নিচের মতো করে মেইন ফাইলকে রিফ্র্যাক্টর করবো। আমরা React.StrictMode রাখবো কারণ প্রোডাকশনে আমাদের এটা দরকার হবে।

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// ReactDOM.createRoot(document.getElementById('root')).render(
// 	<React.StrictMode>
// 		<App />
// 	</React.StrictMode>
// );

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
```

এবার যদি ব্রাউজারের কনসোলে যাই দেখবো আমাদের সমস্যাটা আর নেই। অর্থাৎ একবারই প্রিন্ট হচ্ছে।

## props

আমরা আমাদের অ্যাপ ফাইলে গিয়ে নিচের কোডটি লিখি।

```jsx
function App(props) {
	console.log(props);
	return <h1>Hello World</h1>;
}

export default App;
```

প্রপ্স হচ্ছে একটা খালি অবজেক্ট। যদি প্রপ্স আকারে কিছু না থাকে তাহলে সে একটা খালি অবজেক্ট রিটার্ন করবে। আর প্রপ্স পাওয়া যাবে আমরা কম্পোনেন্ট যেখানে ব্যবহার করবো সেখান থেকে। সোজা কথায়, সেখানে attributes আকারে যা যা লিখবো সেগুলো প্রপ্স।

এখন আমরা আমাদের অ্যাপ ফাংশন ব্যবহার করেছি main.jsx এ। সেখানে গিয়ে যদি আমরা App ট্যাগের মধ্যে attributes আকারে `name="My App"` দিই তাহলে কনসোলে দেখবো প্রপ্স অবজেক্টে সেটা যুক্ত হয়ে যাবে।

![console-3.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1660464237455/uBsaBY1jt.png align="center")

এবার আমরা যদি আমাদের অ্যাপ ফাইলে গিয়ে h1 ট্যাগ হিসেবে Hello World না দিয়ে যদি লিখতাম `{props.name}` তাহলে মেইন ফাইলে যে attribute দিয়েছি সেটাই আমাদের ব্রাউজারে দেখাতো।

![vite-5.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1660464424924/_rDjJgk1s.png align="left")

এবার আমরা যদি `name` attribute এর মধ্যে ‘My App’ না দিয়ে যদি দিতাম ‘React is awesome’ তাহলে সেটাই প্রিন্ট করতো। দেখুন -

![vite-6.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1660464528443/isVW_FEBA.png align="left")

আবার যদি আমরা name attribute ই না দিতাম তাহলে কোনো এরর দেখাতো না, কিন্তু কিছু প্রিন্টও করতো না। দেখুন সেটা -

![vite-7.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1660464604916/jlDdbnBIX.png align="left")

## Working with Components

এবার আমরা কিছু একটা বানানর চেষ্টা করি। ধরি আমরা একটা লিস্ট বানাবো। যার প্রথমে থাকবে একটা চেকবক্স, এরপর একটা টেক্সট। তাহলে আমরা সেটাকে বানাতে পারি নিচের মতো কোড লিখে।

```jsx
function App(props) {
	console.log(props);
	return (
		<div>
			<ul>
				<li>
					<input type="checkbox" />
					<span>Checkbox 1</span>
				</li>
			</ul>
		</div>
	);
}

export default App;
```

এবার যদি ব্রাউজারে আমরা আউটপুট দেখি নিচের মতো আউটপুট পাবো।

![vite-8.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1660466232470/77SZr-8FV.png align="center")

কিন্তু আমরা একটা চেকবক্স চাই না। আমরা চাই ছয়টা। তাহলে আমরা li ট্যাগকে ছয়বার কপি করে পেস্ট করে দিলেই হয়ে গেলো।

```jsx
function App(props) {
	console.log(props);
	return (
		<div>
			<ul>
				<li>
					<input type="checkbox" />
					<span>Checkbox 1</span>
				</li>
				<li>
					<input type="checkbox" />
					<span>Checkbox 1</span>
				</li>
				<li>
					<input type="checkbox" />
					<span>Checkbox 1</span>
				</li>
				<li>
					<input type="checkbox" />
					<span>Checkbox 1</span>
				</li>
				<li>
					<input type="checkbox" />
					<span>Checkbox 1</span>
				</li>
				<li>
					<input type="checkbox" />
					<span>Checkbox 1</span>
				</li>
			</ul>
		</div>
	);
}

export default App;
```

ব্রাউজারে গেলে দেখতে পাবো আমরা ছয়টা চেকবক্স পেয়ে গেছি।

![vite-9.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1660466370199/sTfEgFIvo.png align="center")

কিন্তু এভাবে কপি করেই যদি আমরা করি তাহলে তো আমরা এইচটিএমএল দিয়েই করতে পারতাম। কেন আমাদের রিয়্যাক্টে আসতে হলো? রিয়্যাক্ট ডেভেলপার হিসেবে আমাদের কাজ হলো যে জায়গায় কোড ডুপ্লিকেট হচ্ছে সেখানেই একটা কম্পোনেন্ট বানিয়ে ফেলা। এখানে আমরা দেখছি li ট্যাগ বারবার ডুপ্লিকেট হচ্ছে। সুতরাং আমরা এটার জন্য একটা কম্পোনেন্ট বানিয়ে ফেলি। আপনারা জানেন সাধারণত কম্পোনেন্ট আলাদা ফাইলে বানানো হয়। আমরা এখানে এক ফাইলেই বুঝার সুবিধার্থে বানিয়ে ফেলি।

```jsx
const ListItem = () => (
	<li>
		<input type="checkbox" />
		<span>Checkbox 1</span>
	</li>
);
```

এবার আমরা এই কম্পোনেন্টকে আমাদের অ্যাপ ফাংশনে ছয়বার ট্যাগ আকারে লিখে ফেলি।

```jsx
function App() {
	return (
		<div>
			<ul>
				<ListItem />
				<ListItem />
				<ListItem />
				<ListItem />
				<ListItem />
				<ListItem />
			</ul>
		</div>
	);
}
```

ব্রাউজারে গেলে আমরা ঠিক আগের আউটপুটই দেখবো। এখন প্রশ্ন আসতে পারে যে কি এমন সুবিধা আমরা পেতে পারি কম্পোনেন্ট বানিয়ে? ধরেন আমরা একটা ডিলিট বাটন যুক্ত করতে চাইছি। আমাদেরকে সেটা ছয়বার আলাদা আলাদাভাবে যুক্ত করতে হবে না। আমরা শুধু আমাদের কম্পোনেন্টে যুক্ত করবো সেটা সবগুলোর সাথে যুক্ত হয়ে যাবে। যেমন -

```jsx
const ListItem = () => (
	<li>
		<input type="checkbox" />
		<span>Checkbox 1</span>
		<button>Delete</button>
	</li>
);
```

দেখুন সবগুলোর সাথে একটা করে ডিলিট বাটন যুক্ত হয়ে গেছে।

![vite-10.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1660468527691/8mrf4mNuz.png align="left")

আমরা চাইলে স্টাইলও করতে পারি। সেক্ষেত্রে শুধু আমরা আমাদের কম্পোনেন্ট ফাংশনে স্টাইল যুক্ত করবো তা সবগুলোতে পেয়ে যাবে।

```jsx
const ListItem = () => (
	<li
		style={{
			listStyle: 'none',
			display: 'flex',
			alignItems: 'center',
		}}
	>
		<input type="checkbox" />
		<p>Checkbox 1</p>
		<button style={{ 'margin-left': 'auto' }}>Delete</button>
	</li>
);
```

![vite-11.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1660468541115/V6HCC50dn.png align="left")

এই গেলো আমাদের কম্পোনেন্ট তৈরি করার মূল উদ্দেশ্য।

কিন্তু এখানে একটা সমস্যা আছে। সমস্যাটা হলো এখানে সব টেক্সট একইরকম। কিন্তু আমাদের তো ভিন্ন ভিন্ন টেক্সটও থাকতে পারে। সেক্ষেত্রে সল্যুশন হলো প্রপ্স ব্যবহার করা।

## Working with props

আমরা p ট্যাগের ভিতরে যে টেক্সটটা লিখেছিলাম সেটা আর এখন লিখবো। তার জায়গায় আমরা প্রপ্স পাস করে দিবো। চলুন সেটা কিভাবে লিখতে পারি দেখি -

```jsx
const ListItem = (props) => (
	<li
		style={{
			listStyle: 'none',
			display: 'flex',
			alignItems: 'center',
		}}
	>
		<input type="checkbox" />
		<p>{props.title}</p>
		<button style={{ 'margin-left': 'auto' }}>Delete</button>
	</li>
);
```

আমরা ফাংশনের আর্গুমেন্ট আকারে দিয়েছি props এবং p ট্যাগের ভিতরে {} দিয়ে এর ভিতর লিখেছি props.title। এবার আমরা যদি আমাদের ব্রাউজারে যায় সেখানে কিছুই দেখতে পাবো না টেক্সটের জায়গায়।

![vite-12.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1660468702380/gRy-fetK_.png align="left")

কারণ আমরা যেখানে এই কম্পোনেন্ট ফাংশন কল করেছি সেখানে অ্যাট্রিবিউট আকারে title দিয়ে দিইনি।

এবার যদি আমদের অ্যাপ ফাংশনের প্রথম লিস্ট আইটেম ট্যাগের ভিতর অ্যাট্রিবিউট দিই `<ListItem title="Checkbox 1" />` এভাবে দেখবো আমাদের প্রথমটাতে লেখা শো করছে, কিন্তু বাকিগুলোতে করছে না। এবার একে একে বাকি সবগুলোতে যদি আমরা title দিয়ে দিই তাহলে আমরা দেখবো সবগুলোতে টেক্সট অ্যাড হয়ে গেছে।

```jsx
function App() {
	return (
		<div>
			<ul>
				<ListItem title="Checkbox 1" />
				<ListItem title="Checkbox 2" />
				<ListItem title="Checkbox 3" />
				<ListItem title="Checkbox 4" />
				<ListItem title="Checkbox 5" />
				<ListItem title="Checkbox 6" />
			</ul>
		</div>
	);
}
```

![vite-13.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1660468924187/3-blyv09w.png align="left")

### Render list items dynamically

কিন্তু এখানেও একটা সমস্যা আছে। সমস্যাটা হলো আমাদের তো ডাটা এভাবে আসবে না। একটা স্ট্রাকচারড ওয়েতে আসবে। ধরি আমাদের কাছে একটা অ্যারে আছে নিচের মতো -

```js
const tasksList = [
	{
		id: 1,
		title: 'Checkbox 1',
		checked: false,
	},
	{
		id: 2,
		title: 'Checkbox 2',
		checked: false,
	},
	{
		id: 3,
		title: 'Checkbox 3',
		checked: false,
	},
	{
		id: 4,
		title: 'Checkbox 4',
		checked: false,
	},
	{
		id: 5,
		title: 'Checkbox 5',
		checked: false,
	},
	{
		id: 6,
		title: 'Checkbox 6',
		checked: false,
	},
];
```

ডাটার সোর্স অ্যাপ্লিকেশনের ভিতরেও থাকতে পারে আবার সার্ভার থেকেও আসতে পারে। যেখান থেকেই আসুক না কেন আমাদের টার্গেট হচ্ছে সেই ডাটা থেকে কিভাবে আমরা আমাদের কম্পোনেন্ট রেন্ডার করতে পারি। অর্থাৎ এক্ষেত্রে কিভাবে আমরা এই অ্যারে থেকে আমাদের লিস্ট আইটেম বানাতে পারি? সেটা হচ্ছে ম্যাপ করে। এক্ষেত্রে `map` মেথডটা আমাদের অনেক কাজে দিবে। আমরা ম্যাপ করে আমাদের যতটা দরকার ততটা লিস্ট আইটেম রেন্ডার করতে পারবো।

আমরা যে বারবার ListItem কম্পোনেন্ট লিখেছিলাম তার আর দরকার নেই। আমরা এক লাইনে সব আইটেম রেন্ডার করে ফেলতে পারবো। চলুন দেখি কিভাবে করা যায়।

```jsx
function App() {
	return (
		<div>
			<ul>
				{tasksList.map((item) => (
					<ListItem title={item.title} />
				))}
			</ul>
		</div>
	);
}
```

এবার যদি আপনি ব্রাউজারে যান দেখবেন আগের মতোই সব আইটেম রেন্ডার হয়ে গেছে। এখন এখানে যদি ১০০০টা ডাটা অ্যাড হয় তাহলে আমাদের UI এ গিয়ে হাত দিতে হবে না। অটোমেটিক্যালি তা অ্যাড হয়ে যাবে। আবার যদি ডাটা কমে যায় UI অটোমেটিক্যালি আপডেট হবে। অর্থাৎ আমাদের কিছুই আর করতে হবে না। ডাটার ভ্যারিয়েশনের উপর ডিপেন্ড করে UI অটোমেটিক্যালি আপডেট হয়ে যাবে। অর্থাৎ এখানে আমাদের মূখ্য বিষয় হচ্ছে ডাটা হ্যান্ডেল করা।

![vite-14.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1660470149486/MQ05ZoC_C.png align="left")

এখানে লক্ষ্য করলে আপনারা দেখবেন যে একটা ওয়ার্নিং আসছে কনসোলে। এটার কারণ হচ্ছে আমরা যখন ডায়নামিকভাবে অ্যারে ক্রিয়েট করছি তখন রিয়্যাক্টের কোর সিস্টেম বুঝতে পারে না এটা কে। তাই ঠিকমতো আইডেন্টিফাই করতে আমাদের একটা ইউনিক আইডেন্টিফায়ার key হিসেবে দিয়ে দিতে হয়।

```jsx
function App() {
	return (
		<div>
			<ul>
				{tasksList.map((item) => (
					<ListItem key={item.id} title={item.title} />
				))}
			</ul>
		</div>
	);
}
```

এবার দেখবেন ওয়ার্নিং চলে গেছে।

এবার আমরা চাইছি কিছু চেকবক্স চেক করা থাকবে আর কিছু আনচেক অবস্থায় থাকবে। আমরা আমাদের অ্যারেতে কিছু checked এর ভ্যালু true করে দিই। ধরলাম ১ এবং ৫ নাম্বার চেকবক্স চেকড অবস্থায় থাকবে। আমরা প্রথমে আমাদের ListItem কম্পোনেন্টে ইনপুট ট্যাগের ভিতর checked হিসেবে একটা প্রপ্স পাস করে দিবো। এবং পরে আমাদের App ফাংশন থেকে সেটা কল করবো।

```jsx
const ListItem = (props) => (
	<li
		style={{
			listStyle: 'none',
			display: 'flex',
			alignItems: 'center',
		}}
	>
		<input type="checkbox" checked={props.checked} />
		<p>{props.title}</p>
		<button style={{ marginLeft: 'auto' }}>Delete</button>
	</li>
);
```

```jsx
function App() {
	return (
		<div>
			<ul>
				{tasksList.map((item) => (
					<ListItem key={item.id} title={item.title} checked={item.checked} />
				))}
			</ul>
		</div>
	);
}
```

![vite-15.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1660471625495/0v5f5XG80.png align="left")

আমরা যা চাইলাম তা হয়ে গেছে।

### props.children

আমরা যদি না জানি ইউজার একটা কম্পোনেন্টের মধ্যে কি বসাতে চাইছে সেক্ষেত্রে আমরা props.children ব্যবহার করতে পারি। অর্থাৎ এটা দ্বারা বুঝানো হচ্ছে ইউজার তার ইচ্ছামতো যা খুশি এই জায়গায় অ্যাড করতে পারবে। ধরলাম আমাদের ListItem এ আমরা একটা edit বাটন অ্যাড করতে চাইছি। সেক্ষেত্রে আমরা আমাদের কম্পোনেন্ট ফাংশনটা একটু আপডেট করি props.children দিয়ে।

```jsx
const ListItem = (props) => (
	<li
		style={{
			listStyle: 'none',
			display: 'flex',
			alignItems: 'center',
		}}
	>
		<input type="checkbox" checked={props.checked} />
		<p>
			{props.title} <span>{props.children}</span>
		</p>
		<button style={{ marginLeft: 'auto' }}>Delete</button>
	</li>
);
```

আমরা p ট্যাগের মধ্যে একটা span ট্যাগ নিয়ে তার ভিতর props.children দিয়ে দিলাম। একটা জিনিস মাথায় রাখতে হবে children আকারে যা কিছু দিবো তা আমরা অ্যাট্রিবিউট আকারে দিতে পারবো না। আমাদেরকে তা দিতে হবে ওপেনিং ট্যাগ এবং ক্লোজিং ট্যাগের মাঝখানে। আমরা দেখি কিভাবে লিখতে হয়।

```jsx
function App() {
	return (
		<div>
			<ul>
				{tasksList.map((item) => (
					<ListItem key={item.id} title={item.title} checked={item.checked}>
						<button>Edit</button>
					</ListItem>
				))}
			</ul>
		</div>
	);
}
```

আপনারা দেখতে পাচ্ছে আমরা এখানে চিলড্রেন আকারে কিভাবে বাটনটাকে অ্যাড করেছি। এবার যদি ব্রাউজারে গিয়ে দেখি, দেখবো সবগুলোর সাথে এই বাটন যুক্ত হয়ে গেছে।

![vite-.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1660473447221/oIKd8b0Ya.png align="left")

### Use multiple child in a single parent in JSX

আমাদের একটা বিষয় মাথায় রাখতে হবে যে JSX এ কখনও একাধিক ট্যাগ ব্যবহার করা যাবে না। আমাদের যতো কোড আছে সব একটা সিঙ্গেল প্যারেন্ট এর মধ্যে লিখতে হবে। একাধিক প্যারেন্ট থাকতে পারবে না। লক্ষ্য করলে দেখবেন আমরা আমাদের অ্যাপ কম্পোনেন্ট একটা div এর মধ্যে রেখেছি এবং ListItem কম্পোনেন্ট একটা li ট্যাগের মধ্যে রেখেছি।

## States

রিয়্যাক্টকে বিগিনারদের কাছে কঠিন করে তুলেছে যে কনসেপ্ট, সেটা হলো স্টেট। ব্যাপারটা এমন না যে স্টেট অনেক কঠিন। কিন্তু ঠিকমতো না বুঝার কারণে সেটা বুঝতে সমস্যা হয়। আমরা একটা কাউন্টার বানাবো যেটা ১ করে বৃদ্ধি পাবে আবার ১ করে হ্রাস পাবে। এটা বানানোর পর আমরা কাউন্টার দিয়ে মজার একটা অ্যাপ বানাবো।

### Working with states

আমরা আগের অ্যাপ কম্পোনেন্টকে কমেন্ট আউট করে রেখে নতুন একটা অ্যাপ কম্পোনেন্ট বানাই।

```jsx
function App() {
	let count = 0;
	return (
		<div>
			<h1>Count: {count}</h1>
			<div>
				<button>Increment</button>
				<button>Decrement</button>
			</div>
		</div>
	);
}
```

![counter-1.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1660474297514/XJcIvg2Ri.png align="left")

খুবই সিম্পল অ্যাপ। আমরা Increment বাটনে ক্লিক করবে কাউন্টার বৃদ্ধি পাবে আর Decrement এ ক্লিক করে হ্রাস পাবে। আমাদের যদি তা করতে হয় তাহলে বাটনের মধ্যে onCLick হ্যান্ডলার যুক্ত করতে হবে। আগে ইনক্রিমেন্ট এবং ডিক্রিমেন্টের জন্য দুইটা ফাংশন বানিয়ে নিই। আমরা।

```jsx
const increment = () => {
	count++;
};

const decrement = () => {
	count--;
};
```

এরপর বাটনদ্বয়ের মধ্যে onClick হ্যান্ডলার হিসেবে এই ফাংশন দুইটা পাস করে দিবো।

```jsx
<div>
	<button onClick={increment}>Increment</button>
	<button onClick={decrement}>Decrement</button>
</div>
```

কিন্তু আমরা যদি বাটনে ক্লিক করি দেখবো তা কোনো কাজই করছে না। এর কারণ হচ্ছে আমরা রিয়্যাক্টের ক্ষেত্রে যে UI দেখি সেটা রিরেন্ডার হয় স্টেট বা প্রপ্স বা কোনো প্যারেন্ট পরিবর্তন হলে। এক্ষেত্রে আমাদের কাউন্টের ভ্যালু কিন্তু বৃদ্ধি পাচ্ছে বা হ্রাস পাচ্ছে, কিন্তু আমাদের কম্পোনেন্টে স্টেট আপডেট এর কোনো সিস্টেম নাই বিধায় তা শো হচ্ছে না। এক্ষেত্রে আমাদের দরকার স্টেট। যে ডাটার পরিবর্তনের ফলে আমাদের UI ও পরিবর্তিত হবে সেই ডাটাটাই আমাদেরকে স্টেটের মধ্যে রাখতে হবে। অর্থাৎ এক কথায় ডায়নামিক ডাটাগুলোকে আমাদের স্টেটের মধ্যে রাখতে হবে। ফাংশনাল কম্পোনেন্টের ক্ষেত্রে স্টেট ব্যবহার করা খুবই সোজা। আমরা useState নামে একটা হুক ব্যবহার করে তা করতে পারি। হুক নিয়ে আমরা পরে বিস্তারিত আলোচনা করবো। হুক আপাতত এখন বুঝার দরকার নাই। useState হলো একটা ফাংশন যার আর্গুমেন্ট হিসেবে আমরা একটা ডিফল্ট ভ্যালু দিবো। এই ডিফল্ট ভ্যালু অ্যারে, অবজেক্ট, নাম্বার, null যা খুশি আমরা ব্যবহার করতে পারি। যেহেতু আমরা চাই আমাদের কাউন্ট শূন্য থেকে শুরু হবে তাই আমরা লিখবো useState(0) এভাবে। এই useState রিটার্ন করে একটা অ্যারে। যার প্রথম আইটেম হিসেবে থাকে যেটা আমরা শো করাতে চাইছি অর্থাৎ যাকে আপডেট করতে হবে এক্ষেত্রে সেটা count, এবং পরবর্তী আইটেম হিসেবে থাকবে এই count কে আপডেট করার একটা ফাংশন। অর্থাৎ দুইটা আইটেম থাকবে এই অ্যারেতে। যেহেতু অ্যারে রিটার্ন করে সেহেতু আমরা নিচের মতো করে লিখতে পারি।

```jsx
const [count, setCount] = useState(0);
```

এবার আমরা আমাদের ফাংশনগুলোকে আপডেট করি।

```jsx
const increment = () => {
	setCount(count + 1);
};

const decrement = () => {
	setCount(count - 1);
};
```

এবার যদি আমরা আমাদের ব্রাউজারে যাই দেখবো আমাদের বাটন দুইটা কাজ করছে।

এখন পুরো UI রেন্ডার হচ্ছে কিনা বুঝার জন্য আমরা একটা কন্ডিশন লিখি। সেটা হলো যদি কাউন্টের ভ্যালু ১০ বা ১০ এর উপরে যায় সেক্ষেত্রে একটা প্যারাগ্রাফ শো করবে আর ১০ এর নিচে হলে শো করবে না।

```jsx
function App() {
	const [count, setCount] = useState(0);

	const increment = () => {
		setCount(count + 1);
	};

	const decrement = () => {
		setCount(count - 1);
	};

	return (
		<div>
			<h1>Count: {count}</h1>
			<div>
				<button onClick={increment}>Increment</button>
				<button onClick={decrement}>Decrement</button>
			</div>
			{count >= 10 && (
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
					maxime, ratione reiciendis consequatur perferendis cupiditate
					praesentium quia at repellendus fuga? Vero dolorum perferendis
					accusantium nam sed incidunt magnam, fugiat recusandae?
				</p>
			)}
		</div>
	);
}
```

এবার আমাদের ব্রাউজারে একটু দেখা যাক।

![counter-2.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1660475988405/JCk7i1NSu.png align="left")
![counter-3.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1660475998780/icJ01VEtn.png align="left")

দেখুন যতক্ষণ ৯ পর্যন্ত ছিল ততক্ষণ প্যারাগ্রাফ প্রিন্ট হয়নি, যেই ১০ এ গেলো অমনি প্যারাগ্রাফ চলে আসলো। তাহলে আমরা বুঝতে পারলাম পুরো পেইজ রেন্ডার হচ্ছে।

এবার যদি আমরা ডিক্রিমেন্ট বাটনে ক্লিক করতে থাকি দেখবো এক পর্যায়ে তা মাইনাসে চলে যাচ্ছে। কিন্তু আমরা কাউন্টের ভ্যালু মাইনাসে নিতেই চাই না। তাই আমরা আমাদের decrement ফাংশনে একটা কন্ডিশন দিয়ে দিতে পারি। আবার আমরা চাই কাউন্ট ১০ এর উপর যাবে না। সেক্ষেত্রে আমরা আমাদের increment ফাংশনে কন্ডিশন দিতে পারি।

```jsx
const increment = () => {
	if (count < 10) {
		setCount(count + 1);
	}
};

const decrement = () => {
	if (count > 0) {
		setCount(count - 1);
	}
};
```

এবার যদি আমরা আমাদের ব্রাউজারে গিয়ে দেখি, দেখবো কোনোভাবেই ০ এর নিচে এবং ১০ এর উপর যেতে পারছে না।

আমরা আবার কাউন্টের উপর ভিত্তি করে আমাদের বাটনগুলোকে ডিজেবল করে দিতে পারি।

```jsx
function App() {
	const [count, setCount] = useState(0);

	const increment = () => {
		if (count < 10) {
			setCount(count + 1);
		}
	};

	const decrement = () => {
		if (count > 0) {
			setCount(count - 1);
		}
	};

	return (
		<div>
			<h1>Count: {count}</h1>
			<div>
				<button onClick={increment} disabled={count === 10}>
					Increment
				</button>
				<button onClick={decrement} disabled={count === 0}>
					Decrement
				</button>
			</div>
			{count >= 10 && <p>Limit Reached!</p>}
		</div>
	);
}
```

এবার যদি দেখি দেখবো ০ আসা মাত্র ডিক্রিমেন্ট বাটন ডিজেবল হয়ে যাচ্ছে এবং ১০ আসা মাত্র ইনক্রিমেন্ট বাটন ডিজেবল হয়ে যাচ্ছে। স্টেট ব্যবহার করার কারণে এই জিনিসগুলোকে আমরা খুব সহজেই হ্যান্ডেল করতে পারছি।

এবার আমাদের UI আমরা চেইঞ্জ করি একটু। ধরি আমাদের ওয়েবসাইটে একটা প্রোডাক্ট আছে। প্রোডাক্টটা হলো কীবোর্ড। আমাদের স্টকে দশটা কীবোর্ড আছে। আমরা আমাদের প্রয়োজন মতো ইনক্রিমেন্ট ডিক্রিমেন্ট করে কয়টা প্রোডাক্ট কিনতে চাই সেই সিস্টেম করতে চাই।

```jsx
function App() {
	const [count, setCount] = useState(0);

	const increment = () => {
		if (count < 10) {
			setCount(count + 1);
		}
	};

	const decrement = () => {
		if (count > 0) {
			setCount(count - 1);
		}
	};

	return (
		<div>
			<p>Keyboard</p>
			<p>{count} / 10</p>
			<div>
				<button onClick={increment} disabled={count === 10}>
					Increment
				</button>
				<button onClick={decrement} disabled={count === 0}>
					Decrement
				</button>
			</div>
		</div>
	);
}
```

![product-1.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1660484288574/tglw3vQox.png align="left")

এখন আমর চাইছি কীবোর্ডের সাথে মাউস, হেডফোন এসবও কিনবো। সেই সিস্টেম আমরা কিভাবে করতে পারি? আমরা যদি সেই কোড কপি করে পেস্ট করে শুধু কীবোর্ডের জায়গায় মাউস লিখি সেক্ষেত্রে দেখা যাবে যেকোনো একটা প্রোডাক্টের বাটন ক্লিক করলে দুই প্রোডাক্টের স্টেটই আপডেট হচ্ছে। যেহেতু একই UI, একই ফাংশনালিটিজই থাকবে সেক্ষেত্রে আমরা একটা আলাদা কম্পোনেন্ট বানিয়ে ফেলতে পারি। আর স্টেটের একটা বৈশিষ্ট হলো সেটা শুধুমাত্র একটা কম্পোনেন্টের জন্য সীমাবদ্ধ। একটা নির্দিষ্ট কম্পোনেন্টে স্টেত ইউজ করা হয়েছে মানে সেই স্টেটের এক্সেস অন্য কেউ নিতে পারবে না।

```jsx
const ProductListItem = () => {
	const [count, setCount] = useState(0);

	const increment = () => {
		if (count < 10) {
			setCount(count + 1);
		}
	};

	const decrement = () => {
		if (count > 0) {
			setCount(count - 1);
		}
	};
	return (
		<div>
			<p>Keyboard</p>
			<p>{count} / 10</p>
			<div>
				<button onClick={increment} disabled={count === 10}>
					Increment
				</button>
				<button onClick={decrement} disabled={count === 0}>
					Decrement
				</button>
			</div>
		</div>
	);
};
```

```jsx
function App() {
	return (
		<div>
			<ProductListItem />
			<ProductListItem />
		</div>
	);
}
```

এবার যদি আমরা আমাদের ব্রাউজারে গিয়ে দেখি দেখবো যেই প্রোডাক্টের বাটনে ক্লিক করবো শুধু সেটার স্টেটই আপডেট হচ্ছে, অন্যটার না। আমরা যখন একটা কম্পোনেন্ট একবার কল করছি তার জন্য স্টেটের একটা আলাদা ইনস্ট্যান্স তৈরি হচ্ছে, তার জন্য আলাদা মেমোরি তৈরি হচ্ছে, তার জন্য আলাদাভাবে ম্যানেজ করা হচ্ছে সব। তার মধ্যে কি স্টেট আছে সেটা অন্য কম্পোনেন্ট জানেও না। একবার কল করা মানে হচ্ছে এই কম্পোনেন্টের ভিতর যা আছে সব করতে হবে। সেখানে স্টেট থাকলে স্টেট নিতে হবে, ফাংশন থাকলে ফাংশনের কাজ করতে হবে, লজিক থাকলে তার কাজ করতে হবে। সেই কম্পোনেন্ট যখন আরেকবার কল করা হয় তখন পুরো কাজটা আবার নতুনভাবে শুরু হয়। যার ফলে আগের কম্পোনেন্ট কলের সাথে এই কম্পোনেন্ট কলের কোনোরকম সম্পর্ক থাকে না। কিন্তু এখানে আরেকটা সমস্যা তৈরি হয়েছে। দুইটার নামই কীবোর্ড। কিন্তু আমরা তো চাই একটার নাম কীবোর্ড হবে, আরেকটার নাম মাউস হবে, আরেকটার নাম হেডফোন হবে এরকম। তাছাড়া আমার সব প্রোডাক্টের স্টক যে ১০টাই হবে তেমনও কথা নেই। কোনো প্রোডাক্ট ১০টা থাকতে পারে, কোনোটা ৫টা, কোনোটা ৭টা। সেই সমস্যার সমাধানের জন্য আছে প্রপ্স। প্রপ্স দিয়ে আমরা নাম, স্টক এসব আমরা ডায়নামিক করে ফেলতে পারি।

```jsx
const ProductListItem = ({ productName, stock }) => {
	const [count, setCount] = useState(0);

	const increment = () => {
		if (count < stock) {
			setCount(count + 1);
		}
	};

	const decrement = () => {
		if (count > 0) {
			setCount(count - 1);
		}
	};
	return (
		<div>
			<p>{productName}</p>
			<p>
				{count} / {stock}
			</p>
			<div>
				<button onClick={increment} disabled={count === stock}>
					Increment
				</button>
				<button onClick={decrement} disabled={count === 0}>
					Decrement
				</button>
			</div>
		</div>
	);
};
```

```jsx
function App() {
	return (
		<div>
			<ProductListItem productName={'Keyboard'} stock={10} />
			<ProductListItem productName={'Mouse'} stock={5} />
		</div>
	);
}
```

Props যেহেতু একটা অবজেক্ট তাই আমরা আমাদের কম্পোনেন্টে props না লিখে অবজেক্ট নিয়ে সেটাকে ডিস্ট্রাকচার করে ফেললাম। এবার আমাদের নাম, স্টক ভিন্ন ভিন্ন আসছে। এবং সেই স্টক শেষ হওয়ার সাথে সাথে ইনক্রিমেন্ট বাটন ডিজেবল হয়ে যাচ্ছে।

![product-2.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1660486333325/vdKe9xYsc.png align="center")

এখন যদি আমার কাছে এমন একটা প্রোডাক্ট থাকে যেটা বর্তমানে স্টকে নাই কিন্তু আমরা UI তে শো করতে চাইছি তাহলে সেক্ষেত্রে আমরা stock এর ভ্যালু 0 দিয়ে দিলেই হয়ে যাবে। যেমন -

```jsx
<ProductListItem productName={'Headphone'} stock={0} />
```

![product-3.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1660486644043/9zRDNJyYZ.png align="left")

আমরা হেডফোন ইনক্রিমেন্ট, ডিক্রিমেন্ট কিছুই করতে পারছি না। এই সবকিছু করতে আমাদের কয় লাইন কোড করতে হয়েছে দেখুন। এটাই রিয়্যাক্টের মজা। খুব সহজেই অনেক কাজ কম সময়ে করে ফেলা যায়।

এবার আমরা পুরো জিনিসটা নতুনভাবে শুরু থেকে করার চেষ্টা করি। ধরি আমাদের কাছে তিনটা প্রোডাক্টের একটা অ্যারে আছে। আমাদের কাজ হচ্ছে এই প্রোডাক্টগুলোকে রেন্ডার করা, ওয়ার্কেবল করা, একটা ইনভয়েস জেনারেট করা।

```js
const productList = [
	{
		id: 'P1',
		productName: 'Keyboard',
		stock: 10,
		price: 2000,
	},
	{
		id: 'P2',
		productName: 'Mouse',
		stock: 5,
		price: 1500,
	},
	{
		id: 'P3',
		productName: 'Headphone',
		stock: 15,
		price: 2500,
	},
];
```

এবার আমরা একটা টেবিল বানাবো। এবং টেবিল রো এর জন্য একটা কম্পোনেন্ট বানাবো।

```jsx
const TableRow = ({ id, name, stock, price, quantity, total }) => {
	return (
		<tr>
			<td>{id}</td>
			<td>{name}</td>
			<td>{stock}</td>
			<td>{price}</td>
			<td>{quantity}</td>
			<td>{total}</td>
			<td>
				<button>+</button>
				<button>-</button>
			</td>
		</tr>
	);
};

const App = () => {
	return (
		<div>
			<h1>Product List</h1>
			<table>
				<thead>
					<tr>
						<th>ID</th>
						<th>Name</th>
						<th>Stock</th>
						<th>Price</th>
						<th>Quantity</th>
						<th>Total</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{productList.map((product) => (
						<TableRow
							key={product.id}
							id={product.id}
							name={product.name}
							stock={product.stock}
							price={product.price}
						/>
					))}
				</tbody>
			</table>
		</div>
	);
};
```

![table-1.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1660488668205/LTVtms6j8.png align="left")

আমাদের UI রেডি। এখন এখানে কি এমন করা যায় যেখানে টোটাল এবং কোয়ান্টিটি ক্যালকুলেট করে রাখতে পারবো। আমরা একটা স্টেট নিবো।

```jsx
const App = () => {
	const [products, setProducts] = useState(
		productList.map((item) => {
			return {
				...item,
				quantity: 0,
				total: 0,
			};
		})
	);

	return (
		<div>
			<h1>Product List</h1>
			<table>
				<thead>
					<tr>
						<th>ID</th>
						<th>Name</th>
						<th>Stock</th>
						<th>Price</th>
						<th>Quantity</th>
						<th>Total</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{products.map((product) => (
						<TableRow
							key={product.id}
							id={product.id}
							name={product.name}
							stock={product.stock}
							price={product.price}
							quantity={product.quantity}
							total={product.total}
						/>
					))}
				</tbody>
			</table>
		</div>
	);
};
```

![table-2.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1660489425352/_6ySKhzDi.png align="left")

এবার আমরা আমাদের কম্পোনেন্ট ফাংশনকে সম্পূর্ণ করে ফেলি চলুন।

```jsx
const TableRow = ({
	id,
	name,
	stock,
	price,
	quantity,
	total,
	increment,
	decrement,
}) => {
	return (
		<tr>
			<td>{id}</td>
			<td>{name}</td>
			<td>{stock}</td>
			<td>{price}</td>
			<td>{quantity}</td>
			<td>{total}</td>
			<td>
				<button disabled={quantity === stock} onClick={() => increment(id)}>
					+
				</button>
				<button disabled={quantity === 0} onClick={() => decrement(id)}>
					-
				</button>
			</td>
		</tr>
	);
};
```

এবার আমরা আমাদের অ্যাপকে সম্পূর্ণ করবো।

```jsx
const App = () => {
	const [products, setProducts] = useState(
		productList.map((item) => ({
			...item,
			quantity: 0,
			total: 0,
		}))
	);

	const incrementQuantity = (id) => {
		setProducts(
			products.map((product) => {
				if (id === product.id && product.stock > product.quantity) {
					product.quantity++;
					product.total = product.quantity * product.price;
				}
				return product;
			})
		);
	};

	const decrementQuantity = (id) => {
		setProducts(
			products.map((product) => {
				if (id === product.id && product.quantity > 0) {
					product.quantity--;
					product.total = product.quantity * product.price;
				}
				return product;
			})
		);
	};

	const total = products.reduce((acc, cur) => acc + cur.total, 0);

	return (
		<div>
			<h1>Product List</h1>
			<table>
				<thead>
					<tr>
						<th>ID</th>
						<th>Name</th>
						<th>Stock</th>
						<th>Price</th>
						<th>Quantity</th>
						<th>Total</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{products.map((product) => (
						<TableRow
							key={product.id}
							{...product}
							increment={incrementQuantity}
							decrement={decrementQuantity}
						/>
					))}
				</tbody>
			</table>
			{total > 0 && <p>Total: {total}</p>}
		</div>
	);
};
```

আমাদের UI দেখতে নিচের মতো হবে।

![table-3.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1660492385981/_8PSwimoW.png align="left")

## Source Code

এই লেকচারের সকল কোড এই [লিংক](https://github.com/mrhm-dev/full-stack-army/tree/master/src/lecture-36/react-demo) এ পাবেন।
