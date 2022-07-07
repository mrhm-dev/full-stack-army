import { formatDistance, addSeconds } from 'date-fns';
import { useState, useEffect } from 'react';
import useClock from '../../hooks/useClock';
import useTimer from '../../hooks/useTimer';
import ClockActions from '../shared/clock-actions';
import ClockDisplay from '../shared/clock-display';

const ClockListItem = ({ clock, localClock, updateClock, deleteClock }) => {
	const { date } = useClock(clock.timezone, clock.offset);
	const timer = useTimer(date);

	if (!date || !timer) return null;

	return (
		<div>
			<ClockDisplay
				date={timer}
				title={clock.title}
				timezone={clock.timezone}
				offset={clock.offset}
			/>
			<h3>{formatDistance(localClock, timer)}</h3>
			<ClockActions
				clock={clock}
				updateClock={updateClock}
				deleteClock={deleteClock}
			/>
		</div>
	);
};

export default ClockListItem;
