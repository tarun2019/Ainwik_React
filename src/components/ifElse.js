import React, { Component } from 'react';

class LoginIfElse extends Component {
  constructor(){
    super();
    this.state = {
      isLoggedin: false,
    }
    this.toggleLogin = this.toggleLogin.bind(this);
  }
  
  toggleLogin() {
    this.setState({isLoggedin: !this.state.isLoggedin});
  }

  render() {
    var message, button;
    if(this.state.isLoggedin == true){
      message = <h2>Hi User</h2>
      button = <button onClick={()=> this.toggleLogin()}>Log Out</button>
    }
    else {
      message = <h2>Please Login</h2>
      button = <button onClick={()=> this.toggleLogin()}>Log In</button>
    }
    return (
      <div>
        {message}
        {button}
      </div>
    );
  }
}

export default LoginIfElse;