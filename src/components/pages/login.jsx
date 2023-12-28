import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SignUpComp from './signupComp';

function LoginComp() {
  const [input, setInput] = useState({
    loginEmail: '',
    loginPass: ''
  });
  const [enable, setEnable] = useState(false);
  // method to handle user input
  const handleChange = (e) =>{
    const {name, value} = e.target;
    setInput((prevInput)=> ({...prevInput, [name]: value}));
    enableLogin();
  }
  // method to handle login btn click
  const handleLogin = (e) => {
    e.preventDefault();
  }
  // method to validate email
  const validateEmail = () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!input.loginEmail || input.loginEmail.length === 0) {
      return 'Email is required'; 
    }
  }
  // enable /disable login btn ---
  const enableLogin = () => {
    input.loginEmail && input.loginPass && setEnable(true);
  }
  useEffect(()=>{
    enableLogin();
  }, [input.loginEmail, input.loginPass]);
  // css for styling form ---
  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '320px',
    margin: '0 auto',
  }

  return (
    <div>
      <Form style={{...formStyle}} onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" name='loginEmail' value={input.loginEmail} onChange={handleChange} onBlur={validateEmail}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Enter Password</Form.Label>
          <Form.Control type="password" name='loginPass' value={input.loginPass} onChange={handleChange}/>
        </Form.Group>
        {
          enable
          ? <Button variant="secondary" type="submit">Login</Button>
          : <Button variant="secondary" type="submit" disabled>Login</Button>
        }
      </Form>
      <h6 className='text-center mt-4'>
        Not yet Registered !
        <Link to="/signup" element={<SignUpComp/>}>&nbsp;Signup here</Link>
      </h6>
    </div>
  );
}

export default LoginComp;