import React from 'react';
import Header from './header';
import Footer from './footer';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import SidebarComp from './sidebar';

function Layout() {

  const content = {
    margin: '56px auto 46px',
    minHeight: 'calc(100vh - 136px)',
    padding: '12px'
  }
  const colBasicStyle = {
    height: 'calc(100vh - 126px)',
    overflow: 'auto',
  }
  const compStyle = {
    padding: '24px',
    backgroundColor: 'linen',
    color: 'indigo',
    fontSize: '26px',
  }
  return (
    <div className='layout'>
      <Header/>
      <Container fluid style={{...content}}>
        <Row>
          <Col sm={3} style={{...colBasicStyle}}>
            <SidebarComp />
          </Col>
          <Col sm={9} style={{...colBasicStyle, ...compStyle}}>
            <Outlet />
          </Col>
        </Row>
      </Container>
      <Footer/>
    </div>
  );
}

export default Layout;