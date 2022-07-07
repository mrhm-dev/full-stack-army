<details>
  <summary>arr.js</summary>
  <p>This is Source Code Of arr.js </p>


```javascript
const arr = [1, 2, 3, null, false, 4, 5, "", "test", 6, 7];

let count = 0;
for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length - 1; j++) {
        if (!arr[j] || typeof arr[j] !== "number") {
            arr[j] = arr[j + 1];
            arr[j + 1] = undefined;
        }
    }
    if (arr[i] === undefined) {
        count++;
    }
}
arr.length -= count;
console.log(arr);

// explanation
// arr = [1, false, true, '', 2, 3]
// i = 1, j = 3
// 1, true, '', 2, 3, undefined
// i = true, j = 3
// 1, '', 2, 3, undefined, undefined
// i = '', j = 3
// 1, 2, 3, undefined, undefined, undefined

// [1, 2, 3]


// shortcut
const filteredArray = arr.filter((v) => typeof v === 'number')

console.log(filteredArray);


// using new array
const newArr = []
for(let i = 0; i < arr.length; i++){
    if(typeof arr[i] === 'number'){
        newArr.push(arr[i])
    }
}
console.log(newArr);


// calculate fibonnacci number
function fib(n){
    if(n == 0 || n == 1) return n;
    return fib(n - 1) + fib(n - 2)
}

console.log(fib(10));
```

</details>





<details>
  <summary>delete.js</summary>
  <p>This is Source Code Of delete.js </p> 


```javascript


const arr = [
  {
    id: 1,
    value: 10,
  },
  {
    id: 2,
    value: 20,
  },
  {
    id: 3,
    value: 30,
  },
  {
    id: 4,
    value: 40,
  },
  {
    id: 5,
    value: 50,
  },
];


// splice ==> mutable
// const index = arr.findIndex(item => {
//     item.id === 4
// })
// const arr1 = arr.splice(index, 1)
// console.log(arr);


// filter ==> immutable
const arr2 = arr.filter(item => {
    return item.id !== 4
})
console.log(arr);
console.log(arr2);

```

</details>




<details>
  <summary>object.js</summary>
  <p>This is Source Code Of object.js </p> 
  
```javascript

// object literal
const microphone = {
    brand: 'Fantech',
    indicator: true,
    price: 3400,
    color: 'white',

    // methods
    startRecording() {
        console.log('Recording started');
    },
    stopRecording() {
        console.log('Recording stopped');
    }
}

/**
 * There are two different parts in object
 * 1. Noun / Adjective (State/data/property/field)
 * 2. Verb / (functionalities -> start, stop)
 */

microphone.startRecording()
microphone.stopRecording()
console.log(microphone);
console.log(Object);


// constructor function
const testObj = new Object()
testObj.name = 'Test Object'
testObj.time = new Date()
console.log(testObj);
console.log(testObj.time.getDate());

// object k freeze kore dey
// new property add korte dey na
Object.freeze(microphone)
microphone.newProperty = 'hi'
console.log(microphone);



// get key and value
console.log(Object.keys(microphone));
console.log(Object.values(microphone));
// [
//     'brand',
//     'indicator',
//     'price',
//     'color',
//     'startRecording',
//     'stopRecording'
// ]
// [
//     'Fantech',
//     true,
//     3400,
//     'white',
//     [Function: startRecording],
//     [Function: stopRecording]
// ]


// concat function
console.log('micro'.concat('phone'));
console.log('micro' + 'phone');



// notation
// dot notation -> microphone.brand
// array notation -> microphone[k]
for(let k in microphone){
    console.log(k, microphone[k]);
}
// brand Fantech
// indicator true
// price 3400
// color white
// startRecording [Function: startRecording]
// stopRecording [Function: stopRecording]



// check is a object is empty or not
const empty ={}
if(Object.keys(empty).length === 0){
    console.log('This object is empty');
}


// object to key value pair
console.log(Object.entries(microphone));
const array = [
    [ 'brand', 'Fantech' ],
    [ 'indicator', true ],
    [ 'price', 3400 ],
    [ 'color', 'white' ]
]
console.log(Object.fromEntries(array));
// { brand: 'Fantech', indicator: true, price: 3400, color: 'white' }

```

</details>



<details>
  <summary>update.js</summary>
  <p>This is Source Code Of update.js </p> 
  
```javascript
const arr = [
  {
    id: 1,
    value: 10,
  },
  {
    id: 2,
    value: 20,
  },
  {
    id: 3,
    value: 30,
  },
  {
    id: 4,
    value: 40,
  },
  {
    id: 5,
    value: 50,
  },
];

// arr.findIndex  ==> not mutable
// const index = arr.findIndex(v => {
//     return v.id === 4;
// })

// console.log(index);
// console.log(arr);
// arr[index].value = 100
// console.log(arr);



// arr.find ==> mutable
const obj = arr.find((v) => {
  return v.id === 4;
});
obj.value = 100;
console.log(obj);
console.log(arr);



const obj2 = arr[2]
obj2.value = 300
console.log(obj);
console.log(arr);
```

</details>
