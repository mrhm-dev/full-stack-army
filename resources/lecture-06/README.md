# Lecture 6 - JavaScript Array and Object Deep Dive

### Today’s Agenda:

- Array Operations

  - Map
    ```jsx
    const numbers = [1, 2, 3, 4];
    const strs = numbers.map((v) => v.toString());
    console.log(strs);
    ```
  - Filter
    ```jsx
    const numbers = [1, 2, 3, 4, false, '', NaN, 5, 6];
    const filteredArr = numbers.filter((v) => v);
    console.log(filteredArr);
    ```
  - Reduce

    ```jsx
    const numbers = [1, 2, 3, 4, 5, 6];
    const sum = numbers.reduce((a, b) => a + b);
    console.log(sum);

    /**
     * Map -> [same length as the original array]
     * Filter -> [with filtered item]
     * Reduce -> No one knows.(Only you know) all possible value
     */

    // we want this -> '1234falseNaN56'
    const result = numbers.reduce((acc, cur, i) => {
    	if (i === 0) {
    		acc += '[';
    	}
    	if (cur) {
    		acc += cur.toString() + (i < numbers.length - 1 ? ', ' : '');
    	}
    	if (i === numbers.length - 1) {
    		acc += ']';
    	}
    	return acc;
    }, '');
    console.log(result);

    // const result = numbers.reduce((acc, cur) => {
    // 	if (cur) {
    // 		acc.push(cur.toString());
    // 	}
    // 	return acc;
    // }, []);
    // console.log(result);
    ```

    ```jsx
    const axios = require('axios').default;
    const url = 'https://jsonplaceholder.typicode.com/posts';

    async function getData() {
    	const { data } = await axios.get(url);
    	// const result = data.slice(0, 10).map((item) => {
    	// 	return {
    	// 		userId: item.userId,
    	// 		id: item.id,
    	// 		title: item.title,
    	// 	};
    	// });
    	const result = data.slice(0, 10).reduce((acc, cur) => {
    		acc[cur.id] = {
    			...cur,
    		};
    		delete acc[cur.id].body;
    		return acc;
    	}, {});
    	return result;
    }

    getData()
    	.then((data) => console.log(data))
    	.catch((e) => console.log(e));
    ```

    ```jsx
    const names = [
    	'Ayman',
    	'Abu Rayhan',
    	'Anik',
    	'Elias Emon',
    	'Engr. Sabbir',
    	'Fahim Faisal',
    	'Feroz Khan',
    	'Habib',
    	'HM Azizul',
    	'Hridoy Saha',
    	'Jahid Hassan',
    	'Johir',
    	'Md Al-Amin',
    	'Md Arafatul',
    	'Md Ashraful',
    	'Parvez',
    ];

    // const namesGroup = {
    // 	A: ['Ayman', 'Abu Rayhan', 'Anik'],
    // 	E: ['Elias Emon', 'Engr. Sabbir'],
    // 	F: ['Fahim Faisal', 'Feroz Khan'],
    // };

    const namesGrouped = names.reduce((acc, cur) => {
    	const firstLetter = cur[0].toUpperCase();
    	if (firstLetter in acc) {
    		acc[firstLetter].push(cur);
    	} else {
    		acc[firstLetter] = [cur];
    	}
    	return acc;
    }, {});

    Object.keys(namesGrouped).forEach((groupKey) => {
    	console.log('-----------', groupKey, '-----------');
    	namesGrouped[groupKey].forEach((name) => console.log(name));
    	console.log();
    });
    ```

- Object as a Data Structure

  - Array Operations

    ```jsx
    /**
     * Store 10 students information
     * - name
     * - email
     * - id
     */

    /**
     *
     * a utility to create a random id
     */

    function uuidv4() {
    	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    		const r = (Math.random() * 16) | 0;
    		const v = c == 'x' ? r : (r & 0x3) | 0x8;
    		return v.toString(16);
    	});
    }

    const students = [
    	{
    		id: '67de71e5-0eac-474f-ab51-850ba9b31ed5',
    		name: 'Md Al-Amin',
    		email: 'alamin@test.com',
    	},
    	{
    		id: 'ebdf6b78-c32b-4b1d-8574-e8c655b05c1e',
    		name: 'Akib Ahmed',
    		email: 'akib@test.com',
    	},
    	{
    		id: 'ee729e84-a84e-4adf-b32c-4647a7114d5b',
    		name: 'Elias Emon',
    		email: 'elias@test.com',
    	},
    ];

    /**
     * 1. Easily Traverse
     * 2. Filter
     * 3. Delete (medium) [splice -> O(n), filter -> O(n)]
     * 4. Update (medium) (easy) [push -> O(n)]
     * 5. Create a new one (easy task) [push -> O(1), unshift -> O(n)]
     */

    // create a new students
    students.push({
    	id: uuidv4(),
    	name: 'Fahim Faisal',
    	email: 'fahim@test.com',
    });

    // update
    const idToUpdate = 'ee729e84-a84e-4adf-b32c-4647a7114d5b';
    const updatedData = {
    	name: 'Habiba Akhtar',
    	// email: 'habiba@test.com',
    };

    const updatedIndex = students.findIndex((item) => item.id === idToUpdate);
    students[updatedIndex] = {
    	...students[updatedIndex],
    	...updatedData,
    };
    console.log('Updated', students);

    // Delete
    students.splice(updatedIndex, 1);

    console.log('Deleted', students);

    // forEach, map, filter, every, reduce, some, find, findIndex -> traversing method

    for (let i = 0; i < students.length; i++) {
    	console.log(students[i].name);
    }

    for (let i in students) {
    	console.log(students[i].name);
    }

    for (let student of students) {
    	console.log(student.name);
    }
    ```

  - Object Over Array

    ```jsx
    /**
     * Store 10 students information
     * - name
     * - email
     * - id
     */

    /**
     *
     * a utility to create a random id
     */

    function uuidv4() {
    	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    		const r = (Math.random() * 16) | 0;
    		const v = c == 'x' ? r : (r & 0x3) | 0x8;
    		return v.toString(16);
    	});
    }

    const students = {
    	'67de71e5-0eac-474f-ab51-850ba9b31ed5': {
    		id: '67de71e5-0eac-474f-ab51-850ba9b31ed5',
    		name: 'Md Al-Amin',
    		email: 'alamin@test.com',
    	},
    	'ebdf6b78-c32b-4b1d-8574-e8c655b05c1e': {
    		id: 'ebdf6b78-c32b-4b1d-8574-e8c655b05c1e',
    		name: 'Akib Ahmed',
    		email: 'akib@test.com',
    	},
    	'ee729e84-a84e-4adf-b32c-4647a7114d5b': {
    		id: 'ee729e84-a84e-4adf-b32c-4647a7114d5b',
    		name: 'Elias Emon',
    		email: 'elias@test.com',
    	},
    };

    /**
     * 1. Easily Traverse [O(n)]
     * 1.1 Get anything if you have the key [O(1)]
     * 2. Filter
     * 3. Delete (medium) [O(1)]
     * 4. Update (medium) [O(1)]
     * 5. Create a new one (easy task) [O(1)]
     */

    // create
    const std = {
    	id: uuidv4(),
    	name: 'Feroz Khan',
    	email: 'feroz@test.com',
    };

    students[std.id] = std;

    // update
    const idToBeUpdated = 'ee729e84-a84e-4adf-b32c-4647a7114d5b';
    const updatedData = {
    	name: 'HM Azizul',
    	email: 'azizul@test.com',
    };
    students[idToBeUpdated] = {
    	...students[idToBeUpdated],
    	...updatedData,
    };

    // delete
    // delete students[idToBeUpdated];

    // Get
    // console.log(students['67de71e5-0eac-474f-ab51-850ba9b31ed5']);

    // Traverse

    // for (let key in students) {
    // 	console.log(students[key]);
    // }

    Object.values(students).forEach((student) => {
    	console.log(student.name, student.email);
    });
    ```

### Which is performance enhancer? Object or Array?

```jsx
const arr = [];
const arrToObj = {};
for (let i = 0; i < 5000000; i++) {
	const o = {
		id: i,
		value: i,
	};
	arr.push(o);
	arrToObj[i] = o;
}

console.time('array');
let id = 4999999;
const obj = arr.find((item) => item.id === id);
obj.value = 555;
console.timeEnd('array'); // 104.901ms

console.time('obj');
arrToObj[id].value = 999;
console.timeEnd('obj'); // 0.019ms

console.time('array');
arr.unshift({
	id: 5000000,
	value: 5000000,
});
console.timeEnd('array'); // 15.084ms

console.time('obj');
arrToObj[5000000] = {
	id: 5000000,
	value: 5000000,
};
console.timeEnd('obj'); // 0.018ms

console.time('array');
const index = arr.findIndex((item) => item.id === 4000000);
arr.splice(index, 1);
console.timeEnd('array'); // 93.135ms

console.time('obj');
delete arrToObj[4000000];
console.timeEnd('obj'); // 0.015ms
```

### Check Truthy value
```js
let arr = [1,2,3,null,undefined,0,NaN,4,5];
let truthy = arr.filter((v) => v);
// As a default, v will return truthy values.
console.log(truthy); // [1,2,3,4,5]

// However, if we simply need truthful values and don't want to utilize the default method, we can just put (!! double exclamation) before the array property, It will return only truthy values as well.

let arr = [1,2,3,null,undefined,0,NaN,4,5];
let truthy = arr.filter((v) => !!v);
console.log(truthy); // [1,2,3,4,5]

```


### Performance check for map, filter, reduce

```jsx
const arr = [];
for (let i = 1; i < 5000000; i++) {
	arr.push(i);
}

console.time('not-optimized');
arr.filter((item) => item % 2 === 0).map((item) => item * 2);
console.timeEnd('not-optimized'); // 562.423ms

console.time('optimized');
arr.reduce((acc, cur) => {
	if (cur % 2 === 0) {
		acc.push(cur * 2);
	}
	return acc;
}, []);
console.timeEnd('optimized'); // 238.3ms
```

### Implementation of reduce function

```jsx
function myReduce(arr, cb, init) {
	let acc = init;
	for (let i = 0; i < arr.length; i++) {
		acc = cb(acc, arr[i], i, arr);
	}
	return acc;
}

const sum = myReduce([1, 2, 3, 4], (a, b) => a + b, 0);
console.log(sum);

const arr = [1, 2, '', false, 3, NaN, false, 4, 5, NaN, 6];
const result = myReduce(
	arr,
	(acc, cur) => {
		if (cur) {
			acc.push(cur ** 2);
		}
		return acc;
	},
	[]
);
console.log(result);
```

### Important Links:

- [JSONPlaceholder](https://jsonplaceholder.typicode.com/)

### Task:

- How to sort data from object?
