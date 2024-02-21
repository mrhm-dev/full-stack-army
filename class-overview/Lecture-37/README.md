# Lecture 37 - Thinking in React

%[https://youtu.be/6PyLbaIn0tI]

## Introduction

আমরা এতদিন ধরে রিয়্যাক্ট সম্পর্কে অনেক লেকচার দেখেছি। এখন আমাদের রিয়্যাক্ট কি সে সম্পর্কে আমাদের ধারণা হয়ে যাওয়া উচিৎ। রিয়্যাক্ট হলো ডম ম্যানিপুলেশনের একটা সহজ ভার্সন। জেকুয়েরির মতো। কিন্তু জেকুয়েরি একটা কমপ্লেক্স অ্যাপ্লিকেশনের জন্য ভাল পারফরমেন্স দেয় না। সেটার জন্য এখন বেস্ট সল্যুশন হলো রিয়্যাক্ট। রিয়্যাক্ট ডম ম্যানিপুলেশন ব্যতীত আর কোনো কিছু নিয়ে ডীল করে না। এমনকি BOM ও না। আর মানে রিয়্যাক্ট সাধারণত ডম ম্যানিপুলেশন লাইব্রেরি। জেকুয়েরির আরো কিছু প্রব্লেম আছে। যেমন এখানে কোনো আর্কিটেকচার না থাকার কারণে কোড ম্যানেজ করা অনেক কঠিন। দ্বিতীয়ত এখানে কম্পোনেন্টের কোনো কনসেপ্ট ছিল না। একটা ফাইলের মধ্যে আইডি এবং ক্লাস দিয়ে খুঁজে খুঁজে কোড ম্যানেজ করতে হতো যেটা ছিল খুবই কঠিন। স্টেট বলেও কিছু ছিল না এতে। আমরা যদি কোনো একটা চেইঞ্জ করতে চাই তাহলে পুরো ডম বারবার রিরেন্ডার করতে হতো, যেটা ছিল অনেক কস্টলি। এই সমস্যার সমাধান করার জন্য রিয়্যাক্ট বেস্ট সল্যুশন। অ্যাঙ্গুলার এবং ভিউ ব্যবহার করে শ্যাডো ডম। তাদের কোড কিভাবে আছে না আছে, কিভাবে আপডেট হচ্ছে কেউ জানতে পারবে না। কিন্তু রিয়্যাক্ট ব্যবহার করে ভার্চুয়াল ডম। ভার্চুয়াল ডম জিনিসটা একটু আমরা ব্যাখ্যা করি। নিচের স্ক্রিনশটটা আমরা একটু বুঝার চেষ্টা করি প্রথমে।

![vd-01.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1660574421867/LH_ALIi0m.png align="left")

এখানে দেখা যাচ্ছে আমরা একটা root এলিমেন্ট ক্রিয়েট করে তার মধ্যে একটা প্যারাগ্রাফ ট্যাগ রেখে দিয়েছি। এই root ভার্চুয়ালি আছে। এটা কিন্তু পেইজের কোথাও নেই।

![vd-02.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1660574701113/2-joNFX44.png align="left")

এবার দেখুন আমরা বডির সব মুছে দিলাম। এরপর আমাদের সেই root কে append করে দিলাম বডির মধ্যে ভার্চুয়ালি। আমরা এবার চাইলে root এর মধ্যে একটা প্যারাগ্রাফও অ্যাড করতে পারি। সবকিছু কিন্তু ভার্চুয়ালি হচ্ছে। root ভার্চুয়াল ডম হিসেবে থেকে গেলো। রিয়্যাক্ট এখানে এই root এর মতো দুইটা কপি করে রাখে। একটা ভার্চুয়াল ডম, আরেকটা রিয়েল ডম যেটা রেন্ডারিং হচ্ছে। এই দুইটা ডমের মধ্যে কোনো তফাৎ নেই। তাহলে দুইটা ডম কেন লাগছে? কারণ রিয়্যাক্টে যদি কোনো পরিবর্তন হয় তখন পরিবর্তনটা আসে ভার্চুয়াল ডমে। যখন এই পরিবর্তন আসে ভার্চুয়াল ডমে তখন সে রিয়েল ডমের সাথে একটা তুলনা করে দেখে রিয়েল ডমের সাথে ভার্চুয়াল ডমের কি তফাৎ আছে। যদি কোনো পরিবর্তন না আসে তাহলে সে কোনো কাজই করে না। আর যদি কোনো পরিবর্তন আসে, তাহলে যে জায়গাটায় পরিবর্তন পাচ্ছে শুধুমাত্র সেই জায়গাটা রিরেন্ডার করবে। এটাই হচ্ছে রিয়্যাক্টের মূল কনসেপ্ট বা মূল লজিক। এই এতটুকু কাজ রিয়্যাক্ট করে থাকে।

আমরা যদি [babeljs](https://babeljs.io/) এ গিয়ে try it out এ ক্লিক করে নিচের কোডটি লিখি তাহলে পাশে স্ক্রিনে দেখতে পাবো বিহাইন্ড দ্য সীন রিয়্যাক্ট সেটাকে কিভাবে রূপান্তরিত হচ্ছে।

![babel-01.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1660623067328/PRg7_pixu.png align="left")

দেখা যাচ্ছে রিয়্যাক্ট একটা এলিমেন্ট ক্রিয়েট করেছে। যার ভিতর প্রথম আর্গুমেন্ট হিসেবে আছে div, এরপর যেহেতু কোনো অ্যাট্রিবিউট নেই তাই null এসেছে, এরপর আছে আরে এলিমেন্ট। এভাবেই আমরা যা JSX লিখি তা রিয়্যাক্ট একটা ফাংশন আকারে রূপান্তর করে নেয়। এত উদাহরণ দেয়ার একটাই উদ্দেশ্য, রিয়্যাক্ট যে একটা ইউটিলিটি লাইব্রেরি সেটা বুঝানো।

রিয়্যাক্ট একটা ডম ম্যানিপুলেশন লাইব্রেরি। সাধারণত ডম ম্যানিপুলেশনের সাথে সাথে আমাদের অনেক কিছু দরকার হয়। যেগুলো রিয়্যাক্ট আমাদেরকে দেয় না। তাই এক হিসেবে রিয়্যাক্ট অনেক সহজ, অন্য হিসেবে অনেক কঠিন। যেহেতু রিয়্যাক্ট একটা ডম ম্যানিপুলেশন লাইব্রেরি তাই আমাদের এখানে শেখার মতো কিছু নেই। আমাদের যদি শুধু ডম ম্যানিপুলেশনের একটা প্রজেক্ট করতে যায় তাহলে রিয়্যাক্টের কোন কোন বিষয় আমাদের লাগবে আমরা একটু দেখি।

## Things to learn in react to create a basic app

- JSX - এটা যেহেতু আমাদের জন্য একটা নতুন কনসেপ্ট এটা আমাদেরকে ভালভাবে শিখতে হবে।
- Rendering Elements - একটা এলিমেন্ট কখন রেন্ডার হয় কখন রিরেন্ডার হয় এই সম্পর্কে আমাদের জানতে হবে।
- Component
- Props
- State and Lifecycle
- Handling events
- Conditional rendering
- Lists and keys
- Forms
- State Lifting

আরো কিছু অ্যাডভান্সড কনসেপ্ট আছে যেগুলো আমরা পরবর্তীতে শিখবো। যেহেতু রিয়্যাক্টে ডম ব্যতীত অন্য কিছু নেই তাই রিয়্যাক্ট ছোট একটা লাইব্রেরি। কিন্তু এটার একটা সমস্যাও আছে। সেটা হলো শুধু ডম ম্যানিপুলেশন করলেই হবে না, এখানে রাউটিংও দরকার হবে। সেটা আমাদেরকে রিয়্যাক্ট প্রোভাইড করে না। তাহলে আমাদের এটার জন্য অন্য কোনো সল্যুশন লাগবে। এরপর রিয়্যাক্ট আপনাকে কোনো UI টেমপ্লেট প্রোভাইড করে না। এর জন্য আমাদের SCSS, Styled Component, Material UI এর মতো ফেমওয়ার্কের কাছে যেতে হবে। এরপর আছে ফর্ম। রিয়্যাক্টে ফর্ম ম্যানেজ করা অনেক কঠিন। সেই সল্যুশন রিয়্যাক্ট আমাদেরকে দিচ্ছে না। তার মানে বেসিক অ্যাপ ডেভেলপ করার জন্য যা যা দরকার তার কিছুই রিয়্যাক্ট আমাদের দিচ্ছে না শুধুমাত্র ডম ম্যানিপুলেশন ব্যতীত।

রিয়্যাক্টে কোন কোন বিষয়ে আমাদের মাস্টার হতে হবে সেটা একটু দেখি আমরা আগে।

- Component, props, state and Lifecycle
- In depth knowledge of JSX
- Conditional rendering and list
- Forms and validation

এই চারটা জিনিস জানলে আমরা মোটামুটি যতো অ্যাপ্লিকেশন আছে তার ফিচারগুলো বানাতে পারবো। কমপ্লিট অ্যাপ্লিকেশন হয়তো বানাতে পারবো না কিন্তু ফিচার্স বানাতে পারবো। এই চারটাকে রিয়্যাক্টের জানপ্রাণ বলা হয়।

Component এর মধ্যে আমাদের যে জিনিসটা আমাদের জানতে হবে সেটা হলো Component Tree and Relationship। অর্থাৎ আমাদের জানতে হবে কিভাবে দুইটা কম্পোনেন্টের মধ্যে রিলেশন তৈরি হবে, কোনটা চাইল্ড কম্পোনেন্ট হবে, চাইল্ড কম্পোনেন্টের চাইল্ড কে হবে, গ্র্যান্ডচাইল্ডের সাথে প্যারেন্টের রিলেশন কিরকম হবে ইত্যাদি।

এই রিলেশনশীপ বিল্ড করতে হবে আমাদের তিনটা জিনিস জানতে হবে। সেগুলো হলো - State, Props, State Lifting।

রিয়্যাক্টের ক্ষেত্রে সবচেয়ে গুরুত্বপূর্ণ যেটা সেটা হলো রিয়্যাক্টের থিংকিং। এটার জন্য আপনারা [Thinking in React](https://reactjs.org/docs/thinking-in-react.html) আর্টিকেলটি পড়তে পারেন। রিয়্যাক্টের সবচেয়ে কমপ্লিকেটেড বিষয় হলো রিয়্যাক্টের মতো করে চিন্তা করা। কারণ আমাদের সেই চিন্তাটা আসে না। যতো ফেইমওয়ার্ক, লাইব্রেরী আছে সবচেয়ে ডিফারেন্ট উপায়ে কাজ করে রিয়্যাক্ট। আমরা যে ট্র্যাডিশনাল ওয়েতে কাজ করে আসছি সেই চিন্তাধারা রিয়্যাক্টে অ্যাপ্লাই করতে চাই। যে কারণে আসল চিন্তাধারা আসে না আমাদের। তাই আমরা ওয়েবসাইট বানাতে পারি সহজে, কিন্তু যখন অ্যাপ্লিকেশন বানাতে চাই বা কমপ্লেক্স কোনো ফিচার বানাতে চাই তখন অনেক সমস্যায় পড়তে হয়।

কোনো একটা UI যখন আমরা দেখি সবার প্রথমে আমাদের মাথায় আসে কিভাবে div নিবো, কিভাবে এই লেআউট তৈরি করবো, কিভাবে এইচটিএমএল, সিএসএস তৈরি করবো এসব। এই জায়গাটাতেই আমরা ভুল করে ফেলি। যদি এইচটিএমএল, সিএসএসই করা লাগে তাহলে আমরা রিয়্যাক্টে কেন আসলাম। রিয়্যাক্টের মতো করে চিন্তা করতে হলে আমাদের চিন্তা করতে হবে JSON নিয়ে। এইচটিএমএল, সিএসএস নিয়ে চিন্তা করা যাবে না। ধরেন আমরা দেখছি একটা ন্যাভবার, সেটাকে দেখতে হবে একটা JSON অবজেক্ট যাতে আছে, menuName, menuLink, hasDropdown এসব।

এইচটিএমএল নিয়ে কাজ করতে গেলে যখন আমরা কোনো লেআউট বানাতে ভুল করে ফেলি, তখন আর মিলানো যায় না। আবার প্রথম থেকে কোড করতে হয়। সেরকম রিয়্যাক্টে যখন আমরা JSON বানাতে ভুল করে ফেলি তখন আর অ্যাপ্লিকেশন মিলবে না। গত লেকচারে আমরা শপিং কার্ট বানাতে গিয়ে JSON ব্যবহার করে ম্যাপ করে ফেলেছিলাম। সঠিকভাবে করেছিলাম বলে আমাদের কাজ অনেক কমে গিয়েছিল।

## TODO App

আমরা একটা টুডু অ্যাপ বানানোর চেষ্টা করবো। তার জন্য আমাদের কাছে একটা UI আছে যেটা আপনারা এই [লিংক](https://www.figma.com/community/file/876773760965602621) এ পাবেন। এবার আমাদের টার্গেট হলো এই UI দেখে আমাদের একটা JSON অবজেক্ট বানাতে হবে।

চলুন দেখি কিভাবে আমাদের JSON দাঁড় করানো যায় দেখি।

```jsx
const task = {
	id: 'unique_id_001',
	subtitle: 'Subtitle',
	createdAt: '2022-08-16T08:49:35.268Z',
	tags: [
		{
			id: 'tag-001',
			text: 'Its done',
			icon: 'T',
		},
		{
			id: 'tag-002',
			text: 'Its cancelled',
			icon: 'X',
		},
		{
			id: 'tag-003',
			text: 'Its in progress',
			icon: 'X',
		},
		{
			id: 'tag-004',
			text: 'Just wrote it',
			icon: 'C',
		},
	],
	comments: [
		{
			id: 'comment-id-001',
			user: {
				avatar: 'xyz.com',
				name: 'Viraj',
				id: 'user-id-001',
			},
			text: 'Eiusmod quis aute eu tempor ipsum eiusmod commodo. In ex anim nisi elit veniam cillum tempor et. Nostrud proident anim Lorem consequat ullamco commodo reprehenderit consequat incididunt. Lorem esse cupidatat id reprehenderit qui eiusmod occaecat. Aute anim irure do nulla nulla duis. Occaecat eiusmod et reprehenderit culpa id ipsum incididunt labore pariatur deserunt deserunt ipsum reprehenderit.',
		},
	],
	tasks: [
		{
			id: 'task-001',
			title: 'Foggy Nelson',
			text: "Here to clean the streets of Hell's Kitchen",
			status: 'done',
		},
		{
			id: 'task-002',
			title: 'Louis CK',
			text: 'This one is cancelled',
			status: 'cancelled',
		},
		{
			id: 'task-003',
			title: 'Albert Einstein',
			text: 'In Progress',
			status: 'progress',
		},
		{
			id: 'task-004',
			title: 'Albert Einstein',
			text: 'In Progress',
			status: 'progress',
		},
	],
};
```

এবার JSON থেকে কিভাবে UI রেন্ডার করা যায় সেটা আমাদের দেখতে হবে। আমাদের UI অনুযায়ী প্রথমে আমাদের দরকার দিন তারিখ দেখানো। আমরা যে UI দেখেছি সেভাবে বানাবো না। খুব সিম্পলভাবে আমরা বানাবো। আমর প্রথমে দিন পাওয়ার জন্য এবং তারিখ পাওয়ার জন্য ফাংশন বানাবো।

```jsx
function getDay(dateStr) {
	const date = new Date(dateStr).getDay();
	const days = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
	];

	return days[date];
}

function formatDate(dateStr) {
	const date = new Date(dateStr);
	return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
}
```

এবার আমরা আমাদের UI টা বানাবো।

```jsx
const App = () => {
	return (
		<div>
			<h1>
				{getDay(task.createdAt)}, {formatDate(task.createdAt)}
			</h1>
			<h3>{task.subtitle}</h3>
			<ul>
				{task.tags.map((tag) => (
					<li key={tag.id}>
						<small>{tag.icon}</small> - {tag.text}
					</li>
				))}
			</ul>
			<hr />
			<p>Notes linked to people</p>
			<div>
				{task.comments.map((comment) => (
					<div key={comment.id}>
						<h4>{comment.user.name}</h4>
						<p>{comment.text}</p>
					</div>
				))}
			</div>
			<ul>
				{task.tasks.map((task) => (
					<li key={task.id}>
						<h3>{task.title}</h3>
						<p>
							<small>{task.status}</small>
						</p>
						<p>{task.text}</p>
					</li>
				))}
			</ul>
		</div>
	);
};
```

এবং সেটা দেখতে হবে নিচের ছবির মতো -

![ui-01.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1660643247187/J4FNJXmmq.png align="left")

আমরা এখানে কোনো স্টাইল করিনি। স্টাইল করা আমাদের মূখ্য উদ্দেশ্য না। আমাদের উদ্দেশ্য রিয়্যাক্ট কিভাবে কাজ করে সেটা বুঝা। এবার এখান থেকে কি কি কম্পোনেন্ট বানানো যায় সেটা আমরা দেখি। প্রথমে আমরা আমাদের ট্যাগ আইটেমের জন্য কম্পোনেন্ট বানাবো।

```jsx
const TagListItem = ({ tag }) => {
	return (
		<li key={tag.id}>
			<small>{tag.icon}</small> - {tag.text}
		</li>
	);
};
```

এরপর আমরা বানাবো কমেন্টের আইটেমগুলোর জন্য কম্পোনেন্ট।

```jsx
const CommentListItem = ({ comment }) => {
	return (
		<div key={comment.id}>
			<h4>{comment.user.name}</h4>
			<p>{comment.text}</p>
		</div>
	);
};
```

সবশেষে আমরা বানাবো আমাদের টাস্কগুলোর জন্য কম্পোনেন্ট।

```jsx
const TaskListItem = ({ task }) => {
	return (
		<li key={task.id}>
			<h3>{task.title}</h3>
			<p>
				<small>{task.status}</small>
			</p>
			<p>{task.text}</p>
		</li>
	);
};
```

এবার এগুলোকে আমরা আমাদের App কম্পোনেন্টে ব্যবহার করবো।

```jsx
const App = () => {
	return (
		<div>
			<h1>
				{getDay(task.createdAt)}, {formatDate(task.createdAt)}
			</h1>
			<h3>{task.subtitle}</h3>
			<ul>
				{task.tags.map((tag) => (
					<TagListItem tag={tag} key={tag.id} />
				))}
			</ul>
			<hr />
			<p>Notes linked to people</p>
			<div>
				{task.comments.map((comment) => (
					<CommentListItem key={comment.id} comment={comment} />
				))}
			</div>
			<ul>
				{task.tasks.map((task) => (
					<TaskListItem key={task.id} task={task} />
				))}
			</ul>
		</div>
	);
};
```

ব্রাউজারে গেলে দেখবেন আপনারা আমাদের UI আগের মতোই আছে।

এবার আমরা আমাদের অ্যাপে স্টাইল দিবো। এবং সাথে কিছু কোড রিফ্র্যাকটর করবো।

### App.css

```jsx
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

body {
	font-family: Arial, Helvetica, sans-serif;
	color: #212121;
}

.day-card {
	width: 300px;
	padding: 1rem;
	background-color: antiquewhite;
	border-radius: 0.25rem;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.title {
	font-size: 1.5rem;
	font-weight: 600;
	text-align: center;
}

.sub-title {
	font-size: 1.2rem;
	font-weight: 500;
	text-align: center;
	margin-top: 0.5rem;
}

.tag-ul {
	padding: 1rem;
}

.tag-ul li {
	list-style-type: none;
}

.line {
	width: 5rem;
	height: 2px;
	background-color: #212121;
}

.notes {
	line-height: 1.5;
	margin-top: 1rem;
}

.comments {
	margin-top: 1rem;
}

.comment-item h3 {
	font-weight: 600;
	font-size: 1.2rem;
}
.comment-item p {
	font-size: 0.9rem;
	margin-top: 0.5rem;
}

.tasks {
	margin-top: 1rem;
	padding: 1rem;
}

.tasks li {
	list-style-type: none;
	margin-bottom: 0.5rem;
}

.cards-group {
	display: flex;
	align-items: flex-start;
	gap: 1rem;
}
```

### tasks object

```jsx
const tasks = [
	{
		id: 'unique_id_001',
		subtitle: 'Subtitle',
		createdAt: '2022-04-24T18:04:42.792Z',
		tags: [
			{
				id: 'tag-001',
				text: 'Its done',
				icon: 'T',
			},
		],
		comments: [
			{
				id: 'comment-id-001',
				user: {
					avatar: 'xyz.com',
					name: 'Viraj',
					id: 'user-id-001',
				},
				text: 'Duis enim tempor in sunt magna labore duis et. Amet commodo voluptate commodo sit pariatur nulla proident. Magna reprehenderit ad adipisicing mollit non dolor excepteur cupidatat amet consequat irure.',
			},
		],
		tasks: [
			{
				id: 'task-001',
				title: 'Foggy Nelson',
				text: 'Here to clean the streets of Hells Kitchen',
				status: 'done',
			},
			{
				id: 'task-002',
				title: 'Louis CK',
				text: 'Here to clean the streets of Hells Kitchen',
				status: 'cancelled',
			},
			{
				id: 'task-003',
				title: 'Albert Einstein',
				text: 'Here to clean the streets of Hells Kitchen',
				status: 'progress',
			},
			{
				id: 'task-004',
				title: 'Albert Einstein',
				text: 'Here to clean the streets of Hells Kitchen',
				status: 'progress',
			},
		],
	},
	{
		id: 'unique_id_002',
		subtitle: 'Subtitle',
		createdAt: '2022-04-24T18:04:42.792Z',
		tags: [
			{
				id: 'tag-001',
				text: 'Its done',
				icon: 'T',
			},
			{
				id: 'tag-002',
				text: 'Its cancelled',
				icon: 'X',
			},
			{
				id: 'tag-003',
				text: 'Its in progress',
				icon: 'P',
			},
			{
				id: 'tag-004',
				text: 'Just wrote it',
				icon: 'C',
			},
		],
		comments: [],
		tasks: [
			{
				id: 'task-001',
				title: 'Foggy Nelson',
				text: 'Here to clean the streets of Hells Kitchen',
				status: 'done',
			},
			{
				id: 'task-002',
				title: 'Louis CK',
				text: 'Here to clean the streets of Hells Kitchen',
				status: 'cancelled',
			},
		],
	},
	{
		id: 'unique_id_003',
		subtitle: 'Subtitle',
		createdAt: '2022-04-24T18:04:42.792Z',
		tags: [
			{
				id: 'tag-001',
				text: 'Its done',
				icon: 'T',
			},
			{
				id: 'tag-002',
				text: 'Its done',
				icon: 'T',
			},
			{
				id: 'tag-003',
				text: 'Its done',
				icon: 'T',
			},
		],
		comments: [
			{
				id: 'comment-id-001',
				user: {
					avatar: 'xyz.com',
					name: 'Viraj',
					id: 'user-id-001',
				},
				text: 'Duis enim tempor in sunt magna labore duis et. Amet commodo voluptate commodo sit pariatur nulla proident. Magna reprehenderit ad adipisicing mollit non dolor excepteur cupidatat amet consequat irure.',
			},
			{
				id: 'comment-id-002',
				user: {
					avatar: 'xyz.com',
					name: 'Viraj',
					id: 'user-id-001',
				},
				text: 'Duis enim tempor in sunt magna labore duis et. Amet commodo voluptate commodo sit pariatur nulla proident. Magna reprehenderit ad adipisicing mollit non dolor excepteur cupidatat amet consequat irure.',
			},
		],
		tasks: [
			{
				id: 'task-001',
				title: 'Foggy Nelson',
				text: 'Here to clean the streets of Hells Kitchen',
				status: 'done',
			},
		],
	},
];
```

এখানে অনেকগুলো দিনের টাস্ক নেয়া হলো।

### Utility functions

```jsx
function getDay(dateStr) {
	const date = new Date(dateStr).getDay();
	const days = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
	];

	return days[date];
}

function formatDate(dateStr) {
	const date = new Date(dateStr);
	return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
}
```

### Components

```jsx
const TagListItem = ({ tag }) => {
	return (
		<li key={tag.id}>
			<small>{tag.icon}</small> - {tag.text}
		</li>
	);
};

const CommentListItem = ({ comment }) => {
	return (
		<div className="comment-item" key={comment.id}>
			<h4>{comment.user.name}</h4>
			<p>{comment.text}</p>
		</div>
	);
};

const TaskListItem = ({ task }) => {
	return (
		<li key={task.id}>
			<h3>{task.title}</h3>
			<p>
				<small>{task.status}</small>
			</p>
			<p>{task.text}</p>
		</li>
	);
};

const TaskCard = ({ task }) => {
	return (
		<div className="day-card">
			<h1 className="title">
				{getDay(task.createdAt)}, {formatDate(task.createdAt)}
			</h1>
			<h3 className="sub-title">{task.subtitle}</h3>
			<ul className="tag-ul">
				{task.tags.map((tag) => (
					<TagListItem key={tag.id} tag={tag} />
				))}
			</ul>
			<div className="line" />
			<p className="notes">Notes Linked to People</p>
			<div className="comments">
				{task.comments.map((comment) => (
					<CommentListItem key={comment.id} comment={comment} />
				))}
			</div>
			<ul className="tasks">
				{task.tasks.map((task) => (
					<TaskListItem key={task.id} task={task} />
				))}
			</ul>
		</div>
	);
};
```

### App function

```jsx
import './App.css';
const App = () => {
	return (
		<div className="cards-group">
			{tasks.map((task) => (
				<TaskCard key={task.id} task={task} />
			))}
		</div>
	);
};
export default App;
```

এবার আমাদের UI দেখি কেমন হয় -

![ui-02.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1660645243397/ygr6dSHBq.png align="left")

আমি একবার UI বানিয়ে ফেলেছি JSON থেকে। এবার যেভাবেই ডাটা আসুক না কেন আমাকে আর UI টাচই করতে হচ্ছে না। এটাই রিয়্যাক্টের পাওয়ার। জাস্ট কষ্ট করে একবার ঠিকভাবে কাজ করে ফেললেই আমাদের আর কোনো কাজ নেই। আমাদের কাজ এরপর থেকে শুধু JSON নিয়ে। UI নিয়ে আমাদের কোনো কাজ নেই আর।

আজকের লেকচারের পর আপনারা যেখানেই UI দেখবেন এইচটিএমএল, সিএসএস নিয়ে না ভেবে সেখান থেকে JSON বের করার চেষ্টা করবেন। একবার যদি মাথায় ঢুকে যায় আপনার ফ্রন্টএন্ড নিয়ে অনেকটা চাপ কমে যাবে আপনাদের।

## Source Code

এই লেকচারে সমস্ত সোর্স কোড এই [লিংক](https://github.com/mrhm-dev/full-stack-army/tree/master/src/lecture-37) এ পাবেন।
