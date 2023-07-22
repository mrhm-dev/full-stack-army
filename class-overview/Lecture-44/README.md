# Lecture 44 - Create A React Custom Form Part 1

## Introduction

গত লেকচারে আমরা ফর্ম নিয়ে সামান্য আলোচনা করেছিলাম। আজ আমরা সেটা নিয়ে আরো ডিটেইলস কাজ করবো। গত লেকচারে আমরা যা করেছিলাম তার একটা স্ন্যাপশট নিচে দেয়া হলো -

![l44-01.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1664261910412/WmchI0BzJ.png)

আমরা যা করেছিলাম তা হলো জাস্ট একটা UI তৈরি করেছিলাম। আমাদের ফাংশনালিটিজ যোগ করা হয়নি। আজ আমরা প্রথমে একটা ফর্ম তৈরি করবো। এরপর এতে ফাংশনালিটিজ যোগ করবো।

আমাদের ফর্মে আমরা জব টাইটেল, বায়ো এবং স্কিলস এর জন্য সিস্টেম রাখবো। চলুন কাজ শুরু করে দিই।

## Initial works

এই ইনফরমেশনগুলো স্টোর করতে গেলে আমাদের দরকার স্টেট। এই ইনফরমেশনগুলো আমরা অবজেক্ট আকারে রাখবো। প্রথমে আমরা একটা ইনিশিয়াল ডাটা ডিফাইন করবো।

```jsx
// App.jsx
const init = {
	title: '',
	bio: '',
	skills: '',
};
```

## Define state in App.jsx

এবার আমরা স্টেট ডিফাইন করবো।

```jsx
import { useState } from 'react';

const init = {
	title: '',
	bio: '',
	skills: '',
};

const App = () => {
	const [formState, useFormState] = useState({ ...init });
	return <div className="root"></div>;
};

export default App;
```

## Create UI

এবার আমরা আমাদের UI তৈরি করবো।

```jsx
import { useState } from 'react';
import InputGroup from '../components/shared/forms/InputGroup';
import Button from '../components/UI/buttons/Button';

const init = {
	title: '',
	bio: '',
	skills: '',
};

const App = () => {
	const [formState, setFormState] = useState({ ...init });

	const handleChange = (e) => {
		setFormState((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formState);
	};

	return (
		<div className="root">
			<form onSubmit={handleSubmit}>
				<div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
					<InputGroup
						value={formState.title}
						label={'Title:'}
						name={'title'}
						placeholder={'Software Engineer'}
						onChange={handleChange}
					/>
					<InputGroup
						value={formState.bio}
						label={'Bio:'}
						name={'bio'}
						placeholder={'I am a software engineer...'}
						onChange={handleChange}
					/>
					<InputGroup
						value={formState.skills}
						label={'Skills:'}
						name={'skills'}
						placeholder={'JavaScript, React'}
						onChange={handleChange}
					/>
					<Button type="submit">Submit</Button>
				</div>
			</form>
		</div>
	);
};

export default App;
```

আমাদের অ্যাপ্লিকেশনটি দেখতে এখন হবে নিচের মতো -

![l44-02.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1664264430583/k96WkBT1S.png)

## Error Handling

আমরা চাইছি ইনপুট ফিল্ডগুলো যদি খালি থাকে সেক্ষেত্রে আমাদেরকে এরর শো করবে এবং যদি এই ফিল্ডগুলো খালি না থাকে তবেই শুধুমাত্র কনসোলে লগ হবে। নাহয় হবে না। এখন এরর হ্যান্ডলিং এর জন্য প্রথমে আমরা একটা স্টেট নিবো।

```jsx
const App = () => {
	const [errors, setErrors] = useState({ ...init });
};
```

এরপর আমরা ইনপুটের ভ্যালিডিটি চেক করার জন্য একটা ফাংশন বানাবো।

```jsx
const checkValidity = (values) => {
	const errors = {};

	const { title, bio, skills } = values;

	if (!title) {
		errors.title = 'Invalid title';
	}
	if (!bio) {
		errors.bio = 'Invalid bio';
	}
	if (!skills) {
		errors.skills = 'Invalid skills';
	}

	return {
		errors,
		isValid: Object.keys(errors).length === 0,
	};
};
```

এবার এটাকে আমরা আমাদের `handleSubmit` ফাংশনের মধ্যে ব্যবহার করবো।

```jsx
const handleSubmit = (e) => {
	e.preventDefault();
	const { isValid, errors } = checkValidity(values);

	if (isValid) {
		console.log(values);
		setErrors({ ...errors });
	} else {
		setErrors({ ...errors });
	}
};
```

এবার আমরা `InputGroup` এ `error` প্রপ্সের মধ্যে `errors` স্টেট পাস করে দিবো।

```jsx
const App = () => {
	const [values, setValues] = useState({ ...init });
	const [errors, setErrors] = useState({ ...init });

	const handleChange = (e) => {
		setValues((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const { isValid, errors } = checkValidity(values);

		if (isValid) {
			console.log(values);
			setErrors({ ...errors });
		} else {
			setErrors({ ...errors });
		}
	};

	const checkValidity = (values) => {
		const errors = {};

		const { title, bio, skills } = values;

		if (!title) {
			errors.title = 'Invalid title';
		}
		if (!bio) {
			errors.bio = 'Invalid bio';
		}
		if (!skills) {
			errors.skills = 'Invalid skills';
		}

		return {
			errors,
			isValid: Object.keys(errors).length === 0,
		};
	};

	return (
		<div className="root">
			<form onSubmit={handleSubmit}>
				<div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
					<InputGroup
						value={values.title}
						label={'Title:'}
						name={'title'}
						placeholder={'Software Engineer'}
						onChange={handleChange}
						error={errors.title}
					/>
					<InputGroup
						value={values.bio}
						label={'Bio:'}
						name={'bio'}
						placeholder={'I am a software engineer...'}
						onChange={handleChange}
						error={errors.bio}
					/>
					<InputGroup
						value={values.skills}
						label={'Skills:'}
						name={'skills'}
						placeholder={'JavaScript, React'}
						onChange={handleChange}
						error={errors.skills}
					/>
					<Button type="submit">Submit</Button>
				</div>
			</form>
		</div>
	);
};
```

![l44-03.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1664268007573/83AObJfcB.png)

এবার আমাদেরকে এরর শো করছে। এখন যদি এরর ম্যাসেজের সাথে সাথে যদি বর্ডারটাও লাল হতো তাহলে দেখতে সুন্দর লাগতো। তার জন্য আমরা _components/inputs/TextInput.jsx_ এবং _components/shared/form/InputGroup.jsx_ এ একটু চেইঞ্জ করবো।

```jsx
// components/inputs/TextInput.jsx

// border property changed

const TextInput = styled.input`
	width: 100%;
	border: ${(props) =>
		props.error ? '2px solid #ff0000' : '1px solid #232323'};
	outline: none;
	padding: 0.25rem 0.5rem;
	background: transparent;
	font-size: 0.9rem;
	font-family: Arial;
	color: #333;
	&:focus {
		border: 2px solid skyblue;
	}
`;
```

```jsx
// components/shared/form/InputGroup.jsx

const InputGroup = ({
	label,
	name,
	value,
	placeholder,
	error,
	onChange,
	onFocus,
	onBlur,
}) => {
	return (
		<Container>
			<Label htmlFor={name}>{label}</Label>
			<TextInput
				name={name}
				id={name}
				placeholder={placeholder ?? ''}
				value={value}
				onChange={onChange}
				onFocus={onFocus}
				onBlur={onBlur}
				error={error} // this is added
			/>
			{error && <ErrorMessage>{error}</ErrorMessage>}
		</Container>
	);
};
```

![l44-04.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1664268204720/B_ys8ASlh.png)

এবার আমাদের UI দেখতে অনেক সুন্দর লাগছে।

এখানে একটা সমস্যা আছে। সেটা হলো যখন আমরা সাবমিট বাটনে ক্লিক করছি তখনই এররটা শো করছে। কিন্তু এটা বেটার ইউজার এক্সপেরিয়েন্স না। আমরা যখন ইনপুটে ফোকাস করার পর বাইরে কোথাও ক্লিক করবো তখনই এই এররটা শো করা উচিৎ। এবার আমরা সেটা হ্যান্ডেল করবো। সেটা করতে গেলে আমাদের ট্র্যাক করতে হবে যে ইনপুটটা ফোকাস হয়েছে কিনা। সেটার জন্য আমরা একটা ফাংশন তৈরি করি। তবে তার আগে আমাদের স্টেট নিতে হবে একটা। কারণ ফোকাস ট্র্যাক করতে হলে আমাদের আগে ফোকাস ছিল কিনা সেটা দেখতে হবে।

```jsx
const [focus, setFocus] = useState({
	title: false,
	bio: false,
	skills: false,
});
```

অর্থাৎ প্রাথমিক অবস্থায় ফোকাস `false` থাকবে। যখন আমরা ফোকাস করে বাইরে ক্লিক অর্থাৎ _blur_ করলে সেটা `true` হয়ে যাবে। আর `true` হলেই আমরা আমাদের এরর শো করবো। এখন দুইটা ফাংশন বানাতে হবে। একটা হলো ফোকাস হ্যান্ডলিং এর জন্য এবং অন্যটা ব্লার হ্যান্ডলিং এর জন্য।

```jsx
const handleFocus = (e) => {
	setFocus((prev) => ({
		...prev,
		[e.target.name]: true,
	}));
};
```

অর্থাৎ যখনই কোনো ইনপুটে `onFocus` হবে তখন ঐ নির্দিষ্ট ইনপুটের ফোকাস স্টেট চেইঞ্জ হয়ে `true` হয়ে যাবে। সেটা আমরা আমাদের react developer tools এর মধ্যমে দেখতে পারি। তার জন্য আমাদেরকে প্রথমে সকল ইনপুটের মধ্যে `onFocus` props এর ভিতর এই ফাংশনকে পাস করে দিতে হবে।

```jsx
<form onSubmit={handleSubmit}>
	<div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
		<InputGroup
			value={values.title}
			label={'Title:'}
			name={'title'}
			placeholder={'Software Engineer'}
			onChange={handleChange}
			onFocus={handleFocus}
			error={errors.title}
		/>
		<InputGroup
			value={values.bio}
			label={'Bio:'}
			name={'bio'}
			placeholder={'I am a software engineer...'}
			onChange={handleChange}
			onFocus={handleFocus}
			error={errors.bio}
		/>
		<InputGroup
			value={values.skills}
			label={'Skills:'}
			name={'skills'}
			placeholder={'JavaScript, React'}
			onChange={handleChange}
			onFocus={handleFocus}
			error={errors.skills}
		/>
		<Button type="submit">Submit</Button>
	</div>
</form>
```

![l44-05.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1664269924938/U2MQe6_eN.png)

প্রথম অবস্থায় দেখুন সব `false` আছে। কিন্তু যেই আমরা Title এ ফোকাস করলাম সেই মুহূর্তে টাইটেল ভ্যালু চেইঞ্জ হয়ে `true` হয়ে গেছে।

![l44-06.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1664269992631/E_KHcqDNQ.png)

এবার আমরা এরর শো করাবো। সেটার জন্য আমরা একটা ফাংশন লিখবো।

```jsx
const handleBlur = (e) => {
	const key = e.target.name;
	const { errors } = checkValidity(values);

	if (errors[key] && focus[key]) {
		setErrors((prev) => ({
			...prev,
			[key]: errors[key],
		}));
	} else {
		setErrors((prev) => ({
			...prev,
			[key]: '',
		}));
	}
};
```

অর্থাৎ যখন এরর থাকবে এবং ফোকাস হবে তখন এরর স্টেটে সেভাবে চেইঞ্জ হবে। এবার আমরা ইনপুট গ্রুপের মধ্যে যদি এই ফাংশনকে `onBlur` প্রপ্সের মধ্যে পাস করি তাহলে আমরা যেভাবে চাইছি সেভাবেই দেখতে পাবো।

```jsx
<form onSubmit={handleSubmit}>
	<div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
		<InputGroup
			value={values.title}
			label={'Title:'}
			name={'title'}
			placeholder={'Software Engineer'}
			onChange={handleChange}
			onFocus={handleFocus}
			onBlur={handleBlur}
			error={errors.title}
		/>
		<InputGroup
			value={values.bio}
			label={'Bio:'}
			name={'bio'}
			placeholder={'I am a software engineer...'}
			onChange={handleChange}
			onFocus={handleFocus}
			onBlur={handleBlur}
			error={errors.bio}
		/>
		<InputGroup
			value={values.skills}
			label={'Skills:'}
			name={'skills'}
			placeholder={'JavaScript, React'}
			onChange={handleChange}
			onFocus={handleFocus}
			onBlur={handleBlur}
			error={errors.skills}
		/>
		<Button type="submit">Submit</Button>
	</div>
</form>
```

এবার লক্ষ্য করলে দেখতে পাবো, যে এরর ম্যাসেজটা আসছে সেটা যতক্ষণ আমরা ফোকাসকে ব্লার না করছি ততক্ষণ পর্যন্ত থেকে যাচ্ছে। আমরা লিখলেও সেটা যাচ্ছে না। যেটা খুবই বিরক্তিকর। এরর আসছে, সেটা আমরা যখন টাইপ করা শুরু করবো তখন চলে যাবে। এবার আমরা সেটা হ্যান্ডেল করি চলুন। এই কাজটা করতে হবে আমাদের `handleChange` ফাংশনের ভেতরে।

```jsx
const handleChange = (e) => {
	setValues((prev) => ({
		...prev,
		[e.target.name]: e.target.value,
	}));

	const key = e.target.name;
	const { errors } = checkValidity(values);

	if (!errors[key]) {
		setErrors((prev) => ({
			...prev,
			[key]: '',
		}));
	}
};
```

এক্ষেত্রে প্রথম কীস্ট্রোকে এরর যাবে না। কিন্তু পরবর্তী কীস্ট্রোকে এরর চলে যাবে। অন্তত কাজ চালানোর মতো তো হচ্ছে। এটাই আপাতত আমরা রাখছি।

## Optimize our app

আমরা আমাদের অ্যাপ্লিকেশনকে একটু অপটিমাইজ করার চেষ্টা করবো এখন। এখানে আমরা অনেকগুলো স্টেট নিয়ে কাজ করেছি। কিন্তু আমরা এখন কাজ করবো একটা স্টেট নিয়ে। আমরা এতক্ষণ যেটাতে কাজ করলাম সেটাকে App_2.jsx নামে সেইভ করে সেটার একটা কপি নিয়ে কাজ করবো।

যেহেতু আমাদের তিনটা স্টেটেই অবজেক্টের কী একই তাই আমরা আমাদের `init` অবজেক্টকে নিচের মতো করে লিখতে পারি।

```jsx
const init = {
	title: {
		values: '',
		errors: '',
		focus: false,
	},
	bio: {
		values: '',
		errors: '',
		focus: false,
	},
	skills: {
		values: '',
		errors: '',
		focus: false,
	},
};
```

এবার আমরা শুধু একটা স্টেট নিবো। সেটার সাথে সাথে আমাদের ভিতরেও কিছু চেইঞ্জ করতে হবে।

```jsx
const App = () => {
	const [states, setStates] = useState({ ...init });

	const handleChange = (e) => {};

	const handleSubmit = (e) => {};

	const handleFocus = (e) => {};

	const handleBlur = (e) => {};

	const checkValidity = (values) => {
		const errors = {};

		const { title, bio, skills } = values;

		if (!title) {
			errors.title = 'Invalid title';
		}
		if (!bio) {
			errors.bio = 'Invalid bio';
		}
		if (!skills) {
			errors.skills = 'Invalid skills';
		}

		return {
			errors,
			isValid: Object.keys(errors).length === 0,
		};
	};

	return (
		<div className="root">
			<form onSubmit={handleSubmit}>
				<div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
					<InputGroup
						value={states.title.value}
						label={'Title:'}
						name={'title'}
						placeholder={'Software Engineer'}
						onChange={handleChange}
						onFocus={handleFocus}
						onBlur={handleBlur}
						error={states.title.error}
					/>
					<InputGroup
						value={states.bio.value}
						label={'Bio:'}
						name={'bio'}
						placeholder={'I am a software engineer...'}
						onChange={handleChange}
						onFocus={handleFocus}
						onBlur={handleBlur}
						error={states.bio.error}
					/>
					<InputGroup
						value={states.skills.value}
						label={'Skills:'}
						name={'skills'}
						placeholder={'JavaScript, React'}
						onChange={handleChange}
						onFocus={handleFocus}
						onBlur={handleBlur}
						error={states.skills.error}
					/>
					<Button type="submit">Submit</Button>
				</div>
			</form>
		</div>
	);
};
```

হ্যান্ডেল ফাংশনগুলো আমরা একটা একটা করে মডিফাই করবো আমরা। আমরা প্রথমে _utils/object-utils.js_ নামে একটা ফাইল ক্রিয়েট করে দুইটা ফাংশন লিখবো। একটা হলো অবজেক্ট খালি কিনা তার ফাংশন এবং অন্যটা হলো অবজেক্টকে ডীপ ক্লোন করার ফাংশন।

```js
export const isObjEmpty = (obj) => {
	return Object.keys(obj).length === 0;
};

export const deepClone = (obj) => {
	return JSON.parse(JSON.stringify(obj));
};
```

আমরা প্রথমে আমাদের `handleChange` ফাংশনকে মডিফাই করবো। আমরা প্রথমে আমাদের পুরোনো ফাংশনটা লক্ষ্য করি।

```jsx
const handleChange = (e) => {
	setValues((prev) => ({
		...prev,
		[e.target.name]: e.target.value,
	}));

	const key = e.target.name;
	const { errors } = checkValidity(values);

	if (!errors[key]) {
		setErrors((prev) => ({
			...prev,
			[key]: '',
		}));
	}
};
```

যেহেতু আমাদের `values` এর জন্য আলাদা কোনো স্টেট নাই সেহেতু আমাদেরকে স্টেটের মধ্য থেকে এগুলো বের করে আনতে হবে। অর্থাৎ আমাদের পুরোনো `init` অবজেক্টের ফরম্যাটে নিয়ে যেতে হবে। সেটার জন্য আমরা একটা ফাংশন বানিয়ে নিতে পারি।

```jsx
const mapStateToValues = (states) => {
	return Object.keys(states).reduce((acc, cur) => {
		acc[cur] = states[cur].value;
		return acc;
	}, {});
};
```

এবার আমাদের `handleChange` ফাংশনটা দাঁড়াবে নিচের মতো।

```jsx
const handleChange = (e) => {
	const { name: key, value } = e.target;
	const oldState = deepClone(state);
	const values = mapStateToValues(oldState);
	oldState[key].value = value;

	const { errors } = checkValidity(values);
	if (oldState[key].focus && errors[key]) {
		oldState[key].error = errors[key];
	} else {
		oldState[key].error = '';
	}

	setState(oldState);
};
```

প্রথমে আমরা state কে deep clone করে নিলাম। এরপর সেখান থেকে value গুলোকে ম্যাপ করে বের করে একটা অবজেক্ট আকারে নিলাম। এরপর জাস্ট oldState এর প্রোপার্টিগুলোকে মডিফাই করা হয়েছে।

এবার `handleSubmit` কে মডিফাই করার পালা।

```jsx
const handleSubmit = (e) => {
	e.preventDefault();
	const values = mapStateToValues(state);
	const { isValid, errors } = checkValidity(values);
	if (isValid) {
		console.log(state);
	} else {
		const oldState = deepClone(state);
		Object.keys(errors).forEach((key) => {
			oldState[key].error = errors[key];
		});
		setState(oldState);
	}
};
```

এবার আমরা করবো `handleFocus` এর কাজ।

```jsx
const handleFocus = (e) => {
	const { name } = e.target;
	const oldState = deepClone(state);
	oldState[name].focus = true;
	setState(oldState);
};
```

সবশেষে এবার `handleBlur` এর কাজ করবো আমরা।

```jsx
const handleBlur = (e) => {
	const key = e.target.name;
	const values = mapStateToValues(state);
	const { errors } = checkValidity(values);
	const oldState = deepClone(state);

	if (oldState[key].focus && errors[key]) {
		oldState[key].error = errors[key];
	} else {
		oldState[key].error = '';
	}
	setState(oldState);
};
```

এখানে আমরা যা করেছি পুরাতন ফাংশনগুলোকেই জাস্ট মডিফাই করেছি। আগের ফাংশনগুলোতে তিনটা স্টেট ছিল, কিন্তু এখানে একটা। তাই প্রথমে স্টেটকে ডীপ ক্লোন করে এরপর সেখানে প্রোপার্টিগুলোকে প্রয়োজনমতো মডিফাই করা হয়েছে।

রিয়্যাক্টে সবচেয়ে কমপ্লেক্স কাজই হলো ফর্ম হ্যান্ডেল করা। আজ আমরা তার একটু হালকা আভাস পেলাম। এখানে এখনও অনেক কাজ বাকি আছে ফর্মের উপর। সেটা আমরা পরবর্তী লেকচারে দেখবো।

## Source Code

এই লেকচারের সমস্ত সোর্স কোড এই [লিংক](https://github.com/mrhm-dev/full-stack-army/tree/master/src/lecture-44) এ পাবেন।
