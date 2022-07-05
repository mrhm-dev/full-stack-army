export const isObjEmpty = (obj) => {
	return Object.keys(obj).length === 0;
};

export const deepClone = (obj) => {
	return JSON.parse(JSON.stringify(obj));
};
