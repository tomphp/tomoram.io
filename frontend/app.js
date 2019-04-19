'use strict';

import 'babel-polyfill'; // for cross-fetch

import React from 'react';
import thunkMiddleware from 'redux-thunk';
import {render} from 'react-dom';
import {applyMiddleware, createStore} from 'redux';
import app from './reducers/app';
import {Provider} from 'react-redux';
import App from './components/App';

const store = createStore(app, applyMiddleware(thunkMiddleware));

const content = document.createElement('div');
content.setAttribute('id', 'content');
document.body.appendChild(content);

const wrapper = document.getElementById('content');
render(
    <Provider store={store}>
      <App apiUrl={API_URL} />
    </Provider>,
    wrapper
);
