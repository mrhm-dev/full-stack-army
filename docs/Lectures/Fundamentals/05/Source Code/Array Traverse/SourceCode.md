<details>
  <summary>declarativeWay.js</summary>
  <p>This is Source Code Of object.js </p> 
  
```javascript
const numbers = [1, 2, 3, 4, 5];

// sum of array elements
sum = 0;
numbers.forEach((element) => {
  sum += element;
});
console.log(sum);


const cb = () => {
    console.log('Hello')
}
numbers.forEach(cb)
// Hello
// Hello
// Hello
// Hello
// Hello


numbers.forEach(function (value, index, arr) {
    // console.log(arguments)
    console.log(value, index, arr)
})
// [Arguments] { '0': 1, '1': 0, '2': [ 1, 2, 3, 4, 5 ] }
// [Arguments] { '0': 2, '1': 1, '2': [ 1, 2, 3, 4, 5 ] }
// [Arguments] { '0': 3, '1': 2, '2': [ 1, 2, 3, 4, 5 ] }
// [Arguments] { '0': 4, '1': 3, '2': [ 1, 2, 3, 4, 5 ] }
// [Arguments] { '0': 5, '1': 4, '2': [ 1, 2, 3, 4, 5 ] }


numbers.forEach(function (value, _, __) {
    if(value % 2 === 0){
        console.log(value)
    }
})

sum = 0;
numbers.forEach(function (v) {
    sum += v
})

console.log(sum)


```

</details>


<details>
  <summary>imperativeWay.js</summary>
  <p>This is Source Code Of object.js </p> 
  
```javascript

const numbers = [1, 2, 3, 4, 5];

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

```

</details>