'use strict';

import React from 'react';

export default class HelloWorld extends React.Component {
  render() {
    return (
      <div className="hello-world">
        {this.props.salutation} {this.subject()}
      </div>
    );
  }

  subject() {
    if (this.props.subject === null) {
      return <button onClick={() => this.props.updateSubject()}>who?</button>;
    }

    return <span>{this.props.subject}</span>;
  }
}
