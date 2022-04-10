# Lecture 5 - Array Operations - Imperative vs Declarative

### Today’s Agenda:

- Array Operations

  - Imperative traverse

    ```jsx
    const numbers = [2, 5, 6, 7, 89, 100];

    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
    	// console.log(numbers[i] * 2);
    	sum += numbers[i];
    }
    console.log(sum);
    ```

    ```jsx
    const arr = [1, 2, 3, null, false, 4, 5, '', 'test', 6, 7];

    let count = 0;
    for (let i = 0; i < arr.length; i++) {
    	for (let j = i; j < arr.length - 1; j++) {
    		if (!arr[j] || typeof arr[j] !== 'number') {
    			arr[j] = arr[j + 1];
    			arr[j + 1] = undefined;
    		}
    	}
    	if (arr[i] === undefined) {
    		count++;
    	}
    }

    arr.length -= count;
    console.log(count, arr);

    // arr = [1, false, true, '', 2, 3]
    // val = 1, j = 1
    // val = 1, j = false
    // val = 1, j = true
    // val = 1, j = ''
    // val = 1, j = 2
    // val = 1, j = 3
    // 1, true, '', 2, 3, undefined
    // val = true, j = true
    // val = true, j = ''
    // val = true, j = 2
    // val = true, j = 3
    // 1, '', 2, 3, undefined, undefined
    // val = '',
    // 1, 2, 3, undefined, undefined, undefined
    ```

  - Declarative traverse

    ```jsx
    const numbers = [2, 5, 6, 7, 89, 100];

    let sum = 0;
    numbers.forEach(function (value, index) {
    	if (index <= 3) {
    		sum += value;
    	}
    });

    console.log(sum);
    ```

    ```jsx
    const arr = [1, 2, 3, null, false, 4, 5, '', 'test', 6, 7];

    /* const filteredArray = arr.filter((val) => typeof val === 'number');
    console.log(filteredArray); */

    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
    	if (typeof arr[i] === 'number') {
    		newArr.push(arr[i]);
    	}
    }
    console.log(newArr);
    ```

  - Update

    ```jsx
    const arr = [
    	{ id: 1, value: 10 },
    	{ id: 2, value: 20 },
    	{ id: 3, value: 30 },
    	{ id: 4, value: 40 },
    	{ id: 5, value: 50 },
    ];

    const obj2 = arr[2];
    obj2.value = 300;

    /* const index = arr.findIndex(function (val) {
    	return val.id === 4;
    });
    
    arr[index].value = 400;
    
    console.log(arr); */

    const obj = arr.find(function (val) {
    	return val.id === 4;
    });

    obj.value = 400;
    console.log(obj);
    console.log(arr);

    console.log(arr[3] === obj);

    const a = { a: 10 };
    const b = { a: 10 };
    const c = a;
    console.log(a === c);
    ```

  - Delete

    ```jsx
    const arr = [
    	{ id: 1, value: 10 },
    	{ id: 2, value: 20 },
    	{ id: 3, value: 30 },
    	{ id: 4, value: 40 },
    	{ id: 5, value: 50 },
    ];

    // splice -> mutable
    const index = arr.findIndex((item) => item.id === 4);
    const arr1 = arr.splice(index, 1);
    console.log(arr);

    // filter -> immutable
    const arr2 = arr.filter((item) => item.id !== 4);
    console.log(arr);
    console.log(arr2);
    ```

  - Mutation
  - Map
  - Filter
  - Reduce
  - Deep copy vs Shallow copy

- Object Deep Dive

  - Object Operations

    ```jsx
    // Object Literal
    const microphone = {
    	brand: 'Fifine',
    	indictor: true,
    	price: 8000,
    	color: 'Black',
    	startRecording() {
    		console.log('recording started');
    	},
    	stopRecording() {
    		console.log('recording stopped');
    	},
    };
    /* Object.freeze(microphone);
    microphone.newProperty = 'my new property';
    console.log(microphone); */

    // console.log(Object.keys(microphone));
    // console.log(Object.values(microphone));

    /**
     * There are two different parts in object
     * 1. Noun / Adjective (State/data/property/field)
     * 2. Verb (functionalities -> start, stop)
     */

    // Constructor function
    // const testObj = new Object();
    // testObj.name = 'Test Object';
    // testObj.time = new Date();
    // console.log(testObj);

    /* for (let k in microphone) {
    	console.log(k, microphone[k]);
    } */

    // dot notation microphone.brand
    // array notation microphone['brand']

    const empty = {};
    console.log(Object.keys(empty).length === 0);
    console.log(Object.entries(microphone));
    const arr = [
    	['brand', 'Fifine'],
    	['indictor', true],
    	['price', 8000],
    	['color', 'Black'],
    ];

    console.log(Object.fromEntries(arr));
    ```

  - Function vs Method
  - Brief discussion on Prototype

- Object as a Data Structure
  - Array Operations
  - Object Over Array
- Multi Dimensional Array

### Important Links:

- [Make Fun Of Javascript Array](https://www.youtube.com/playlist?list=PL_XxuZqN0xVDr08QgQHljCecWtA4jBLnS)

### Task:

- How can we use object as a data structure? যে কাজগুলো আমরা array ব্যবহার করে করতে পারি সেগুলো কিভাবে object দিয়ে করতে পারি?
