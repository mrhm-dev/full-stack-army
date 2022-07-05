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
