import React from 'react';
import Fileone from './fileone';
import ReactDOM from 'react-dom';

function Portal2Index() {
  return (
    ReactDOM.createPortal(
      <Fileone/>,
      document.getElementById('newportal')
    )
  );
}

export default Portal2Index;