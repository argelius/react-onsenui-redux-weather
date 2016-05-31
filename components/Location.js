import React, {PropTypes} from 'react'

import {ListItem} from 'react-onsenui';

import WeatherPage from './WeatherPage';

const Location = ({name, navigator}) => (
  <ListItem onClick={() => navigator.pushPage({component: WeatherPage})} tappable>
		{name}
  </ListItem>
)

Location.propTypes = {
  name: PropTypes.string.isRequired
}

export default Location
