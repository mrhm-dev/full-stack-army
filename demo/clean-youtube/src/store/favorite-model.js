import { action, persist } from 'easy-peasy';

const favoriteModel = persist({
	items: [],
	addToFavorite: action((state, playlistId) => {
		state.items.push(playlistId);
	}),
	removeFromFavorite: action((state, playlistId) => {
		state.items = state.items.filter((pId) => playlistId != pId);
	}),
});

export default favoriteModel;
