import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Location from '../components/Location'

import * as Actions from '../actions';

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
};

export default connect(
  undefined,
  mapDispatchToProps
)(Location);
