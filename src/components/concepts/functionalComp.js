// #1. How to create/ define a functional component.
// #2. export default  vs  named export  vs  export as  vs  export * as 
// export default prefix is a standard JavaScript syntax). It lets you mark the main function in a file 

// Notice I have commented React import, as it not required for creating functional comps
// import React from 'react';

import declarationSyntaxImg from "../../images/FunDeclarationSyntax.png";
import expressionSyntaxImg from '../../images/funExpSyntax.png';
import arrowCompSyntaxImage from "../../images/ArrowCompSyntax.PNG";

// 
export default function FunDeclaration() {
  return (
    <>
      <p>The simplest way to define a component is to write a function.</p>
      {/* Function declaration / statement ---- */}
      <h3>Function Declaration</h3>
      <ol>
        <li>To declare a function, you use the function keyword and specify a name for the function.</li>
        <li>A function declaration is a named function.</li>
        <li>A function declaration also known as a function statement.</li>
        <li>Component created using function declaration is the standard.
          As hoisting is only possible for declarations. We can call function before declaring it.</li>
        <li>These are executed before any other code.</li>
      </ol>
      <h3>Function Declaration Syntax :</h3>
      <br/><img src={declarationSyntaxImg} alt="FunDeclarationSyntax" /><br/><br/>
      <h2 style={{color: 'red'}}>Note: React prefers to create functional component as function statement/declaration</h2>
    </>
  );
}

// function expression,
const FunExpression = function() {
  // component markup below that will render ---
  return (
    <>
      <h3>Function Expression</h3>
      <ol>
        <li>A function expression is an anonymous function.</li>
        <li>That is defined at the point where it is used.</li>
        <li>Function expressions can be stored in a variable assignment.</li>
        <li>Function expressions load and execute only when the program interpreter reaches the line of code.</li>
        <li>The function in the function expression can be accessed only after the function definition.</li>
      </ol>
      <h3>Function Expression Syntax :</h3>
      <img src={expressionSyntaxImg} alt="funExpSyntax" />
      <h2 style={{color: 'red'}}>Note: React prefers to create functional component as function statement/declaration</h2>
    </>
  );
}

// Arrow function, 
const ArrowFunction = () => {
  // component markup below that will render ---
  return (
    <>
      <h3>Arrow Function</h3>
      <ol>
        <li>Arrow functions allow us to write shorter function syntax</li>
        <li>Use when you need to bind this to a method</li>
        <li>Use when you want a method to be called on a component's props</li>
        <li>Use when you want to use a callback function</li>
      </ol>
      <h3>Arrow Function Syntax :</h3>
      <img src={arrowCompSyntaxImage} alt="ArrowCompSyntax" />
      <h2 style={{color: 'red'}}>Note: React prefers to create functional component as function statement/declaration</h2>
    </>
  );
}

export {FunExpression as ExpressionComp, ArrowFunction};