# Lecture 49 - Track Zone Project | Display and Edit Local Time

## Introduction

আমরা আজকের লেকচারে লোকাল ক্লকের একটা বেসিক UI দাঁড় করাবো এবং কিছু ফাংশনালিটিজ যোগ করবো।

## Modify the _useClock_ hook

আমরা যে হুকটা বানিয়েছিলাম সেটা নিয়ে কাজ করতে গেলে পরবর্তীতে কিছু সমস্যায় পড়তে হতে পারে। যেহেতু আমরা ডায়নামিক্যালি হুক ক্রিয়েট করতে পারি না তাই আমরা আমাদের হুককে যেন সব জায়গায় রিইউজ করতে পারি সেভাবে একটু মডিফাই করে নিবো। আমাদের গত লেকচারের হুকটা ছিল -

```js
import { addMinutes } from 'date-fns';
import { useEffect, useState } from 'react';

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

const TIMEZONE_OFFSET = {
	PST: -7 * 60,
	EST: -4 * 60,
	EDT: -4 * 60,
	BST: 1 * 60,
	MST: -6 * 60,
};

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

export default useClock;
```

আমরা প্রথমেই আমাদের _init_ অবজেক্টটা বাদ দিবো। কারণ আইডি আর টাইটেল আমরা যেখান থেকে রেন্ডার করবো ওখান থেকে পেয়ে যাবো। টাইমজোন আর অফসেট আমরা আর্গুমেন্ট আকারে বাইরে থেকে পাচ্ছি। date ও আমরা বাইরে থেকে পাবো এবং date_utc এর জন্য আমরা স্টেট নিয়েছি সুতরাং আমাদের এই অবজেক্টের কোনো প্রয়োজন নেই। নতুনভাবে আমাদের তিনটা স্টেট ক্রিয়েট করতে হবে। এবং সেই রিলেটেড কোডগুলো আমাদের একটু চেইঞ্জ করতে হবে। প্রথমে আমরা কোড দেখি এরপর ব্যাখ্যায় যাবো।

```js
import { addMinutes } from 'date-fns';
import { useEffect, useState } from 'react';

const TIMEZONE_OFFSET = {
	PST: -7 * 60,
	EST: -4 * 60,
	EDT: -4 * 60,
	BST: 1 * 60,
	MST: -6 * 60,
};

const useClock = (timezone, offset) => {
	const [localDate, setLocalDate] = useState(null);
	const [localTimezone, setLocalTimezone] = useState(null);
	const [localOffset, setLocalOffset] = useState(0);
	const [utc, setUtc] = useState(null);

	useEffect(() => {
		let d = new Date();
		const lo = d.getTimezoneOffset();
		d = addMinutes(d, lo);
		setUtc(d);
		setLocalOffset(lo);
	}, []);

	useEffect(() => {
		if (utc !== null) {
			if (timezone) {
				offset = TIMEZONE_OFFSET[timezone] ?? offset;
				const newUtc = addMinutes(utc, offset);
				setLocalDate(newUtc);
			} else {
				const newUtc = addMinutes(utc, -localOffset);
				const dateStrArr = newUtc.toUTCString().split(' ');
				setLocalDate(newUtc);
				setLocalTimezone(dateStrArr.pop());
			}
		}
	}, [utc, timezone, offset]);

	return {
		date: localDate,
		dateUtc: utc,
		offset: offset || -localOffset,
		timezone: timezone || localTimezone,
	};
};

export default useClock;
```

প্রথমে আমরা লোকাল ডেইট, লোকাল টাইমজোন এবং লোকাল অফসেটের জন্য তিনটা স্টেট নিয়ে নিলাম।

```jsx
const useClock = (timezone, offset) => {
	const [localDate, setLocalDate] = useState(null);
	const [localTimezone, setLocalTimezone] = useState(null);
	const [localOffset, setLocalOffset] = useState(0);
	const [utc, setUtc] = useState(null);

	// ...

	return {
		date: localDate,
		dateUtc: utc,
		offset: offset || -localOffset,
		timezone: timezone || localTimezone,
	};
};
```

এরপর আমরা utc ডেইট এবং লোকাল অফসেট আপডেটের জন্য _useEffect_ হুকটা একটু মডিফাই করলাম।

```js
useEffect(() => {
	let d = new Date();
	const lo = d.getTimezoneOffset();
	d = addMinutes(d, lo);
	setUtc(d);
	setLocalOffset(lo);
}, []);
```

আমরা প্রথমে ডেইট নিলাম। এরপর লোকাল টাইমজোন অফসেট বের করে নিলাম। বাংলাদেশের জন্য আমরা পাবো `-360`। কেন মাইনাস হলো সেটা গত লেকচারে ব্যাখ্যা করেছিলাম। এরপর সেই অফসেট অনুযায়ী আমরা `date-fns` এর `addMinutes` ব্যবহার করে টাইম বের করে নিলাম। সেই ডেইট এবং টাইমই হলো আমাদের utc ডেইট। আমরা সেই স্টেটকে আপডেট করলাম। এবং লোকাল অফসেটের স্টেটকেও আপডেট করলাম।

এরপর আমাদের কাজ হলো লোকাল ডেইট এবং লোকাল টাইমজোন কিভাবে আপডেট করা যায় সেটা নিয়ে। তার জন্য আমরা নিচের কোডটা লিখবো।

```js
useEffect(() => {
	if (utc !== null) {
		if (timezone) {
			offset = TIMEZONE_OFFSET[timezone] ?? offset;
			const newUtc = addMinutes(utc, offset);
			setLocalDate(newUtc);
		} else {
			const newUtc = addMinutes(utc, -localOffset);
			const dateStrArr = newUtc.toUTCString().split(' ');
			setLocalDate(newUtc);
			setLocalTimezone(dateStrArr.pop());
		}
	}
}, [utc, timezone, offset]);
```

যদি `utc !== null` হয় তাহলে যদি টাইমজোন সিলেক্ট করা হয় তবে অফসেট আপডেট করবো। এরপর নতুন utc ডেইট বের করে নিবো। যে ডেইটটা পাবো সেটাকে লোকাল ডেইট হিসেবে আপডেট করে দিবো। আর যদি নতুন টাইমজোন না থাকে তবে লোকাল অফসেট অনুযায়ী ডেইট বের করে নিবো। এরপর `newUtc.toUTCString().split(' ').pop()` এর মাধ্যমে আমরা টাইমজোনটাকে বের করে নিলাম। এরপর আমরা লোকাল ডেইট এবং লোকাল টাইমজোনকে আপডেট করে নিলাম।

## Working with App component

আমাদের অ্যাপ কম্পোনেন্টকে আমরা নিচের মতো করে লিখতে পারি।

```jsx
import { useState } from 'react';
import LocalClock from './components/local-clock';

const LOCAL_CLOCK_INIT = {
	title: 'My Clock',
	timezone: '',
	offset: 0,
	date: null,
};

const App = () => {
	const [localClock, setLocalClock] = useState({ ...LOCAL_CLOCK_INIT });

	const updateLocalClock = (data) => {
		setLocalClock({
			...localClock,
			...data,
		});
	};

	return (
		<div>
			<LocalClock clock={localClock} updateClock={updateLocalClock} />
		</div>
	);
};

export default App;
```

যেহেতু আমরা ডাটা রেন্ডারিং এর কাজ করবো _LocalClock_ কম্পোনেন্টে, সুতরাং লোকাল ক্লকের স্টেট আপডেট করতে হলে আমাদের স্টেট লিফটিং করতে হবে। সে কারণে আমরা _updateLocalClock_ ফাংশনটা বানিয়ে নিলাম।

## Working with _ClockDisplay_ component

লোকাল ক্লক কম্পোনেন্টে আমাদের ক্লক ডিসপ্লে করাতে হবে। সেজন্য আমরা _ClockDisplay_ নামক একটা কম্পোনেন্ট বানাবো shared ফোল্ডারের ভিতর।

```jsx
import { format } from 'date-fns';
import React from 'react';

const ClockDisplay = ({ date, title, timezone, offset }) => {
	let offsetHr = offset / 60;
	return (
		<div>
			<h1>Title: {title}</h1>
			<h3>{format(date, 'yyyy-MM-dd hh:mm:ss aaa')}</h3>
			<p>
				{timezone}
				{offsetHr > 0 ? `+${Math.abs(offsetHr)}` : `-${Math.abs(offsetHr)}`}
			</p>
		</div>
	);
};

export default ClockDisplay;
```

আমাদের অফসেট পাবো আমরা মিনিটে তাই আমরা ৬০ দিয়ে ভাগ করে সেটাকে ঘন্টায় নিয়ে গেলাম। আর ডেইট ফরম্যাটের জন্য `date-fns` এর `format` মেথডটা ব্যবহার করবো।

## _LocalClock_ Component

এবার আমরা _LocalClock_ কম্পোনেন্ট নিয়ে কাজ করবো।

```jsx
import React, { useEffect } from 'react';
import useClock from '../../hooks/useClock';
import ClockActions from '../shared/clock-actions';
import ClockDisplay from '../shared/clock-display';

const LocalClock = ({ clock, updateClock }) => {
	const { date, offset, timezone } = useClock(clock.timezone, clock.offset);

	useEffect(() => {
		updateClock({
			date,
			timezone,
			offset,
		});
	}, [date]);

	return (
		<div>
			{date && (
				<ClockDisplay
					date={date}
					offset={offset}
					timezone={timezone}
					title={clock.title}
				/>
			)}
		</div>
	);
};

export default LocalClock;
```

প্রথমে আমরা হুক দিয়ে ক্লক বানিয়ে নিলাম। আমরা জানি আমাদের date অবজেক্ট চেইঞ্জ হলে আমাদের কম্পোনেন্ট রিরেন্ডার হবে তাই আমরা _useEffect_ হুক ব্যবহার করে আমাদের লোকাল ক্লক আপডেইট করে নিলাম। এরপর যদি date undefined নাহয় তাহলে আমাদের ক্লক ডিসপ্লে কম্পোনেন্ট রেন্ডার হবে।

## _ClockActions_ Component

আমরা এবার এডিট, ক্রিয়েট, ডিলিট বাটন নিয়ে কাজ করবো। সেই সাথে এই বাটনে ক্লিক করলে যে ফর্ম দেখা যাবে সেটাও আমরা তৈরি করবো। তবে আলাদা ফর্ম কম্পোনেন্ট আজ বানাবো না। আমরা এই কম্পোনেন্টের মধ্যেই আজ লিখবো।

```jsx
import { useState } from 'react';

const defaultOffsets = [
	-11.5, -11, -10.5, -10, -9.5, -9, -8.5, -8, 0, 1, 2, 3, 4, 5, 5.5, 6, 6.5,
];

const ClockActions = ({ local = false, clock, updateClock }) => {
	const [isEdit, setIsEdit] = useState(false);

	const handleChange = (e) => {
		let { name, value } = e.target;

		if (name === 'offset') {
			value = parseInt(value) * 60;
		}
		updateClock({
			[name]: value,
		});
	};

	return (
		<div>
			<button onClick={() => setIsEdit(!isEdit)}>Edit</button>
			{local ? <button>Create</button> : <button>Delete</button>}
			{isEdit && (
				<div>
					<input
						type="text"
						name="title"
						value={clock.title}
						onChange={handleChange}
					/>

					<select
						name="timezone"
						value={clock.timezone}
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
					{(clock.timezone === 'GMT' || clock.timezone === 'UTC') && (
						<select
							name="offset"
							value={clock.offset / 60}
							onChange={handleChange}
						>
							{defaultOffsets.map((offset) => (
								<option key={offset} value={offset}>
									{offset}
								</option>
							))}
						</select>
					)}
				</div>
			)}
		</div>
	);
};

export default ClockActions;
```

আমরা প্রথমে কিছু অফসেট নিলাম জাস্ট কাজ করার জন্য। পরবর্তীতে আমরা এটা আরো ভালভাবে করবো। এরপর এডিট করার জন্য একটা স্টেট নিলাম। এডিট বাটনে ক্লিক করলে সেটা অপোজিট হয়ে যাবে। অর্থাৎ _true_ থাকলে _false_ হয়ে যাবে এবং _false_ থাকলে _true_ হয়ে যাবে।

এরপর যদি সেটা লোকাল ক্লক হয় তবে ক্রিয়েট বাটন দেখাবে আর যদি কাস্টম ক্লক হয় তবে ডিলিট বাটন দেখাবে। এরপরের ফর্মটা বুঝতে আশা করি কষ্ট হওয়ার কথা না। শুধু অফসেটের ব্যাপারে একটু বলি। যদি ক্লক GMT বা UTC হয় তবে অফসেট ফিল্ড দেখাবে না। এই দুইটা ছাড়া অন্য টাইমজোনে থাকলে অফসেট ফিল্ড দেখাবে।

ক্রিয়েট এবং ডিলিট বাটন নিয়ে আমরা আগামী লেকচারে কাজ করবো।

এবার আমরা আমাদের লোকাল ক্লক কম্পোনেন্টে গিয়ে এই ClockActions কম্পোনেন্ট ব্যবহার করবো।

```jsx
import React, { useEffect } from 'react';
import useClock from '../../hooks/useClock';
import ClockActions from '../shared/clock-actions';
import ClockDisplay from '../shared/clock-display';

const LocalClock = ({ clock, updateClock }) => {
	const { date, offset, timezone } = useClock(clock.timezone, clock.offset);

	useEffect(() => {
		updateClock({
			date,
			timezone,
			offset,
		});
	}, [date]);

	return (
		<div>
			// ...
			<ClockActions clock={clock} updateClock={updateClock} local={true} />
		</div>
	);
};

export default LocalClock;
```

## Source Code

এই লেকচারের সমস্ত সোর্স কোড আপনারা এই [লিংক](https://github.com/mrhm-dev/full-stack-army/tree/master/src/lecture-49/track-zone) এ পাবেন।
