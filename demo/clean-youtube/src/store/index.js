import { createStore } from 'easy-peasy';
import playlistModel from './playlist-model';
import favoriteModel from './favorite-model';
import recentModel from './recent-model';

const store = createStore({
	playlists: playlistModel,
	favorites: favoriteModel,
	recents: recentModel,
});

export default store;
