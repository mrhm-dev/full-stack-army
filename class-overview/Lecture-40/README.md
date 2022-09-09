# Lecture 40 - State Lifting and Filtering Techniques

## Introduction

আজকে আমাদের প্রথম কাজ হচ্ছে স্টেট লিফটিং। এর জন্য আমরা একটা ছোট অ্যাপ্লিকেশন বেছে নিয়েছি। যেটার নাম কনটাক্ট লিস্ট। কারণ এই অ্যাপ্লিকেশনকে অনেকভাবে এক্সপান্ড করা যায়। আমরা প্রথমে আমাদের প্রজেক্ট vite এর মাধ্যমে scaffold করে নিবো। এরপর আমাদের কাজ শুরু।

## Contact App

### Plannning

আমরা কি করতে চাইছি তা আগে বুঝতে হবে। তার জন্য আমরা একটা ডায়াগ্রাম বানিয়ে নিই।

![lecture-40.jpg](https://cdn.hashnode.com/res/hashnode/image/upload/v1662710047301/k93dQrmyI.jpg)

আমরা একটা সিম্পল অ্যাপ বানাবো। প্রথমে একটা ফর্ম থাকবে যেখানে আমরা ইনপুট দিবো। এরপর কনটাক্ট লিস্টটা একটা টেবিল আকারে আউটপুট দিবে। তাহলে অ্যাপ ছাড়া আমাদের কম্পোনেন্ট দুইটা - একটা ফর্ম কম্পোনেন্ট এবং আরেকটা টেবিল কম্পোনেন্ট। আমাদের সমস্ত ডাটা থাকবে অ্যাপ কম্পোনেন্টে। কিন্তু ফর্ম ম্যানেজ করতে হলে ফর্ম কম্পোনেন্টে কিছু লোকাল স্টেটের দরকার হবে, যা শুধুমাত্র এই কম্পোনেন্টের মধ্যে থাকবে অন্য কোথাও থাকবে না। অর্থাৎ অ্যাপ কম্পোনেন্টের মধ্যে থাকবে না। তাহলে ফর্মে যে লোকাল স্টেটটা থাকবে সেটাকে লিফট করে আমাদের অ্যাপের কাছে পাঠাতে হবে। আমরা জানি স্টেট ফ্লো সবসময় উপর থেকে নিচে হয় অর্থাৎ প্যারেন্ট থেকে চাইল্ডের দিকে। নিচ থেকে উপরে না। এখন যদি কোনো কারণে কোনো কম্পোনেন্টের মধ্যে লোকাল স্টেট থাকে তা হলো সেই কম্পোনেন্টের নিজস্ব ডাটা। ঐ কম্পোনেন্টের বাইরে এই স্টেটের কোনো অ্যাক্সেস থাকবে না। এখন যদি কোনো সময় এই স্টেটকে আমাদের প্যারেন্টের কাছে পাঠাতে হয় সেক্ষেত্রে আমরা ব্যবহার করবো স্টেট লিফটিং।

এখন স্টেট লিফট করে আমরা কি করবো? আমরা চাইল্ড থেকে প্যারেন্টের মধ্যে লোকাল স্টেটগুলোকে দিয়ে সেগুলোকে কোনো না কোনো স্টেটের মধ্যে রাখবো। ধরি আমাদের অ্যাপ কম্পোনেন্টের মধ্যে সমস্ত কন্টাক্ট অ্যারে আকারে রাখছি। আর ফর্মের লোকাল স্টেটের মধ্যে আমরা শুধু একটা কনটাক্ট ক্রিয়েট করতে পারছি। অর্থাৎ আমরা একটা অবজেক্ট ক্রিয়েট করতে পারছি। তার মানে লোকাল স্টেটের মধ্যে আছে অবজেক্ট। এখন এই অবজেক্টকে আমাদের প্যারেন্ট বা যেখান থেকে ডাটা ডিস্ট্রিবিউট হচ্ছে সেখানে পৌঁছিয়ে দিতে চাইছি। এবং সেখানে যে অ্যারে রয়েছে তার মধ্যে রাখতে চাইছি। তার মানে অ্যাপ বা প্যারেন্টে একটা স্টেট থাকবে।

আমরা অ্যাপ স্টেটের মধ্যে একটা হ্যান্ডলার ফাংশন নিবো যেটা অ্যাপ স্টেটকে আপডেট করতে পারে। এই ফাংশনকে প্রপ্স আকারে ফর্ম কম্পোনেন্টের কাছে পাস করে দিবো। এই কম্পোনেন্ট সেই হ্যান্ডলার ফাংশনকে কল করবে লোকাল স্টেট দিয়ে। যখন ফর্ম কম্পোনেন্ট লোকাল স্টেট দিয়ে অ্যাপ কম্পোনেন্টের কাছে থাকা ফাংশনকে কল করছে, তখন এটা আপাতদৃষ্টিতে ফর্ম কম্পোনেন্টের মধ্যে এক্সিকিউট হচ্ছে বলে মনে হলেও সেটা আসলে হবে অ্যাপ কম্পোনেন্টের মধ্যে। যেহেতু অ্যাপ কম্পোনেন্টের মধ্যে এক্সিকিউট হচ্ছে তাই ঐ ফাংশন লোকাল স্টেট দিয়ে অ্যাপ স্টেটকে আপডেট করে দিতে পারবে। কারণ অ্যাপ স্টেটের অ্যাক্সেস এই ফাংশনের মধ্যে আছে যেহেতু অ্যাপ থেকে এক্সিকিউট হচ্ছে। আবার যেহেতু ফর্ম থেকে কল হচ্ছে তাই এর লোকাল স্টেটের এক্সেসও এই ফাংশনের কাছে রয়েছে। এখানে তিনটা কনসেপ্ট কাজ করছে।

- কোথায় ফাংশনটা তৈরি হচ্ছে সেই স্কোপ
- কোথায় ফাংশনটা কল হচ্ছে সেই স্কোপ
- কল হওয়ার সময় কোন কনটেক্সট কাজ করছে সেটা

এই তিনটা কনসেপ্ট মিলিয়েই মূলত হচ্ছে স্টেট লিফটিং। বুঝতে যতটা জটিল মনে হচ্ছে এটা কিন্তু ততটা জটিল না। প্র্যাকটিক্যালি দেখলে বুঝা যাবে সহজেই।

### ContactForm Component

আমরা প্রথমে `App.jsx` এর মধ্যে ContactForm কম্পোনেন্ট বানিয়ে নিই।

```jsx
const ContactForm = () => {
	return (
		<form>
			<div>
				<label htmlFor="name">Name:</label>
				<input type="text" id="name" name="name" />
			</div>
			<div>
				<label htmlFor="email">Email:</label>
				<input type="email" id="email" name="email" />
			</div>
			<input type="submit" value="Create New Contact" />
		</form>
	);
};

const App = () => {
	return (
		<div>
			<h1>Contact App</h1>
			<ContactForm />
		</div>
	);
};

export default App;
```

এবার আমরা যদি আমাদের অ্যাপ্লিকেশন চালু করি দেখবো আমাদের ব্রাউজারে ফর্মটা দেখা যাচ্ছে। এখন এই ফর্মটা আনকন্ট্রোলড অবস্থায় আছে। একে কন্ট্রোলড করার জন্য এই কম্পোনেন্টের ভিতরেই আমরা স্টেট নিবো।

```jsx
import { useState } from 'react';

const CONTACT_FORM_INIT_STATE = {
	name: '',
	email: '',
};

const ContactForm = () => {
	const [values, setValues] = useState({ ...CONTACT_FORM_INIT_STATE });
	const { name, email } = values;

	return (
		<form>
			<div>
				<label htmlFor="name">Name:</label>
				<input type="text" id="name" name="name" value={name} />
			</div>
			<div>
				<label htmlFor="email">Email:</label>
				<input type="email" id="email" name="email" value={email} />
			</div>
			<input type="submit" value="Create New Contact" />
		</form>
	);
};

const App = () => {
	return <div>// ...</div>;
};

export default App;
```

এবার আমরা `onChange` হ্যান্ডলার যুক্ত করবো।

```jsx
const ContactForm = () => {
	const [values, setValues] = useState({ ...CONTACT_FORM_INIT_STATE });
	const { name, email } = values;

	const handleChange = (e) => {
		setValues({
			...values,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(values);
	};

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label htmlFor="name">Name:</label>
				<input
					type="text"
					id="name"
					name="name"
					value={name}
					onChange={handleChange}
				/>
			</div>

			<div>
				<label htmlFor="email">Email:</label>
				<input
					type="email"
					id="email"
					name="email"
					value={email}
					onChange={handleChange}
				/>
			</div>
			<br />
			<input type="submit" value="Create New Contact" />
		</form>
	);
};
```

এবার যদি আমরা আমাদের ফর্মটা সাবমিট করি দেখবো `values` অবজেক্ট কনসোলে প্রিন্ট হয়েছে।

![L40-01.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1662720707287/Sj5LAHHe6.png)

এবার ডাটা ফর্মে ক্রিয়েট হলেও তা কোনো না কোনোভাবে দরকার আমাদের অ্যাপ কম্পোনেন্টের মধ্যে। কারণ `ContactForm` রয়েছে অ্যাপ কম্পোনেন্টের মধ্যে। আমরা প্রথমে অ্যাপের মধ্যে একটা ফাংশন বানাবো।

```jsx
const getData = () => {
	console.log('Calling getData function');
};
```

এই ফাংশনটা যখন আমরা ইনপুট ফিল্ডে ডাটা দিয়ে সাবমিট করবো তখন কল করবে। অর্থাৎ যখন `ContactForm` এর মধ্যে `handleSubmit` কল হবে তখনই আমাদের `getData` ফাংশন কল হবে। তাহলে আমরা প্রপ্স আকারে `ContactForm` এর মধ্যে `getData` নিতে পারি এবং সেটাকে `handleSubmit` এর মধ্যে দিয়ে দিবো।

```jsx
const ContactForm = ({ getData }) => {
	// ...

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(values);
		getData();
	};

	// ...
};
```

এবার অ্যাপ কম্পোনেন্টের ভিতরে যেখানে `ContactForm` কল হচ্ছে সেখানে এই প্রপ্সকে পাস করতে হবে।

```jsx
<ContactForm getData={getData} />
```

এবার যদি আমরা ফর্ম সাবমিট করি, দেখবো প্রথমে আমাদের ভ্যালু প্রিন্ট হচ্ছে এরপর `getData` ফাংশন।

![L40-02.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1662721393418/sAUPNi8Dz.png)

এখন যেহেতু `getData` কল হচ্ছে ঠিকভাবে আমরা `values` কে `getData` থেকেই তো কল করতে পারি। তার জন্য আমাদের `getData` ফাংশনের মধ্যে `values` প্যারামিটার দিয়ে দিলেই হয়ে যাচ্ছে।

```jsx
const ContactForm = ({ getData }) => {
	// ...

	const handleSubmit = (e) => {
		e.preventDefault();
		getData(values);
	};

	// ...
};

const App = () => {
	const getData = (values) => {
		console.log(values);
		console.log('Calling getData function');
	};

	// 	...
};
```

এখন যদি আমরা চেক করি দেখবো আউটপুট একই আসবে। কিন্তু এখন values পাচ্ছি অ্যাপ কম্পোনেন্ট থেকে।

এবার যদি আমরা পুরো অবজেক্টকে প্রিন্ট না করে শুধু নাম এবং ইমেইল প্রিন্ট করতে চাই তাও পারবো।

```jsx
const App = () => {
	const getData = (values) => {
		console.log(values.name);
		console.log(values.email);
	};

	// 	...
};
```

![L40-03.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1662722040507/uLrkU4Wyy.png)

একটা জিনিস বুঝার চেষ্টা করুন। আমাদের নাম আর ইমেইল স্টোর হচ্ছে ফর্ম কম্পোনেন্টের মধ্যে। অ্যাপের মধ্যে কোনো স্টেটই নেই। তাও অ্যাপ এই ডাটাগুলোকে পাচ্ছে। এখন যেহেতু আমরা প্রিন্ট করতে পারছি তার মানে সেটা আমাদের UI তেও ডিসপ্লে করতে পারবো। তার জন্য আমাদের অ্যাপের মধ্যে একটা স্টেট নিতে হবে। আমরা `getData` ফাংশনকে চেইঞ্জ করে একটা লজিক্যাল নাম দিবো সেটা হলো `getContact`।

```jsx
const App = () => {
	const [contacts, setContacts] = useState([]);
	const getContact = (contact) => {
		setContacts([].concat(contacts, contact));
	};

	return (
		<div>
			<h1>Contact App</h1>
			<ContactForm getContact={getContact} />
		</div>
	);
};
```

আমরা যখন ইনপুটে টাইপ করলাম তখন সেটা `ContactForm` এর স্টেটে স্টোর হচ্ছে।

![L40-04.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1662722776315/7l5DP3YgO.png)

যেইমাত্র আমরা বাটনে ক্লিক করছি তখনই অ্যাপ স্টেটের স্টেট আর ফাঁকা থাকছে না। সে তার চাইল্ড কম্পোনেন্টের ডাটাকে তার মধ্যে নিয়ে আসছে।

![L40-05.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1662722862528/rLV5DCUce.png)

কিভাবে হলো? যে ফাংশনটা স্টেট আপডেট করতে পারবে তা আমরা লিখেছি অ্যাপের মধ্যে। কল করেছি `ContactForm` এর মধ্যে। ফাংশনের আর্গুমেন্ট আকারে ডাটাটাকে প্যারেন্টের কাছে পাস করে দিয়েছি। এটাই স্টেট লিফটিং।

### Table Component

এবার আমরা আমাদের ডাটাগুলোকে রেন্ডার করতে চাই টেবিল আকারে। তার জন্য আমরা `Table` কম্পোনেন্ট বানিয়ে নিবো।

```jsx
const Table = ({ contacts }) => {
	return (
		<table>
			<thead>
				<tr>
					<th>Name</th>
					<th>Email</th>
				</tr>
			</thead>
			<tbody>
				{contacts.map((contact, index) => (
					<tr key={index}>
						<td>{contact.name}</td>
						<td>{contact.email}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

const App = () => {
	const [contacts, setContacts] = useState([]);
	const getContact = (contact) => {
		setContacts([].concat(contacts, contact));
	};

	return (
		<div>
			<h1>Contact App</h1>
			<ContactForm getContact={getContact} />
			<Table contacts={contacts} />
		</div>
	);
};
```

এবার দেখা যাবে আমাদের ডাটাগুলো শো করছে।

![L40-06.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1662724243831/gXJSeoveN.png)

বাটনে ক্লিক করার সাথে সাথে আমরা চাইছি আমাদের ইনপুট ফিল্ড ক্লিয়ার হয়ে যাক। তার জন্য আমাদের `handleSubmit` ফাংশনে সবকিছুর পর `values` এর মান আবার প্রথমে যা ছিল সেটাতে সেট করে দিতে হবে। অর্থাৎ

```jsx
const handleSubmit = (e) => {
	e.preventDefault();
	getContact(values);
	setValues({ ...CONTACT_FORM_INIT_STATE });
};
```

### Move ContactForm and Table components into separate files

আমরা আমাদের `ContactForm` এবং `Table` কম্পোনেন্টকে আলাদা মডিউলে নিবো। তার জন্য আমরা `components` ফোল্ডারের মধ্যে `ContactForm.jsx` এবং `Table.jsx` নামে একটা ফাইল তৈরি করবো। এবং অ্যাপ ফাইল থেকে `ContactForm` এবং `Table` রিলেটেড কোডগুলোকে কাট করে এনে এই ফাইলগুলোতে পেস্ট করে দিবো এবং তা এক্সপোর্ট করে দিবো।

```jsx
import { useState } from 'react';

const CONTACT_FORM_INIT_STATE = {
	name: '',
	email: '',
};

const ContactForm = ({ getContact }) => {
	const [values, setValues] = useState({ ...CONTACT_FORM_INIT_STATE });
	const { name, email } = values;

	const handleChange = (e) => {
		setValues({
			...values,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		getContact(values);
		setValues({ ...CONTACT_FORM_INIT_STATE });
	};

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label htmlFor="name">Name:</label>
				<input
					type="text"
					id="name"
					name="name"
					value={name}
					onChange={handleChange}
				/>
			</div>

			<div>
				<label htmlFor="email">Email:</label>
				<input
					type="email"
					id="email"
					name="email"
					value={email}
					onChange={handleChange}
				/>
			</div>
			<br />
			<input type="submit" value="Create New Contact" />
		</form>
	);
};

export default ContactForm;
```

```jsx
const Table = ({ contacts }) => {
	return (
		<table>
			<thead>
				<tr>
					<th>Name</th>
					<th>Email</th>
				</tr>
			</thead>
			<tbody>
				{contacts.map((contact, index) => (
					<tr key={index}>
						<td>{contact.name}</td>
						<td>{contact.email}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default Table;
```

সেই সাথে অবশ্যই অ্যাপের মধ্যে এগুলোকে ইমপোর্ট করতে ভুলবেন না।

### Add filtering option

আমরা চাই আমাদের কিছু কন্টাক্ট থাকবে রিলেটিভ অর্থাৎ Home contacts এবং কিছু কন্টাক্ট থাকবে অফিসিয়াল অর্থাৎ office contacts। আমরা এই দুইটার মাধ্যমে ফিল্টার করতে চাইছি। সেটা করার আগে আমরা আমাদের ContactForm এ আগে এই অপশনটা অ্যাড করে নিই।

```jsx
import { useState } from 'react';

const CONTACT_FORM_INIT_STATE = {
	name: '',
	email: '',
	group: '',
};

const ContactForm = ({ getContact }) => {
	const [values, setValues] = useState({ ...CONTACT_FORM_INIT_STATE });
	const { name, email, group } = values;

	const handleChange = (e) => {
		// ...
	};

	const handleSubmit = (e) => {
		// ...
	};

	return (
		<form onSubmit={handleSubmit}>
			// ...
			<div>
				<label htmlFor="group">Group</label>
				<select name="group" id="group" onChange={handleChange} value={group}>
					<option value="">Select</option>
					<option value="home">Home</option>
					<option value="office">Office</option>
				</select>
			</div>
			// ...
		</form>
	);
};

export default ContactForm;
```

এবার আমরা আমাদের টেবিলে গ্রুপ শো করাতে চাইলে `Table` কম্পোনেন্টে একটু অ্যাড করতে হবে নিচের মতো করে -

```jsx
const Table = ({ contacts }) => {
	return (
		<table>
			<thead>
				<tr>
					<th>Name</th>
					<th>Email</th>
					<th>Group</th>
				</tr>
			</thead>
			<tbody>
				{contacts.map((contact, index) => (
					<tr key={index}>
						<td>{contact.name}</td>
						<td>{contact.email}</td>
						<td>{contact.group}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default Table;
```

এবার গ্রুপটাও শো করবে টেবিলে।

এবার আমরা ফিল্টার অপশন যুক্ত করবো UI এ।

```jsx
const Table = ({ contacts }) => {
	return (
		<>
			<div>
				Filter:
				<select>
					<option value="All">All</option>
					<option value="">None</option>
					<option value="Home">Home</option>
					<option value="Office">Office</option>
				</select>
			</div>
			<table>// ...</table>
		</>
	);
};

export default Table;
```

এবার আমাদের দরকার ফিল্টার করার জন্য একটা স্টেট এবং হ্যান্ডলার ফাংশন।

```jsx
import { useState } from 'react';

const Table = ({ contacts }) => {
	const [filter, setFilter] = useState('All');
	const handleChange = (e) => {
		setFilter(e.target.value);
	};

	return (
		<>
			<div>
				Filter:
				<select value={filter} onChange={handleChange}>
					// ...
				</select>
			</div>
			<table>// ...</table>
		</>
	);
};

export default Table;
```

এবার আমরা আমাদের ফিল্টার অপশনের উপর ভিত্তি করে টেবিলে সেই ডাটাগুলো শো করবো। তার জন্য আমরা একটা ফাঁকা অ্যারে নিবো।

```jsx
let filteredContacts = [];

if (filter === 'All') {
	filteredContacts = contacts;
} else {
	filteredContacts = contacts.filter((contact) => contact.group === filter);
}
```

এখানে আমরা বুঝিয়েছি যদি `filter === 'All'` হয় তাহলে সমস্ত কন্টাক্ট শো করবে এবং অন্য কিছু হলে তা আমাদের ফর্মের অপশনের সাথে ম্যাচ করে যেটা পায় সেটা শো করবে। এখানে `tbody` এর মধ্যে আমরা `contacts.map` এর পরিবর্তে দিবো `filteredContacts.map`। এবার যদি চেক করি আমরা দেখবো যেই অপশন সিলেক্ট করছি সেভাবেই তা ফিল্টার হয়ে যাচ্ছে।

### Apply Search System

এবার আমরা আমাদের অ্যাপ্লিকেশনে সার্চ সিস্টেম অ্যাপ্লাই করবো। আমরা প্রথমে একটা সার্চবার দিয়ে দিই। টেবিল কম্পোনেন্টে `select` এর নিচে আমরা নিচের কোডটি বসিয়ে দিবো।

```jsx
<input type="search" placeholder="Search" />
```

এর কাজ হচ্ছে যেটা ফিল্টার করা থাকবে ঐটার মধ্যেই সে সার্চ করে রেজাল্ট বের করে আনবে। সেটা কিভাবে করা যায় এবার তা আমরা দেখবো। প্রথমে আমরা একটা স্টেট নিয়ে নিই।

```jsx
const [searchTerm, setSearchTerm] = useState('');
```

এবার আমাদের সার্চ ইনপুট ফিল্ডে আমরা `value` এবং `onChange` যুক্ত করবো।

```jsx
<input
	type="search"
	placeholder="Search"
	value={searchTerm}
	onChange={(e) => setSearchTerm(e.target.value)}
/>
```

এবার আমরা একটা লজিক লিখবো।

```jsx
if (searchTerm) {
	filteredContacts = filteredContacts.filter(
		(contact) =>
			contact.name.includes(searchTerm) || contact.email.includes(searchTerm)
	);
}
```

এটা পারফেক্টলি কাজ করছে। কিন্তু এখানে একটা প্রব্লেম হলো প্রতিটা ফিল্টার দুইবার করে হচ্ছে। এটা একটা পারফরম্যান্স ইস্যু তৈরি করবে। সুতরাং এটা আমরা করবো না। আমরা প্রথমে ফিল্টারের ভেতর যে ফাংশনটা আছে সেটাকে বের করে আনবো।

```jsx
const searchCB = (contact) =>
	contact.name.includes(searchTerm) || contact.email.includes(searchTerm);
```

এরপর আমরা পূর্বে যে লজিক লিখেছিলাম ফিল্টারের জন্য তাকে একটু মডিফাই করবো।

```jsx
if (filter === 'All') {
	filteredContacts = searchTerm ? contacts.filter(searchCB) : contacts;
} else {
	filteredContacts = contacts.filter(
		(contact) => contact.group === filter && searchCB(contact)
	);
}
```

এখন অ্যাপ্লিকেশন পারফেক্টলি কাজ করবে।

## Source Code

এই লেকচারের সকল সোর্স কোড আপনারা এই [লিংক](https://github.com/mrhm-dev/full-stack-army/tree/master/src/lecture-40) এ পাবেন।
