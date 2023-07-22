import { formatDistance } from 'date-fns';
import React from 'react';
import useClock from '../../hooks/useClock';
import useTimer from '../../hooks/useTimer';
import ClockActions from '../shared/clock-actions';
import ClockDisplay from '../shared/clock-display';

const ClockListItem = ({ clock, updateClock, deleteClock, localClock }) => {
	const { date } = useClock(clock.timezone, clock.offset);
	const timer = useTimer(date);

	if (!date || !timer) return null;

	return (
		<div>
			<ClockDisplay
				date={timer}
				offset={clock.offset}
				timezone={clock.timezone}
				title={clock.title}
			/>
			<h3>Time difference: {formatDistance(localClock, timer)}</h3>
			<ClockActions
				clock={clock}
				updateClock={updateClock}
				deleteClock={deleteClock}
			/>
		</div>
	);
};

export default ClockListItem;
