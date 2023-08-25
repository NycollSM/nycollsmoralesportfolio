import React from 'react';
import camaleonimg from '../../images/design/camaleon.jpg';
import ecommerceimg from '../../images/design/E-commerce.jpg';
import designimg from '../../images/design/mockup.jpg';
import municipalidad from '../../images/design/municipalidad.jpg';
import dogegram from '../../images/design/dogegram-mockup.jpg';
import '../../sass/design/design.scss';
import Loop from '../../images/Loop-black-bg.gif';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



const Design = () => {

  return (
  <div  className='bg-color-img' >
      <Container>
        <Row className='py-4'>
          <Col>
            <img src={Loop} alt="Hero banner" className='img-fluid'/>
          </Col>
        </Row>
       
      </Container>
      
  </div>
  )
}

export default Design;