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

// console.log(Object.keys(microphone));
// console.log(Object.values(microphone));

// for (let k in microphone) {
// 	console.log(k, microphone[k]);
// }

// Object.freeze(microphone);
// microphone.newProperty = 'New Property';
// console.log(microphone);

// const testObj = new Object();
// testObj.name = 'Test Object';
// testObj.time = new Date();
// console.log(testObj);

// const empty = {};
// console.log(Object.keys(empty).length === 0);

// console.log(Object.entries(microphone));

const arr = [
	['brand', 'Fifine'],
	['indictor', true],
	['price', 8000],
	['color', 'Black'],
];

console.log(Object.fromEntries(arr));
