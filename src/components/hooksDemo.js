import React, { useEffect, useState } from 'react';

function HooksDemo() {
  const [state, setState] = useState('Tarun');
  const [counter, setCounter] = useState(0);

  const [inputVal, setInputVal] = useState('srt');

  const handleCounter = () => {
    setCounter(counter + 1);
  }

  const handleChange = (e) => {
    setInputVal(e.target.value);
  }

  // useEffect(
  //   ()=>{alert("counter effected")}
  // );
  // !!! 
  document.title = "Tarun's Page";
  return (
    <div>
      {/* <h2>Tarun</h2> */}
      <button onClick={()=>setState("Mukesh")}>{state}</button>
      <button onClick={handleCounter}>{counter}</button>

      <form>
        <label>Name :</label>
        <input type='text' placeholder='name' name='' value={inputVal} onChange={handleChange}/>
        <h4>{inputVal}</h4>
      </form>
    </div>
  );
}

export default HooksDemo;