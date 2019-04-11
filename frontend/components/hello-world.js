'use strict'

import React from 'react';

export default class HelloWorld extends React.Component {
  render() {
    return (
      <div className="hello-world">
        Hello {this.props.name}
      </div>
    );
  }
}
