const TS = require('rollup-plugin-typescript2');

module.exports = {
	input: [
		'src/index.ts',
		'src/atoms/Button/index.ts',
		'src/atoms/Color/index.ts',
		'src/atoms/Text/index.ts',
	],
	output: {
		dir: 'lib',
		format: 'esm',
		sourcemap: true,
		preserveModules: true,
	},
	plugins: [TS()],
	external: ['react', '@ds.e/scss/lib/Button.css'],
};
