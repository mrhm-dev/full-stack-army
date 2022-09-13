import { createStore } from 'easy-peasy';
import playlistModel from './playlist-model';

const store = createStore({
	playlist: playlistModel,
});

export default store;
