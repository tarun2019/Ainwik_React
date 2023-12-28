import { Component } from "react";

class Hamas extends Component {

  constructor(){
    super();
    this.state = {
      name: 'Honey Singh',
      type: 'singer',
      projects: 20
    }
    // 3rd approach to bind method
    this.changeFields = this.changeFields.bind(this);
  }

  changeFields() {
    this.setState({name: 'Remo'});
    this.setState({type: 'dancer'});
  }

  render() {
    const tempStyle = {
      color: "red",
      boxShadow: '10px 10px 5px 0px rgba(0,0,0,0.75)',
    }
    return(
      // below is the demo of "inline style" ---------
      <div style={{...tempStyle, border: '1px solid'}}>
        <h1>Temp component</h1>
        <h6>Smallest heading tag</h6>
        <p>Para tag</p>
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
        <button onClick={() => this.setState({projects: 30})}>Change project count</button>
      </div>
    );
  }
};

export default Hamas;