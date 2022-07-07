## Lecture 8 - Understand JavaScript Functions | Function as a value

আজ আমাদের আলোচ্য বিষয় হলো ফাংশন। জাভাস্ক্রিপ্টে আমরা যতটা না অবজেক্ট অরিয়েন্টেড প্রোগ্রামিং নিয়ে কাজ করবো তার চেয়ে বেশি কাজ করবো ফাংশনাল প্রোগ্রামিং নিয়ে। বিভিন্ন প্রোগ্রামিং ল্যাঙ্গুয়েজে এখন ফাংশনাল প্রোগ্রামিং নিয়ে কাজ হচ্ছে। প্রতিটা ল্যাঙ্গুয়েজ এখন ফাংশনাল প্রোগ্রামিং এর গুরুত্বটা বুঝেছে। তবে সবার আগে আমাদের জানতে হবে এর গুরুত্ব। ফাংশনাল প্রোগ্রামিং আসলে কি? ফাংশনাল প্রোগ্রামিং কেন গুরুত্বপূর্ন? যদি এটা আমরা বুঝতে পারি, তবে অনেক বড় একটা অধ্যায় আমাদের সামনে উন্মুক্ত হবে। তবে এতসব বোঝার আগে আমাদের বুঝতে হবে ফাংশন কি? কারণ আমরা অনেকেই ফাংশনের অতো গভীরে গিয়ে বুঝি না। আর বুঝলেও জাভাস্ক্রিপ্টের মতো করে বুঝি না।

জাভাস্ক্রিপ্ট মোটেও একটা ফাংশনাল প্রোগ্রামিং ল্যাঙ্গুয়েজ নয়। জাভাস্ক্রিপ্টে ফাংশনাল প্রোগ্রামিং করা গেলেও এটা একটা ইমপিওর ফাংশনাল প্রোগ্রামিং। পিওর এবং ইমপিওর ফাংশনাল প্রোগ্রামিং ল্যাঙ্গুয়েজ নিয়ে ইতোপূর্বে লেকচার ২ এ আলোচনা করা হয়েছে। আপনারা যারা ক্লিয়ার না তারা এই [লেকচার](../Fundamentals/02.We%20Need%20Freedom,%20We%20have%20to%20Stop%20Technology%20War/We%20Need%20Freedom.md) দেখে আসতে পারেন।


## Function

ফাংশন হচ্ছে একটা মেশিন। আমরা একটা ফাইল ক্রিয়েট করে যে যে কোড করে একটা কাজ করতে পারি, সেই কাজ আমরা ফাংশনের মাধ্যমেও করতে পারি। ফাংশন আমরা মূলত একটা কাজ রিপিট করার উদ্দেশ্যে ব্যবহার করা হয়। যদি রিপিটের উদ্দেশ্যেই ব্যবহার করা হয় তাহলে লুপ কেন নয়? লুপও তো আমরা রিপিট করার জন্যই ব্যবহার করি। আমরা ফাংশন ব্যবহার করি কারণ ফাংশন আমাদের কন্ট্রোল দেয়। আমরা চাইলে যেকোনো জায়গায় আমাদের প্রয়োজনমতো লুপ ব্যবহার করতে পারি না। কারণ এক জায়গায় লুপ ব্যবহার করলে সে চলতেই থাকবে। লুপের ক্ষেত্রে আমরা শুধু কখন শুরু করতে হবে, কখন থামতে হবে আর কখন স্কিপ করে যেতে হবে তা কন্ট্রোল করতে পারি। কিন্তু ফাংশনের বেলায় আমরা যেখানে যত খুশি যেভাবে খুশি সেভাবেই ব্যবহার করতে পারি।

আমরা বিগিনাররা যখন প্রব্লেম সলভ করতে যাই তখন বুঝতে পারি না কখন ফাংশন নিতে হবে। আমরা দেখা যায় একটা ফাংশনের মধ্যে সব লিখে বসে থাকি। আমরা ফাংশনকে মেশিন বলে মনে না করে রোবট মনে করি। এক একটা ফাংশন এক একটা হেলপার রোবট যারা ছোট ছোট কাজ করার জন্য তৈরি হয়েছে। তাহলে যেখানেই কাজ করার প্রশ্ন উঠবে সেখানেই ফাংশন লিখতে হবে। যেমন আমরা আমাদের প্রাত্যহিক রুটিনটা একটু ভাবি। যেমন আমরা সকালে ঘুম থেকে উঠি, এরপর ওয়াশরুমে গিয়ে ফ্রেশ হই, ব্রেকফাস্ট করি, স্কুল / কলেজ / অফিসে যায়, ওখান থেকে ফিরি, ডিনার করি, শেষে ঘুমাই। একটু যদি আমরা পয়েন্ট ধরে ধরে দেখি তাহলে এমন দেখাবে।

```txt
== Daily Routine ==
awake from sleep
go to washroom
take breakfast
go to school/college/office
Return from office
Take dinner
Go to sleep
```

এবার আমরা ধরলাম মিজান নামের একজনের জন্য এই কাজগুলো হবে। তাহলে মিজান সাহেবের জন্য আমরা কোডগুলো যদি প্রসিডিওরাল ওয়েতে লিখি তাহলে তা হবে এরকম।

```txt
'Mizan', awake from sleep
'Mizan', go to washroom
'Mizan', take breakfast
'Mizan', go to school/college/office
'Mizan', Return from office
'Mizan', Take dinner
'Mizan', Go to sleep
```

এবার এই একই কাজ আকিব সাহেবের জন্যও লিখতে হবে। আমরা আকিব সাহেবের জন্যও লিখে ফেললাম।

```txt
'Akib', awake from sleep
'Akib', go to washroom
'Akib', take breakfast
'Akib', go to school/college/office
'Akib', Return from office
'Akib', Take dinner
'Akib', Go to sleep
```

আবার এই একই কাজ ফাহিম সাহেবের জন্যও খাটে। তবে তিনি বাসায় বসে কাজ করেন। তাহলে অফিসে যাওয়া বা আসার কোনো ব্যাপার নেই এখানে।

```txt
'Fahim', awake from sleep
'Fahim', go to washroom
'Fahim', take breakfast
'Fahim', work from home
'Fahim', Take dinner
'Fahim', Go to sleep
```

এই কাজ আবার জাভেদ সাহেবের জন্যও সত্যি। তিনি স্কুল, কলেজ, অফিস কোথাও যান না। তিনি শুধু ঘরে বসে পড়েন।

```txt
'Javed', awake from sleep
'Javed', go to washroom
'Javed', take breakfast
'Javed', Study
'Javed', Take dinner
'Javed', Go to sleep
```

এখন এরকম যতজনের জন্য আসবে সবার জন্য আমাদের আলাদা আলাদা ভাবে সকল কোড পুনরায় লিখতে হবে। যদি আমরা এমন একটা টেমপ্লেট বানিয়ে রাখতে পারি যেখানে সব একই থাকবে শুধু নামটা চেইঞ্জ হবে তাহলে আমাদের জন্য সময়, শক্তি, অর্থ সব অনেকটা বেঁচে যায়। ধরুন আমরা একটা ফাংশন বানিয়ে নিলাম। কিভাবে বানাবো চলুন দেখি।

```js
/**
 * * Name: Human_Lifecycle
 * * Param: human_name
 * * :human_name, awake from sleep
 * * :human_name, go to washroom
 * * :human_name, take breakfast
 * * :human_name, go to school/college/office
 * * :human_name, Return from office
 * * :human_name, Take dinner
 * * :human_name", Go to sleep
 */
```

এখানে আমরা আমাদের ফাংশনের নাম দিলাম Human_Lifecycle এবং প্যারামিটার হিসেবে নিলাম human_name। এবার আমরা পূর্বে যেখানে যেখানে নাম দিয়েছিলাম সেখানে সরাসরি নাম না বসিয়ে প্যারামিটারটা বসিয়ে দিলাম। এবার এই ফাংশনটা আমরা যতজনের জন্য খুশি ততজনের জন্যই কল করতে পারবো জাস্ট এক লাইনের কোড লিখে।

```js
// Call Human_Lifecycle for 'Abu Musa'
// Call Human_Lifecycle for 'Easin Islam'
// Call Human_Lifecycle for 'Saiful Islam'
// Call Human_Lifecycle for 'Akib Ahmed'
// Call Human_Lifecycle for 'Alamin Mir'
```

এবার দেখুন আমরা সবার জন্যই একই কাজ করছি কিন্তু আগের চেয়ে কম সময়ে কম কোড লিখে।

কিন্তু এখন আরেকটা প্রব্লেম দেখা দিয়েছে। যেমন সবাই কিন্তু সব কাজ করে না। যেমন কেউ হয়তো অফিসে যায়, কেউ ঘরে বসে কাজ করে, কেউ কাজই করে না শুধু পড়ে। সেক্ষেত্রে এই ফাংশনটা সবার জন্য খাটবে না। আবার এখানে প্রতিটা কাজই আলাদা। কোনো কাজের সাথে কোনো কাজের সম্পর্ক নেই। আর প্রতিটা কাজ কিভাবে হবে তাও বলার দরকার আছে। যেমন ঘুমাতে যাওয়ার সাথে ওয়াশরুমে যাওয়ার কোনো সম্পর্ক নেই। আমি না ঘুমিয়েও ওয়াশরুমে যেতে পারি। আবার ডিনারের সাথেও ঘুমাতে যাওয়ার সম্পর্ক নেই। আমার আজ খিদা নেই আমি আজ না খেয়ে ঘুমালাম এমনও হতে পারে। তাহলে এখানে প্রতিটা কাজের জন্য আলাদা আলাদা ফাংশন তৈরি করে রেখে যার যে কাজ সেই কাজের ফাংশন কল করে দিলেই হয়ে গেলো। তাহলে আমরা ফাংশন উপরের মতো করে লিখবো না। আমরা লিখবো এভাবেঃ

আমরা প্রথমে sleep এর জন্য একটা ফাংশন তৈরি করি।

```js
/**
 * Function: Sleep
 * Param: name
 * Definition: How to sleep
 */
```

এখানে আমরা ফাংশনের নাম নিলাম Sleep। প্যারামিটার হিসেবে নিলাম name। মানে কে ঘুমাচ্ছে। আর ডেফিনিশিন হলো কিভাবে ঘুমাচ্ছে।

```js
/**
 * Function: Awake
 * Param: name
 * Definition: How to awake
 */
```

এখানে আমরা জেগে উঠার একটা ফাংশন তৈরি করলাম আগের মতোই।

```js
/**
 * Function: Eat
 * Param: name
 * Param: Time
 * Definition: How to eat
 */
```

এখানে আমরা খাওয়ার ফাংশন তৈরি করলাম। প্যারামিটার হিসেবে name এর সাথে time ও নিলাম। কারণ সে সকালের খাবার খাচ্ছে, নাকি দুপুরের খাবার খাচ্ছে নাকি রাতে খাবার খাচ্ছে সেটা এই প্যারামিটার দিয়ে আমরা বুঝবো।

```js
/**
 * Function: Go_To
 * Param: name
 * Param: Destination
 * Param: Transport_system
 * Definition: How to walk
 */
```

এরপর ধরলাম সে স্কুল, কলেজ বা অফিসে যাবে। সেটার জন্য একটা ফাংশন বানালাম। এখানে কে যাচ্ছে, কোথায় যাচ্ছে এবং কিভাবে যাচ্ছে, সে কি হেঁটে যাচ্ছে, বাসে যাচ্ছে, নিজের গাড়িতে যাচ্ছে এই তিনটা প্যারামিটার হিসেবে নিলাম।

```js
/**
 * Function: Work
 * Param: name
 * Definition: How to work
 */
```

এরপর কেউ ঘরে বসেও কাজ করতে পারে, অফিসে বসেও কাজ করতে পারে। কিন্তু কাজই করছে। সেক্ষেত্রে আমরা Work নামের একটা ফাংশন নিলাম।

```js
/**
 * Function: Study
 * Param: name
 * Definition: How to study
 */
```

Work এর মতো আমরা Study নামেও একটা ফাংশন নিলাম।

এবার আমরা তিনটা ফাংশন তৈরি করবো। একটা যারা জব হোল্ডার তাদের জন্য, একটা ছাত্রছাত্রীদের জন্য, আরেকটা যারা রিমোট জব করেন তাদের জন্য।

```js
/**
 * Function: Job_Holder_Lifecycle
 * Param: name
 * Param: Transport_system
 * Definition:
 * - Awake -> name
 * - Eat -> name, 'breakfast'
 * - Go_To -> name, 'office', Transport_system
 * - Work -> name
 * - Eat -> name, 'lunch'
 * - Go_To -> name, 'home', Transport_system
 * - Eat -> name, 'dinner'
 * - Sleep -> name
 */

/**
 * Function: Student_Lifecycle
 * Param: name
 * Param: Transport_system
 * Definition:
 * - Awake -> name
 * - Eat -> name, 'breakfast'
 * - Go_To -> name, 'institution', Transport_system
 * - Study -> name
 * - Eat -> name, 'lunch'
 * - Go_To -> name, 'home', Transport_system
 * - Eat -> name, 'dinner'
 * - Sleep -> name
 */

/**
 * Function: Remote_Workers_Lifecycle
 * Param: name
 * Definition:
 * - Awake -> name
 * - Eat -> name, 'breakfast'
 * - Work -> name
 * - Eat -> name, 'lunch'
 * - Work -> name
 * - Eat -> name, 'dinner'
 * - Sleep -> name
 */
```

আশা করি খুব সুন্দরভাবেই সবার মাথায় ঢুকে গেছে এখানে কি করেছি আমরা। একটা জায়গায় হয়তো কনফিউশন হচ্ছে, আমরা name, transport_system এখনও প্যারামিটার হিসেবে নিচ্ছি কিন্তু অন্য গুলো স্ট্যাটিকভাবে কেন নিচ্ছি? কারণ ধরেন breakfast, সে ঐ টাইমে ব্রেকফাস্টই করবে। সকালে সে কিন্তু lunch করবে না। তাই এটা আমরা স্ট্যাটিকভাবে ব্যবহার করেছি। কিন্তু আমরা জানিনা কার জন্য আমরা এটা ব্যবহার করবো, আর সে কিসে করে যাবে, তাই আমরা এখানে এখনও এই দুইটা প্যারামিটার হিসেবে রেখেছি। এবার আমরা ফাংশনগুলো কল করে দেখি।

```js
// Students_Lifecycle -> 'Faruk'
// Students_Lifecycle -> 'Elias'
// Students_Lifecycle -> 'Faisal'

// Job_Holder_Lifecycle -> 'Musa'
// Job_Holder_Lifecycle -> 'Akib'

// Remote_Workers_Lifecycle -> 'Bipon'
```

আমরা যার জন্য যেমন ফাংশন দরকার সেটা খুব সুন্দরভাবে কল করতে পারলাম। তাহলে প্রতিটা কাজের বিপরীতে কিভাবে ফাংশন তৈরি করতে হবে এবং কি কি বিষয় মাথায় রাখতে হবে তার ছোটখাট একটা আইডিয়া আমরা পেয়ে গেলাম।

প্রথমে আমরা জাভাস্ক্রিপ্তে ফাংশন কিভাবে লিখতে হবে তার একটা স্ট্রাকচার দেখি।

```js
function name_of_the_function(/** Input something  */) {
	// Function body
	// any valid js code
	// return a result
}
```

এটা হচ্ছে ফাংশনের বেসিক স্ট্রাকচার। প্রথম `function` কীওয়ার্ড লিখবো। এরপরের ফাংশনের একটা নাম দিবো। এরপর আমরা () দিবো যার মধ্যে আমরা আমাদের প্যারামিটারগুলো দিবো। Param হিসেবে যেগুলো লিখেছিলাম সুডোকোডে সেগুলো। এরপর {} এর মধ্যে যা লিখবো সেটা হচ্ছে আমার ফাংশন বডি। ফাংশন বডির মধ্যে আমরা যেকোনো ভ্যালিড জাভাস্ক্রিপ্ট কোড লিখতে পারি। আর সবার শেষে ফাংশন কিছু না কিছু রিটার্ন করবে। কিছু রিটার্ন না করলেও `undefined` রিটার্ন করবে। এই স্ট্রাকচার ছাড়া আরো তিনভাবে ফাংশন স্ট্রাকচার লেখা যায়। ডিটেইলস আমরা দেখবো না। আমরা শুধু স্ট্রাকচারগুলো দেখি। একটা হলো Anonymous Function. মানে যে ফাংশনের কোনো নাম নেই।

```js
function (/** Input something  */) {
	// Function body
	// any valid js code
	// return a result
}
```

আরেকটা হলো ফাংশন এক্সপ্রেশন হিসেবে একটা ভ্যারিয়েবলের মধ্যে রেখে লেখা। যেমনঃ

```js
const name_of_the_function = function (/** Input something  */) {
	// Function body
	// any valid js code
	// return a result
};
```

আরেকটা হলো যেটা জাভাস্ক্রিপ্ট ES6 এ এসেছে, অ্যারো ফাংশন।

```js
const name_of_the_function = (/** Input something  */) => {
	// Function body
	// any valid js code
	// return a result
};
```

আমরা আপাতত আমাদের বেসিক স্ট্রাকচারটাই ব্যবহার করবো। এখন ফাংশনের দুইটা স্টেপ আছে।

1. Define a function
2. Invoke a function

আমরা প্রথমে দেখি কিভাবে ফাংশন ডিফাইন করতে হবে।

```js
function testFunction() {
	const a = 10;
	const b = 20;
	const result = a + b + Math.max(a, b);
	console.log(result);
}
```

এটা গেলো ফাংশন ডিফাইন। এবার দেখি কিভাবে ফাংশন call বা invoke করতে হবে।

```js
testFunction(); // 50
```

কিন্তু এই সিস্টেমের সমস্যা আছে একটা। যেমন যতবার এই ফাংশন কল হবে ততবারই এটা একই আউটপুট দিবে। আমি চাইলে আমার মনমতো ভ্যালু বাইরে থেকে এই ফাংশনে দিতে পারবো না। আবার ফাংশন বডির কোনো ডাটাও আমরা বাইরে থেকে এক্সেস পাবো না। ফাংশনের মধ্যে যে ভ্যারিয়েবল থাকে সেগুলো হলো লোকাল ভ্যারিয়েবল, ফাংশনের বাইরে হলে সেটা গ্লোবাল ভ্যারিয়েবল। সেটা নিয়ে আমরা পরবর্তীতে আলোচনা করবো। আমরা ফাংশনের ভিতরে যে ভ্যারিয়েবল নিয়েছি সেগুলো যদি () এর মধ্যে লিখি সেগুলোকে বলবো প্যারামিটার। এখন প্যারামিটার হিসেবে যা নিবো সেগুলো আমরা বাইরে থেকে ইনপুট দিতে পারবো। নিচের কোড দেখলে আরো ক্লিয়ার হবেঃ

```js
function testFunction(a = 10, b = 20) {
	const result = a + b + Math.max(a, b);
	console.log(result);
}

testFunction(); // 50
testFunction(100, 200); // 500
```

এখানে ফাংশন কল করার সময় আমরা যে ভ্যালুগুলো দিয়েছি সেগুলো আর্গুমেন্ট। আর প্যারামিটার হলো ফাংশন ডিফাইন করার সময় () এর মধ্যে যা দিবো। এখানে যদি কোনো আর্গুমেন্ট না দিই তাহলে সেটা যে ডিফল্ট ভ্যালু দেয়া আছে তা ধরে নিবে। আর যদি আর্গুমেন্ট দিই তাহলে সেগুলো নিবে। আমরা কোনো ডিফল্ট ভ্যালু নাও দিতে পারি। সেটা সম্পূর্ণ আমাদের ইচ্ছা। আশা করি ফাংশন, ফাংশন বডি, ফাংশন ডিফাইন, ফাংশন কল সম্পর্কে ধারণা ক্লিয়ার হয়েছে। এবার আমরা জাভাস্ক্রিপ্টে কিভাবে আমাদের ফাংশনের সুডোকোডগুলো কোডে রূপান্তরিত করতে পারবো তা দেখা যাক।

```js
/**
 * Function: Sleep
 * Param: name
 * Definition: How to sleep
 */

function sleep(name) {
	console.log(`${name} is sleeping`);
}

/**
 * Function: Awake
 * Param: name
 * Definition: How to awake
 */

function awake(name) {
	console.log(`${name} is awake`);
}

/**
 * Function: Eat
 * Param: name
 * Param: Time
 * Definition: How to eat
 */

function eat(name, time) {
	console.log(`${name} is taking ${time}`);
}

/**
 * Function: Go_To
 * Param: name
 * Param: Destination
 * Param: Transport_system
 * Definition: How to walk
 */

function goTo(name, destination, transport) {
	console.log(`${name} is going to ${destination} by ${transport}`);
}

/**
 * Function: Work
 * Param: name
 * Definition: How to work
 */

function work(name) {
	console.log(`${name} is working`);
}

/**
 * Function: Study
 * Param: name
 * Definition: How to study
 */

function study(name) {
	console.log(`${name} is studying`);
}

/**
 * Function: Job_Holder_Lifecycle
 * Param: name
 * Param: Transport_system
 * Definition:
 * - Awake -> name
 * - Eat -> name, 'breakfast'
 * - Go_To -> name, 'office', Transport_system
 * - Work -> name
 * - Eat -> name, 'lunch'
 * - Go_To -> name, 'home', Transport_system
 * - Eat -> name, 'dinner'
 * - Sleep -> name
 */

function jobHolderLifecycle(name, transport) {
	awake(name);
	eat(name, 'breakfast');
	goTo(name, 'office', transport);
	work(name);
	eat(name, 'lunch');
	goTo(name, 'home', transport);
	eat(name, 'dinner');
	sleep(name);
}

/**
 * Function: Student_Lifecycle
 * Param: name
 * Param: Transport_system
 * Definition:
 * - Awake -> name
 * - Eat -> name, 'breakfast'
 * - Go_To -> name, 'institution', Transport_system
 * - Study -> name
 * - Eat -> name, 'lunch'
 * - Go_To -> name, 'home', Transport_system
 * - Eat -> name, 'dinner'
 * - Sleep -> name
 */

function studentLifecycle(name, transport) {
	awake(name);
	eat(name, 'breakfast');
	goTo(name, 'institution', transport);
	work(name);
	eat(name, 'lunch');
	goTo(name, 'home', transport);
	eat(name, 'dinner');
	sleep(name);
}

/**
 * Function: Remote_Workers_Lifecycle
 * Param: name
 * Definition:
 * - Awake -> name
 * - Eat -> name, 'breakfast'
 * - Work -> name
 * - Eat -> name, 'lunch'
 * - Work -> name
 * - Eat -> name, 'dinner'
 * - Sleep -> name
 */

function remoteWorkersLifecycle(name) {
	awake(name);
	eat(name, 'breakfast');
	work(name);
	eat(name, 'lunch');
	work(name);
	eat(name, 'dinner');
	sleep(name);
}

console.log('Jobholders Lifecycle');
console.log('**********************');
jobHolderLifecycle('Shayed Hasan', 'bus');
console.log('-----------------------');
jobHolderLifecycle('Sh Pabel', 'bus');
console.log('-----------------------');
jobHolderLifecycle('Tarikul Islam', 'bus');
console.log('-----------------------');

console.log('Remote Workers Lifecycle');
console.log('**********************');
remoteWorkersLifecycle('Nahian Sikder');
console.log('-----------------------');
remoteWorkersLifecycle('Mizan Rahman');
console.log('-----------------------');

console.log('Students Lifecycle');
console.log('**********************');
studentsLifecycle('Faruk', 'rickshaw');
console.log('--------------------');
studentsLifecycle('Elias', 'rickshaw');
console.log('--------------------');
studentsLifecycle('Faisal', 'rickshaw');
console.log('--------------------');
```

আশা করি সবাই বুঝতে পেরেছেন ফাংশন সম্পর্কে। এভাবেই আমরা ক্ষুদ্র ক্ষুদ্র কাজকে ফাংশন বানিয়ে নিয়ে আমাদের প্রয়োজনমতো যেকোনো জায়গায় ব্যবহার করতে পারলাম। সব কোড বারবার লিখতে হলো না।

## Function composition

রিটার্ন নিয়ে সবাই একটু কনফিজড থাকে। কখন আমরা ফাংশনে রিটার্ন ব্যবহার করবো, কেন রিটার্ন করবো এসব নিয়ে। এটা আমরা বুঝতে পারবো যে টার্ম দিয়ে সেটা হলো function composition. কথাটা শুনে অনেকেরই ভয় লাগতে পারে এটা আবার কি? কিন্তু এটা আসলে নাইন টেনের গণিত। আমরা যখন ফাংশনের ম্যাথ করার সময় ব্যবহার করতাম f(g(x)), এর মানে হলো আমাদের কাছে একটা ফাংশন আছে g, যার মধ্যে x দিলে তা কোনো না কোনো রেজাল্ট রিটার্ন করবে যেটা আমরা ইউজ করবো f ফাংশনের মধ্যে। মানে কোনো ফাংশন থেকে যে রেজাল্ট আমরা পাবো সেটা অন্য আরেকটা ফাংশনে ইউজ করা, একেই বলে ফাংশন কম্পোজিশন। এই চেহার দিয়ে বুঝাটা একটু কঠিন। আমরা ছোট ছোট কয়েকটা ফাংশন বানিয়ে ফেলি বুঝার সুবিধার্থে।

```js
function sum(a, b) {
	console.log(a + b);
}

function subtract(a, b) {
	console.log(a - b);
}

function times(a, b) {
	console.log(a * b);
}

sum(10, 20); // 30
sub(10, 20); // -10
times(10, 20); // 200
```

এরা আমাকে সুন্দরভাবে রেজাল্ট দিচ্ছে। এখানে কোনো প্রব্লেম নেই। প্রব্লেমটা শুরু হবে নিচের কোডটাতে।

```js
function sum(a, b) {
	console.log(a + b);
}

function subtract(a, b) {
	console.log(a - b);
}

function times(a, b) {
	console.log(a * b);
}

const a = 10;
const b = 20;

const r1 = sum(a, b); // 30
console.log('R1', r1); // 'R1' undefined
const r2 = subtract(a, b); // -10
console.log('R2', r2); // 'R2' undefined
const r = times(r1, r2); // NaN
console.log(r); // undefined
```

এখানে এমন রেজাল্ট আসলো কেন? যখন আমরা কোনো ফাংশনের রেজাল্ট কোনো ভ্যারিয়েবলে স্টোর করে রাখতে চাইবো, তখন অবশ্যই ঐ ফাংশনকে কিছু না কিছু রিটার্ন করতে হবে। এখানে আমাদের ফাংশন কিছুই রিটার্ন করছে। console.log() কিছুই রিটার্ন করে না। তাহলে যদি কিছু রিটার্ন না করে তাহলে এখানে undefined আসলো কোথা থেকে? আমাদের মনে রাখতে হবে জাভাস্ক্রিপ্ট ফাংশনে আমরা যদি বলে না দিই কি রিটার্ন করতে হবে তাহলে তা বাই ডিফল্ট undefined রিটার্ন করবে। সুতরাং আমাদের r1 ভ্যারিয়েবলে স্টোর হলো undefined, r2 তে স্টোর হলো undefined। এখন যদি undefined এর সাথে undefined গুণ করি তাহলে রেজাল্ট আসবে NaN, কারণ দুইটার কোনোটাই নাম্বার না। আর যেহেতু times() ও কিছু রিটার্ন করেনি তাই r এ স্টোর হলো undefined. এই সমস্যা থেকে মুক্তি পেতে হলে আমাদের console.log() এর পরিবর্তে ব্যবহার করতে হবে return। মনে রাখতে হবে যখনই আমাদের কোনো ফাংশনের রেজাল্ট কোথাও স্টোর করার প্রয়োজন হবে বা কোথাও ব্যবহার করার প্রয়োজন হবে তখন অবশ্যই অবশ্যই return ব্যবহার করতে হবে। আমরা একটু return দিয়ে দেখি।

```js
function sum(a, b) {
	return a + b;
}

function subtract(a, b) {
	return a - b;
}

function times(a, b) {
	return a * b;
}

const a = 10;
const b = 20;

const r1 = sum(a, b);
console.log('R1', r1); // 'R1' 30
const r2 = subtract(a, b);
console.log('R2', r2); // 'R1' -10
const r = times(r1, r2);
console.log(r); // -300
```

আমরা এতো ভ্যারিয়েবল না নিয়ে এভাবেও লিখতে পারি।

```js
const r = Math.abs(times(sum(a, b), subtract(a, b)));
console.log(r); // 300
```

Math.abs() ব্যবহার করা হয়েছে রেজাল্ট পজিটিভ আনার জন্য। আমরা যদি Math.abs() = f(), times() = g(), sum(a, b) = x, sub(a, b) = y ধরি তাহলে চেহারাটা দাঁড়ায় f(g(x, y))। এটাই function composition। ছোটবেলার ম্যাথমেটিক্স। আশা করি আপনারা বুঝতে পেরেছেন।

এতক্ষণ পর্যন্ত আমরা যা যা শিখেছি তা হলোঃ

- Function definition
- Function Invoking
- Function Parameters/Arguments
- Return result from function

ফাংশন সম্পর্কে মোটামুটি আমরা জেনেছি। এবার আমরা যাবো ফাংশনাল প্রোগ্রামিং এ।

## Functional as a value

জাভাস্ক্রিপ্টে ফাংশনাল প্রোগ্রামিং জিনিসটা কি যদি প্রশ্ন করা হয় তাহলে এক কথায় বলতে হয়, 'Function is a first class citizen'. এখন এই `first class citizen` বলতে কী বুঝানো হয়েছে? সে কি খুব বড় মাপের কিছু? ব্যাপারটা মোটেও সেরকম নয়। কোনো প্রোগ্রামিং ল্যাঙ্গুয়েজকে ফাংশনাল প্রোগ্রামিং ল্যাঙ্গুয়েজ রূপে অধিষ্ঠিত হতে হলে তাকে যে শর্ত পূরণ করতে হয় তা হলো, 'We can treat function as value'। যদি ফাংশনকে আমরা ভ্যালু হিসেবে ট্রিট করতে পারি কোনো ল্যাঙ্গুয়েজে, তাহলে সেই ল্যাঙ্গুয়েজকে আমরা ফাংশনাল প্রোগ্রামিং ল্যাঙ্গুয়েজ হিসেবে বলতে পারি। ভ্যালু বলতে যেমন `10`, `'test'`, `true` এসব ভ্যালুকে আমরা যেভাবে ট্রিট করতে পারি ফাংশনকেও আমরা সেভাবে ট্রিট করতে পারবো ফাংশনাল প্রোগ্রামিং এ। যদি পারি তাহলে সেই ফাংশন সেই ল্যাঙ্গুয়েজের first class citizen. এখন এটা হওয়ার সুবিধা কি কি?

- we can store functions in a variable
- we can store function inside an object / array
- we can pass function as an argument
- we can also return a function from another function

যারা OOP থেকে এসেছেন তাদের কাছে ফাংশনাল প্রোগ্রামিং একটা ইউজলেস বলে মনে হতে পারে। কিন্তু যতোই দিন যাবে আপনি এর প্রেমে পড়ে যাবেন। এর সবথেকে বড় সুবিধা হলো OOP তে প্রোগ্রামিং করতে হয় ইম্পেরেটিভ ওয়েতে। মানে শুরু থেকে শেষ সব কোড লিখতে হয়। কিন্তু ফাংশনাল প্রোগ্রামিং এ করতে হয় ডিক্লারেটিভ ওয়েতে। তার মানে অনেক বিজনেস লজিক আমার জানার প্রয়োজনই নেই। শুধু যতটুকু প্রয়োজন ততটুকু জানলেই চলছে। দ্বিতীয় আরেকতা বড় সুবিধা হলো, OOP তে প্রোগ্রামিং করা অনেক এক্সপেন্সিভ। এক্সপেন্সিভ বলতে আপনাকে টাকা দিয়ে কিনতে হবে ব্যাপারটা এমন না। এর মানে হলো এখানে প্রচুর মেমোরি ইউজ হবে, অনেক টাইম কমপ্লেক্সিটি আসবে। সেখানে ফাংশন অনেক হালকা। যেমন ReactJS যখন প্রথম এসেছিলো তখন তারা ক্লাস বেইজড ছিল। কিন্তু পরে দেখলো এতে পারফরম্যান্স ঠিকমতো অপটিমাইজড হচ্ছে না। আর ডেভেলপাররাও অনেক ইস্যু ফেইস করছেন। তখন তারা চলে গেলো ফাংশনাল প্রোগ্রামিং এ। এটা অনেক লাইটওয়েট, সহজে শেখা যায়, সহজে ব্যবহার করা যায় এবং সহজে মেইনটেইন করা যায়, পারফরম্যান্সও ভাল। তৃতীয় আরেকটা বিষয় হলো OOP তে আমরা যেহেতু অবজেক্টের প্রোপার্টি এবং মেথড দিয়ে দিচ্ছি, সেখানে বারবার সেই মেথডকেই আমরা আপডেট করছি। তার মানে এটা মিউটেবল। কিছু কিছু ক্ষেত্রে মিউটেবল উপকারী, কিছু কিছু ক্ষেত্রে খুবই জঘন্য। কিন্তু ফাংশনাল প্রোগ্রামিং সবসময় ইমমিউটেবল। যদিও আমরা মিউটেবিলিটি নিয়ে কাজ করতে পারি। কিন্তু বেশির ভাগ ক্ষেত্রেই আমরা ইমমিউটেবলের জন্যই এটা ব্যবহার করবো। এবার আমরা যে যে বেনিফিটের কথা বলেছিলাম তা একে একে বুঝবো। এবং প্রমাণ করবো ফাংশন একটা ভ্যালু।

```js
function testFunction() {
	console.log('I am a test function');
}

const fn = testFunction;
console.log(fn);
fn(); // I am a test function
```

প্রথমে আমরা একটা ফাংশন ডিফাইন করলাম। এটা কিছু রিটার্ন করছে না। তাই যদি আমরা ভ্যারিয়েবলে স্টোর করার সময় testFunction এর শেষে () দিই তাহলে তা undefined রিটার্ন করবে। কিন্তু আমি চাইছি ফাংশনটা স্টোর করার জন্য, তার রেজাল্ট না। তাই আমাদের () ছাড়া শুধু testFunction লিখতে হবে। এখন যদি আমরা testFunction এর জায়গায় fn কে কল করি তাহলে রেজাল্ট আসবে 'I am a test function'। তাহলে আমরা ফাংশনকে ভ্যালু হিসেবে ভ্যারিয়েবলে স্টোর করতে পারছি।

এবার যেহেতু ভ্যারিয়েবলে স্টোর করতে পেরেছি সেহেতু অবজেক্ট বা অ্যারের মধ্যেও আমরা স্টোর করতে পারবো।

```js
const arr = [fn, testFunction];
const obj = {
	fn: testFunction,
};
```

আমরা ফাংশনকে আর্গুমেন্ট হিসেবেও পাস করতে পারবো।

```js
function fnArgument(fn) {
	return fn();
}
fnArgument(testFunction);
```

এমনকি আমরা এক ফাংশন থেকে অন্য আরেকটা ফাংশনকেও রিটার্ন করতে পারি।

```jsx
function returnFn() {
	return testFunction;
}
```

তাহলে দেখলাম ফাংশনকে ভ্যালু হিসেবে সব কাজই করা যায়। কিন্তু আমরা যেমন new Object(), new Array() এভাবে লিখে অবজেক্ট এবং অ্যারে ডিফাইন করতে পারতাম, যদি new Function() লিখে ফাংশন বানাতে না পারি তাহলে আমরা কেন মানবো এটা যে ফাংশন? কারণ জাভাস্ক্রিপ্টে প্রতিটা ভ্যালু তৈরি করার জন্য একটা কনস্ট্রাক্টর আছে। আসুন এবার তাহলে আমরা ফাংশন কন্সট্রাক্ট করি।

## Function Construction

ফাংশন কনস্ট্রাকশন বুঝার আগে আমরা একটু আগে নিচের ফাংশনটা দেখি।

```js
function strToObj(str) {
	let obj = {};
	for (let s of str) {
		if (s !== ' ') {
			obj[s] = s;
		}
	}
	return obj;
}
console.log(strToObj('HM Nayem')); // { H: 'H', M: 'M', N: 'N', a: 'a', y: 'y', e: 'e', m: 'm' }
```

এবার এই ফাংশনকে আমরা কন্সট্রাক্টরের মাধ্যমে বানাবো।

```js
const fn = new Function(
	'str',
	`let obj = {};
	for (let s of str) {
		if (s !== ' ') {
			obj[s] = s;
		}
	}
	return obj;`
);

console.log(fn('HM Nayem')); // { H: 'H', M: 'M', N: 'N', a: 'a', y: 'y', e: 'e', m: 'm' }
```

আগের ফাংশনে যেভাবে কাজ করেছে ঠিক একই কাজ করছে কনস্ট্রাক্টর দিয়ে ফাংশন বানানোর পর। new Function() এ আর্গুমেন্ট আকারে যা খুশি তা যতো খুশি ততো দেয়া যাবে। কিন্তু মনে রাখতে হবে শেষ আর্গুমেন্ট হতে হবে অবশ্যই ফাংশন বডি অর্থাৎ {} এর মধ্যে যা থাকবে তা। আমরা এখানে প্রথ আর্গুমেন্ট হিসেবে ব্যবহার করেছি আমাদের ফাংশন প্যারামিটার, আর সেকেন্ড আর্গুমেন্ট হিসেবে দিয়েছি ফাংশন বডি। প্রোগ্রাম রান করলে দেখা যাচ্ছে একই আউটপুট দিচ্ছে তা। তাহলে আমরা কনস্ট্রাক্টর ব্যবহার করে ফাংশন তৈরি করতে পারছি। তাহলে ফাংশনকে first class citizen বলাতে আর কোনো বাধা থাকলো না। এটা একটা বড় সুবিধা প্রদান করে মেটা প্রোগ্রামিং এর ক্ষেত্রে।

মেটা প্রোগ্রামিং একটা দারুণ কনসেপ্ট। এর সুবিধা হচ্ছে আপনি ডায়নামিকভাবে রানটাইমে নতুন নতুন কোড জেনারেট করতে পারবেন। আপনার মতো করে আপনি সিনট্যাক্স তৈরি করতে পারবেন। আপনার জাভাস্ক্রিপ্টে কোনো সিনট্যাক্স ভাল লাগছে না? আপনি আপনার নিজের সিনট্যাক্স তৈরি করতে পারবেন। ধরেন জাভাস্ক্রিপ্টে অ্যারে ডিফাইন করা হয় এভাবে `const arr = []`. আপনি এভাবে চাইছেন না। আপনি চাইছেন ডাটা টাইপসহ আপনি ডিফাইন করে দিবেন ঠিক এইভাবে `const [] number: arr`. সেটাও পারবেন এই মেটা প্রোগ্রামিং এর দ্বারা। মেটা প্রোগ্রামিং নিয়ে বিস্তারিত জানতে [Meta Programming](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Meta_programming) এই আর্টিকেলটি পড়ুন।

ফাংশন কন্সট্রাক্টরের আরেকটি বড় সুবিধা হলো যেহেতু আপনি এভাবে ফাংশন বানাতে পারছেন সেহেতু আপনি চাইলে রানটাইমেও ফাংশন জেনারেট করতে পারবেন।

ধরেন আমাদের সার্ভারে একটা CMS আছে। সেখান থেকে ফাংশনের বডি তৈরি করে আমরা ক্লায়েন্টের কাছে পাঠিয়ে দিবো, এটা হলো আমাদের টার্গেট। আমরা একটা অবজেক্ট তৈরি করি এভাবে।

```js
const fData = {
	params: ['a', 'b'],
	body: ['const r = a + b', 'return r'],
};
```

এখন বডিতে প্রতিটা লাইন আলাদা আলাদাভাবে আছে। আমাদের সেখান থেকে একসাথে আনতে হবে। সেটা আমরা করতে পারি reduce মেথড দ্বারা।

```js
const fBody = fData.body.reduce((acc, cur) => {
	acc += cur + ';';
	return acc;
}, '');
```

গত ক্লাসে reduce নিয়ে ডিটেইলস আলোচনা করা হয়েছে। আপনারা ওখান থেকে ভালভাবে বুঝে নিন। এখন আমরা sum করার ফাংশন কনস্ট্রাক্ট করি কনস্ট্রাক্টর দিয়ে।

```js
const tf = new Function(...fData.params, fBody);
console.log(tf(100, 200)); // 300
```

How powerful it is! আমরা এমন একটা লাইব্রেরি বানিয়ে ফেলতে পারি যেই লাইব্রেরি দিয়ে আমরা json থেকে ফাংশন বানিয়ে ফেলতে পারি। CMS দিয়ে যে ফাংশন দরকার সে ফাংশন রেডি করে দিয়ে আসতে পারবেন। ডায়নামিকভাবে ফাংশন বিহেভিয়ার চেইঞ্জ করতে পারবেন। আমরা JSON থেকে ডায়নামিকভাবে একটা ফাংশন জেনারেট করে ফেললাম।

আরেকটা উদাহরণ দিই। ধরুন আমরা পুরো নাম থেকে ফার্স্টনেইম বের করে আনার ফাংশন কনস্ট্রাক্ট করতে চাই।

```js
const greetFn = new Function(
	'name',
	'email',
	`
	const fName = name.split(' ')[0];
	console.log('Hello,', fName, 'Is that your email?', email);
	console.log('Yeah, this is mine.');
	return fName;
	`
);

console.log(typeof greetFn); // function
console.log(greetFn.toString());
/* 
function anonymous(name,email) {
        const fName = name.split(' ')[0];
        console.log('Hello,', fName, 'Is that your email?', email);
        console.log('Yeah, this is mine.');
        return fName;
}
*/
const fName = greetFn('HM Nayem', 'nayem@gmail.com');
/* 
Hello, HM Is that your email? nayem@gmail.com
Yeah, this is mine.
*/
console.log('First Name:', fName); // First Name: HM
```

আশা করি সবাই কোড দেখে বুঝতে পেরেছেন। greetFn এর টাইপ দেখাচ্ছে function. ফাংশন আমরা এভাবে তৈরি করিনি। কিন্তু ওরা ওদের মতো করে বানিয়ে নিয়েছে। আর আউটপুট যেভাবে দেয়ার সেভাবে দিয়েছে।

এতক্ষণ যা করলাম তা কিন্তু ফাংশনাল প্রোগ্রামিং না। আমরা জাস্ট ফাংশন যে একটা ভ্যালু তা প্রমাণ করলাম। আর ফাংশনাল প্রোগ্রামিং ল্যাঙ্গুয়েজ হওয়ার জন্য অবশ্যই ফাংশন ভ্যালু হিসেবে ট্রিট হতে হবে।

এবার আমরা একটা মজার জিনিস দেখি। সেটা হলো আমরা কিছু অপারেশনের আর্গুমেন্টস, প্যারামিটারস, ফাংশন বডি একটা অ্যারেতে স্টোর করে রাখলাম।

```js
const operations = [
	{
		args: [10, 20],
		params: ['a', 'b'],
		body: 'console.log("a + b",a + b)',
	},
	{
		args: [10, 20],
		params: ['a', 'b'],
		body: 'console.log("a - b",a - b)',
	},
	{
		args: [10, 20],
		params: ['a', 'b'],
		body: 'console.log("a * b",a * b)',
	},
];
```

এবার যদি আমরা forEach মেথড চালিয়ে প্রতিটা অপারেশনকে ফাংশন কনস্ট্রাক্টরের মাধ্যমে ফাংশন বানিয়ে আউটপুট দেখার চেষ্টা করি তাহলে কি দেখা যায় দেখি।

```js
operations.forEach((operation) => {
	const fn = new Function(...operation.params, operation.body);
	fn(...operation.args);
});
/* 
a + b 30
a - b -10
a * b 200
*/
```

এবার আশা করি বুঝতে পেরেছেন এটা কতটা পাওয়ারফুল একটা টার্ম। এটা যদিও আমরা কোনো রিয়েল অ্যাপ্লিকেশন ডেভেলপমেন্টে ব্যবহার করবো না। কারণ সিকিউরিটি ল্যাক আছে এতে। আমরা যখন সার্ভার থেকে ফাংশন বডি নিবো তখন এই সাইডটা আমাদের ওপেন রাখতে হচ্ছে। এখন হ্যাকার যদি কোনো কারণে আমার এপিআই চেইঞ্জ করতে পারে, তাহলে সেক্ষেত্রে তার কোড আমার সিস্টেমে এসে আমার সিস্টেমকে হযবরল করে দিতে পারে। এটা আমরা জাস্ট ফান করার জন্য, বুঝার জন্য করেছি। রিয়েল অ্যাপ্লিকেশন ডেভেলপমেন্টে এর কোনো কাজ নেই।

ফাংশন নিয়ে অনেক বিস্তারিত আলোচনা এতে করা হয়েছে। আশা করা যায় সবাই ভালভাবে বুঝতে পেরেছেন।



## Source Code

এই লেকচারের সমস্ত সোর্স কোড এই [লিংকে](../../../src/lecture-08/app.js) এ পাবেন।

## AUTHOR

[Aditya Chakraborty](https://github.com/adityackr)
