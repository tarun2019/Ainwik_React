import React, { useEffect, useState } from 'react';

function FetchComp() {
  const [data, setData] = useState([]);

  const getData = async() => {
    // below code is not working
    // fetch('https://reqres.in/api/users?page=2')
    // .then(response => response.json())
    // .then(json => setData(json));

    const resp = await fetch("https://reqres.in/api/users?page=2", {method: "GET"})
    const json = await resp.json();
    setData(json.data);
  } 

  useEffect(()=> {
    getData();
  }, []);

  return(
    <>
      {
        data.length > 0 &&
        <ul>
          {/* simple / quick to understand demonstration below */}
          {data.map(item =><li key={item.id}>{item.first_name}</li>)}
          {/* detailed demonstration below */}
          {data.map(item => 
            (
              <li key={item.id}>
                <h5>Name: {`${item.first_name} ${item.last_name}`}</h5>
                <img src={item.avatar} alt={item.id} />
                <h4 style={{color:'blue'}}>Email: {item.email}</h4>
              </li>
            )
          )}
        </ul>
      }
    </>
  );
}

export default FetchComp;