import {connect} from 'react-redux';
import WeatherPage from '../components/WeatherPage'

const mapStateToProps = (state) => {
  return {
    ...state.locations[state.selectedLocation]
  };
};

export default connect(
  mapStateToProps
)(WeatherPage);
