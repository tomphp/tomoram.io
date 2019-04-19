'use strict';

import React from 'react';
import HelloContainer from '../containers/HelloContainer';

export default function App({apiUrl}) {
  return (
    <div className="app">
      <HelloContainer apiUrl={apiUrl} salutation="Hello"/>
    </div>
  );
}
