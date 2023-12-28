import React, { Component } from "react";

class ClassComponent extends Component {
  // state can be defined outside constructor too, but it is standard to define state inside constructor.
  constructor(){
    super();
    this.state = {
      name: "Deadpool",
      studio: "Marvel",
      sequals: 2 
    };
  }
  changeFields = () => {
      this.setState({name : "Batman"});
      this.setState({studio : 'DC'});
  }

  // component markup below that will render ---
  render() {
    return(
      <div style={{color: 'indigo', fontSize: '26px'}}>
        <h3>I am Class Component</h3>
        {/* inside JSX comment must be wrapped inside curly braces, single line comment is not supported  */}
        <p>Hi I am {this.state.name}</p>
        <p>Production house : {this.state.studio}</p>


        {/* change state on btn click by calling method */}
        <button onClick={this.changeFields} style={{backgroundColor: 'indigo', color: 'white'}}>Change Name and Studio</button>
        <p>Have {this.state.sequals} sequals</p>
        {/*  */}
        <button onClick={()=> this.setState({sequals: 3})} style={{backgroundColor: 'indigo', color: 'white'}}>Change Name and Studio</button>
      </div>
    )
  }
}

export default ClassComponent;