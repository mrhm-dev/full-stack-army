import { useEffect } from 'react';
import usePlaylists from './hooks/usePlaylists';

const App = () => {
	const { getPlaylistById, playlists } = usePlaylists();

	useEffect(() => {
		getPlaylistById('PL_XxuZqN0xVD0op-QDEgyXFA4fRPChvkl');
	}, []);

	console.log('Playlist', playlists);

	return <div>App</div>;
};

export default App;
