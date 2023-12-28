import React, { useEffect, useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import reactLogo from '../../logo.svg';

function CustomAccordian() {
  const [data, setData] = useState([]);

  const getData = async() => {
    const resp = await fetch("http://jsonplaceholder.typicode.com/comments", {method: "GET"})
    const json = await resp.json();
    setData(json);
  }
  useEffect(()=> {
    getData();
  }, []);

  return (
    <>
      <Accordion>
          {
            data.length > 0 &&
            data.map((item)=>{
              return(
                <Accordion.Item key={item.id} eventKey={item.id}>
                  <Accordion.Header>{item.name}</Accordion.Header>
                  <Accordion.Body>{item.body}</Accordion.Body>
                </Accordion.Item>
              );
            })
          }
          {
            data.length > 0 
            ? data.map((item)=>{
              return(
                <Accordion.Item key={item.id} eventKey={item.id}>
                  <Accordion.Header>{item.name}</Accordion.Header>
                  <Accordion.Body>{item.body}</Accordion.Body>
                </Accordion.Item>
              );
            })
            : <div className='loader-parent'>
                <img className="spinnner loader" src={reactLogo} alt='React logo' width={'200px'}/>
              </div>
          }
      </Accordion>
    </>
  );
}

export default CustomAccordian;