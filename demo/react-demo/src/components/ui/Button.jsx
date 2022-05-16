import PropTypes from 'prop-types';

const Button = ({ text, onClick, disabled, customStyle }) => {
	const disabledStyle = {
		backgroundColor: '#999',
		color: '#333',
		cursor: 'default',
	};

	const style = {
		padding: '0.25rem 1rem',
		backgroundColor: '#ddd',
		color: '#212121',
		borderRadius: '0.10rem',
		cursor: 'pointer',
		border: 'none',
		...customStyle,
		...(disabled && disabledStyle),
	};

	console.log(customStyle, disabled);

	return (
		<button style={style} onClick={onClick} disabled={disabled}>
			{text}
		</button>
	);
};

Button.propTypes = {
	text: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
	disabled: PropTypes.bool,
	customStyle: PropTypes.object,
};

Button.defaultProps = {
	customStyle: {},
	disabled: false,
};

export default Button;
