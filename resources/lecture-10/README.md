# Lecture 10 - Asynchronous Programming in JavaScript

### Agenda

- Understand Asynchronous Programming
- Event Loop
- Ways we can handle Asynchronous Tasks
- Callback
- Promise
- Async Await

---

#### Understand Asynchronous Programming

Suppose you are standing on a line in a bank. The process is when a task is completed, then another task will start. Next task will not be started before current task has completed. This is called blocking.

But nowadays, many banks are adapted a new way. You enter to the bank, collect a token. Then you can wait in lounge, browse internet or you can finish some small task in outside. When you number will come, it is announced. Then you can go to the counter. This is called non-blocking. And the way is called asynchronous way.

setTimeOut and setInterval are the example of asynchronous programming in javascript. Let's look at below example.

```js
console.log(1);

setTimeout(() => {
	console.log(2);
}, 0);

setTimeout(() => {
	console.log(3);
}, 0);

setTimeout(() => {
	console.log(4);
}, 0);

setTimeout(() => {
	console.log(5);
}, 0);

setTimeout(() => {
	console.log(6);
}, 0);

setTimeout(() => {
	console.log(7);
}, 0);

console.log(8);
```

At first 1 will be printed, then 8 will be printed. All the `setTimeout` tasks will wait in Queue. After printing of 8, first `setTimeout` task with 2 will enter in call stack. Then it will print. After printing, 3, 4, 5, 6, 7 will be printed.

Let's look into another example:

```js
function main() {
	setTimeout(() => {
		console.log('load last');
	}, 10);

	setTimeout(() => {
		console.log('load first');
		test();
	}, 0);

	test();
}

function test() {
	console.log('test');
}

main();
```

At first, `main()` will enter in call stack. Then `setTimeout` task with 10 ms time will enter in Queue. Second `setTimeout` task will also enter in Queue. Then `test()` function will enter in call stack and executed first. With execution of `test()` function `main()` function will leave from call stack. Then the `setTimeout` task with lower time i.e. second `setTimeout` task will enter in the call stack and executed first. At last first `setTimeout` task will enter in call stack and executed finally.

You can visually see the process in [JavaScript Visualizer 9000](https://www.jsv9000.app/).

> We can't store value of an asynchronous task into a variable.

To learn more please go though [Asynchronous JavaScript - Learn web development | MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous).

---

#### Event Loop

Event Loop is just a loop, which transfer data from the queue to call stack.
![event-loop](./event-loop.gif)
To learn more go through [The event loop - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop), [The JavaScript Event Loop: Explained - Towards Dev](https://towardsdev.com/event-loop-in-javascript-672c07618dc9) and [What the heck is the event loop anyway? | Philip Roberts | JSConf EU](https://youtu.be/8aGhZQkoFbQ)

---

#### Ways we can handle Asynchronous Tasks

- ##### Callback

  Though Callback is a way to handle Asynchronous tasks, we will not use callback ever. The main reason is callback hell. Look into the example of callback hell in below:

  ```js
  /**
   * 1. find user by username
   * 2. find post by userId
   * 3. find latest post
   * 4. find comments by post id
   * 5. find latest comment
   * 6. find username of the latest commented user
   */

  /**
   * /users?username=[username]
   * /posts?user_id=[user_id]
   * /comments?post_id=[post_id]
   * /users?username=[username]
   */

  function get(path, cb) {
  	const data = {}; // somehow process it
  	cb(data);
  }

  function getUserNameFromComment(username) {
  	get(`users?username=${username}`, (user) => {
  		get(`posts?user_id=${user.id}`, (posts) => {
  			get(`comments?post_id=${posts[0].id}`, (comments) => {
  				get(`users?username=${comments[0].username}`, (user) => {
  					console.log(user);
  				});
  			});
  		});
  	});
  }

  getUserNameFromComment('arif');
  ```

  The main problem of callback is debugging. We can't debug easily. And because we can't store the data from first callback in any variable, we need to use another callback. So, it is very difficult to work with the callback. That is why, we don't use callback.

- ##### Promise

  `Promise` is a JavaScript Object. Initially `Promise` doesn't have any value. But, in future a value will come. Look into the example given below:

  ```js
  const isResolved = true;

  const promise = new Promise((resolve, reject) => {
  	if (isResolved) {
  		resolve('completed');
  	} else {
  		reject('data');
  	}
  });

  console.log(promise);

  promise
  	.then((result) => {
  		console.log(result);
  	})
  	.catch((e) => {
  		console.log('Rejected');
  	});
  ```

  Let's see another example:

  ```js
  const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  wait(1000).then(() => {
  	console.log('Done in 1000ms');
  });

  wait(2000).then(() => {
  	console.log('Done in 2000ms');
  });

  wait(3000).then(() => {
  	console.log('Done in 3000ms');
  });
  ```

  Now let's implement the problem solved by callback previously.

  ```js
  /**
   * 1. find user by username
   * 2. find post by userId
   * 3. find latest post
   * 4. find comments by post id
   * 5. find latest comment
   * 6. find username of the latest commented user
   */

  /**
   * /users?username=[username]
   * /posts?user_id=[user_id]
   * /comments?post_id=[post_id]
   * /users?username=[username]
   */

  const get = (url) => Promise.resolve();

  get(`/users?username=anarul`)
  	.then((user) => {
  		/** do all other operations here */
  		return get(`/posts?user_id=${user.id}`);
  	})
  	.then((posts) => {
  		const latestPost = posts[0];
  		return get(`/comments?post_id=${latestPost.id}`);
  	})
  	.then((comments) => {
  		const latestComment = comments[0];
  		return get(`/users?username=${latestComment.username}`);
  	})
  	.then((user) => {
  		console.log(user);
  	})
  	.catch(() => {
  		console.log('Error');
  	});
  ```

- ##### Async Await

  Normally, a function with nothing inside it returns `undefined`. But an asynchronous function by default returns a `Promise`. Let's look into the previous example:

  ```js
  const get = (url) => Promise.resolve();

  async function getUserName(username) {
  	try {
  		const mainUser = await get(`/users?username=${username}`);
  		const posts = await get(`/posts?user_id=${mainUser.id}`);
  		const comments = await get(`/comments?post_id=${posts[0].id}`);
  		const user = await get(`/users?username=${comments[0].username}`);
  		console.log(user);
  	} catch (e) {
  		console.log(e);
  	}
  }
  ```

  **Real Example**

  ```js
  const axios = require('axios').default;
  const USERS_URL = 'https://jsonplaceholder.typicode.com/users';
  const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';
  const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments';

  async function getComments(username) {
  	try {
  		const { data: user } = await axios.get(
  			`${USERS_URL}?username=${username}`
  		);
  		const { data: posts } = await axios.get(
  			`${POSTS_URL}?userId=${user[0].id}`
  		);
  		const { data: comments } = await axios.get(
  			`${COMMENTS_URL}?postId=${posts[0].id}`
  		);

  		const { data: userWithComment } = await axios.get(
  			`${USERS_URL}?email=${comments[1].email}`
  		);
  		console.log(userWithComment);
  	} catch (error) {
  		console.log('Error Occurred', error.toJSON());
  	}
  }

  getComments('Bret');
  ```

---

#### References

- [The event loop - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop)
- [The JavaScript Event Loop: Explained - Towards Dev](https://towardsdev.com/event-loop-in-javascript-672c07618dc9)
- [What the heck is the event loop anyway? | Philip Roberts | JSConf EU](https://youtu.be/8aGhZQkoFbQ)
- [Asynchronous JavaScript - Learn web development | MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous)
- [JavaScript Visualizer 9000](https://www.jsv9000.app/)

---

#### Source code:

[Lecture 10 - Asynchronous Programming in JavaScript - Source Code](../../src/lecture-10/app.js)

---

#### Tasks:

- Create [Lodash](https://lodash.com) library on your own.
