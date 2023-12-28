import { Component } from "react";

export default class PropClassComp extends Component {
  // No need to create or use constructor function for props
  // constructor(props){
  //   super(props);
  // }

  // component markup is below, that will render ---
  render() {
    const {message} = this.props;
    return(
      <>
        Hi, I have received : {message}
      </>
    );
  }
}