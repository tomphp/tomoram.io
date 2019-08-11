'use strict';

import React from 'react';
import HelloContainer from '../containers/HelloContainer';
import MediumPostsContainer from '../containers/MediumPostsContainer';

export default function App({apiUrl}) {
  return (
    <div className="app">
      <h1>Tom Oram</h1>
      <HelloContainer apiUrl={apiUrl} salutation="Hello"/>
      <MediumPostsContainer apiUrl={apiUrl}/>
    </div>
  );
}
