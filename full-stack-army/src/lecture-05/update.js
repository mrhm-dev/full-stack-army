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