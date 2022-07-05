import { formatDistance } from 'date-fns';
import useClock from '../../hooks/useClock';
import ClockActions from '../shared/clock-actions';
import ClockDisplay from '../shared/clock-display';

const ClockListItem = ({ clock, localClock, updateClock, deleteClock }) => {
	const { date } = useClock(clock.timezone, clock.offset);

	if (!date) return null;

	return (
		<div>
			<ClockDisplay
				date={date}
				title={clock.title}
				timezone={clock.timezone}
				offset={clock.offset}
			/>
			<h3>{formatDistance(localClock, date)}</h3>
			<ClockActions
				clock={clock}
				updateClock={updateClock}
				deleteClock={deleteClock}
			/>
		</div>
	);
};

export default ClockListItem;
