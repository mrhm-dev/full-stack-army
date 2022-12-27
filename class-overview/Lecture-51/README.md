# Lecture 51 - Track Zone Project | Create, Edit & List Custom Clock

## Introduction

আজ আমরা আমাদের অ্যাপ্লিকেশনে সকল ক্লক ডিসপ্লে করার ব্যবস্থা করবো। সেই সাথে আমরা ক্লক ক্রিয়েট, আপডেট, ডিলিট করারও সিস্টেম বানাবো। সেই সাথে আমাদের লোকাল ক্লকের সাথে আমাদের ক্রিয়েটেড ক্লকের টাইম ডিফারেন্স বের করবো। আমরা প্রথমে আমাদের কম্পোনেন্ট ট্রী খেয়াল করি।

![component-tree.jpg](https://cdn.hashnode.com/res/hashnode/image/upload/v1667807898913/O7RSx3Ggp.jpg)

আমাদের যদি সকল ক্লক রেন্ডার করতে হয় তাহলে ClockActions কম্পোনেন্ট থেকে ডাটা ClockList এ পাঠাতে হবে। সরাসরি যেহেতু পাঠানো যায় না সেহেতু আমাদের প্রথমে LocalClock হয়ে App এ গিয়ে ডাটা রাখতে হবে। এরপর App থেকে ডাটা ClockList এ পাঠাতে হবে। আমরা একে একে চলুন কাজ শুরু করে দিই।

## createClock function

আমরা App.jsx এ `createClock` ফাংশনটি বানিয়ে নিবো। তার আগে এই ফাংশনটার জন্য যা ডাটা লাগবে তা আসবে `ClockActions` থেকে। আমরা প্রথমে ClockActions এ এই createClock প্রপ্স আকারে পাস করে দিই।

```jsx
// ClockActions

import { useState } from 'react';
import ClockForm from '../clock-form';

const ClockActions = ({ local = false, clock, updateClock, createClock }) => {
	// ...

	const handleClock = (values) => {
		createClock(values);
	};

	return (
		<div>
			// ...
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
			// ...
		</div>
	);
};

export default ClockActions;
```

এরপর কম্পোনেন্ট ট্রী অনুসারে ClockActions এর উপরে আছে LocalClock। আমরা সেখানে মডিফাই করব।

```jsx
// LocalClock

import React, { useEffect } from 'react';
import useClock from '../../hooks/useClock';
import ClockActions from '../shared/clock-actions';
import ClockDisplay from '../shared/clock-display';

const LocalClock = ({ clock, updateClock, createClock }) => {
	// ...

	return (
		<div>
			// ...
			<ClockActions
				clock={clock}
				updateClock={updateClock}
				local={true}
				createClock={createClock}
			/>
		</div>
	);
};

export default LocalClock;
```

এবার আমরা App এ কাজ করবো।

```jsx
// App.jsx

import { useState } from 'react';
import { generate } from 'shortid';
import ClockList from './components/clock-list';
import LocalClock from './components/local-clock';

const LOCAL_CLOCK_INIT = {
	title: 'My Clock',
	timezone: '',
	offset: 0,
	date: null,
};

const App = () => {
	const [localClock, setLocalClock] = useState({ ...LOCAL_CLOCK_INIT });
	const [clocks, setClocks] = useState([]);

	// ...

	const createClock = (clock) => {
		clock.id = generate();
		setClocks([...clocks, clock]);
	};

	return <div>// ...</div>;
};

export default App;
```

অনেকগুলো ক্লক যখন ক্রিয়েট হবে তখন আমাদের প্রতিটা ক্লকের জন্য একটা করে আইডি দরকার হবে। আমরা তার জন্য `shortid` ইনস্টল করে নিবো।

```sh
yarn add shortid
```

এরপর আমরা shortid থেকে generate ফাংশন ইমপোর্ট করে নিবো। এরপর একটা স্টেট নিবো clocks নামে। এরপর createClock ফাংশনটা লিখবো। ক্লক অবজেক্ট যেমন আছে তেমন থাকবে শুধু আইডি যোগ হবে। এভাবে আমরা ক্লক ক্রিয়েট করতে পারবো।

## updateClock function

এবার আমরা ক্লক আপডেটের ফাংশন তৈরি করবো। আমরা প্রথমে App.jsx এ গিয়ে ফাংশনটা লিখে ফেলবো।

```jsx
const App = () => {
	const [localClock, setLocalClock] = useState({ ...LOCAL_CLOCK_INIT });
	const [clocks, setClocks] = useState([]);
	// ...

	const updateClock = (updatedClock) => {
		const updatedClocks = clocks.map((clock) => {
			if (clock.id === updatedClock.id) {
				return updatedClock;
			}
			return clock;
		});
		setClocks(updatedClocks);
	};

	return <div>// ...</div>;
};

export default App;
```

## deleteClock function

আমরা এবার ক্লক ডিলিটের ফাংশন তৈরি করবো।

```jsx
// App.jsx

const App = () => {
	//...
	const deleteClock = (id) => {
		const updatedClocks = clocks.filter((clock) => clock.id !== id);
		setClocks(updatedClocks);
	};
	//...
};
```

## ClockListItem Component

আমরা ক্লক লিস্ট বানাতে গেলে আইটেম দরকার পড়বে। তাই আগে আমরা লিস্টের আইটেম বানিয়ে ফেলি।

```jsx
// components/clock-list/clock-list-item.jsx

import { formatDistance } from 'date-fns';
import React from 'react';
import useClock from '../../hooks/useClock';
import ClockActions from '../shared/clock-actions';
import ClockDisplay from '../shared/clock-display';

const ClockListItem = ({ clock, updateClock, deleteClock, localClock }) => {
	const { date } = useClock(clock.timezone, clock.offset);

	if (!date) return null;

	return (
		<div>
			<ClockDisplay
				date={date}
				offset={clock.offset}
				timezone={clock.timezone}
				title={clock.title}
			/>
			<ClockActions
				clock={clock}
				updateClock={updateClock}
				deleteClock={deleteClock}
			/>
		</div>
	);
};

export default ClockListItem;
```

ClockDisplay কম্পোনেন্টের জন্য আমাদের date অবজেক্ট লাগবে। তাই আমরা useClock হুক ব্যবহার করে বানিয়ে নিলাম।

আমরা ClockActions এ গিয়ে ডিলিট বাটনে onClick যোগ করবো।

```jsx
import { useState } from 'react';
import ClockForm from '../clock-form';

const ClockActions = ({
	local = false,
	clock,
	updateClock,
	createClock,
	deleteClock,
}) => {
	const [isEdit, setIsEdit] = useState(false);
	const [isCreate, setIsCreate] = useState(false);

	// ...

	return (
		<div>
			<button onClick={() => setIsEdit(!isEdit)}>Edit</button>
			{local ? (
				<button onClick={() => setIsCreate(!isCreate)}>Create</button>
			) : (
				<button onClick={() => deleteClock(clock.id)}>Delete</button>
			)}
			// ...
		</div>
	);
};

export default ClockActions;
```

## ClockList Component

এবার আমরা আমাদের কাঙ্ক্ষিত ClockList কম্পোনেন্ট তৈরি করবো।

```jsx
// components/clock-list/index.jsx

import React from 'react';
import ClockListItem from './clock-list-item';

const ClockList = ({ clocks, updateClock, deleteClock, localClock }) => {
	return (
		<div>
			<h3>Other Clocks</h3>
			<hr />
			{ClockList.length === 0 ? (
				<p>There is no clock, please create one</p>
			) : (
				<div>
					{clocks.map((clock) => (
						<ClockListItem
							key={clock.id}
							clock={clock}
							updateClock={updateClock}
							deleteClock={deleteClock}
							localClock={localClock}
						/>
					))}
				</div>
			)}
		</div>
	);
};

export default ClockList;
```

## Time Difference

আমরা চাইছি আমাদের লোকাল ক্লকের সাথে ক্রিয়েটেড ক্লকগুলোর টাইম ডিফারেন্স শো করতে। সেটার জন্য `date-fns` লাইব্রেরিতে formatDistance নামে একটা ফাংশন আছে। ClockListItem এ আমরা সেটা ব্যবহার করে টাইম ডিফারেন্স শো করাবো।

```jsx
const ClockListItem = ({ clock, updateClock, deleteClock, localClock }) => {
	const { date } = useClock(clock.timezone, clock.offset);

	if (!date) return null;

	return (
		<div>
			// ...
			<h3>Time difference: {formatDistance(localClock, date)}</h3>
			// ...
		</div>
	);
};

export default ClockListItem;
```

## Style ClockDisplay Component

আমরা সামান্য একটু স্টাইল অ্যাড করবো ক্লক ডিসপ্লে কম্পোনেন্টে। তার জন্য আমরা `components/shared/clock-display/` তে `index.module.css` নামে একটা ফাইল ক্রিয়েট করে নিচের স্টাইলটা লিখবো।

```css
.card {
	background-color: #ddd;
	border-radius: 5px;
	border: 1px solid #999;
	padding: 10px;
	margin-bottom: 10px;
}

.card h1 {
	font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
	font-size: 1.2rem;
	margin-bottom: 0.5rem;
	color: #212121;
}
```

এরপর ক্লক ডিসপ্লে কম্পোনেন্টে সিএসএস মডিউল ইমপোর্ট করে ক্লাসনেইম হিসেবে অ্যাড করে দিলেই কাজ শেষ।

```jsx
import { format } from 'date-fns';
import React from 'react';
import classes from './index.module.css';

const ClockDisplay = ({ date, title, timezone, offset }) => {
	let offsetHr = offset / 60;
	return (
		<div className={classes.card}>
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

## Final UI

আমাদের ফাইনাল UI দেখতে এরকম -

![final-ui.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1667811073432/eQi-ZakXW.png)

## Source Code

এই লেকচারের সোর্স কোড আপনারা এই [লিংক](https://github.com/mrhm-dev/full-stack-army/tree/master/src/lecture-51/track-zone) এ পাবেন।
