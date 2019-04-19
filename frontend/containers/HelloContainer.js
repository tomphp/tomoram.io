'use strict';

import {setSubject} from '../actions/hello';
import {connect} from 'react-redux';
import HelloWorld from '../components/HelloWorld';

function mapStateToProps(state, ownProps) {
  return {subject: state.hello};
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    updateSubject: () => {
      dispatch(setSubject(ownProps.apiUrl));
    },
  };
}

const HelloContainer = connect(mapStateToProps, mapDispatchToProps)(HelloWorld);

export default HelloContainer;
