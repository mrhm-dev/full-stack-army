import { createStore } from 'easy-peasy';
import favoritesModel from './favorites-model';
import playlistModel from './playlist-model';
import recentsModel from './recents-model';

const store = createStore({
	playlists: playlistModel,
	recents: recentsModel,
	favorites: favoritesModel,
});

export default store;
