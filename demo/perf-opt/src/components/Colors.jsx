import classes from './colors.module.css';

const ColorItem = ({ code, id, removeColor, children }) => {
	return (
		<div
			className={classes.color}
			style={{ background: code }}
			onClick={() => removeColor(id)}
		>
			{children}
		</div>
	);
};

const Colors = ({ colorList, removeColor }) => {
	return (
		<div className={classes.parent}>
			{colorList.map((color, index) => {
				const key = color.id;
				return (
					<ColorItem
						key={key}
						id={color.id}
						code={color.code}
						removeColor={removeColor}
					>
						{index.toFixed(2)}
					</ColorItem>
				);
			})}
		</div>
	);
};

export default Colors;
