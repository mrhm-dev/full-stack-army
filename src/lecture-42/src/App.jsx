import useFetchData from './hooks/useFetchData';

const App = () => {
	const users = useFetchData(
		'https://jsonplaceholder.typicode.com/users',
		(data) => data.map((item) => ({ id: item.id, name: item.name }))
	);
	const posts = useFetchData(
		'https://jsonplaceholder.typicode.com/posts',
		(data) =>
			data.map((item) => ({ id: item.id, title: item.title })).slice(0, 10)
	);
	const comments = useFetchData(
		'https://jsonplaceholder.typicode.com/comments',
		(data) =>
			data.map((item) => ({ id: item.id, name: item.name })).slice(0, 10)
	);

	// const [users, setUsers] = useState([]);
	// const [userLoading, setUserLoading] = useState(false);
	// const [userError, setUserError] = useState('');
	// const [posts, setPosts] = useState([]);
	// const [postLoading, setPostLoading] = useState(false);
	// const [postError, setPostError] = useState('');

	// useEffect(() => {
	// 	fetchUsers();
	// 	fetchPosts();
	// }, []);

	// const fetchUsers = async () => {
	// 	setUserLoading(true);
	// 	try {
	// 		const res = await fetch('https://jsonplaceholder.typicode.com/users');
	// 		const data = await res.json();
	// 		setUserLoading(false);
	// 		setUserError('');
	// 		setUsers(data);
	// 	} catch (error) {
	// 		setUserLoading(false);
	// 		setUserError('Server error occurred while fetching users');
	// 	}
	// };

	// const fetchPosts = async () => {
	// 	setPostLoading(true);
	// 	try {
	// 		const res = await fetch('https://jsonplaceholder.typicode.com/posts');
	// 		const data = await res.json();
	// 		setPostLoading(false);
	// 		setPostError('');
	// 		setPosts(data);
	// 	} catch (error) {
	// 		setPostLoading(false);
	// 		setPostError('Server error occurred while fetching posts');
	// 	}
	// };

	return (
		<div
			style={{
				display: 'flex',
				gap: '1rem',
				justifyContent: 'space-around',
				margin: 'auto',
			}}
		>
			<div>
				<h1>Users</h1>
				<hr />
				{users.loading && <h3>Loading...</h3>}
				{users.error && <h3>{users.error}</h3>}
				{users.data?.map((user) => (
					<li key={user.id}>{user.name}</li>
				))}
			</div>
			<div>
				<h1>Posts</h1>
				<hr />
				{posts.loading && <h3>Loading...</h3>}
				{posts.error && <h3>{posts.error}</h3>}
				{posts.data?.map((post) => (
					<li key={post.id}>{post.title}</li>
				))}
			</div>
			<div>
				<h1>Comments</h1>
				<hr />
				{comments.loading && <h3>Loading...</h3>}
				{comments.error && <h3>{comments.error}</h3>}
				{comments.data?.map((comment) => (
					<li key={comment.id}>{comment.name}</li>
				))}
			</div>
		</div>
	);
};

export default App;
