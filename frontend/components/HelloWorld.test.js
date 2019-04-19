'use strict';

import React from 'react';
import Enzyme from 'enzyme';
import HelloWorld from './HelloWorld';

describe('components/HelloWorld', () => {
  describe('without any props', () => {
    const component = Enzyme.shallow(<HelloWorld/>);

    test('is wrapped in a div', () => {
      expect(component.type()).toBe('div');
    });

    test('class name is hello-world', () => {
      expect(component.hasClass('hello-world')).toBe(true);
    });

    test('default salutation is Hello', () => {
      const salutation = component.find('.salutation');
      expect(salutation.text()).toBe('Hello');
    });

    test('who? button is displayed', () => {
      const button = component.find('.get-subject');
      expect(button.text()).toBe('who?');
    });

    test('salutation is not shown', () => {
      const subject = component.find('.subject');
      expect(subject.exists()).toBe(false);
    });
  });

  describe('with custom salutation', () => {
    const component = Enzyme.shallow(<HelloWorld salutation='Yo'/>);

    test('custom salutation', () => {
      const salutation = component.find('.salutation');
      expect(salutation.text()).toBe('Yo');
    });
  });


  describe('with subject set', () => {
    const component = Enzyme.shallow(<HelloWorld subject='friend'/>);

    test('subject is displayed', () => {
      const subject = component.find('.subject');
      expect(subject.text()).toBe('friend');
    });

    test('button is not displyed', () => {
      const button = component.find('.get-subject');
      expect(button.exists()).toBe(false);
    });

    test('a space is displayed between salutation and subject', () => {
      expect(component.text()).toBe('Hello friend');
    });
  });

  describe('clicking the button', () => {
    test('clicking the button triggers the setSubject callback', (done) => {
      const component = Enzyme.shallow(<HelloWorld updateSubject={done}/>);
      const button = component.find('.get-subject');
      button.simulate('click');
    });
  });
});
