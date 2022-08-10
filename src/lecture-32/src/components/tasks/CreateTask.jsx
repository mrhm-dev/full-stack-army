import { useState } from 'react';

const CreateTask = ({ addNewTask }) => {
	const [text, setText] = useState('');

	return (
		<div>
			<input
				type="text"
				placeholder="type your task"
				value={text}
				onChange={(event) => setText(event.target.value)}
			/>
			<button
				onClick={() => {
					if (text) {
						addNewTask(text);
						setText('');
					} else {
						alert('Invalid input');
					}
				}}
			>
				Create Task
			</button>
		</div>
	);
};

export default CreateTask;
