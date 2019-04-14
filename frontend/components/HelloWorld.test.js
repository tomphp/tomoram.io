'use strict';

import React from 'react';
import Enzyme from 'enzyme';
import HelloWorld from './HelloWorld';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

test('class name', () => {
  const component = Enzyme.shallow(<HelloWorld/>);

  expect(component.hasClass('hello-world')).toBe(true);
});

test('initial state', () => {
  const component = Enzyme.shallow(<HelloWorld/>);

  const salutation = component.find('.salutation');
  const button = component.find('.get-subject');
  const subject = component.find('.subject');

  expect(salutation.text()).toBe('Hello');
  expect(button.text()).toBe('who?');
  expect(subject.exists()).toBe(false);
});

test('custom salutation', () => {
  const component = Enzyme.shallow(<HelloWorld salutation='Yo'/>);

  const salutation = component.find('.salutation');

  expect(salutation.text()).toBe('Yo');
});

test('subject', () => {
  const component = Enzyme.shallow(<HelloWorld subject='friend'/>);

  const subject = component.find('.subject');
  const button = component.find('.get-subject');

  expect(subject.text()).toBe('friend');
  expect(button.exists()).toBe(false);
});

test('setSubject', (done) => {
  const component = Enzyme.shallow(<HelloWorld updateSubject={done}/>);

  const button = component.find('.get-subject');

  button.simulate('click');
});
