import React from 'react';
import Header from './header';
import Footer from './footer';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import SidebarComp from './sidebar';

function Layout() {

  const content = {
    margin: '56px auto 40px',
    minHeight: 'calc(100vh - 96px)',
    padding: '12px',
    // background: 'linear-gradient(45deg, black, transparent)'
  }
  const colBasicStyle = {
    height: 'calc(100vh - 121px)',
    overflow: 'auto',
  }
  return (
    <div className='layout'>
      <Header/>
      <Container fluid style={{...content}}>
        <Row>
          <Col sm={3} style={{...colBasicStyle}}>
            <SidebarComp />
          </Col>
          <Col sm={9} style={{...colBasicStyle}}>
            <Outlet />
          </Col>
        </Row>
      </Container>
      <Footer/>
    </div>
  );
}

export default Layout;