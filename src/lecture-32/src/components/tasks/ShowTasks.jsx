const ShowTasks = ({ tasks }) => {
	return (
		<div>
			{tasks.length > 0 ? (
				<ul>
					{tasks.map((task) => (
						<li key={task.id}>{task.text}</li>
					))}
				</ul>
			) : (
				<p>No task found</p>
			)}
		</div>
	);
};

export default ShowTasks;
