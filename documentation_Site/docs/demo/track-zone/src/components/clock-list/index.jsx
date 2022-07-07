import ClockListItem from './clock-list-item';

const ClockList = ({ clocks, updateClock, deleteClock, localClock }) => {
	return (
		<div>
			<h3>Other Clocks</h3>
			<hr />
			{clocks.length === 0 ? (
				<p>There is no clock, please create one.</p>
			) : (
				<div>
					{clocks.map((clock) => (
						<ClockListItem
							key={clock.id}
							clock={clock}
							localClock={localClock}
							updateClock={updateClock}
							deleteClock={deleteClock}
						/>
					))}
				</div>
			)}
		</div>
	);
};

export default ClockList;
