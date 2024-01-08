import { useState } from 'react';
import useStateSyntax  from '../../images/useStateSyntax.png';

export default function StateHook () {
  const [count, setCount] = useState(0);
  const [obj, setObj] = useState({
    fname: 'Tarun',
    lname: 'Chauhan',
    designation: 'SSE',
    location: 'Greno',
  });
  const updateObj = () => {
    setObj(
      previousState  => {
        return {...previousState , location:'Pune'}
      }
    );
  }
  return(
    <>
      <p>
        <b>useState </b>accepts an initial state and returns two values:<br/>
        1. The current state.<br/>
        2. A function that updates the state.
      </p>
      <h4>Points to remeber :</h4>
      <ol>
        <li>State can be used to keep track of strings, numbers, booleans, arrays, objects, and any combination of these!</li>
        <li>We could create multiple state Hooks to track individual values.</li>
        <li>Or, we can just use one state and include an object instead!</li>
      </ol>
      <h4>Syntax :</h4>
      <img src={useStateSyntax} alt="useStateSyntax" /><br/><br/>
      {/* how to use and update state  */}
      <h4>State demonstration ( as individual values )</h4>
      <p>{count} hits on button</p>
      <button type='button' onClick={()=>setCount(count + 1)}>Increament</button>
      &nbsp;&nbsp;<button onClick={()=>setCount(0)}>Reset</button>
      &nbsp;&nbsp;<button type='button' onClick={()=>setCount(count - 1)}>Decrement</button>
      <br/><br/>
      {/* Another demonstration with object ------- */}
      <h4>Candidate Detail ( State demonstration as Object ):</h4>
      <p>{obj.fname + " " + obj.lname} is {obj.designation} in {obj.location} office </p>
      {/* updating Objects and Array in state ----- */}
      {/* When state is updated, the entire state gets overwritten. */}
      <button onClick={updateObj}>Transfer</button>
    </>
  );
}