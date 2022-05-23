import useApp from './App_hook';

const App = () => {
	const { user, id, loading, max, prevHandler, nextHandler } = useApp();
	return (
		<div>
			<h1>User Detail - {id}</h1>
			{loading && <p>loading...</p>}
			{!loading && user && (
				<div>
					name: {user.name}
					<br />
					email: {user.email}
					<br />
					phone: {user.phone}
				</div>
			)}
			<div>
				<button disabled={id == 1} onClick={prevHandler}>
					previous
				</button>
				<button disabled={id == max} onClick={nextHandler}>
					next
				</button>
			</div>
		</div>
	);
};

export default App;
