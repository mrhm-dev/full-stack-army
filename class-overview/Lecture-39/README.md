# Lecture 39 - Refactor The Operation and History Project

%[https://youtu.be/6Q6CrZQY5go]

## Introduction

গত লেকচারে আমরা যে প্রজেক্টটি করেছিলাম আজ সেটাকে আমরা রিফ্যাক্টর করবো। অর্থাৎ গত ক্লাসে আমরা সমস্ত কোড একটা ফাইলের মধ্যে লিখেছিলাম। আজ আমরা ভিন্ন ভিন্ন কম্পোনেন্ট বানিয়ে কিভাবে রিইউজ করতে পারি সেটা দেখবো।

## Breakdown the app into components

আমাদের আগে দেখতে হবে কি কি কম্পোনেন্ট রিইউজেবল হতে পারে। আমরা একটু আগে আমাদের UI এর দিকে তাকাই।

![l39-01.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1661831449861/F1EMKneXR.png align="left")

আমরা দেখতে পাচ্ছি প্রথমে আমাদের দুইটা ইনপুট ফিল্ড আছে একইরকম। তাহলে ইনপুট ফিল্ড রিইউজ হতে পারে। এরপর আছে বাটন। প্রতিটি বাটন দেখতে একই রকম। সুতরাং এগুলো আমরা রিইউজ করতে পারি। এরপর হিস্টোরি আইটেমগুলো রিইউজ হতে পারে। আবার যে বাটন তৈরি করেছিলাম সেটা রিস্টোর বাটন হিসেবেও রিইউজ করতে পারি আমরা।

এখন সবচেয়ে বড় ইস্যু হলো ডাটা। এখন আমাদের সমস্ত ডাটা আছে অ্যাপ কম্পোনেন্টের মধ্যে। এখন কোন ডাটাগুলোকে আমাদের অ্যাপের মধ্যে রাখতে হবে এবং কোনগুলোকে বের করে ফেলতে হবে সেটা বুঝতে হবে আমাদের। যেমন ইনপুট স্টেট আমাদের অ্যাপ কম্পোনেন্টের মধ্যে লাগবে। এরপর রেজাল্ট যেহেতু আমরা শো করবো তাই রেজাল্টের স্টেটটাও দরকার হবে অ্যাপের মধ্যে। এরপর আছে হিস্টোরি। যেহেতু হিস্টোরি তৈরি হবে অপারেশনের মাধ্যমে, শো হবে হিস্টোরিতে, আবার যখন রিস্টোর করবো তখন ইনপুটে চলে আসবে তাই এই স্টেটকেও আমাদের অ্যাপের মধ্যে রাখতে হবে। এরপর আছে রিস্টোরড হিস্টোরি স্টেট। যেটা সবচেয়ে পেইনফুল একটা বিষয়। সেটা নিয়ে আমরা পরে কাজ করবো।

আমরা এবার স্ট্রাকচারটা বুঝার চেষ্টা করি।

![React-state-lifting.jpg](https://cdn.hashnode.com/res/hashnode/image/upload/v1661832917060/jp3Y1rNT2.jpg align="left")

প্রথমে ইনপুট থেকে ডাটা ক্রিয়েট হবে এবং তা স্টোর হবে অ্যাপে। এরপর অপারেশন সেই ডাটাকে কনজিউম করবে এবং নতুন ডাটা ক্রিয়েট করবে। আর হিস্টোরি অপারেশন থেকে প্রাপ্ত ডাটা কনজিউম করবে।

এবার এখান থেকে আমরা আমাদের কম্পোনেন্ট ক্রিয়েট করবো। আমরা src ফোল্ডারের মধ্যে components নামে একটা ডিরেক্টরি ক্রিয়েট করবো। এই ডিরেক্টরির মধ্যে আমরা ui, inputs, operations এবং history নামে চারটা ডিরেক্টরি ক্রিয়েট করবো। এবার এক এক করে আমাদের কম্পোনেন্টগুলো আমরা বানিয়ে নিবো।

## Working with ui components

### NumberField Component

আমরা প্রথমে আমাদের সবচেয়ে ছোট ui নিয়ে কাজ করি। প্রথমে আমরা এর মধ্যে NumberField.jsx নামে একটা ফাইল ক্রিয়েট করবো। এরপর এখানে আমরা নিচের কোডটা লিখবো।

```jsx
const NumberField = ({ value, onChange, name }) => {
	const style = {
		padding: '0.25rem',
		borderRadius: '0.1rem',
		border: '1px solid gray',
		background: '#fff',
		outline: 'none',
	};
	return (
		<input
			style={style}
			type="number"
			value={value}
			onChange={onChange}
			name={name}
		/>
	);
};

export default NumberField;
```

এবার এই কম্পোনেন্টকে আমরা App.jsx এ গিয়ে ইমপোর্ট করে ইউজ করবো।

```jsx
import NumberField from './components/ui/NumberField';

const App = () => {
	return (
		<div style={{ width: '50%', margin: '0 auto' }}>
			<h1>Result: {result}</h1>
			<div>
				<p>Inputs</p>
				<NumberField
					value={inputState.a}
					onChange={handleInputChange}
					name="a"
				/>
				<NumberField
					value={inputState.b}
					onChange={handleInputChange}
					name="b"
				/>
			</div>
		</div>
	);
};
```

এখন এখানে যদি আমরা প্রপ্স নাও দিই তাও এটা শো করবে। কিন্তু আমরা তা চাই না। আমরা চাই যদি প্রপ্স না দিই তাহলে তা আমাদেরকে এরর বা ওয়ার্নিং দিবে। টাইপস্ক্রিপ্টে প্রপ টাইপ্স মেনশন করার অপশন আছে। কিন্তু যেহেতু আমরা জাভাস্ক্রিপ্ট নিয়ে কাজ করছি তাই আমরা [prop-types](https://www.npmjs.com/package/prop-types) লাইব্রেরিটা ব্যবহার করবো এখানে। এটা ইনস্টল করে আমরা Numberfield.jsx এ এটা ইমপোর্ট করবো। সেই সাথে আমরা কিছু কোড লিখবো।

```jsx
import PropTypes from 'prop-types';

const NumberField = ({ value, onChange, name }) => {
	const style = {
		padding: '0.25rem',
		borderRadius: '0.1rem',
		border: '1px solid gray',
		background: '#fff',
		outline: 'none',
	};
	return (
		<input
			style={style}
			type="number"
			value={value}
			onChange={onChange}
			name={name}
		/>
	);
};

NumberField.protoTypes = {
	value: PropTypes.number.isRequired,
	onChange: PropTypes.func.isRequired,
	name: PropTypes.string.isRequired,
};

export default NumberField;
```

এবার আমরা যদি প্রপ্স ছাড়া এমনি `<NumberField />` এভাবে ব্যবহার করি দেখুন আমাদেরকে ওয়ার্নিং দিচ্ছে।

![l39-02.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1661836846067/CmGrxnX0q.png align="left")

আমাদের একটা কম্পোনেন্ট রিইউজেবল করা হয়েছে।

### Buttton Component

এবার আমরা আমাদের অ্যাপ্লিকেশনের বাটনগুলো রিইউজেবল করবো। তার জন্য src/components/ui এর মধ্যে Button.jsx নামে একটা ফাইল ক্রিয়েট করবো।

```jsx
import PropTypes from 'prop-types';

const Button = ({ text, onClick, disabled, customStyle }) => {
	const disabledStyle = {
		backgroundColor: '#999',
		color: '#333',
		cursor: 'not-allowed',
	};

	const style = {
		padding: '0.25rem 1rem',
		backgroundColor: '#ddd',
		color: '#212121',
		borderRadius: '0.10rem',
		cursor: 'pointer',
		border: 'none',
		...customStyle,
		...(disabled && disabledStyle),
	};
	return (
		<button style={style} onClick={onClick} disabled={disabled}>
			{text}
		</button>
	);
};

Button.propTypes = {
	onClick: PropTypes.object.isRequired,
	text: PropTypes.string.isRequired,
	disabled: PropTypes.bool,
	customStyle: PropTypes.object,
};

Button.defaultProps = {
	customStyle: {},
	disabled: false,
};

export default Button;
```

এখানে আমরা প্রপ টাইপস ডিফাইন করে দিয়েছি। সেই সাথে customStyle এবং disabled এর ডিফল্ট ভ্যালু কি হবে সেটাও ডিফাইন করে দিলাম।

আমাদের বাটন কম্পোনেন্টও বানানো শেষ। এবং একই সাথে ui নিয়ে কাজও শেষ আমাদের। এবার আমরা ইনপুট কম্পোনেন্ট নিয়ে কাজ করবো।

## Working with inputs components

আমরা src/components/inputs এর মধ্যে InputSection.jsx নামে একটা ফাইল ক্রিয়েট করে নিলাম।

```jsx
import PropTypes from 'prop-types';
import NumberField from '../ui/NumberField';

const InputSection = ({ inputs, handleInputChange }) => {
	return (
		<div
			style={{
				width: '100%',
				padding: '0.5rem 1rem',
				backgroundColor: '#efefef',
				borderRadius: '0.10rem',
			}}
		>
			<h3
				style={{
					fontFamily: 'Arial',
					textAlign: 'center',
					fontSize: '1.5rem',
					color: '#212121',
					margin: 0,
					marginBottom: '1rem',
				}}
			>
				Inputs
			</h3>
			<div
				style={{
					display: 'flex',
					gap: '1rem',
					justifyContent: 'space-between',
				}}
			>
				<NumberField value={inputs.a} onChange={handleInputChange} name="a" />
				<NumberField value={inputs.b} onChange={handleInputChange} name="b" />
			</div>
		</div>
	);
};

InputSection.propTypes = {
	inputs: PropTypes.shape({
		a: PropTypes.number.isRequired,
		b: PropTypes.number.isRequired,
	}).isRequired,
	handleInputChange: PropTypes.func.isRequired,
};

export default InputSection;
```

এবার এটাকে আমরা App.jsx এ ইউজ করবো।

```jsx
import InputSection from './components/inputs/InputSection';

const App = () => {
	return (
		<div style={{ width: '50%', margin: '0 auto' }}>
			<h1>Result: {result}</h1>
			<InputSection inputs={inputState} handleInputChange={handleInputChange} />
		</div>
	);
};
```

আমাদের UI দাঁড়াবে ঠিক এরকম।

![l39-03.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1661840383707/RSQ_XgzFn.png align="left")

আমাদের ইনপুট নিয়ে কাজ শেষ। এবার আমরা অপারেশন নিয়ে কাজ করবো।

## Working with operations components

আমরা প্রতিবারের মতো src/components/operations এর মধ্যে OperationSection.jsx নামে একটা ফাইল ক্রিয়েট করে নিই। এখানে আমাদের দরকার একটা আইডি। সেজন্য আমরা [shortid](https://www.npmjs.com/package/shortid) প্যাকেজটা ইনস্টল করে নিবো।

```jsx
import PropTypes from 'prop-types';
import shortid from 'shortid';
import Button from '../ui/Button';

const OperationSection = ({ handleArithmeticOps, handleClearOps }) => {
	const operations = [
		{
			id: shortid.generate(),
			text: '+',
			onClick: () => handleArithmeticOps('+'),
		},
		{
			id: shortid.generate(),
			text: '-',
			onClick: () => handleArithmeticOps('-'),
		},
		{
			id: shortid.generate(),
			text: '*',
			onClick: () => handleArithmeticOps('*'),
		},
		{
			id: shortid.generate(),
			text: '/',
			onClick: () => handleArithmeticOps('/'),
		},
		{
			id: shortid.generate(),
			text: '%',
			onClick: () => handleArithmeticOps('%'),
		},
		{
			id: shortid.generate(),
			text: '**',
			onClick: () => handleArithmeticOps('**'),
		},
		{
			id: shortid.generate(),
			text: 'Clear',
			onClick: handleClearOps,
		},
	];
	return (
		<div>
			<p>Operations</p>
			<div style={{ display: 'flex', gap: '0.5rem' }}>
				{operations.map((operation) => (
					<Button
						text={operation.text}
						onClick={operation.onClick}
						key={operation.id}
					/>
				))}
			</div>
		</div>
	);
};

OperationSection.propTypes = {
	handleArithmeticOps: PropTypes.func.isRequired,
	handleClearOps: PropTypes.func.isRequired,
};

export default OperationSection;
```

যেহেতু সব একই টাইপের বাটন তাই আমরা বাটনের ডাটাগুলোর অবজেক্টের একটা অ্যারে নিয়ে নিলাম। এরপর সেটা ম্যাপ করে দিলাম। এরপর আমরা এটাকে App.jsx এ ইমপোর্ট করে ইউজ করবো।

```jsx
import InputSection from './components/inputs/InputSection';
import OperationSection from './components/operations/OperationSection';

const App = () => {
	return (
		<div style={{ width: '50%', margin: '0 auto' }}>
			<h1>Result: {result}</h1>
			<InputSection inputs={inputState} handleInputChange={handleInputChange} />
			<OperationSection
				handleArithmeticOps={handleArithmeticOps}
				handleClearOps={handleClearOps}
			/>
		</div>
	);
};
```

সেই সাথে আমাদের অপারেশন কম্পোনেন্ট নিয়ে কাজও শেষ হলো। আমাদের বাকি আছে হিস্টোরি কম্পোনেন্ট। আমরা এখন সেটা নিয়ে কাজ করবো।

## Working with history component

এখানে আমাদের দুইটা কাজ আছে - History এবং HistoryItem। আমরা প্রথমে HistoryItem নিয়ে কাজ করবো। তার জন্য আমরা src/components/history এর মধ্যে HistoryItem.jsx নামে একটা ফাইল ক্রিয়েট করবো।

```jsx
import PropTypes from 'prop-types';
import { useState } from 'react';
import Button from '../ui/Button';

const HistoryItem = ({ historyItem, disabled, handleRestoreBtn }) => {
	const [show, setShow] = useState(false);

	const handleToggle = () => {
		setShow(!show);
	};

	return (
		<li key={historyItem.id}>
			<div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
				<p>
					Operation: {historyItem.inputs.a} {historyItem.operation}{' '}
					{historyItem.inputs.b}, Result: {historyItem.result}
				</p>
				<div>
					<Button text={show ? 'Hide' : 'Show'} onClick={handleToggle} />
				</div>
			</div>
			{show && (
				<>
					<small>
						{historyItem.date.toLocaleDateString()}{' '}
						{historyItem.date.toLocaleTimeString()}
					</small>
					<br />
					<Button
						text="Restore"
						onClick={() => handleRestoreBtn(historyItem)}
						disabled={disabled}
					/>
				</>
			)}
		</li>
	);
};

HistoryItem.propTypes = {
	historyItem: PropTypes.shape({
		id: PropTypes.number.isRequired,
		inputs: PropTypes.shape({
			a: PropTypes.number.isRequired,
			b: PropTypes.number.isRequired,
		}).isRequired,
		operation: PropTypes.string.isRequired,
		result: PropTypes.number.isRequired,
		date: PropTypes.object.isRequired,
	}),
	disabled: PropTypes.bool.isRequired,
	handleRestoreBtn: PropTypes.func.isRequired,
};

HistoryItem.defaultProps = {
	disabled: false,
};

export default HistoryItem;
```

এবার আমরা src/components/history এ HistorySection.jsx নামে একটা ফাইল ক্রিয়েট করবো।

```jsx
import PropTypes from 'prop-types';
import HistoryItem from './HistoryItem';

const HistorySection = ({ histories, restoredHistory, handleRestoreBtn }) => {
	return (
		<div>
			<p>History</p>
			{histories.length === 0 ? (
				<p>
					<small>There is no history</small>
				</p>
			) : (
				<ul>
					{histories.map((historyItem) => (
						<HistoryItem
							key={historyItem.id}
							disabled={restoredHistory === historyItem.id}
							historyItem={historyItem}
							handleRestoreBtn={handleRestoreBtn}
						/>
					))}
				</ul>
			)}
		</div>
	);
};

HistoryItem.propTypes = {
	histories: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			inputs: PropTypes.shape({
				a: PropTypes.number.isRequired,
				b: PropTypes.number.isRequired,
			}).isRequired,
			operation: PropTypes.string.isRequired,
			result: PropTypes.number.isRequired,
			date: PropTypes.object.isRequired,
		})
	),
	restoredHistory: PropTypes.number.isRequired,
	handleRestoreBtn: PropTypes.func.isRequired,
};

export default HistorySection;
```

এবার আমরা HistorySection কে App.jsx এ import করে দিবো।

```jsx
import HistorySection from './components/history/HistorySection';
import InputSection from './components/inputs/InputSection';
import OperationSection from './components/operations/OperationSection';

const App = () => {
	return (
		<div style={{ width: '50%', margin: '0 auto' }}>
			<h1>Result: {result}</h1>
			<InputSection inputs={inputState} handleInputChange={handleInputChange} />
			<OperationSection
				handleArithmeticOps={handleArithmeticOps}
				handleClearOps={handleClearOps}
			/>
			<HistorySection
				histories={histories}
				handleRestoreBtn={handleRestoreBtn}
				restoredHistory={restoredHistory}
			/>
		</div>
	);
};
```

## Our Final UI

আমাদের ফাইনাল UI দেখতে হবে এরকম -

![l39-04.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1661845310859/2S9ro-xHU.png align="left")

## Source Code

এই লেকচারের সমস্ত সোর্স কোড আপনারা এই [লিংক](https://github.com/mrhm-dev/full-stack-army/tree/master/src/lecture-39/react-demo) এ পাবেন।
