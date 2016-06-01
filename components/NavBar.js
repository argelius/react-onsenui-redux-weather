import React, {Component} from 'react';

import {
  Toolbar,
  BackButton
} from 'react-onsenui';

const NavApp = ({title, navigator, backButton}) => {
  return (
    <Toolbar>
      <div className='left'>
        {backButton ? <BackButton onClick={() => navigator.popPage()}>Back</BackButton> : null}
      </div>
      <div className='center'>{title}</div>
    </Toolbar>
  );
};

export default NavApp;
