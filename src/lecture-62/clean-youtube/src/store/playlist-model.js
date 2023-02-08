import { action, persist, thunk } from 'easy-peasy';
import getPlaylist from '../api';

const playlistModel = persist({
	items: [],
	id: '',
	title: '',
	description: '',
	thumbnail: '',
	channelId: '',
	channelTitle: '',
	setPlaylistData: action((state, payload) => {
		state = { ...payload };
		return state;
	}),
	getPlaylistData: thunk(async ({ setPlaylistData }, payload) => {
		const {
			playlistItems,
			playlistId,
			playlistTitle,
			playlistDescription,
			playlistThumbnail,
			channelId,
			channelTitle,
		} = await getPlaylist(payload);
		setPlaylistData({
			items: playlistItems,
			id: playlistId,
			title: playlistTitle,
			description: playlistDescription,
			thumbnail: playlistThumbnail,
			channelId,
			channelTitle,
		});
	}),
});

export default playlistModel;
