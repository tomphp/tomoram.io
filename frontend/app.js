'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import HelloWorld from './components/hello-world';

const wrapper = document.getElementById('content');
wrapper ? ReactDOM.render(<HelloWorld name="World" />, wrapper) : false;
