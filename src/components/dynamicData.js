import React from 'react';

function DynamicData(props) {
  return (
    <React.Fragment>
        <li key={props.index}>{props.name}</li>
    </React.Fragment>
  );
}

export default DynamicData;