import React from 'react';
import ReactDOM from 'react-dom/client';
import { StoreProvider } from 'easy-peasy';

import App from './App';
import store from './store';

ReactDOM.createRoot(document.getElementById('root')).render(
	<StoreProvider store={store}>
		<App />
	</StoreProvider>
);
