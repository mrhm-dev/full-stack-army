import { action, createStore } from 'easy-peasy';

// Helper functions
let id = 1;
function generateId() {
	return id++;
}

const counterModel = {
	value: 0,
	increment: action((state, payload) => (state.value += payload)),
	decrement: action((state, payload) => (state.value -= payload)),
};

const historyModel = {
	items: [],
	addHistory: action((state, payload) => {
		state.items.push({
			id: generateId(),
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

export default store;

// * Implementing Redux and react-redux

/*
import { combineReducers, createStore } from 'redux';

// action types
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD_TO_HISTORY = 'ADD_TO_HISTORY';
export const CLEAR_HISTORY = 'CLEAR_HISTORY';

// actions
export const increment = (payload) => ({
	type: INCREMENT,
	payload,
});

export const decrement = (payload) => ({
	type: DECREMENT,
	payload,
});

export const addHistory = (history) => ({
	type: ADD_TO_HISTORY,
	payload: {
		id: generateId(),
		action: history.action,
		count: history.count,
		time: new Date(),
	},
});

export const clearHistory = (history) => ({
	type: CLEAR_HISTORY,
});

// Reducers
const countReducer = (state = 0, action) => {
	switch (action.type) {
		case INCREMENT:
			return state + action.payload;
		case DECREMENT:
			return state - action.payload;
		default:
			return state;
	}
};

const historyReducer = (state = [], action) => {
	switch (action.type) {
		case ADD_TO_HISTORY:
			return [...state, action.payload];
		case CLEAR_HISTORY:
			return [];
		default:
			return state;
	}
};

// Store
const store = createStore(
	combineReducers({
		count: countReducer,
		history: historyReducer,
	})
);

export default store;
*/
