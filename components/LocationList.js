import React, {PropTypes} from 'react'
import Location from './Location'

import {List} from 'react-onsenui';

const LocationList = ({locations, navigator}) => (
  <List
    dataSource={locations}
    renderRow={(location) =>
      <Location
        key={location.id}
        navigator={navigator}
        {...location}
      />
    }
  />
);

LocationList.propTypes = {
  locations: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired).isRequired
};

export default LocationList
