import shortid from 'shortid';

const BASE_COLORS = [
	'#800000',
	'#9A6324',
	'#808000',
	'#469990',
	'#bfef45',
	'#000075',
	'#911eb4',
	'#4363d8',
	'#f58231',
	'#fabed4',
	'#fffac8',
	'#42d4f4',
	'#dcbeff',
	'#3cb44b',
	'#e6194B',
];

const colorList = [];
for (let i = 0; i < 2000; i++) {
	const index = parseInt(Math.random() * 1000) % BASE_COLORS.length;
	colorList.push({
		code: BASE_COLORS[index],
		id: shortid(),
	});
}

export default colorList;
