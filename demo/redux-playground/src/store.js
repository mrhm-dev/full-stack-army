import { createStore, action } from 'easy-peasy';

const counterModel = {
	value: 0,
	increment: action((state, payload) => (state.value += payload)),
	decrement: action((state, payload) => (state.value -= payload)),
};

const historyModel = {
	items: [],
	addHistory: action((state, payload) => {
		state.items.push({
			id: generateID(),
			action: payload.action,
			count: payload.count,
			time: new Date(),
		});
	}),
	clearHistory: action((state) => (state.items = [])),
};

const store = createStore({
	count: counterModel,
	history: historyModel,
});

let id = 1;
function generateID() {
	return id++;
}

export default store;
