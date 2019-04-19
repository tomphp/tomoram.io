'use strict';

import React from 'react';
import HelloContainer from '../containers/HelloContainer';

const App = (apiUrl) => (
  <div>
    <HelloContainer apiUrl={apiUrl} salutation="Hello"/>
  </div>
);

export default App;
