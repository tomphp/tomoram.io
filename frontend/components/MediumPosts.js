'use strict';

import React from 'react';
import MediumLogo from '../images/medium.png';

class MediumPost extends React.PureComponent {
  static defaultProps = {
    title: null,
  };

  render() {
    return (
      <div className="medium-posts__post">
        <h3 className="medium-posts__post-title">
          <a href={this.props.url} target="_blank">{this.props.title}</a>
        </h3>
        <div className="medium-posts__post-subtitle">{this.props.subtitle}</div>
      </div>
    );
  }
}

function renderPostItem(post, index) {
  return (
    <li key={`medium-post-${index}`}>
      <MediumPost
        title={post.title}
        url={`https://cloudnative.ly/${post.slug}-${post.id}`}
        subtitle={post.subtitle}
      />
    </li>
  );
}

export default class MediumPosts extends React.PureComponent {
  static defaultProps = {
    posts: [],
  };

  render() {
    return <div className="medium-posts">
      <h2 className="medium-posts__title">
        <img src={MediumLogo} alt="Medium Posts"/>
      </h2>
      <ul className="medium-posts__post-list">
        {this.props.posts.map(renderPostItem)}
      </ul>
    </div>;
  }
}
