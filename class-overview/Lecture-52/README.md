# Lecture 52 - Track zone project | create events functionality and useTimer hook

## Introduction

আমরা মোটামুটি আমাদের প্রজেক্টের সমস্ত ফাংশনালিটিজ তৈরি করে ফেলেছি। আজকের লেকচারে আমরা ইভেন্ট ম্যানেজ করার সিস্টেম তৈরি করবো এবং টাইমার অ্যাড করবো। ইভেন্ট নিয়ে কাজ করতে গেলে আমাদের মাথায় প্রথম যে স্ট্রাকচারটা আসবে তা হলো -

```js
const events = {
	id: '1',
	title: 'Test',
	timezone: 'GMT',
	offset: -360,
	events: [
		{
			id: '123',
			title: 'something',
			start: date,
		},
	],
};
```

অর্থাৎ আমাদের ক্লক অবজেক্টের মধ্যে আমরা একটা ইভেন্ট অ্যারে নিবো এবং সেখানে সমস্ত ইভেন্ট আমরা অবজেক্ট আকারে রাখবো। কিন্তু ক্লকের সাথে ইভেন্টের কোনো সম্পর্ক নেই। ক্লক এবং ইভেন্ট পরস্পর স্বাধীন দুইটা বিষয়। ক্লকের ভিতর ইভেন্ট রাখলে যে সমস্যাটা হবে সেটা হলো ধরেন আমরা সকল ইভেন্টস নিয়ে একটা পেইজ ক্রিয়েট করতে চাই। সেক্ষেত্রে আমাদের ক্লকের মধ্য থেকে ইভেন্টকে বের করে আনতে হবে। এখন কোনো কারণে যদি আমরা ইভেন্টে কোনো এরর ক্রিয়েট করি সেক্ষেত্রে ক্লক অবজেক্টও ঠিকমতো কাজ করবেনা। আমরা শুধু শুধু ক্লককে রিস্কে ফেলতে চাই না। তাই এই স্ট্রাকচারে আমরা যাবো না।

দ্বিতীয় আরেকটা স্ট্রাকচার হতে পারে এরকম -

```js
const events = {
	E1: { cid: 'C1' },
	E2: { cid: 'C1' },
	E3: { cid: 'C2' },
	E4: { cid: 'C1' },
	E5: { cid: 'C3' },
};
```

এক্ষেত্রে সমস্যা হচ্ছে আমরা কখনও ক্লক আইডি ধরে যদি ইভেন্ট বের করতে চাই সেক্ষেত্রে ক্লক আইডি সরাসরি আমরা পাচ্ছি না। আমাদের ইভেন্টের মধ্য থেকে ক্লক আইডি বের করে এরপর ফিল্টার করে ইভেন্টকে বের করতে হবে। সুতরাং এক্ষেত্রে এই স্ট্রাকচার আমাদেরকে সহজ সমাধান দিচ্ছে না।

তৃতীয় স্ট্রাকচার দেখি এবার।

```js
const events = {
	C1: [{ id: 'E1' }, { id: 'E2' }, { id: 'E3' }],
	C2: [{ id: 'E1' }, { id: 'E2' }, { id: 'E3' }],
	C3: [{ id: 'E1' }, { id: 'E2' }, { id: 'E3' }],
};
```

এক্ষেত্রে সমস্যা হলো যদি আমরা সব ইভেন্টকে নিয়ে একটা পেইজ ক্রিয়েট করতে যাই তাহলে এখানে ফিল্টার এবং সর্ট করতে হবে। যেটা অনেক ভাল সমাধান না।

এবার আমরা নতুন একটা স্ট্রাকচার দেখি।

```js
const events = {
    'C1|E1': {}
    'C1|E2': {}
    'C2|E3': {}
    'C2|E4': {}
    'C1|E5': {}
    'C3|E6': {}
}
```

এখানে আমরা ক্লক আইডি এবং ইভেন্ট আইডি দুইটাই যদি জানা থাকে তবে খুব সহজেই আমরা ইভেন্ট পেয়ে যাবো। তবে যদি ক্লক আইডি জানা থাকে কিন্তু ইভেন্ট আইডি জানা না থাকে তাহলে আমাদের ফিল্টার করতে হবে ক্লক আইডি দিয়ে। কিন্তু এই স্ট্রাকচারের সুবিধা হচ্ছে আমরা নতুন ইভেন্ট তৈরি করতে গেলে ডায়নামিক্যালি এর আইডি ক্লক আইডি ও ইভেন্ট আইডি দিয়ে তৈরি করতে পারবো। এই স্ট্রাকচার ধরে আমরা একটা হুক বানিয়ে নিই ইভেন্টের জন্য।

## useEvents hook

```js
import { useState } from 'react';

const useEvent = () => {
	const [state, setState] = useState({});

	return {
		events: state,
	};
};

export default useEvent;
```

### getEventsByClockId function

আমরা প্রথমে ক্লক আইডি ব্যবহার করে কিভাবে ইভেন্ট পাওয়া যাবে তার ফাংশন লিখে ফেলবো।

```js
const getEventsByClockId = (clockId) => {
	return Object.keys(state).filter((item) => item.startsWith(clockId));
};
```

জাস্ট সমস্ত কী ফিল্টার করে সেখান থেকে যেগুলো ক্লক আইডি দিয়ে শুরু হয়েছে সেগুলো রিটার্ন করা হয়েছে।

### getEvents function

এবার আমরা আমাদের ইভেন্টগুলো অ্যারে আকারে পাওয়ার জন্য ফাংশন লিখবো।

```js
const getEvents = (isArray = false) => {
	if (!isArray) return state;

	return Object.values(state);
};
```

### addEvent function

ইভেন্ট অ্যাড করার ফাংশন লিখবো এবার আমরা।

```js
const addEvent = (event) => {
	event.id = shortid.generate();
	const { id, clockId } = event;
	setState((prev) => ({
		...prev,
		[`${clockId}|${id}`]: event,
	}));

	return event;
};
```

### deleteEvent and deleteEventByClock functions

আমরা দুইভাবে ইভেন্ট ডিলিট করার ফাংশন লিখবো। একটা নরমাল ওয়েতে। আরেকটা ফিল্টার মেথডের মাধ্যমে।

```js
const deleteEvent = (id) => {
	const events = { ...state };
	delete events[id];
	setState(events);
};

const deleteEventByClock = (clockId) => {
	const events = Object.keys(state).filter((item) => !item.startsWith(clockId));

	setState(events);
};
```

### updateEvent function

আমরা এবার সর্বশেষ ইভেন্ট আপডেট করার ফাংশন লিখবো।

```js
const updateEvent = (updatedEvent, id) => {
	const events = { ...state };
	events[id] = {
		...events[id],
		...updatedEvent,
	};

	setState(events);
};
```

### Final look of useEvent hook

আমাদের useEvent হুক ফাইনালি দাঁড়াবে এরকম।

```js
import { useState } from 'react';
import shortid from 'shortid';

const useEvents = () => {
	const [state, setState] = useState({});

	const getEventsByClockId = (clockId) => {
		return Object.keys(state).filter((item) => item.startsWith(clockId));
	};

	const getEvents = (isArray = false) => {
		if (!isArray) return state;

		return Object.values(state);
	};

	const addEvent = (event) => {
		event.id = shortid.generate();
		const { id, clockId } = event;
		setState((prev) => ({
			...prev,
			[`${clockId}|${id}`]: event,
		}));

		return event;
	};

	const deleteEvent = (id) => {
		const events = { ...state };
		delete events[id];
		setState(events);
	};

	const deleteEventByClock = (clockId) => {
		const events = Object.keys(state).filter(
			(item) => !item.startsWith(clockId)
		);

		setState(events);
	};

	const updateEvent = (updatedEvent, id) => {
		const events = { ...state };
		events[id] = {
			...events[id],
			...updatedEvent,
		};

		setState(events);
	};

	return {
		events: state,
		getEventsByClockId,
		getEvents,
		addEvent,
		deleteEvent,
		deleteEventByClock,
		updateEvent,
	};
};

export default useEvents;
```

এই হুক দিয়ে UI বানানোর কাজ আপনাদের। এটা আপনাদের জন্য একটা টাস্ক।

## useTimer hook

আমরা এবার টাইমারের জন্য একটা হুক বানাবো।

```js
import { addSeconds } from 'date-fns';
import { useEffect, useState } from 'react';

const useTimer = (date) => {
	const [timer, setTimer] = useState(date);

	useEffect(() => {
		setTimer(date);
	}, [date]);

	let timerId = null;

	useEffect(() => {
		if (!timer || timerId !== null) return;

		timerId = setInterval(() => {
			setTimer(addSeconds(timer, 1));
		}, 1000);

		return () => clearInterval(timerId);
	}, [timer]);

	return timer;
};

export default useTimer;
```

এই কোড বুঝতে কারো কষ্ট হওয়ার কথা না। এখানে প্রথমে আমরা ডেইট অবজেক্টকে টাইমার স্টেটের মধ্যে নিলাম। এরপর পরে setInterval এর মাধ্যমে টাইমার সেট করে দিলাম।

## Using useTimer hook in LocalClock and ClockListItem components

আমরা LocalClock এবং ClockListItem কম্পোনেন্টের মধ্যে এই হুকটা এখন ব্যবহার করবো। প্রথমে LocalClock এর মধ্যে ব্যবহার করি।

```jsx
import React, { useEffect } from 'react';
import useClock from '../../hooks/useClock';
import useTimer from '../../hooks/useTimer';
import ClockActions from '../shared/clock-actions';
import ClockDisplay from '../shared/clock-display';

const LocalClock = ({ clock, updateClock, createClock }) => {
	const { date, offset, timezone } = useClock(clock.timezone, clock.offset);
	const timer = useTimer(date);

	useEffect(() => {
		updateClock({
			date,
			timezone,
			offset,
		});
	}, [date]);

	return (
		<div>
			{timer && (
				<ClockDisplay
					date={timer}
					offset={offset}
					timezone={timezone}
					title={clock.title}
				/>
			)}
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

এবার ClockListItem এর মধ্যে ব্যবহার করি।

```jsx
import { formatDistance } from 'date-fns';
import React from 'react';
import useClock from '../../hooks/useClock';
import useTimer from '../../hooks/useTimer';
import ClockActions from '../shared/clock-actions';
import ClockDisplay from '../shared/clock-display';

const ClockListItem = ({ clock, updateClock, deleteClock, localClock }) => {
	const { date } = useClock(clock.timezone, clock.offset);
	const timer = useTimer(date);

	if (!date || !timer) return null;

	return (
		<div>
			<ClockDisplay
				date={timer}
				offset={clock.offset}
				timezone={clock.timezone}
				title={clock.title}
			/>
			<h3>Time difference: {formatDistance(localClock, timer)}</h3>
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

আমাদের প্রজেক্টের সকল ফাংশনালিটিজ এরই মাধ্যমে শেষ হলো। বাকিটা আপনারা সুন্দরভাবে প্রজেক্ট তৈরি করে ফেলবেন।

## Source Code

এই লেকচারে সোর্স কোড আপনারা এই [লিংক](https://github.com/mrhm-dev/full-stack-army/tree/master/src/lecture-52/track-zone) এ পাবেন।
