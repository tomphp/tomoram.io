'use strict';

import React from 'react';
import Enzyme from 'enzyme';
import HelloWorld from './HelloWorld';

describe('components/HelloWorld', () => {
  describe('without any props', () => {
    const component = Enzyme.shallow(<HelloWorld/>);

    it('is wrapped in a div', () => {
      expect(component.type()).toBe('div');
    });

    it('has a class of hello-world', () => {
      expect(component.hasClass('hello-world')).toBe(true);
    });

    it('uses Hello as the default salutation', () => {
      const salutation = component.find('.salutation');
      expect(salutation.text()).toBe('Hello');
    });

    it('displays the "who?" button', () => {
      const button = component.find('.get-subject');
      expect(button.text()).toBe('who?');
    });

    it('does not show salutation', () => {
      const subject = component.find('.subject');
      expect(subject.exists()).toBe(false);
    });
  });

  describe('with custom salutation', () => {
    const component = Enzyme.shallow(<HelloWorld salutation='Yo'/>);

    it('shows the salutation', () => {
      const salutation = component.find('.salutation');
      expect(salutation.text()).toBe('Yo');
    });
  });


  describe('with subject set', () => {
    const component = Enzyme.shallow(<HelloWorld subject='friend'/>);

    it('show the subject', () => {
      const subject = component.find('.subject');
      expect(subject.text()).toBe('friend');
    });

    it('does not display the button', () => {
      const button = component.find('.get-subject');
      expect(button.exists()).toBe(false);
    });

    it('separates the salutation and subject with a space', () => {
      expect(component.text()).toBe('Hello friend');
    });
  });

  describe('clicking the button', () => {
    it('triggers the setSubject callback', (done) => {
      const component = Enzyme.shallow(<HelloWorld updateSubject={done}/>);
      const button = component.find('.get-subject');
      button.simulate('click');
    });
  });
});
