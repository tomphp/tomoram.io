'use strict';

import React from 'react';
import {render} from 'react-dom';

import {createStore} from 'redux';
import app from './reducers/app';
import {Provider} from 'react-redux';
import App from './components/App';

const store = createStore(app);

const wrapper = document.getElementById('content');
render(
    <Provider store={store}>
      <App />
    </Provider>,
    wrapper
);
