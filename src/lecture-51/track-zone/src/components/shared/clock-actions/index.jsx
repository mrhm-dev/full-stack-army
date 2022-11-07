import { useState } from 'react';
import ClockForm from '../clock-form';

const ClockActions = ({
	local = false,
	clock,
	updateClock,
	createClock,
	deleteClock,
}) => {
	const [isEdit, setIsEdit] = useState(false);
	const [isCreate, setIsCreate] = useState(false);

	const handleClock = (values) => {
		createClock(values);
	};

	return (
		<div>
			<button onClick={() => setIsEdit(!isEdit)}>Edit</button>
			{local ? (
				<button onClick={() => setIsCreate(!isCreate)}>Create</button>
			) : (
				<button onClick={() => deleteClock(clock.id)}>Delete</button>
			)}
			{isEdit && (
				<>
					<h3>Edit Clock</h3>
					<ClockForm
						handleClock={updateClock}
						edit={true}
						title={!local}
						values={clock}
					/>
				</>
			)}
			{isCreate && (
				<>
					<h3>Create New Clock</h3>
					<ClockForm handleClock={handleClock} />
				</>
			)}
		</div>
	);
};

export default ClockActions;
