import React, { Component } from "react";
// import images ---
import classSyntaxImage from "../../images/ClassComp1.png";
import constructorImage from "../../images/classConstructorSyntax.png";

class ClassComponent extends Component {
  
  // component markup below that will render ---
  render() {
    const classConstructorStyle = {
      margin: '24px 0',
      padding: '24px',
      backgroundColor: 'antiquewhite',
    }

    return(
      <div>
        <div>
          <h3>Rules to create a class component</h3>
          {/* inside JSX comment must be wrapped inside curly braces, single line comment is not supported  */}
          <ol>
            <li>Component's name must start with an upper case letter.</li>
            <li>Component has to extends "React.Component"</li>
            <li>Above extend gives your component access to React.Component's functions</li>
            <li>Component also requires a render() method, this method returns HTML.</li>
          </ol>
          <h3>Class Syntax :</h3>
          {/* below image demonstrates syntax of class comp on browser */}
          <img src={classSyntaxImage} alt="classSyntaxImage" />
        </div>
      </div>
    )
  }
}

export default ClassComponent;