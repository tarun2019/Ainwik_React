import React from 'react';
import reactLogo from '../../logo.svg';
import { Button } from 'react-bootstrap';

function Home() {
  const homeStyle = {
    textAlign: 'center',
    padding: '50px 0'
  }
  return (
    <div className='home' style={{...homeStyle}}>
      <img className="spinnner" src={reactLogo} alt='React logo' width={'500px'}/>
      <h2 style={{font: '50px bold'}}>DEVELOPMENT in PROGRESS...</h2>
      <Button type='button'>New Button</Button>
    </div>
  );
}

export default Home;