import React, { Component } from "react";
// import images ---
import classSyntaxImage from "../images/ClassComp1.png";
import constructorImage from "../images/classConstructorSyntax.png";

class ClassComponent extends Component {
  // constructor function will be called when the component gets initiated.
  constructor(){
    super();
    // state can be defined outside constructor too, but it is standard to define state inside constructor.
    this.state = {
      name: "State",
      type: "Object",
      sequals: 2 
    };
  }
  changeFields = () => {
      this.setState({name : "Batman"});
      this.setState({type : 'DC'});
  }

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

        {/* class constructor -------------- */}
        <div style={classConstructorStyle}>
          <h3>Constructor</h3>
          <ol>
            <li>Constructor function will be called when the component gets initiated.</li>
            <li>Inside constructor we call super() method as first statemen,  which executes the parent component's constructor function, and your component has access to all the functions of the parent component.</li>
            <li>The constructor function is where you initiate the component's state.</li>
          </ol>
          <h3>Constructor Syntax :</h3>
          <img src={constructorImage} alt="constructorImage" />
        </div>

        {/* state demonstration below ------------ */}
        <div>
          <p>Hi I am {this.state.name}</p>
          <p>Type of state is {this.state.type}</p>
        </div>
      </div>
    )
  }
}

export default ClassComponent;