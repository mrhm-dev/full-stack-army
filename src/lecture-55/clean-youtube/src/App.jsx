import { Grid } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { Container } from '@mui/system';
import Navbar from './components/navbar';
import PlaylistCardItem from './components/playlist-card-item';
import usePlaylists from './hooks/usePlaylists';

const App = () => {
	const { playlists, error, getPlaylistById } = usePlaylists();

	const playlistArray = Object.values(playlists);

	console.log(playlists);
	console.log(error);

	return (
		<>
			<CssBaseline />
			<Container maxWidth={'lg'} sx={{ my: 16 }}>
				<Navbar getPlaylistById={getPlaylistById} />
				{playlistArray.length > 0 && (
					<Grid container alignItems="stretch">
						{playlistArray.map((item) => (
							<Grid item xs={12} md={6} lg={4} mb={2}>
								<PlaylistCardItem
									key={item.id}
									playlistThumbnail={item.playlistThumbnail}
									playlistTitle={item.playlistTitle}
									channelTitle={item.channelTitle}
								/>
							</Grid>
						))}
					</Grid>
				)}
			</Container>
		</>
	);
};

export default App;
