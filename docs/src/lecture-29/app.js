window.onload = function () {
	main();
};

function main() {
	const app = Container([
		Text('h1', 'Hello World'),
		Text('p', 'This is a simple paragraph'),
		Container([Text('h3', 'WOW'), Text('h3', 'NICE')], {
			display: 'flex',
			gap: '2rem',
		}),
	]);
	document.getElementById('root').appendChild(app);
}

function Container(children, style = {}) {
	const div = document.createElement('div');
	Object.keys(style).map((key) => {
		div.style[key] = style[key];
	});
	children.forEach((child) => div.appendChild(child));

	return div;
}

function Text(tag, value) {
	const text = document.createElement(tag);
	text.innerText = value;
	return text;
}
