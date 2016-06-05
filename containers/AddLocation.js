import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {platform} from 'onsenui';

import * as Actions from '../actions';
import AddLocationDialog from './AddLocationDialog';

import {
  Fab,
  Icon,
  Button
} from 'react-onsenui';

const AddLocation = ({actions}) => {
  let button;

  if (platform.isAndroid()) {
    button = (
      <Fab
      onClick={actions.openDialog}
      ripple
      position='bottom right'>
      <Icon icon='md-plus' />
      </Fab>
    );
  } else {
    button = (
      <Button onClick={actions.openDialog} modifier='large quiet'>+ ADD LOCATION</Button>
    );
  }

  return (
    <div>
    {button}
    <AddLocationDialog />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(Actions, dispatch)
});

export default connect(
  undefined,
  mapDispatchToProps
)(AddLocation);
