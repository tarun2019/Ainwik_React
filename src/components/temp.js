// import React from "react";

import { useState } from "react";

// function declaration is prefered, as it supports JS hoisting. We can call function before declaring it.
function Counter() {
  const [counter, setCounter] = useState(0);

  const increament = () => {
    setCounter(counter + 1);
  }

  const decrement = () => {
    setCounter(counter - 1);
  }

  const myStyle = {
    color: "red",
    display: 'flex',
    justifyContent: 'center',
    padding: '50px',
    alignItems: 'center'
    // boxShadow: '10px 10px 5px 0px rgba(0,0,0,0.75)',
  }
  const btnStyle = {
    width: '50px',
    height: '50px'
  }
  return(
    <div style={{...myStyle}}>
      <button style={{...btnStyle}} onClick={()=>increament()}>+</button>
      <span style={{margin: '0 20px'}}>{counter}</span>
      <button style={{...btnStyle}}  onClick={()=>decrement()}>-</button>
    </div>
  );
}

export default Counter;