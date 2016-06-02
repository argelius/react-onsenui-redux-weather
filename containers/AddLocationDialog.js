import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import AddLocationDialog from '../components/AddLocationDialog';
import * as Actions from '../actions';

const mapStateToProps = (state) => {
  return {
    isOpen: state.dialog.open
  }
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddLocationDialog);
