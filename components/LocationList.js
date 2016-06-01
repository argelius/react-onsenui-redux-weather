import React, {PropTypes} from 'react'
import Location from './Location'

import {List} from 'react-onsenui';

const LocationList = ({locations, onRemoveLocation, onSelectLocation, navigator}) => (
  <List
    dataSource={Object.keys(locations).map((key) => locations[key])}
    renderRow={(location) =>
      <Location
        key={location.id}
        navigator={navigator}
        onRemoveLocation={onRemoveLocation}
        onSelectLocation={onSelectLocation}
        {...location}
      />
    }
  />
);

LocationList.propTypes = {
  locations: PropTypes.objectOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired).isRequired
};

export default LocationList
