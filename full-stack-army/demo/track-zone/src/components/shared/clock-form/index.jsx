/**
 * 1. for local clock title won't be change
 * 2. to create a new clock we have to create title, timezone, offset
 * 3. for edit we will have title, timezone, offset
 */

import { useEffect, useState } from 'react';
import { TIMEZONE_OFFSET } from '../../../constants/timezone';
import { getOffset } from '../../../utils/timezone';

// const values = {
//   title: '',
//   timezone: '',
//   offset: 0
// }

const ClockForm = ({
	values = { title: '', timezone: 'UTC', offset: 0 },
	handleClock,
	title = true,
	edit = false,
}) => {
	const [formValues, setFormValues] = useState({ ...values });

	useEffect(() => {
		if (TIMEZONE_OFFSET[formValues.timezone]) {
			setFormValues((prev) => ({
				...prev,
				offset: TIMEZONE_OFFSET[formValues.timezone],
			}));
		}
	}, [formValues.timezone]);

	const handleChange = (e) => {
		let { name, value } = e.target;
		if (name === 'offset') {
			value = Number(value) * 60;
		}

		setFormValues((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		handleClock(formValues);
	};

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label htmlFor='title'>Enter Title</label>
				<input
					type='text'
					id='title'
					name='title'
					value={formValues.title}
					onChange={handleChange}
					disabled={!title}
				/>
			</div>
			<div>
				<label htmlFor='timezone'>Enter Timezone</label>
				<select
					id='timezone'
					name='timezone'
					value={formValues.timezone}
					onChange={handleChange}
				>
					<option value='GMT'>GMT</option>
					<option value='UTC'>UTC</option>
					<option value='PST'>PST</option>
					<option value='EST'>EST</option>
					<option value='EDT'>EDT</option>
					<option value='BST'>BST</option>
					<option value='MST'>MST</option>
				</select>
			</div>
			{(formValues.timezone === 'GMT' ||
				formValues.timezone === 'UTC') && (
				<div>
					<label htmlFor='offset'>Enter Offset</label>
					<select
						id='offset'
						name='offset'
						value={formValues.offset / 60}
						onChange={handleChange}
					>
						{getOffset().map((offset) => (
							<option key={offset} value={offset}>
								{offset}
							</option>
						))}
					</select>
				</div>
			)}
			<button>{edit ? 'Update' : 'Create'}</button>
		</form>
	);
};

export default ClockForm;
