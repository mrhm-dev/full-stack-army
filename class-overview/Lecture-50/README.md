# Lecture 50 - Track Zone Project | Reusable Clock Form

## Introduction

গত ক্লাসে আমরা একটা সমস্যায় পড়েছিলাম, সেটা হলো আমাদের কোনো ভগ্নাংশ অফসেট কাজ করছিলো না। তার কারণ হলো আমরা _ClockActions_ কম্পোনেন্টে চেইঞ্জ হ্যান্ডলারে ভ্যালুর মান বের করার সময় `parseInt` ব্যবহার করেছিলাম। ওটার পরিবর্তে `Number` লিখলেই এই ইস্যু থেকে মুক্তি পাওয়া যাবে। আমরা আজ একটা রিইউজেবল ফর্ম বানাবো। চলুন শুরু করা যাক।

## Move TIMEZONE_OFFSET object to a separate folder

আমরা useClock হুক থেকে TIMEZONE_OFFSET কে constants/timezone.js এর মধ্যে নিয়ে নিবো। যাতে যেখানে এই অবজেক্ট লাগে সেখানেই আমরা ব্যবহার করতে পারি।

```jsx
export const TIMEZONE_OFFSET = {
	PST: -7 * 60,
	EST: -4 * 60,
	EDT: -4 * 60,
	BST: 1 * 60,
	MST: -6 * 60,
};
```

## utils folder

আমরা utils ফোল্ডারের মধ্যে timezone.js নামে ফাইল ক্রিয়েট করে নিচের কোডগুলো লিখবো।

```js
import { TIMEZONE_OFFSET } from '../constants/timezone';

export const getOffset = (start = -11.5, ending = 12) => {
	const offsets = [];
	for (let i = start; i <= ending; i += 0.5) {
		offsets.push(i);
	}
	return offsets;
};

export const getTimezone = () => {
	return ['UTC', 'GMT', ...Object.keys(TIMEZONE_OFFSET)];
};
```

আমরা গত ক্লাসে অফসেট নিয়েছিলাম। সেটাকে ডায়নামিক্যালি এখানে নিলাম। এবং সমস্ত টাইমজোনগুলোকে একটা অ্যারের মধ্যে নিলাম।

## ClockForm Component

আমরা shared ফোল্ডারের মধ্যে এই কম্পোনেন্ট নিয়ে কাজ করবো। কোড লিখে ফেলা যাক। এরপর ব্যাখ্যা করবো।

```jsx
import { useEffect, useState } from 'react';
import { TIMEZONE_OFFSET } from '../../../constants/timezone';
import { getOffset } from '../../../utils/timezone';

const ClockForm = ({
	values = { title: '', timezone: 'UTC', offset: 0 },
	handleClock,
	title = true,
	edit = false,
}) => {
	const [formValues, setFormValues] = useState({ ...values });

	useEffect(() => {
		if (TIMEZONE_OFFSET[formValues.timezone]) {
			setFormValues((prev) => ({
				...prev,
				offset: TIMEZONE_OFFSET[formValues.timezone],
			}));
		}
	}, [formValues.timezone]);

	const handleChange = (e) => {
		let { name, value } = e.target;

		if (name === 'offset') {
			value = Number(value) * 60;
		}

		setFormValues((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		handleClock(formValues);
	};

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label htmlFor="title">Enter Title</label>
				<input
					type="text"
					id="title"
					name="title"
					value={formValues.title}
					onChange={handleChange}
					disabled={!title}
				/>
			</div>
			<div>
				<label htmlFor="timezone">Enter Timezone</label>
				<select
					id="timezone"
					name="timezone"
					value={formValues.timezone}
					onChange={handleChange}
				>
					<option value="GMT">GMT</option>
					<option value="UTC">UTC</option>
					<option value="PST">PST</option>
					<option value="EST">EST</option>
					<option value="EDT">EDT</option>
					<option value="BST">BST</option>
					<option value="MST">MST</option>
				</select>
			</div>
			{(formValues.timezone === 'GMT' || formValues.timezone === 'UTC') && (
				<div>
					<label htmlFor="offset">Enter Offset</label>
					<select
						id="offset"
						name="offset"
						value={formValues.offset / 60}
						onChange={handleChange}
					>
						{getOffset().map((offset) => (
							<option key={offset} value={offset}>
								{offset}
							</option>
						))}
					</select>
				</div>
			)}
			<button>{edit ? 'Update' : 'Create'}</button>
		</form>
	);
};

export default ClockForm;
```

আমরা প্রথমে একটা স্টেট নিলাম। আমাদের ক্লক অবজেক্ট যেরকম সেরকম একটা ইনিশিয়াল ভ্যালুর অবজেক্ট আপাতত আমরা স্টেটে রাখলাম। এরপর useEffect হুক নিলাম। এর কাজ হলো টাইমজোন আপডেট হলে সেই অনুসারে আমাদের TIMEZONE_OFFSET অবজেক্ট থেকে অফসেট ডাটা নিয়ে স্টেটকে আপডেট করা। এরপর handleChange এবং handleSubmit। handleSubmit এর ক্ষেত্রে আমরা স্টেট লিফট করবো। বাকি ফর্ম গত লেকচারে যেভাবে বানিয়েছিলাম সেটাই এখানে সামান্য চেইঞ্জ করে বসানো হয়েছে। শুধু title, timezone, offset এর জায়গায় স্টেটের ভ্যালুগুলো বসানো হয়েছে এওং default_offset এর জায়গায় আমাদের বানানো getOffset ফাংশন নেয়া হয়েছে।

আরেকটা কাজ করা হয়েছে। আমাদের লোকাল ক্লকের টাইটেল আপডেইট করা যাবে না। ওটাকে ডিজেবল রাখতে হবে। সুতরাং সেজন্য আমাদের title প্রপ্স নিয়ে সেটা ব্যবহার করে disabled কে ম্যানেজ করা হয়েছে। আর সবশেষে বাটনের ক্ষেত্রে যদি edit প্রপ্স true হয় তবে বাটনের লেখা Update দেখাবে নাহয় Create দেখাবে।

## ClockActions Component

এবার আমাদের ClockActions কম্পোনেন্টে একটু কাজ করা যাক।

```jsx
import { useState } from 'react';
import ClockForm from '../clock-form';

const ClockActions = ({ local = false, clock, updateClock }) => {
	const [isEdit, setIsEdit] = useState(false);
	const [isCreate, setIsCreate] = useState(false);

	const handleClock = (values) => {
		console.log(values);
	};

	return (
		<div>
			<button onClick={() => setIsEdit(!isEdit)}>Edit</button>
			{local ? (
				<button onClick={() => setIsCreate(!isCreate)}>Create</button>
			) : (
				<button>Delete</button>
			)}
			{isEdit && (
				<>
					<h3>Edit Clock</h3>
					<ClockForm
						handleClock={updateClock}
						edit={true}
						title={!local}
						values={clock}
					/>
				</>
			)}
			{isCreate && (
				<>
					<h3>Create New Clock</h3>
					<ClockForm handleClock={handleClock} />
				</>
			)}
		</div>
	);
};

export default ClockActions;
```

এখানে আমাদের ক্লক ফর্মটা ব্যবহার করা হয়েছে। ফর্ম ক্রিয়েটের জন্য একটা স্টেট নেয়া হয়েছে। সেটা দিয়ে আমরা ক্রিয়েট বাটনে ক্লিক করলে ক্রিয়েট ক্লক ফর্ম দেখাবে। handleClock নিয়ে আমরা কাজ করবো আগামী লেকচারে।

## Assignment

আমরা এই প্রজেক্টের পূর্বে যখন ফর্ম নিয়ে কাজ করেছিলাম তখন ফর্ম ক্রিয়েট করার জন্য একটা হুক বানিয়েছিলাম। আপনাদের অ্যাসাইনমেন্ট হলো সেই হুকটা ব্যবহার করে এই ফর্মটা ক্রিয়েট করা।

## Source Code

এই লেকচারের সমস্ত সোর্স কোড এই [লিংক](https://github.com/mrhm-dev/full-stack-army/tree/master/src/lecture-50/track-zone) এ পাবেন।
