'use strict';

import React from 'react';
import Enzyme from 'enzyme';
import MediumPosts from './MediumPosts';

describe('<MediumPosts/>', () => {
  const component = Enzyme.render(<MediumPosts posts={[]}/>);

  it('matches the snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it('has block class of medium-posts', () => {
    expect(component.hasClass('medium-posts')).toBe(true);
  });
});
