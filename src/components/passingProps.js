export function PropCompLvlThree(props) {
  const copyObj = props.passObj;
  const copyArray = props.passArray;
  // const {cv1, cv2} = props.passObj;
  return(
    <div style={{border: "4px solid red",}}>super child component on separate file
      <h5>
        Prop drilling to level 2 ( passed to another file ){props.smk} {props.smd}
      </h5>
      {/* received inline object */}
      <h5>Inline object received as props {copyObj.val1}, {copyObj.val2}</h5>
      {/* <h5>Data received from inline object {cv1}, {cv2}</h5> */}
      {/* received inline array, function */}
      <h5>Inline array received as props {copyArray[0]}, {copyArray[1]}</h5>
      {/* received function */}
      <h5>function called as prop : {props.calc(7,9)}</h5>
    </div>
  );
}