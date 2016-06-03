import React from 'react';
import {connect} from 'react-redux';

import {List} from 'react-onsenui';

import Location from './Location';

const LocationList = ({locations, navigator}) => (
  <List
    dataSource={Object.keys(locations).map((key) => locations[key])}
    renderRow={(location) =>
      <Location
        key={location.id}
        navigator={navigator}
        {...location}
      />
    }
  />
);

const mapStateToProps = (state) => ({
  locations: state.locations
});

export default connect(mapStateToProps)(LocationList);
