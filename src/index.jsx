import React from 'react';
import ReactDom from 'react-dom';

import App from './app';

import { applyMiddleware, createStore } from 'redux';
import { appReducer } from './reducers';

import { Provider } from 'react-redux';
import logger from 'redux-logger';

const appStore = createStore(appReducer, applyMiddleware(logger));

ReactDom.render(
	<Provider store={appStore}>
		<App />
	</Provider>
	,
	document.querySelector('main')
);
