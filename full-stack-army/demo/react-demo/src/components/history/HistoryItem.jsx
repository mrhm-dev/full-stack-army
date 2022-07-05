import PropTypes from 'prop-types';
import { useState } from 'react';
import Button from '../ui/Button';

const HistoryItem = ({ historyItem, disabled, handleRestoreBtn }) => {
	const [show, setShow] = useState(false);

	const handleToggle = () => {
		setShow(!show);
	};

	return (
		<li key={historyItem.id}>
			<div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
				<p>
					Operation: {historyItem.inputs.a} {historyItem.operation}{' '}
					{historyItem.inputs.b}, Result: {historyItem.result}
				</p>
				<div>
					<Button
						text={show ? 'Hide' : 'Show'}
						onClick={handleToggle}
					/>
				</div>
			</div>
			{show && (
				<>
					<small>
						{historyItem.date.toLocaleDateString()}{' '}
						{historyItem.date.toLocaleTimeString()}
					</small>
					<br />
					<Button
						text='Restore'
						onClick={() => handleRestoreBtn(historyItem)}
						disabled={disabled}
					/>
				</>
			)}
		</li>
	);
};

HistoryItem.propTypes = {
	historyItem: PropTypes.shape({
		id: PropTypes.number.isRequired,
		inputs: PropTypes.shape({
			a: PropTypes.number.isRequired,
			b: PropTypes.number.isRequired,
		}).isRequired,
		operation: PropTypes.string.isRequired,
		result: PropTypes.number.isRequired,
		date: PropTypes.object.isRequired,
	}),
	disabled: PropTypes.bool.isRequired,
	handleRestoreBtn: PropTypes.func.isRequired,
};

HistoryItem.defaultProps = {
	disabled: false,
};

export default HistoryItem;
