import { action, persist } from 'easy-peasy';

const favoritesModel = persist({
	items: [],
	addToFavorites: action((state, playlistId) => {
		state.items.push(playlistId);
	}),
	removeFromFavorites: action((state, playlistId) => {
		state.items = state.items.filter((pid) => playlistId !== pid);
	}),
});

export default favoritesModel;
