'use strict';

import {connect} from 'react-redux';
import MediumPosts from '../components/MediumPosts';
import {fetchPosts} from '../actions/medium_posts';

function mapStateToProps(state, ownProps) {
  return {posts: state.mediumPosts.posts};
}

function mapDispatchToProps(dispatch, ownProps) {
  dispatch(fetchPosts(ownProps.apiUrl)); // Test me
  return {};
}

const MediumPostsContainer = connect(
    mapStateToProps,
    mapDispatchToProps)(MediumPosts);

export default MediumPostsContainer;
