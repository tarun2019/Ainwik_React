import React from 'react';
import DynamicData from './dynamicData';

function GetData() {
  const arr = [
    {
      name: "Tarun",
      age: 23,
      course: 'reactjs'
    },
    {
      name: "Mukesh",
      age: 13,
      course: 'angular'
    }
  ];

  return (
    <div>
      <ul>
        {/* {arr.map((item) => <li>{item.name}</li>)} */}
        {arr.map((item, index) => <DynamicData name={item.name} index={index}/>)}
      </ul>
    </div>
  );
}

export default GetData;