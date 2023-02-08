import { StoreProvider } from 'easy-peasy';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import store from './store';

ReactDOM.createRoot(document.getElementById('root')).render(
	<StoreProvider store={store}>
		<App />
	</StoreProvider>
	/*
  <React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
  */
);
