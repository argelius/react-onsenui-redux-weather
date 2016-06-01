import {connect} from 'react-redux';
import WeatherPage from '../components/WeatherPage'

const mapStateToProps = (state) => {
  return {
    ...state.locations[state.selectedLocation]
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WeatherPage);
