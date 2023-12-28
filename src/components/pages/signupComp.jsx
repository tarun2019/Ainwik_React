import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function SignUpComp() {
  // state to store form data ---
  const [input, setInput] = useState({
    firstname: '',
    lastname: '',
    email: '',
    pass: '',
    copass: ''
  });

  const [output, setOutput] = useState('');
  // method to store / update form field values in state --- 
  const handleChange = (e) => {
    const {name, value} = e.target;
    setInput((prevInput)=> ({...prevInput, [name]: value}));
  }
  // function to handle form submission ---
  const handleSignup = (e) => {
    e.preventDefault();
    setOutput(input);
  }
  // css for styling form ---
  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '320px',
    margin: '0 auto',
  }

  return (
    <div>
      <Form style={{...formStyle}} onSubmit={handleSignup}>
        <Form.Group>
          <Form.Label>Enter First Name: </Form.Label>
          <Form.Control type='text' placeholder='FirstName' name='firstname' value={input.firstname} onChange={handleChange}/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Enter Last Name: </Form.Label>
          <Form.Control type='text' placeholder='LastName' name='lastname' value={input.lastname} onChange={handleChange}/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Enter Email Address:</Form.Label>
          <Form.Control type='email' placeholder='name@example.com' name='email' value={input.email} onChange={handleChange}/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Enter Password: </Form.Label>
          <Form.Control type='password' name='pass' value={input.pass} onChange={handleChange}/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Confirm Password: </Form.Label>
          <Form.Control type='password' name='copass' value={input.copass} onChange={handleChange}/>
        </Form.Group>
        <Button variant="secondary" type="submit" className='mt-3'>SignUp</Button>
      </Form>
      {/* to see data entered (real time ) by user uncomment below tag ----*/}
      {/* <p id="data">{input.firstname}, {input.lastname}, {input.email}, {input.pass}</p> */}
      {/* to see data entered ( upon submit ) by user uncomment below tag ----*/}
      <h6 className='mt-3 text-center'>
        Already Registered !
        <Link to="/login">&nbsp; Login here</Link>
      </h6>
      <p id="data">{output.firstname}, {output.lastname}, {output.email}, {output.pass} {output.copass}</p>
    </div>
  );
}

export default SignUpComp;