import React, {Component} from 'react';

const Flag = ({country, ...props}) => (
  <span
    {...props}
    className={`flag-icon flag-icon-${country}`}
  />
);

export default Flag;
