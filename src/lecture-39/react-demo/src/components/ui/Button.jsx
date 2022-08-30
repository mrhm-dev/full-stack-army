import PropTypes from 'prop-types';

const Button = ({ text, onClick, disabled, customStyle }) => {
	const disabledStyle = {
		backgroundColor: '#999',
		color: '#333',
		cursor: 'not-allowed',
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
	return (
		<button style={style} onClick={onClick} disabled={disabled}>
			{text}
		</button>
	);
};

Button.propTypes = {
	onClick: PropTypes.func.isRequired,
	text: PropTypes.string.isRequired,
	disabled: PropTypes.bool,
	customStyle: PropTypes.object,
};

Button.defaultProps = {
	customStyle: {},
	disabled: false,
};

export default Button;
