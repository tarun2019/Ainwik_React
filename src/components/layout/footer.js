import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { FaBattleNet } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <Navbar fixed="bottom" bg="dark" className='bg-body-secondary'>
        <Container className='flex justify-content-center'>
          <Navbar.Brand>
            <FaBattleNet /> &nbsp;Footer &copy; {currentYear}
          </Navbar.Brand>
          <NavLink to="/aboutus">About Us</NavLink>
          <NavLink to="/contactus">Contact Us</NavLink>
        </Container>
      </Navbar>
    </footer>
  );
}

export default Footer;