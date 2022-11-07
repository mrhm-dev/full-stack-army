import { addMinutes } from 'date-fns';
import { useEffect, useState } from 'react';
import { TIMEZONE_OFFSET } from '../constants/timezone';

const useClock = (timezone, offset) => {
	const [localDate, setLocalDate] = useState(null);
	const [localTimezone, setLocalTimezone] = useState(null);
	const [localOffset, setLocalOffset] = useState(0);
	const [utc, setUtc] = useState(null);

	useEffect(() => {
		let d = new Date();
		const lo = d.getTimezoneOffset();
		d = addMinutes(d, lo);
		setUtc(d);
		setLocalOffset(lo);
	}, []);

	useEffect(() => {
		if (utc !== null) {
			if (timezone) {
				offset = TIMEZONE_OFFSET[timezone] ?? offset;
				const newUtc = addMinutes(utc, offset);
				setLocalDate(newUtc);
			} else {
				const newUtc = addMinutes(utc, -localOffset);
				const dateStrArr = newUtc.toUTCString().split(' ');
				setLocalDate(newUtc);
				setLocalTimezone(dateStrArr.pop());
			}
		}
	}, [utc, timezone, offset]);

	return {
		date: localDate,
		dateUtc: utc,
		offset: offset || -localOffset,
		timezone: timezone || localTimezone,
	};
};

export default useClock;
