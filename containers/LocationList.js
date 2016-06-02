import {connect} from 'react-redux';
import LocationList from '../components/LocationList'

const mapStateToProps = (state) => {
  return {
    locations: state.locations
  };
};

export default connect(mapStateToProps)(LocationList);
