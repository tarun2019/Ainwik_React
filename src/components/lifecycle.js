import React, { Component } from 'react';

class Lifecycle extends Component {
  constructor(){
    console.log("constructor");
    super();
    this.state = {
      num: 1 
    };
    this.updateNum = this.updateNum.bind(this);
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  // update num ------------
  updateNum() {
    // this.setState({num: num + 1});
    this.setState({num: this.state.num + 1});
  }

  render() {
    console.log("render");
    return (
      <div>
          <h1>Render Method</h1>
          <h3>{this.state.num}</h3>
          <button onClick={()=> this.updateNum()}>Update</button>
      </div>
    );
  }
}

export default Lifecycle;