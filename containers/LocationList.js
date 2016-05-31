import {connect} from 'react-redux';
import LocationList from '../components/LocationList'

const mapStateToProps = (state) => {
  return {
    locations: state.locations
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LocationList);
