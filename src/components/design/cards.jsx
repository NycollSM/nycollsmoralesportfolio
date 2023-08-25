import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// images
import Img1 from '../../images/design/Dashboard-mk.png';
import Img2 from '../../images/design/Reports-mk.png';
import Img3 from '../../images/design/dr-lookup-mk.png';
import Img4 from '../../images/design/subjectline-mk.png';
import CoffeeShop from '../../images/design/coffee-shop-mockup.png';
import FAImg from '../../images/design/Fashion-awards-square1.png'
{/*import Modal1 from './Model';*/};

function CaseStudies() {

  return (
    <div className='color--container'>
     <Container>
      <Row className=' py-4'>
          <Col >
            <h3 className='title-design'>UX Case Studies</h3>
          </Col>
      </Row>
    </Container>
    <Container>
      <Row className='py-4'>
        <Col sm={4} >
          <img className='img-fluid' src={Img1} alt="Generic placeholder" />
        </Col>
        <Col sm={8} className='pt-4 px-4'>
          <h3>CMS Dashboard</h3>
          <p  className='fs-4'>This dashboard was designed for the company's managers who needed to keep track of the clients who were actively working and clients who had not been active in a long period of time.</p>
         
            <Link to="/Design-Project/CMDashboard" className='button-projects'>
              View Project <span class="material-symbols-outlined">arrow_outward </span>
            </Link>
        </Col>
        
      </Row>
      
      </Container>
    <Container>
        <Row className='py-4'>
          <Col sm={4}>
          <img src={FAImg} alt="" className='img-fluid'/>
          </Col>
          <Col sm={8} className='pt-4 px-4'>
            <h3>Fashion Awards Vote Website</h3>
            <p  className='fs-4'>Research project on how to create an easy voting system where the public can support the fashion judges' delivery.</p>
            
            <Link to="/Design-Project/FashionAwards" className='button-projects'>
              View Project <span class="material-symbols-outlined">arrow_outward </span>
            </Link>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className='py-4'>
          <Col sm={4}>
          <img src={CoffeeShop} alt="" className='img-fluid'/>
          </Col>
          <Col sm={8} className='pt-4 px-4'>
            <h3>Coffee Shop App</h3>
            <p  className='fs-4'>This coffee shop is a chain company that has multiple locations around Arizona and California state. They offer a competitive price on the products. The Coffee Shop targets customers who are always moving and need their drinks to go.</p>
            
            <Link to="/Design-Project/TheCoffeeShop" className='button-projects'>
              View Project <span class="material-symbols-outlined">arrow_outward </span>
            </Link>
          </Col>
        </Row>
      </Container>
    
          {/** 
      <Container>
        <Row className='py-4'>
          <Col sm={4}>
          <img src={Img2} alt="" className='img-fluid'/>
          </Col>
          <Col sm={8} className='pt-4 px-4'>
            <h3>Reports</h3>
            <p  className='fs-4'>My task on this project was to redesign the Reports feature since it was outdated and users were not very familiar with the language used in the reports. The goal was to make the reports easier to understand and use for the clients.</p>
            
            <Link to="/ReportsPage" className='button-projects'>
              View Project <span class="material-symbols-outlined">arrow_outward </span>
            </Link>
          </Col>
        </Row>
      </Container>
      <Container>
      <Row className='py-4'>
          <Col sm={4}>
            <img src={Img4} alt="" className='img-fluid'/>
          </Col>
          <Col sm={8}>
            <h3>Subject Line Suggester</h3>
            <p  className='fs-4'>Creating a subject line for an email campaign could be complicated and this tool was designed to help the user and provide tips of how to add a successful subject line and avoid the email campaign to be send into the spam section.</p>
            <Link to="/ReportsPage" className='button-projects'>
              View Project <span class="material-symbols-outlined">arrow_outward </span>
            </Link>
          </Col>
        </Row>
      </Container>
        <Row className='py-4'>
              <Col>
              <p>
                img
              </p>
              </Col>
              <Col xs={6}>
                <h3>Dr. Lookup</h3>
                <p>This project needed to be redesign since the search results was hard to understand, it needed more herarchy and make the data more readable.</p>
                

              
                 
                
              </Col>
        </Row>*/}
      
    </div>
  );
}

export default CaseStudies;