'use strict';

import React from 'react';

export default class HelloWorld extends React.Component {
  static defaultProps = {
    salutation: 'Hello',
    subject: null,
  };

  render() {
    return (
      <div className="hello-world">
        <span className="salutation">{this.props.salutation}</span>
        {this.subject()}
      </div>
    );
  }

  subject() {
    if (this.props.subject === null) {
      return <button
        className="get-subject"
        onClick={() => this.props.updateSubject()}>who?</button>;
    }

    return <span className="subject">{this.props.subject}</span>;
  }
}
