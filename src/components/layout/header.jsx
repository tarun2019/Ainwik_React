import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FaBattleNet } from "react-icons/fa";

function Header() {
  const menuItems = ['Home', 'Menu1', 'Menu2'];
  return (
    <Navbar fixed="top" collapseOnSelect expand='lg' className='bg-body-secondary'>
      <Container fluid>
          <Navbar.Brand>
            <FaBattleNet /> &nbsp;Brand Name
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {
              menuItems.map((item)=>{
                return(
                  <>
                    {
                      item == 'Home'
                      ? <NavLink className='mx-1' to='/'>{item}</NavLink>
                      : <NavLink className='mx-1' to={item}>{item}</NavLink>
                    }
                  </>
                )
              })
            }
            <NavLink className='mx-1 ms-auto' to='/login'>Login</NavLink>
          </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;