import React from 'react';
import {findDOMNode} from 'react-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {
  AlertDialog,
  Input
} from 'react-onsenui';

import * as Actions from '../actions';

const AddLocationDialog = ({isOpen, actions}) => {
  let input;

  const handleButtonClick = () => {
    const node = findDOMNode(input);

    if (node.value.length > 0) {
      actions.addLocationAndFetchWeather(node.value);
      node.value = '';
      actions.closeDialog();
    };
  };

  return (
    <AlertDialog isOpen={isOpen} isCancelable={true} onCancel={actions.closeDialog}>
			<div className='alert-dialog-title'>Add a location</div>
			<div className='alert-dialog-content'>
				<Input
					modifier='underbar'
					ref={node => (input = node)}
					placeholder='Location name' float
        />
			</div>
			<div className='alert-dialog-footer'>
				<button onClick={actions.closeDialog} className='alert-dialog-button'>
					Cancel
				</button>
				<button onClick={handleButtonClick} className='alert-dialog-button'>
					OK
				</button>
			</div>
    </AlertDialog>
  );
};

const mapStateToProps = (state) => ({
  isOpen: state.dialog.open
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(Actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(AddLocationDialog);
