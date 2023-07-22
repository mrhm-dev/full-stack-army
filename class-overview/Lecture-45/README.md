# Lecture 45 - React Custom Form Part 2

## Introduction

আমরা গত লেকচারে যে ফর্মটা বানিয়েছিলাম সেটা বুঝতে অনেকেরই কষ্ট হয়েছিল। আমরা আজ এই ফর্মটাকে নিয়ে একটা কাস্টম হুক বানাবো, যে হুকটা ব্যবহার করে আমরা যত ফর্ম চাই ততো ফর্ম যেন বানাতে পারি। কারণ আমরা গত ক্লাসে একটা ফর্ম হ্যান্ডেল করার জন্য অনেক ধরণের লজিক লিখেছিলাম। এখন যদি এরকম ফর্ম আরো দরকার হয় তাহলে আবার লিখতে হবে সব। যদি ১০টা ফর্ম বানাতে হয় তাহলে ১০বার লিখতে হবে। তার চেয়ে ভাল আমরা একটা হুক বানিয়ে ফেলি সমস্ত লজিক দিয়ে। এরপর যতটা ফর্ম দরকার আমরা সেই হুক ব্যবহার করে সহজেই বানাতে পারবো। এতো এতো লজিক আর লেখার প্রয়োজন পড়বে না।

## Mindset

আমরা এখন কোনো UI বানাচ্ছি না। আমরা বানাচ্ছি একটা ফর্মের জন্য লাইব্রেরি। অর্থাৎ আমরা এখন UI ডেভেলপার না। আমরা হলাম এখন লাইব্রেরি ডেভেলপার। সেটা আমরা যদিও নিজের জন্য বানাচ্ছি। কিন্তু ভাল হলে পরে পাবলিকের জন্য উন্মুক্ত করে দিতে পারবো। তার মানে এখন আমাদের ক্লায়েন্ট কিন্তু যে আমাদের অ্যাপ্লিকেশন বানাতে দিয়েছে সে না। যে আমাদের এই হুকটা ব্যবহার করে ফর্ম বানাবে সে হলো আমাদের ক্লায়েন্ট। এই মাইন্ডসেট আমরা যখন কাস্টম হুক বানাবো তখন প্রতিনিয়ত কাজে লাগবে। আমরা জেনেছিলাম হুক দুইভাবে তৈরি করা যায়। একটা হলো শুধুমাত্র একটা কম্পোনেন্টের জন্য ডেডিকেটেড হুক যেটা আমরা ঐ কম্পোনেন্ট ব্যতীত অন্য কোথাও ব্যবহার করতে পারবো না। আরেকটা হলো গ্লোবাল হুক যেটা আমরা যেকোনো জায়গায় যেকোনো প্রজেক্টে ব্যবহার করতে পারবো। যেমন আমাদের `object-utils.js` নামে যে হুকটা বানিয়েছিলাম সেটা হলো গ্লোবাল হুক। কারণ কোনো কম্পোনেন্টের জন্য আমাদের আর আলাদাভাবে এই ফাংশন লিখতে হবে না। আমরা এখান থেকে কোডটা তুলে নিয়ে ব্যবহার করতে পারবো।

## Create the hook

আমরা এখন `hooks` ডিরেক্টরির মধ্যে `useForm.js` নামে একটা ফাইল ক্রিয়েট করে নিবো।

আমাদের যে ইনিশিয়াল ডাটা ছিল সেটা আমরা লিখেছিলাম এইভাবে -

```jsx
const init = {
	title: {
		value: '',
		error: '',
		focus: false,
	},
	bio: {
		value: '',
		error: '',
		focus: false,
	},
	skills: {
		value: '',
		error: '',
		focus: false,
	},
};
```

কিন্তু এখন আমরা জানি না আমাদের একটা হুক দিয়ে কি ধরণের ফর্ম বানানো হবে এবং তাতে কি কি ডাটা থাকবে। আমাদের এই হুকটা একটা ব্যাংক অ্যাকাউন্ট খোলার ফর্মে ব্যবহৃত হতে পারে, একটা ব্লগ পোস্ট তৈরি করতে ব্যবহৃত হতে পারে, একটা ইন্স্যুরেন্স কোম্পানির ফর্মে ব্যবহৃত হতে পারে। তাহলে আমরা ইনিশয়াল ডাটা সম্পর্কে তো কিছুই জানিনা। সেক্ষেত্রে কিভাবে আমরা হুকটা ব্যবহার করবো। লাইব্রেরি ডেভেলপার হিসেবে আমাদের একটা ক্ষমতা আছে। সেটা হলো আমরা আমাদের হুকটা যে ব্যবহার করবে তার জন্য রুলস তৈরি করে দিতে পারি। আমরা এমন সিস্টেম করে দিতে পারি যদি এই হুক ব্যবহার করতে হয় তাহলে অবশ্যই এই ডাটা প্রোভাইড করতে হবে। যদি না করে তাহলে আমরা এই হুক ব্যবহার করতে দিবো না।

সুতরাং আমরা এখানে বলতে পারি যে যদি এই হুকটা ব্যবহার করতে হয় তবে অবজেক্ট আকারে একটা ডাটা প্রোভাইড করতেই হবে।

এখন আমরা যদি ইউজারকে আগের মতো ডাটা প্রোভাইড করতে দিই তাহলে হবে না। আমরা শুধু ইউজারকে ভ্যালুটা প্রোভাইড করতে বলবো। বাকি এরর আছে কিনা ফোকাস কি হবে এসব আমরা আমাদের হুকে সিস্টেম করে দিবো। অর্থাৎ ইউজার আমাদের ডাটা প্রোভাইড করবে এরকম -

```jsx
useForm({
	title: '',
	bio: '',
	skills: '',
});
```

আমরা এখান থেকে নিচের অবজেক্টটি বানাবো।

```jsx
{
	title: {
		value: '',
		error: '',
		focus: false,
	},
	bio: {
		value: '',
		error: '',
		focus: false,
	},
	skills: {
		value: '',
		error: '',
		focus: false,
	},
};
```

এখন এটা করতে গেলে আমাদের একটা হেলপার ফাংশন লাগবে। যেটা আমাদের দেয়া অবজেক্টটা আর্গুমেন্ট আকারে নিবে এবং উপরের মতো করে অবজেক্ট রিটার্ন করবে।

```jsx
const mapValuesToState = (values) => {
	return Object.keys(values).reduce((acc, key) => {
		acc[key] = {
			value: values[key],
			error: '',
			focused: false,
			touched: false,
		};
		return acc;
	}, {});
};
```

এবার আমাদের ফাংশন কাজ করছে কিনা যদি দেখতে চাই তাহলে আমরা নিচের কোডটা লিখবো।

```js
const useForm = ({ init }) => {
	const state = mapValuesToState(init);
	console.log(state);
};

// helper functions

const mapValuesToState = (values) => {
	return Object.keys(values).reduce((acc, key) => {
		acc[key] = {
			value: values[key],
			error: '',
			focused: false,
			touched: false,
		};
		return acc;
	}, {});
};

const mapStateToKeys = (state, key) => {
	return Object.keys(state).reduce((acc, cur) => {
		acc[cur] = state[cur][key];
		return acc;
	}, {});
};

export default useForm;
```

আমরা `mapStateToKeys` নামেও একটা ফাংশন তৈরি করে রাখবো কারণ সেটা আমাদের দরকার হবে। এবার `App.jsx` এ গিয়ে আমরা এই হুকটাকে ব্যবহার করবো।

```jsx
import useForm from '../hooks/useForm';

const App = () => {
	useForm({
		init: {
			name: 'Aditya',
			email: '',
			password: '',
		},
	});

	return <div className="root"></div>;
};

export default App;
```

এবার আমরা আমাদের অ্যাপ্লিকেশন রান করে কনসোলে গিয়ে যদি দেখি দেখবো আমরা যেমন চাইছি তেমনই অবজেক্ট রিটার্ন করছে।

![L45-01.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1665117047712/eqdpN6JL6.png)

যেহেতু স্টেট পাচ্ছে সেহেতু আমরা `mapValuesToState(init)` কে `useState` মধ্যে রাখতে পারি।

```js
const useForm = ({ init }) => {
	const [state, setState] = useState(mapValuesToState(init));

	return {
		formState: state,
	};
};
```

এবার আমরা _App.jsx_ এ গিয়ে দেখবো এটা কাজ করছে কিনা।

```jsx
import useForm from '../hooks/useForm';

const App = () => {
	const { formState } = useForm({
		init: {
			name: 'Aditya',
			email: '',
			password: '',
		},
	});
	console.log(formState);

	return <div className="root"></div>;
};

export default App;
```

এবার যদি কনসোলে দেখি দেখবো আগের মতোই আউটপুট পাচ্ছি।

এবার আমাদের কাজ হলো যেহেতু ভ্যালিডেশনের কাজ আমাদের না অর্থাৎ লাইব্রেরি ডেভেলপারের না, সেহেতু আমরা কনজ্যুমারের জন্য একটা অপশন দিয়ে রাখবো। এক্ষেত্রে আমরা তাকে দুইটা অপশন দিবো। একটা হলো আমাদের ডিফাইন করা ফাংশন ব্যবহার করতে পারবে অথবা সে নিজে ফাংশন বানিয়ে একটা বুলিয়ান ভ্যালু প্রোভাইড করবে আর্গুমেন্ট আকারে। দুই ধরণের অপশনই আমরা তাকে দিচ্ছি। তাই আমরা আমাদের হুকের প্যারামিটার আকারে `validate` নিবো।

## `handleChange` function

এবার আমরা `handleChange` ফাংশন নিয়ে কাজ করবো।

```jsx
import { useState } from 'react';
import { deepClone } from '../utils/object-utils';

/**
 * @typedef {Object} Param
 * @property {Object} init
 * @property {(Object|boolean)} validate
 *
 * create forms using this useForm hook easily
 * @param {Param} param
 * @returns
 */

const useForm = ({ init, validate }) => {
	const [state, setState] = useState(mapValuesToState(init));

	const handleChange = (e) => {
		const { name: key, value } = e.target;

		const oldState = deepClone(state);
		if (type === 'checkbox') {
			oldState[key].value = 'checked';
		} else {
			oldState[key].value = value;
		}

		const { errors } = getErrors();

		if (oldState[key].touched && errors[key]) {
			oldState[key].error = errors[key];
		} else {
			oldState[key].error = '';
		}
		setState(oldState);
	};

	const getErrors = () => {
		let hasError = null,
			errors = null;

		const values = mapStateToKeys(state, 'value');

		if (typeof validate === 'boolean') {
			hasError = validate;
			errors = mapStateToKeys(state, 'error');
		} else if (typeof validate === 'function') {
			const errorsFromCb = validate(values);
			hasError = !isObjEmpty(errorsFromCb);
			errors = errorsFromCb;
		} else {
			throw new Error('validate property must be boolean or function');
		}

		return {
			hasError,
			errors,
			values,
		};
	};

	return {
		formState: state,
		handleChange,
	};
};

export default useForm;
```

এখানে `const { errors } = checkValidity(values);` এ `checkValidity` নামে যে ফাংশনটি আছে সেটা যেমন আছে থাক। সেটা নিয়ে আমরা পরে কাজ করছি।

## `handleFocus` function

```jsx
const useForm = ({ init, validate }) => {
	// ...

	const handleFocus = (e) => {
		const { name } = e.target;

		const oldState = deepClone(state);
		oldState[name].focused = true;

		if (!oldState[name].touched) {
			oldState[name].touched = true;
		}

		setState(oldState);
	};

	return {
		// ...
		handleFocus,
	};
};
```

## `handleBlur` function

```jsx
const useForm = ({ init, validate }) => {
	// ...

	const handleBlur = (e) => {
		const key = e.target.name;

		const values = mapStateToKeys(state, 'value');
		const { errors } = checkValidity(values);

		const oldState = deepClone(state);

		if (oldState[key].touched && errors[key]) {
			oldState[key].error = errors[key];
		} else {
			oldState[key].error = '';
		}

		oldState[key].focused = false;
		setState(oldState);
	};

	return {
		// ...
		handleBlur,
	};
};
```

## 'handleSubmit` function

এই জায়গায় আমাদের যথেষ্ট মাথা খাটাতে হবে। কারণ সাবমিট কিভাবে করবে সেটা ইউজার জানে। সে এপিআই তে সাবমিট করবে নাকি স্টোরে আপডেট করবে নাকি স্টেট চেইঞ্জ করবে সেটা আমরা জানিনা। আর যেটা জানিনা সেটা করাটা একটা জটিল কাজ। আমাদের ভাবতে হবে সাবমিট করার সময় কোন কাজগুলো ইউজার না করলেও চলবে কিন্তু আমাদের করে দিতে হবে।

```jsx
const useForm = ({ init, validate }) => {
	// ...

	const handleSubmit = (e, cb) => {
		e.preventDefault();
		const { errors, hasError, values } = getErrors();

		cb({
			hasError,
			errors,
			values,
			touched: mapStateToKeys(state, 'touched'),
			focused: mapStateToKeys(state, 'focused'),
		});
	};

	return {
		// ...
		handleSubmit,
	};
};
```

## Clearing Inputs

এবার আমরা ইনপুট ক্লিয়ার করার জন্য একটা ফাংশন বানাবো।

```js
const useForm = ({ init, validate }) => {
	// ...

	const clear = () => {
		const newState = mapValuesToState(init, true);
		setState(newState);
	};

	return {
		// ...
		clear,
	};
};

const mapValuesToState = (values, shouldClear = false) => {
	return Object.keys(values).reduce((acc, key) => {
		acc[key] = {
			value: shouldClear ? '' : values[key],
			error: '',
			focused: false,
			touched: false,
		};
		return acc;
	}, {});
};
```

## Working with `useForm` hook

এবার আমরা আমাদের `App.jsx` এ গিয়ে এই হুক ব্যবহার করবো।

```jsx
import useForm from '../hooks/useForm';

const init = {
	firstName: '',
	lastName: '',
	email: '',
	password: '',
};

const validate = (values) => {
	const errors = {};

	if (!values.firstName) {
		errors.firstName = 'First Name is required';
	}

	if (!values.lastName) {
		errors.lastName = 'Last Name is required';
	}

	if (!values.email) {
		errors.email = 'Email is required';
	}

	if (!values.password) {
		errors.password = 'Password is required';
	}

	return errors;
};

const App = () => {
	const { formState } = useForm({ init, validate });
	console.log(formState);

	return <div className="root"></div>;
};

export default App;
```

এবার পুরোপুরি শেষ করা যাক।

```jsx
import InputGroup from '../components/shared/forms/InputGroup';
import Button from '../components/UI/buttons/Button';
import useForm from '../hooks/useForm';

const init = {
	firstName: '',
	lastName: '',
	email: '',
	password: '',
};

const validate = (values) => {
	const errors = {};

	if (!values.firstName) {
		errors.firstName = 'First Name is Required';
	}

	if (!values.lastName) {
		errors.lastName = 'Last Name is Required';
	}

	if (!values.email) {
		errors.email = 'Email is Required';
	}

	if (!values.password) {
		errors.password = 'Password is Required';
	} else if (values.password.length < 6) {
		errors.password = 'Password length must be 6 character';
	}

	return errors;
};

const App = () => {
	const {
		formState: state,
		handleBlur,
		handleChange,
		handleFocus,
		handleSubmit,
		clear,
	} = useForm({ init, validate });

	const cb = ({ hasError, values, errors }) => {
		if (hasError) {
			alert('[ERROR]' + JSON.stringify(errors));
		} else {
			alert('[SUCCESS]' + JSON.stringify(values));
		}
	};

	return (
		<div className="root">
			<form onSubmit={(e) => handleSubmit(e, cb)}>
				<div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
					<InputGroup
						value={state.firstName.value}
						label={'First Name:'}
						name={'firstName'}
						placeholder={'John'}
						type={'text'}
						error={state.firstName.error}
						onChange={handleChange}
						onFocus={handleFocus}
						onBlur={handleBlur}
					/>
					<InputGroup
						value={state.lastName.value}
						label={'Last Name:'}
						name={'lastName'}
						type={'text'}
						placeholder={'Doe'}
						error={state.lastName.error}
						onChange={handleChange}
						onFocus={handleFocus}
						onBlur={handleBlur}
					/>
					<InputGroup
						value={state.email.value}
						label={'Email:'}
						name={'email'}
						type={'email'}
						placeholder={'john@test.com'}
						error={state.email.error}
						onChange={handleChange}
						onFocus={handleFocus}
						onBlur={handleBlur}
					/>
					<InputGroup
						value={state.password.value}
						label={'password:'}
						name={'password'}
						type={'password'}
						placeholder={'*****'}
						error={state.password.error}
						onChange={handleChange}
						onFocus={handleFocus}
						onBlur={handleBlur}
					/>

					<div>
						<Button type="reset" onClick={clear}>
							Clear
						</Button>
						<Button type="submit">Submit</Button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default App;
```

এবার যে ফর্মই বানাতে হোক না কেন আমরা আমাদের _useForm.jsx_ হুক ব্যবহার করে যেকোনো ফর্ম বানিয়ে ফেলতে পারবো।

এবার আমরা কম্পোনেন্ট আকারে আরেকটা ফর্ম বানাই।

## Create Another Form

আমরা _components/task/Task.jsx_ নামে একটা ফাইল ক্রিয়েট করবো।

```jsx
import useForm from '../../hooks/useForm';

const init = {
	text: '',
	checked: false,
};

const Task = () => {
	const { formState, handleChange, handleSubmit } = useForm({
		init,
		validate: true,
	});

	const submitCB = ({ values }) => {
		console.log(values);
	};

	return (
		<div>
			<form onSubmit={(e) => handleSubmit(e, submitCB)}>
				<input
					type="checkbox"
					name={'checked'}
					checked={formState.checked.value}
					onChange={handleChange}
				/>
				<input
					type="text"
					name={'text'}
					value={formState.text.value}
					onChange={handleChange}
				/>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
};

export default Task;
```

এবার এটাকে আমরা _App.jsx_ এ ইমপোর্ট করে ব্যবহার করবো। দেখবো ঠিকভাবে কনসোলে আউটপুট দেখাচ্ছে।

তাহলে দেখতেই পাচ্ছেন আমরা আমাদের বানানো হুক দিয়ে এক তুড়িতেই যেকোনো ফর্ম বানিয়ে ফেলতে পারছি। এবার আমাদের _Task.jsx_ এর ফর্মকে এক্সটেন্ড করে সেখানে `select`, `radio` এবং `file` নিয়ে কাজ করবো।

```jsx
import useForm from '../../hooks/useForm';

const init = {
	text: '',
	checked: false,
	group: 'home',
	priority: 'medium',
	file: '',
};

const Task = () => {
	const { formState, handleChange, handleSubmit } = useForm({
		init,
		validate: true,
	});

	const submitCB = ({ values }) => {
		console.log(values);
	};

	return (
		<div>
			<form onSubmit={(e) => handleSubmit(e, submitCB)}>
				<input
					type="checkbox"
					name={'checked'}
					checked={formState.checked.value}
					onChange={handleChange}
				/>
				<input
					type="text"
					name={'text'}
					value={formState.text.value}
					onChange={handleChange}
				/>
				<select
					name="group"
					value={formState.group.value}
					onChange={handleChange}
				>
					<option value="home">Home</option>
					<option value="office">Office</option>
				</select>
				<input
					type="radio"
					name="priority"
					value={'low'}
					onChange={handleChange}
				/>
				Low
				<input
					type="radio"
					name="priority"
					value={'medium'}
					onChange={handleChange}
				/>
				Medium
				<input
					type="radio"
					name="priority"
					value={'high'}
					onChange={handleChange}
				/>
				High
				<input
					type="file"
					name="file"
					value={formState.file.value}
					onChange={handleChange}
				/>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
};

export default Task;
```

আমাদের আউটপুট দেখাবে এরকম -

![L45-02.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1665148219399/Pz6f7r52Q.png)

## Source Code

এই লেকচারের সমস্ত সোর্স কোড এই [লিংক](https://github.com/mrhm-dev/full-stack-army/tree/master/src/lecture-45) এ পাবেন।
