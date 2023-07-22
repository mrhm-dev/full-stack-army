import { Input } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';

const App = () => {
	const {
		control,
		handleSubmit,
		formState: { errors, touchedFields },
		reset,
	} = useForm({
		mode: 'onSubmit',
		defaultValues: {
			name: '',
			email: '',
			age: 0,
		},
	});

	const onValid = (data, obj) => {
		console.log(data);
		reset();
	};

	const onInvalid = (data) => {
		console.log('Invalid', data);
	};

	return (
		<div>
			<h1>Hello World</h1>
			<form onSubmit={handleSubmit(onValid, onInvalid)}>
				<Controller
					name="name"
					control={control}
					render={({ field }) => <Input {...field} />}
				/>
				<Controller
					name="email"
					control={control}
					render={({ field }) => <Input {...field} />}
				/>
				<Controller
					name="age"
					control={control}
					render={({ field }) => <Input {...field} />}
				/>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
};

export default App;
