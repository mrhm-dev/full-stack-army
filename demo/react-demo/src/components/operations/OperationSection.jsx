import PropTypes from 'prop-types';
import shortid from 'shortid';
import Button from '../ui/Button';

const OperationSection = ({ handleArithmeticOps, handleClearOps }) => {
	const operations = [
		{
			id: shortid.generate(),
			text: '+',
			onClick: () => handleArithmeticOps('+'),
		},
		{
			id: shortid.generate(),
			text: '-',
			onClick: () => handleArithmeticOps('-'),
		},
		{
			id: shortid.generate(),
			text: '*',
			onClick: () => handleArithmeticOps('*'),
		},
		{
			id: shortid.generate(),
			text: '/',
			onClick: () => handleArithmeticOps('/'),
		},
		{
			id: shortid.generate(),
			text: '%',
			onClick: () => handleArithmeticOps('%'),
		},
		{
			id: shortid.generate(),
			text: '**',
			onClick: () => handleArithmeticOps('**'),
		},
		{
			id: shortid.generate(),
			text: 'clear',
			onClick: handleClearOps,
		},
	];

	return (
		<div>
			<p>Operations</p>
			<div style={{ display: 'flex', gap: '0.5rem' }}>
				{operations.map((ops) => (
					<Button
						key={ops.id}
						text={ops.text}
						onClick={ops.onClick}
					/>
				))}
			</div>
		</div>
	);
};

OperationSection.propTypes = {
	handleArithmeticOps: PropTypes.func.isRequired,
	handleClearOps: PropTypes.func.isRequired,
};

export default OperationSection;
