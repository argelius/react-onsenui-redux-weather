import {connect} from 'react-redux';
import LocationList from '../components/LocationList'

import {removeLocation, selectLocation} from '../actions';

const mapStateToProps = (state) => {
  return {
    locations: state.locations
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRemoveLocation: (id) => dispatch(removeLocation(id)),
    onSelectLocation: (id) => dispatch(selectLocation(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LocationList);
