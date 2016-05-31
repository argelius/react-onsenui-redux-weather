import React from 'react';
import {connect} from 'react-redux';
import {findDOMNode} from 'react-dom';

import {
  AlertDialog,
  Button,
  Input
} from 'react-onsenui';

import {closeDialog} from '../actions';
import {addLocation} from '../actions';

const AddLocationDialog = ({isOpen, dispatch}) => {
  let input, disabled = false;

	const handleButtonClick = () => {
		const node = findDOMNode(input);

		if (node.value.length > 0) {
			dispatch(addLocation({name: node.value}));
			node.value = '';
			dispatch(closeDialog());
		};
	};

  return (
    <AlertDialog isOpen={isOpen} isCancelable={true} onCancel={() => dispatch(closeDialog())}>
			<div className="alert-dialog-title">Add a location</div>
			<div className="alert-dialog-content">
				<Input
					modifier='underbar'
					ref={node => input = node}
					placeholder='Location name' float
				 />
			</div>
			<div className="alert-dialog-footer">
				<button onClick={() => dispatch(closeDialog())} className="alert-dialog-button">
					Cancel
				</button>
				<button onClick={handleButtonClick} className="alert-dialog-button">
					OK
				</button>
			</div>
    </AlertDialog>
  );
};

const mapStateToProps = (state) => {
  return {
    isOpen: state.dialog.open
  }
};

export default connect(mapStateToProps)(AddLocationDialog);
