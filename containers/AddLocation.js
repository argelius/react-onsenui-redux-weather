import {connect} from 'react-redux';

import AddLocation from '../components/AddLocation'
import {openDialog} from '../actions';

const mapDispatchToProps = (dispatch) => {
  return {
    onButtonClick: () => {
      dispatch(openDialog());
    }
  };
};

export default connect(
  undefined,
  mapDispatchToProps
)(AddLocation);
