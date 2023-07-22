const fs = require('fs');
const path = require('path');
const sass = require('sass');

/**
 * compile any scss file to css
 * @param {string} src source file;
 * @param {string} output output file
 */
const compile = (src, output) => {
	const result = sass.compile(path.resolve(src), {
		style: 'expanded',
		verbose: true,
	});

	fs.writeFileSync(path.resolve(output), result.css);
};

// compile the global css
compile('src/global.scss', 'lib/global.css');

/**
 * Get All Components from atoms, molecules and organisms
 * @returns Object[] return array of object containing src and output
 */
const getComponents = () => {
	let allComponents = [];

	const types = ['atoms', 'molecules', 'organisms'];

	types.forEach((type) => {
		const allFiles = fs.readdirSync(`src/${type}`).map((file) => ({
			src: `src/${type}/${file}`,
			output: `lib/${file.slice(0, -5)}.css`,
		}));

		allComponents = [...allComponents, ...allFiles];
	});

	return allComponents;
};

// compile components
getComponents().forEach((component) =>
	compile(component.src, component.output)
);
