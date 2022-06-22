const get = (url) => Promise.resolve(url);

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
