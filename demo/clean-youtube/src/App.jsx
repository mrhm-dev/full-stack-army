import { useEffect } from 'react';
import getPlaylist from './api';
import usePlaylists from './hooks/usePlaylists';

const App = () => {
	const { getPlaylistById, playlists } = usePlaylists();

	useEffect(() => {
		getPlaylistById('PL_XxuZqN0xVDr08QgQHljCecWtA4jBLnS');
	}, []);

	console.log('Playlist', playlists);

	return (
		<div>
			<h1>Hello World</h1>
		</div>
	);
};

export default App;
