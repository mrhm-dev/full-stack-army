const Section = ({ title, items }) => {
	const itemsArray = items.map((item) => <li>{item}</li>);
	return (
		<section>
			<h1>{title}</h1>
			<ul>{itemsArray}</ul>
		</section>
	);
};

export default Section;
