import { format } from 'date-fns';
import classes from './index.module.css';
const ClockDisplay = ({ date, title, timezone, offset }) => {
	const offsetHr = offset / 60;
	return (
		<div className={classes.card}>
			<h1>Title: {title}</h1>
			<h3>{format(date, "yyyy-MM-dd hh:mm:ss aaaaa'm'")}</h3>
			<p>
				{timezone}
				{offsetHr > 0
					? `+${Math.abs(offsetHr)}`
					: `-${Math.abs(offsetHr)}`}
			</p>
		</div>
	);
};

export default ClockDisplay;
