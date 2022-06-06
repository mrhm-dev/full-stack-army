// console.log(1);

// setTimeout(() => {
// 	console.log(2);
// }, 0);

// setTimeout(() => {
// 	console.log(3);
// }, 0);

// setTimeout(() => {
// 	console.log(4);
// }, 0);

// setTimeout(() => {
// 	console.log(5);
// }, 0);

// setTimeout(() => {
// 	console.log(6);
// }, 0);

// setTimeout(() => {
// 	console.log(7);
// }, 0);

// console.log(8);

// function main() {
// 	setTimeout(() => {
// 		console.log('load last');
// 	}, 10);

// 	setTimeout(() => {
// 		console.log('load first');
// 		test();
// 	}, 0);

// 	test();
// }

// function test() {
// 	console.log('test');
// }

// main();

// Callback
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

// function get(path, cb) {
// 	const data = {}; // somehow process it
// 	cb(data);
// }

// function getUserNameFromComment(username) {
// 	get(`users?username=${username}`, (user) => {
// 		get(`posts?user_id=${user.id}`, (posts) => {
// 			get(`comments?post_id=${posts[0].id}`, (comments) => {
// 				get(`users?username=${comments[0].username}`, (user) => {
// 					console.log(user);
// 				});
// 			});
// 		});
// 	});
// }

// getUserNameFromComment('arif');

/* const isResolved = true;

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
	}); */

// function wait(ms) {
// 	const promise = new Promise((resolve) => {
// 		setTimeout(resolve, ms);
// 	});
// 	return promise;
// }

// const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// wait(1000).then(() => {
// 	console.log('Done in 1000ms');
// });

// wait(2000).then(() => {
// 	console.log('Done in 2000ms');
// });

// wait(3000).then(() => {
// 	console.log('Done in 3000ms');
// });

// const get = (url) => Promise.resolve();

// get(`/users?username=anarul`)
// 	.then((user) => {
// 		/** do all other operations here */
// 		return get(`/posts?user_id=${user.id}`);
// 	})
// 	.then((posts) => {
// 		const latestPost = posts[0];
// 		return get(`/comments?post_id=${latestPost.id}`);
// 	})
// 	.then((comments) => {
// 		const latestComment = comments[0];
// 		return get(`/users?username=${latestComment.username}`);
// 	})
// 	.then((user) => {
// 		console.log(user);
// 	})
// 	.catch(() => {
// 		console.log('Error');
// 	});

// const get = (url) => Promise.resolve();

// async function getUserName(username) {
// 	try {
// 		const mainUser = await get(`/users?username=${username}`);
// 		const posts = await get(`/posts?user_id=${mainUser.id}`);
// 		const comments = await get(`/comments?post_id=${posts[0].id}`);
// 		const user = await get(`/users?username=${comments[0].username}`);
// 		console.log(user);
// 	} catch (e) {
// 		console.log(e);
// 	}
// }

const axios = require('axios').default;
const USERS_URL = 'https://jsonplaceholder.typicode.com/users';
const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';
const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments';

async function getComments(username) {
	try {
		const { data: user } = await axios.get(`${USERS_URL}?username=${username}`);
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
