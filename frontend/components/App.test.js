'use strict';

import React from 'react';
import Enzyme from 'enzyme';
import App from './App';
import HelloContainer from '../containers/HelloContainer';

describe('components/App', () => {
  const component = Enzyme.shallow(<App apiUrl='http://example.com'/>);

  it('is a div', () => {
    expect(component.type()).toBe('div');
  });

  it('has a class of "app"', () => {
    expect(component.hasClass('app')).toBe(true);
  });

  it('passes the apiUrl to the HelloContainer', () => {
    const helloWorld = component.find(HelloContainer);

    expect(helloWorld.props().apiUrl).toBe('http://example.com');
  });
});
