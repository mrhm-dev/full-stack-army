# Lecture 4 - Programming Fundamentals using JavaScript

## Programming Fundamentals

<details>
  <summary>Variables</summary>
  <p>Variables helps us to make thing dynamic.</p>

```javascript
const names = [
	'HM Nayeem',
	'Aditya Chakraborty',
	'Abu Rayhan',
	'Shaker Hossain',
	'Akib Ahmad',
	'Alvi Chowdhury',
];
let index = -1;
let person = names[++index];

setInterval(() => {
	person = names[index++];
	console.log(person, person.length);

	if (index === names.length) {
		index = 0;
	}
}, 1000);
```

</details>

<details>
  <summary>Operators</summary>
  <p>Mathematical representations</p>
</details>

<details>
  <summary>Conditions</summary>
  <p>Brain of a computer</p>

```javascript
if (studyBasic) {
	wontJoin();
}

if (studyAdvanced) {
	join();
}

if (teacherSpeaks) {
	silent();
}

if (!teacherSpeaks) {
	shout();
}

// Scenario 1 - Single branch
// if condition
if (hasMoney) {
	buyPhone();
}

// Scenario 2 - Two branches
// if else condition
if (toss === 'head') {
	win();
} else {
	loss();
}

// Scenario 3 - Multiple branches
// else if
if (1 > 1) {
	big();
} else if (1 < 1) {
	small();
} else {
	same();
}
```

</details>

<details>
  <summary>Loops</summary>

```javascript
for (let i = 1; i <= 100; i++) {
	// it's a new js file,
	// we can write any valid js code here
	// every code written inside this block will execute multiple times
	console.log('Hello world!', i);
}

// There are total three types of loop available in JS
// 1. for (When we know the range)
// 1.1 Range
// 1.2 for in
// 1.3 for of
// 2. while (When we don't know the range)
// 3. do while *

while (true) {
	let num = Math.ceil(Math.random() * 100);
	console.log('Hello World', num);
	if (num === 99) break;
}

do {
	console.log('It will run at least once');
} while (false);
```

</details>

<details>
  <summary>Arrays</summary>

```javascript
const name1 = 'Rayhan';
const name2 = 'Alvi';
const name3 = 'Anik';
const name4 = 'Arjun';
const name5 = 'Ayman';

const students = [
	'Rayhan',
	'Alvi',
	'Anik',
	'Arjun',
	'Ayman',
	'Ayuub',
	'Bidyut',
];

// console.log(students[0]);
// console.log(students[1]);
// console.log(students[2]);
// console.log(students[3]);
// console.log(students[4]);

for (let i = 0; i < students.length; i++) {
	console.log(students[i], students[i].toLowerCase());
}

// name1.sendEmail();
// name2.sendEmail();
// name3.sendEmail();
// name4.sendEmail();
// name5.sendEmail();

const nums = [1, 2, 3, 4, 5, 6];
const bools = [true, true, false, false];
const nulls = [null, null, null];
const undefineds = [undefined, undefined, undefined];
const arrayOfArray = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
];
const mixed = [true, null, 'Str', 5, [12, 2, 4]];
```

</details>

<details>
  <summary>Objects</summary>

```javascript
const student1 = {
	firstName: 'Abu',
	secondName: 'Rayhan',
	email: 'rayhan@example.com',
	age: 25,
	attend: true,
};

const student2 = {
	firstName: 'Alvi',
	secondName: 'Chowdhury',
	email: 'alvi@example.com',
	age: 25,
	attend: true,
};

const student3 = {
	firstName: 'Akib',
	secondName: 'Ahmad',
	email: 'akib@example.com',
	age: 25,
	attend: true,
};

const allStudents = [student1, student2, student3];

for (let i = 0; i < allStudents.length; i++) {
	sendMail(allStudents[i].email);
}

function sendMail(email) {
	console.log('Sending email to', email);
}
```

</details>

<details>
  <summary>Functions</summary>

```javascript
function nameOfFunction(name) {
	if (!name) {
		console.log('Please provide your name');
	} else {
		console.log('Hello', name);
	}
}

nameOfFunction('Murshed');
nameOfFunction('Fahim');
nameOfFunction();

function generateRandomNumber(min = 1, max) {
	const randomNumber = Math.floor(Math.random() * min + (max - min));
	return randomNumber;
}

console.log(generateRandomNumber(5, 10));
```

</details>

<details>
  <summary>Expression vs Statement</summary>
</details>

###### Important Links

- Blog site - [Hashnode](https://hashnode.com/)
