import { PropCompLvlThree } from "./passingProps";

// main / parent component ---------------------------------
export default function PropDemo(props) {
  // component data
  const carObj = {
    make: 'Mahindra',
    model: 'Kuv',
    variant: 'k6',
    feul: {
      type1: 'petrol',
      type2: 'cng',
    }
  }
  // destructure above object
  const {make, model, variant, feul: {type1, type2}} = carObj;
  // component markup below, that will render ---
  return (
    <div style={{border: "4px solid blue",}}>
      <h2>
        I have received your {props.msg}
        <PropCompLvlOne mk={make} model={model} vr={variant} tp1={type1} tp2={type2}/>
        {/* <span>{type1}</span> */}
      </h2>
    </div>
  );
}

// Child component ------------------------------------------
export function PropCompLvlOne(props) {
  return(
    <>
      <h3>
        Showing in child component {props.mk} {props.model} {props.tp1}
      </h3>
      <PropCompLvlTwo mk={props.mk} md={props.model} />
    </>
  );
}

// grand child ------------------------------------------------
function PropCompLvlTwo(props) {
  return(
    <>
      <h4>
        Showing prop values in grand child component {props.gmk} {props.gmd}
      </h4>
      {/* demo to pass inline object, inline array, function */}
      <PropCompLvlThree smk={props.mk} md={props.md} passObj= {{val1: 'one', val2:'two', }} passArray= {[1, 2, 3]} calc={calc}/>
      <h4>calculate = {calc(2,3)}</h4>
    </>
  );
}

const calc = function(x,y) {
  let result = 0;
  return result = x + y;
}