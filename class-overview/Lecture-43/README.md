# Lecture 43 - React Styling Options , Styled Component and Project Structures

## Introduction

আমরা আজকের লেকচারে কিভাবে রিয়্যাক্ট অ্যাপ্লিকেশন স্টাইল অ্যাড করতে হয় সেটা দেখবো _styled component_ ব্যবহারের মাধ্যমে। এরপর আমরা আমাদের রিয়্যাক্ট প্রজেক্ট কিভাবে স্ট্রাকচার করতে হয় সেটা দেখবো। এরপর আমরা ফর্ম নিয়ে কাজ করবো। আমরা এতদিন যা যা শিখেছি সেগুলো এবং আগামী দুইটা ক্লাসে যা শিখবো সেগুলোর উপর ভিত্তি করে আমরা প্রজেক্টে জাম্প করতে পারবো। আরো ছোটখাট কিছু বিষয় আছে, যেগুলো আমরা প্রজেক্ট করতে করতে শিখবো। আমরা যদি রিয়্যাক্টের অফিসিয়াল [ডকুমেন্টেশন](https://reactjs.org/docs/getting-started.html) এ গিয়ে main concepts দেখি দেখবো আমরা শুধু ফর্ম ছাড়া বাকি সব মোটামুটিভাবে বুঝি। ফর্ম সম্পর্কে জানলেই আমরা অ্যাপ্লিকেশন বানাতে পারবো। Advanced guides এ যা যা আছে সেগুলো অ্যাপ্লিকেশন সহজে এবং অপটিমাইজড ওয়েতে বানানোর জন্য। সেগুলো আমরা আস্তে আস্তে শিখে ফেলবো।

## How to add style in a react application

আমরা চাইলে আমাদের `index.html` ফাইলে সিএসএস ফাইল লিংক করে দিয়ে `jsx` এর মধ্যে `className` প্রপ ইউজ করে ক্লাসনেইমগুলো লিখতে পারি।

আমরা ইনলাইন সিএসএস ও লিখতে পারি। রিয়্যাক্ট বাই ডিফল্ট সাপোর্ট করে ইনলাইন সিএসএস। কিন্তু ইনলাইন সিএসএসের বড় সমস্যা হলো কোড ডুপ্লিকেশন। ধরেন আমি একটা কম্পোনেন্টে ইনলাইন সিএসএস লিখে ডায়নামিক্যালি রেন্ডার করলাম। রেন্ডার হলো ১০০টা কম্পোনেন্ট। প্রতিটা কম্পোনেন্টের সাথে ১০০বার সে সিএসএস কোড জেনারেট হচ্ছে। যেটা কোনো ভাল সল্যুশন না। আমার ব্রাউজারে এত ডাটা রেখে লাভ কি, যেখানে আমি কোথাও সব কোড লিখে শেয়ার করতে পারি। তাই এটা কোনো ভাল সল্যুশন না।

এরপর আরেকটা উপায় হলো [jss](https://cssinjs.org/?v=v10.9.2) বা _css in js_। অর্থাৎ আমরা সিএসএস কোনো আলাদা সিএসএস ফাইলে না লিখে লিখবো জাভাস্ক্রিপ্ট ফাইলে। এটা আমরা দেখবো একটু পর। এটা রিয়্যাক্টের কোনো পার্ট না। এটার জন্য আমাদের থার্ড পার্টি লাইব্রেরি ব্যবহার করতে হবে।

এছাড়াও অ্যানিমেশনের জন্য অনেক লাইব্রেরি আছে। এদের মধ্যে [react spring](https://react-spring.dev/), [framer motion](https://www.framer.com/motion/) ইত্যাদি অনেক জনপ্রিয়। এগুলো আমরা যখন অ্যানিমেশন নিয়ে কাজ করবো তখন দেখবো ভাল করে।

রিয়্যাক্টের ক্ষেত্রে যখন স্টাইলিং এর ব্যাপার আসে তখন সবচেয়ে ভাল সল্যুশন হলো _jss_ বা _SASS_। আপনি যদি SASS এর পারদর্শী হোন তাহলে এটা নিয়ে এগোতে পারেন। অথবা JSS নিয়েও এগোতে পারেন। It's upto you.

## JSS

আমরা JSS নিয়ে কাজ করতে গেলে [styled components](https://styled-components.com/), [emotion](https://emotion.sh/docs/introduction) ইত্যাদি লাইব্রেরি আছে। আপনার মতো করে আপনি ব্যবহার করতে পারবেন যেকোনো একটা।

এখানে আমরা styled components নিয়ে আলোচনা করবো এখন।

## Styled components

Styled components হচ্ছে মূলত একটা ফাংশন। আমরা একটা ডেমো কোড দেখি -

```jsx
const Button = styled.a`
	/* This renders the buttons above... Edit me! */
	display: inline-block;
	border-radius: 3px;
	padding: 0.5rem 0;
	margin: 0.5rem 1rem;
	width: 11rem;
	background: transparent;
	color: white;
	border: 2px solid white;

	/* The GitHub button is a primary button
   * edit this to target it specifically! */
	${(props) =>
		props.primary &&
		css`
			background: white;
			color: black;
		`}
`;
```

দেখুন এখানে আমরা টেমপ্লেট লিটারেল স্ট্রিং ব্যবহার করেছি। যেহেতু টেমপ্লেট স্ট্রিং ব্যবহার করেছি সেহেতু এখানে আমরা জাভাস্ক্রিপ্ট কোড লিখতে পারি, কন্ডিশন অ্যাপ্লাই করতে পারি, ইনহেরিট করতে পারি অর্থাৎ জাভাস্ক্রিপ্টে যা যা করা যায় সবই করতে পারি। দিনশেষে এটা আমাদেরকে একটা কম্পোনেন্ট রিটার্ন করছে।

আমরা `yarn add styled-components` এই কমান্ড দিয়ে এটাকে ইনস্টল করে নিবো প্রথমে।

যেহেতু আমরা `yarn` প্যাকেজ ম্যানেজার ব্যবহার করছি, সেহেতু আমাদের `package.json` এ আমরা নিচের লাইনটা অ্যাড করে দিবো।

```json
{
	"resolutions": {
		"styled-components": "^5"
	}
}
```

এটা কোনো ভার্সনজনিত প্রব্লেম হলে আমাদেরকে সাপোর্ট দিবে।

এরপর আমাদের `App.jsx` ফাইলে আমরা নিচের লাইন লিখে `styled components` কে ইমপোর্ট করে নিবো।

```jsx
import styled from 'styled-components';
```

ধরেন আমরা একটা বাটন স্টাইল করতে চাইছি। আপনি যদি `styled` লিখে `.` দেন দেখবেন সাজেশনে যতো ট্যাগ আছে সব দেখাবে। যেহেতু আমরা বাটন চাইছি তাই আমরা লিখবো `styled.button`। এরপর এটা যেহেতু ফাংশন সেহেতু আমরা `styled.button()` দিয়ে এর ভিতর আর্গুমেন্ট আকারে সিএসএস কোড লিখতে পারি। কিন্তু এভাবে লিখলে এটা মেইনটেইন করা একটু কষ্টসাধ্য হয়ে যাবে। তাই আমরা ওভাবে না লিখে ` styled.button``  ` এভাবে লিখতে পারি। ` `` ` এর মধ্যে আমরা আমাদের কোড লিখতে পারবো।

```jsx
styled.button`
	border: none;
	outline: none;
	background: black;
	color: white;
	font-size: 0.9rem;
	text-transform: uppercase;
	letter-spacing: 2px;
	padding: 0.5rem 1rem;
	cursor: pointer;
`;
```

এখন আমরা যে কম্পোনেন্ট তৈরি করলাম তাকে একটা ভ্যারিয়েবলের মধ্যে স্টোর করতে হবে। ভ্যারিয়েবলের নাম দেয়ার সময় খেয়াল রাখতে হবে, যেহেতু এটা একটা কম্পোনেন্ট সেহেতু এর নাম অবশ্যই অবশ্যই ক্যাপিটাল লেটার দিয়ে শুরু করতে হবে।

```jsx
const BaseButton = styled.button`
	border: none;
	outline: none;
	background: black;
	color: white;
	font-size: 0.9rem;
	text-transform: uppercase;
	letter-spacing: 2px;
	padding: 0.5rem 1rem;
	cursor: pointer;
`;
```

এবার যদি আমরা এই কম্পোনেন্ট দিয়ে একটা বাটন তৈরি করি তাহলে সেটা ব্রাউজারে শো করবে।

```jsx
const App = () => {
	return (
		<div>
			<h1>App</h1>
			<BaseButton>I am a button</BaseButton>
		</div>
	);
};
```

![l43-01.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1663999243774/nPW1weFA2.png)

### প্রপ্স পাস করা

আমরা চাইছি যদি কম্পোনেন্টের মধ্যে `dark` নামক প্রপ্স থাকে তাহলে ব্যাকগ্রাউন্ড হবে সাদা এবং টেক্সট কালার হবে কালো। আর যদি ডার্ক না থাকে তাহলে উল্টোটা হবে। সেটা আমরা কিভাবে করতে পারি দেখি।

```jsx
const BaseButton = styled.button`
	border: none;
	outline: none;
	background: ${(props) => (props.dark ? '#dddddd' : '#232323')};
	color: ${(props) => (props.dark ? '#232323' : '#dddddd')};
	font-size: 0.9rem;
	text-transform: uppercase;
	letter-spacing: 2px;
	padding: 0.5rem 1rem;
	cursor: pointer;
`;

const App = () => {
	return (
		<div>
			<h1>App</h1>
			<BaseButton dark>I am a button</BaseButton>
		</div>
	);
};
```

![l43-02.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1663999698176/kyIExwRZx.png)

দেখুন আমরা প্রপ্স পাস করার মাধ্যমে ডায়নামিক্যালি আমাদের সিএসএস কোড চেইঞ্জ করতে পারছি। এটাই styled components এর পাওয়ার।

এখানে `dark` লেখার মানে হলো `dark={true}` লেখা।

### Inheritence

এবার আমরা দেখবো যে আমাদের একটা বাটন বানাতে গেলে `BaseButton` এর কোন কোন প্রোপার্টিজ লাগবেই। সেগুলোকে আমরা শুধু `BaseButton` এর ভিতর রাখবো।

```jsx
const BaseButton = styled.button`
	border: none;
	outline: none;
	border-radius: 0.15rem;
	text-transform: uppercase;
	letter-spacing: 2px;
	padding: 0.5rem 1rem;
	cursor: pointer;
`;
```

এবার আমরা চাইছি একটা প্রাইমারি বাটন বানাতে এই `BaseButton` এর উপর ভিত্তি করে। সেটা কিভাবে চলুন দেখি।

```jsx
const PrimaryButton = styled(BaseButton)`
	background: red;
	color: white;
`;

const App = () => {
	return (
		<div>
			<h1>App</h1>
			<BaseButton dark>I am a button</BaseButton>
			<PrimaryButton>Primary Button</PrimaryButton>
		</div>
	);
};
```

![l43-03.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1664001181487/NwP8zVCb-.png)

এখানে আমরা `styled.button` এর পরিবর্তে `styled(BaseButton)` লিখেছি। কারণ আমরা `BaseButton` এর উপর ভিত্তি করে আমাদের `PrimaryButton` তৈরি করছি।

এবার আমরা চাই প্রপ্সের মাধ্যমে ফন্ট সাইজ চেঞ্জ করতে। সেটা কিভাবে করতে পারি চলুন দেখি।

```jsx
const fontSizes = {
	sm: '0.8rem',
	md: '1rem',
	lg: '1.2rem',
};

const BaseButton = styled.button`
	border: none;
	outline: none;
	border-radius: 0.15rem;
	text-transform: uppercase;
	letter-spacing: 2px;
	padding: 0.5rem 1rem;
	cursor: pointer;
	font-size: ${(props) => fontSizes[props.size] ?? fontSizes.md};
`;

const App = () => {
	return (
		<div>
			<h1>App</h1>
			<BaseButton size="sm">I am a button</BaseButton>
			<PrimaryButton>Primary Button</PrimaryButton>
		</div>
	);
};
```

![l43-04.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1664001909325/dCcMFD-cu.png)

বাটনে প্রপ্স আকারে যে ভ্যালু পাস করবো সেই অনুসারেই ফন্ট সাইজ চেইঞ্জ হবে।

## React Project Structure

এবার আমরা রিয়্যাক্ট প্রজেক্ট কিভাবে স্ট্রাকচার করতে হয় সে সম্পর্কে জানবো। তার জন্য আমরা একটা নতুন রিয়্যাক্ট প্রজেক্ট তৈরি করে নিলাম vite এর মাধ্যমে।

এরপর _src_ ফোল্ডারের মধ্যে শুধু `main.jsx` রেখে বাকি সব ডিলিট করে দিবো। এরপর নিচের মতো করে আমরা কিছু ডিরেক্টরি ক্রিয়েট করবো।

```
|- src
  |- main.jsx
  |- app
    |- App.jsx
    |- ...
  |- components
    |- UI
    |- shared
  |- pages
    |- ...
  |- states
    |- ...
  |- hooks
    |- ...
  |- api
    |- ...
  |- routers
    |- ...
  |- utils
    |- ...
  |- tests
    |- ...
```

- app: এই ডিরেক্টরিতে অ্যাপ্লিকেশন সম্পর্কিত রাউট, স্টেট যা যা আছে সব মেইনটেইন করা হবে। এই মুহূর্তে আমাদের লাগবে `App.jsx` এই ফাইলটি। সেটা আমরা তৈরি করে নিবো। এবং এই অ্যাপ ফাইলটাই আমরা আমাদের `main.jsx` ফাইলে ইমপোর্ট করবো।
- components: অনেক ধরণের কম্পোনেন্ট দরকার হবে। সেগুলো সব থাকবে এর মধ্যে।
  - UI: যেগুলো রিউজেবল UI কম্পোনেন্ট অর্থাৎ যেগুলো styled components দিয়ে বানানো সেগুলো থাকবে এই ফোল্ডারের মধ্যে।
  - shared: UI কম্পোনেন্ট ছাড়া অন্য যেসব কম্পোনেন্ট রিউজেবল হবে সেগুলো থাকবে এই ফোল্ডারের মধ্যে।
- pages: একটা অ্যাপ্লিকেশন অনেক পেইজ থাকতে পারে। যদি থাকে সেগুলো থাকবে সব এই ফোল্ডারের মধ্যে।
- states: গ্লোবাল স্টেট ম্যানেজ করা হবে এই ফোল্ডারে। এটা নিয়ে আমাদের কাজ করা হয়নি এখনও। তবে ভবিষ্যতে করবো।
- hooks: আমাদের অনেক হুক দরকার পড়বে। সেগুলো আমরা এই ফোল্ডারে ম্যানেজ করবো।
- api: আমাদের অনেক api নিয়ে কাজ করতে হতে পারে। সেগুলো আমরা এই ডিরেক্টরির মধ্যে করবো।
- routers: যেহেতু অনেকগুলো পেইজ থাকবে, সেহেতু অনেক রাউটার দরকার হবে। সেগুলো এই ফোল্ডারে ম্যানেজ করা হবে।
- utils: যতো ইউটিলিটিজ আছে সব থাকবে এই ফোল্ডারের মধ্যে।
- tests: টেস্টিং করার জন্য কোড এই ফোল্ডারে লেখা হবে।

মোটামুটি এটুকুই হলো রুট লেভেলের প্রজেক্ট স্ট্রাকচার।

এভাবেই যে প্রজেক্ট স্ট্রাকচার করতে হবে তেমন কোনো কথা নেই। নিজের মতো করে যেকোনোভাবে স্ট্রাকচার করা যাবে, যেন কোড সহজে মেইন্টেইন করা যায়।

## Working with form

আমরা এবার ফর্ম নিয়ে কাজ করবো। ফর্ম নিয়ে কাজ করতে গেলে কিছু UI কম্পোনেন্ট লাগবে। যেমন - বাটন, ইনপুট, লেভেল, টেক্সট। সেগুলোই আমরা বানিয়ে নিবো।

### TextInput component

আমরা _src/components/inputs_ এর মধ্যে `TextInput.jsx` নামে একটা ফাইল তৈরি করে নিলাম। এরপর `styled components` ইনস্টল করে নিলাম।

```jsx
// src/components/inputs/TextInput.jsx

import styled from 'styled-components';

const TextInput = styled.input`
	width: 100%;
	border: 1px solid #232323;
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

export default TextInput;
```

এবার যদি আমরা আমাদের `App.jsx` ফাইলে এই কম্পোনেন্ট ইমপোর্ট করে কল করি তাহলে দেখবো আমাদের অ্যাপ্লিকেশনে একটা ইনপুট ফিল্ড যুক্ত হয়ে গেছে।

```jsx
// src/app/App.jsx

import TextInput from '../components/UI/inputs/TextInput';

const App = () => {
	return (
		<div>
			<h1>Working with Form</h1>
			<TextInput />
		</div>
	);
};

export default App;
```

### Button component

এবার আমরা _src/components/buttons/_ এর মধ্যে `Button.jsx` নামে একটা ফাইল তৈরি করে নিলাম।

```jsx
// src/components/buttons/Button.jsx

import styled from 'styled-components';

const Button = styled.button`
	border: none;
	outline: none;
	background: #e1e1e1;
	color: #333;
	border-radius: 0.15rem;
	padding: 0.25rem 1rem;
	font-size: 0.9rem;
	font-family: Arial;
	font-weight: 500;
	letter-spacing: 0.1rem;
	text-transform: uppercase;
	cursor: pointer;
	&:hover {
		background: #ccc;
	}
`;

export default Button;
```

এটাকে আমরা `App.jsx` ইমপোর্ট করে কল করলে দেখবো একটা বাটন যুক্ত হয়ে গেছে।

```jsx
// src/app/App.jsx

import Button from '../components/UI/buttons/Button';
import TextInput from '../components/UI/inputs/TextInput';

const App = () => {
	return (
		<div>
			<h1>Working with Form</h1>
			<TextInput />
			<Button>Test Me</Button>
		</div>
	);
};

export default App;
```

### Text components

_src/components/texts/Text.jsx_ এর মধ্যে আমরা নিচের কোড লিখবো।

```jsx
import styled from 'styled-components';

const fontSizes = {
	sm: '0.8rem',
	md: '1rem',
	lg: '1.1rem',
};

const lineHeights = {
	sm: 1.2,
	md: 1.4,
	lg: 1.6,
};

const Text = styled.p`
	font-family: Arial;
	font-size: ${(props) => fontSizes[props.size] ?? '1rem'};
	color: #222;
	line-height: ${(props) => lineHeights[props.line] ?? 1.3};
`;

export default Text;
```

### Label Component

_src/components/UI/inputs_ এর মধ্যে `Label.jsx` নামে একটা ফাইল ক্রিয়েট করে আমরা নিচের কোডটা লিখবো।

```jsx
import styled from 'styled-components';

const fontSizes = {
	sm: '0.8rem',
	md: '1rem',
	lg: '1.1rem',
};

const lineHeights = {
	sm: 1.2,
	md: 1.4,
	lg: 1.6,
};

const Label = styled.label`
	font-family: Arial;
	font-size: ${(props) => fontSizes[props.size] ?? '1rem'};
	color: #222;
	line-height: ${(props) => lineHeights[props.line] ?? 1.3};
	user-select: none;
`;

export default Label;
```

### InputGroup Component

এতক্ষণ পর্যন্ত আমরা শুধু বিভিন্ন ট্যাগের কম্পোনেন্ট বানিয়েছিলাম। সেই এলিমেন্টগুলো ব্যবহার করে এবার আমরা একটা কম্পোনেন্ট বানাবো। এবার আমরা _src/components/shared/forms_ এর মধ্যে `InputGroup.jsx` নামে একটা ফাইল ক্রিয়েট করলাম। এখানে আমাদের `label` এবং `input` এই দুইটা ফিল্ড পাশাপাশি থাকবে সুন্দরভাবে।

```jsx
import styled from 'styled-components';
import TextInput from '../../UI/inputs/TextInput';
import Label from '../../UI/inputs/Label';

const Container = styled.div`
	width: 100%;
	padding: 1rem;
	border: 1px solid #e1e1e1;
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
`;

const ErrorMessage = styled.div`
	font-size: 0.8rem;
	color: red;
`;

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
			/>
			{error && <ErrorMessage>{error}</ErrorMessage>}
		</Container>
	);
};

export default InputGroup;
```

এবার আমরা এই কম্পোনেন্টকে আমাদের `App.jsx` এ ইমপোর্ট করে ব্যবহার করতে পারবো।

## main.css

আমরা src ফোল্ডারের মধ্যে main.css ফাইল ক্রিয়েট করে এর মধ্যে নিচের কোডগুলো রাখবো।

```css
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
* {
	box-sizing: border-box;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
	display: block;
}
body {
	line-height: 1;
	font-family: Arial, Helvetica, sans-serif;
	font-size: 16px;
}
ol,
ul {
	list-style: none;
}
blockquote,
q {
	quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

.root {
	padding: 2rem;
}
```

এভাবে আমরা কখনও লিখবো না। এই অ্যাপ্লিকেশন একটু ভালভাবে দৃশ্যমান হওয়ার জন্য এই রিসেট সিএসএস ব্যবহার করা হয়েছে এখানে। এরপর এই ফাইলটাকে `main.jsx` এ ইমপোর্ট করে নিবো। সেই সাথে `App.jsx` এ মাইন `div` এর মধ্যে `root` ক্লাসকে দিয়ে দিবো।

```jsx
// src/app/App.jsx

import InputGroup from '../components/shared/forms/InputGroup';

const App = () => {
	return (
		<div className="root">
			<InputGroup
				name="title"
				placeholder={'Enter Your Title'}
				label={'Title'}
				error={'Something went wrong'}
			/>
		</div>
	);
};

export default App;
```

আমাদের অ্যাপ্লিকেশন দেখতে নিচের মতো হবে।

![l43-05.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1664011114622/ysViyH5RC.png)

## Story Book Design Systems

আমরা একটা কম্পোনেন্ট তৈরি করে বারবার `App.jsx` এ এসে ইমপোর্ট করে যে টেস্ট করছি এটা কোনো সিস্টেম না। ডেভেলপাররা এটার জন্য একটা টুল ব্যবহার করে। সেটা হলো [Story Book](https://storybook.js.org/tutorials/design-systems-for-developers/)। এটা নিয়ে আমরা পরবর্তীতে কাজ করবো।

## Design System

বড় বড় কোম্পানিগুলো সাধারণত নিজেদের ডিজাইন সিস্টেম নিজেরাই রিসার্চ করে করে তৈরি করে। উদাহরণস্বরূপ মাইক্রোসফটের ডিজাইন সিস্টেম হলো [Fluent](https://www.microsoft.com/design/fluent/), গুগলের ডিজাইন সিস্টেম হলো [Material](https://material.io/design), আইবিএম এর ডিজাইন সিস্টেম হলো [Carbon](https://carbondesignsystem.com/)। এরকমই বড় বড় কোম্পানিগুলো তাদের নিজস্ব ডিজাইন সিস্টেম তৈরি করে রেখেছে। একজন ফ্রন্টএন্ড ডেভেলপার হিসেবে ডিজাইন সিস্টেম সম্পর্কে জানা আমাদের দায়িত্বের মধ্যে পড়ে। এগুলো সব ওপেন সোর্স। এছাড়াও আরো আছে। নিজেরা রিসার্চ করে করে দেখবেন কোন সিস্টেমটা কেমন, কি কি কালার সিলেক্ট করেছে, ফন্ট কি কি ব্যবহার করেছে ইত্যাদি।

## Source Codes

আজকের সোর্স কোড লিংকগুলো হলো -

- [Styled Component basics](https://github.com/mrhm-dev/full-stack-army/tree/master/src/lecture-43/react-style)
- [React Project Structure](https://github.com/mrhm-dev/full-stack-army/tree/master/src/lecture-43/react-structure)
