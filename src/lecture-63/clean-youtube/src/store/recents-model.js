import { persist } from 'easy-peasy';

const recentsModel = persist({
	items: [],
	addToRecents: action((state, playlistId) => {
		state.items.unshift(playlistId);
		state.items = state.items.slice(0, 5);
	}),
});

export default recentsModel;
