import { useEffect } from 'react';
import { Grid, ThemeProvider, Typography } from '@mui/material';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { Container } from '@mui/system';
import { useStoreActions } from 'easy-peasy';
import Navbar from './components/navbar';
import PlaylistCardItem from './components/playlist-card-item';
import usePlaylists from './hooks/usePlaylists';

const playlistID = 'PL_XxuZqN0xVD0op-QDEgyXFA4fRPChvkl';

const HomePage = ({ playlistArray }) => {
	const playlist = useStoreActions((actions) => actions.playlist);

	useEffect(() => {
		playlist.getPlaylist(playlistID);
	}, []);

	return (
		<Container maxWidth={'lg'} sx={{ my: 16 }}>
			{playlistArray.length > 0 && (
				<Grid container alignItems='stretch'>
					{playlistArray.map((item) => (
						<Grid item xs={12} md={6} lg={4} mb={2}>
							<PlaylistCardItem
								key={item.playlistId}
								playlistId={item.playlistId}
								playlistThumbnail={item.playlistThumbnail}
								playlistTitle={item.playlistTitle}
								channelTitle={item.channelTitle}
							/>
						</Grid>
					))}
				</Grid>
			)}
		</Container>
	);
};

const PlayerPage = ({ playlists }) => {
	const { playlistId } = useParams();
	const current = playlists[playlistId];
	console.log('Current Course -->', current);

	if (!current) return;

	return (
		<Container maxWidth={'lg'} sx={{ my: 16 }}>
			<Typography variant='h2' align='center'>
				{current.playlistTitle}
			</Typography>
			<Typography variant='body1'>
				{current.playlistDescription}
			</Typography>
		</Container>
	);
};

const NotFound = () => (
	<Container maxWidth={'lg'} sx={{ my: 16 }}>
		<Typography variant='h2' align='center'>
			404 Page Not Found
		</Typography>
	</Container>
);

const App = () => {
	const { playlists, error, getPlaylistById } = usePlaylists();

	const playlistArray = Object.values(playlists);

	return (
		<BrowserRouter>
			<CssBaseline />
			<Navbar getPlaylistById={getPlaylistById} />
			<Routes>
				<Route
					path='/'
					element={<HomePage playlistArray={playlistArray} />}
				/>
				<Route
					path='/player/:playlistId'
					element={<PlayerPage playlists={playlists} />}
				/>
				<Route path='*' element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
