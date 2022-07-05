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