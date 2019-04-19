'use strict';

import React from 'react';
import Enzyme from 'enzyme';
import App from './App';
import HelloContainer from '../containers/HelloContainer';

test('class name', () => {
  const component = Enzyme.shallow(<App apiUrl='http://example.com'/>);

  expect(component.type()).toBe('div');
  expect(component.hasClass('app')).toBe(true);

  const helloWorld = component.find(HelloContainer);

  expect(helloWorld.props().apiUrl).toBe('http://example.com');
});
