import './App.css';

const tasks = [
	{
		id: 'unique_id_001',
		subtitle: 'Subtitle',
		createdAt: '2022-04-24T18:04:42.792Z',
		tags: [
			{
				id: 'tag-001',
				text: 'Its done',
				icon: 'T',
			},
		],
		comments: [
			{
				id: 'comment-id-001',
				user: {
					avatar: 'xyz.com',
					name: 'Viraj',
					id: 'user-id-001',
				},
				text: 'Duis enim tempor in sunt magna labore duis et. Amet commodo voluptate commodo sit pariatur nulla proident. Magna reprehenderit ad adipisicing mollit non dolor excepteur cupidatat amet consequat irure.',
			},
		],
		tasks: [
			{
				id: 'task-001',
				title: 'Foggy Nelson',
				text: 'Here to clean the streets of Hells Kitchen',
				status: 'done',
			},
			{
				id: 'task-002',
				title: 'Louis CK',
				text: 'Here to clean the streets of Hells Kitchen',
				status: 'cancelled',
			},
			{
				id: 'task-003',
				title: 'Albert Einstein',
				text: 'Here to clean the streets of Hells Kitchen',
				status: 'progress',
			},
			{
				id: 'task-004',
				title: 'Albert Einstein',
				text: 'Here to clean the streets of Hells Kitchen',
				status: 'progress',
			},
		],
	},
	{
		id: 'unique_id_001',
		subtitle: 'Subtitle',
		createdAt: '2022-04-24T18:04:42.792Z',
		tags: [
			{
				id: 'tag-001',
				text: 'Its done',
				icon: 'T',
			},
			{
				id: 'tag-002',
				text: 'Its cancelled',
				icon: 'X',
			},
			{
				id: 'tag-003',
				text: 'Its in progress',
				icon: 'P',
			},
			{
				id: 'tag-004',
				text: 'Just wrote it',
				icon: 'C',
			},
		],
		comments: [],
		tasks: [
			{
				id: 'task-001',
				title: 'Foggy Nelson',
				text: 'Here to clean the streets of Hells Kitchen',
				status: 'done',
			},
			{
				id: 'task-002',
				title: 'Louis CK',
				text: 'Here to clean the streets of Hells Kitchen',
				status: 'cancelled',
			},
		],
	},
	{
		id: 'unique_id_001',
		subtitle: 'Subtitle',
		createdAt: '2022-04-24T18:04:42.792Z',
		tags: [
			{
				id: 'tag-001',
				text: 'Its done',
				icon: 'T',
			},
			{
				id: 'tag-001',
				text: 'Its done',
				icon: 'T',
			},
			{
				id: 'tag-001',
				text: 'Its done',
				icon: 'T',
			},
		],
		comments: [
			{
				id: 'comment-id-001',
				user: {
					avatar: 'xyz.com',
					name: 'Viraj',
					id: 'user-id-001',
				},
				text: 'Duis enim tempor in sunt magna labore duis et. Amet commodo voluptate commodo sit pariatur nulla proident. Magna reprehenderit ad adipisicing mollit non dolor excepteur cupidatat amet consequat irure.',
			},
			{
				id: 'comment-id-002',
				user: {
					avatar: 'xyz.com',
					name: 'Viraj',
					id: 'user-id-001',
				},
				text: 'Duis enim tempor in sunt magna labore duis et. Amet commodo voluptate commodo sit pariatur nulla proident. Magna reprehenderit ad adipisicing mollit non dolor excepteur cupidatat amet consequat irure.',
			},
		],
		tasks: [
			{
				id: 'task-001',
				title: 'Foggy Nelson',
				text: 'Here to clean the streets of Hells Kitchen',
				status: 'done',
			},
		],
	},
];

function getDay(dateStr) {
	const date = new Date(dateStr).getDay();
	const days = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
	];

	return days[date];
}

function formatDate(dateStr) {
	const date = new Date(dateStr);
	return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
}

const TagListItem = ({ tag }) => {
	return (
		<li key={tag.id}>
			<small>{tag.icon}</small> - {tag.text}
		</li>
	);
};

const CommentListItem = ({ comment }) => {
	return (
		<div className='comment-item' key={comment.id}>
			<h3>{comment.user.name}</h3>
			<p>{comment.text}</p>
		</div>
	);
};

const TaskListItem = ({ task }) => {
	return (
		<li key={task.id}>
			<h3>{task.title}</h3>
			<p>
				<small> {task.status} </small>
			</p>
			<p>{task.text}</p>
		</li>
	);
};

const TaskCard = ({ task }) => {
	return (
		<div className='day-card'>
			<h1 className='title'>
				{getDay(task.createdAt)}, {formatDate(task.createdAt)}
			</h1>
			<h3 className='sub-title'>{task.subtitle}</h3>
			<ul className='tag-ul'>
				{task.tags.map((tag) => (
					<TagListItem key={tag.id} tag={tag} />
				))}
			</ul>
			<div className='line' />
			<p className='notes'>Notes Linked to People</p>
			<div className='comments'>
				{task.comments.map((comment) => (
					<CommentListItem key={comment.id} comment={comment} />
				))}
			</div>
			<ul className='tasks'>
				{task.tasks.map((task) => (
					<TaskListItem key={task.id} task={task} />
				))}
			</ul>
		</div>
	);
};

const App = () => {
	return (
		<div className='cards-group'>
			{tasks.map((task) => (
				<TaskCard key={task.id} task={task} />
			))}
		</div>
	);
};

export default App;
