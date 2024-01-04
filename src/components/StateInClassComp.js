import { Component } from "react";
// import images -----
import stateSyntaxImage from "../images/classConstructorSyntax.png";

class StateInClassComp extends Component {

  constructor(){
    super();
    this.state = {
      name: 'Honey Singh',
      type: 'singer',
      projects: 20
    }
    // 3rd approach to bind method
    // this.changeFields = this.changeFields.bind(this);
  }

  changeFields() {
    this.setState({name: 'Remo'});
    this.setState({type: 'dancer'});
  }

  render() {
    return(
      // below is the demo of "inline style" ---------
      <div>
        <h3>State</h3>
        <ol>
          <li>State is the object, where you store property values that belongs to the component.</li>
          <li>When the state object changes, the component re-renders.</li>
          <li>Refer to the state object anywhere in the component by using the this.state.propertyname.</li>
          <li>To change a value in the state object, use the this.setState() method.</li>
        </ol>
        <h3>State Syntax :</h3>
        <img src={stateSyntaxImage} alt="stateSyntaxImage" />

        
        {/* JS expressions - {} */}
        <p>Artist's name: {this.state.name}</p>
        <p>Artist's type: {this.state.type}</p>
        <p>Artist's projects : {this.state.projects}</p>
        {/* 1st approach to bind method */}
        <button onClick={()=> this.changeFields()}>Change fields</button>
        {/* 2nd approach to bind method */}
        {/* <button onClick={this.changeFields.bind(this)}>Change fields</button> */}
        {/* 3rd approach to bind method, goto constructor method */}
        {/* <button onClick={this.changeFields}>Change fields</button> */}
        {/* change state inline, below */}
        <button onClick={() => this.setState({projects: 30})}>Change project count</button>
      </div>
    );
  }
};

export default StateInClassComp;