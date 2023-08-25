import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from '../components/footer/footer';

//images

import SketchImg from '../images/design/PaperW-CoffeeShop.png';
import UPCoffeeShop from '../images/design/UserPersona-CoffeeShop.png';
import UserJourney from '../images/design/UserJourney-CoffeeShop.png';
import HomeLow from '../images/design/HomePageAW-low.png';
import OrderLow1 from '../images/design/OrderPageLow1-CoffeeShop.png';
import OrderLow2 from '../images/design/OrderPageLow2-CoffeeShop.png';
import OrderLow3 from '../images/design/OrderPageLow3-CoffeeShop.png';
import ConfirmationLow from '../images/design/ConfirmationLow-CoffeeShop.png';
import MenuLow from '../images/design/MenuLow-CoffeeShop.png';
import HomeHigh from '../images/design/HomeHigh-CoffeeShop.png';
import OrderHigh1 from '../images/design/OrderPageHigh1-CoffeeShop.png';
import OrderHigh2 from '../images/design/OrderPageHigh2-CoffeeShop.png';
import OrderHigh3 from '../images/design/OrderPageHigh3-CoffeeShop.png';
import MenuHigh from '../images/design/MenuHigh-CoffeeShop.png';
import ConformationHigh from '../images/design/ConfirmationHigh-CoffeeShop.png';
import HeroCoffeeShop from '../images/design/coffee-shop-mockup.png';
function CoffeeShop() {
  
  return (
    <div className="color--container">
     
     <Container className='p-4 '>
      
      <Row>
        <Col sm={12} className='py-4 align-middle text-center'>
          <h1 className='text-center py-4'>The Coffee Shop App </h1>
        </Col>
      </Row>
      <Row>
      <Row className=' justify-content-md-center'>
      <Col  sm={8} className=' text-center'>
        <img src={HeroCoffeeShop} className='rounded img-fluid text-center'/>
      </Col>
      </Row>

      </Row>
      <Row >
        <Col sm={12} className='pt-4 px-4'>
          <h2>The product</h2>
          <p class='fs-5'>Presenting a dynamic coffee shop enterprise, encompassing a network of diverse locations spanning the picturesque landscapes of Arizona and California. Renowned for its compelling value proposition, this chain company boasts competitive pricing across an array of offerings. Embodying a laser focus on the modern lifestyle, our Coffee Shop caters adeptly to the on-the-go populace—catering precisely to the needs of those who perpetually traverse their daily orbits and seek beverages designed for portability</p>          
        </Col>
      
      </Row>

      <Row className='justify-content-center py-4'>
       
        <Col sm={6} className='pt-4 px-4'>
          <h2> My role</h2>
          <p class='fs-5'> Research, UX / UI Designer</p>
        </Col>  
        <Col sm={6} className='pt-4 px-4'>
          <h2>Duration</h2> 
          <p class='fs-5'>5 Months</p>
        </Col>
       
      </Row>
      <Row className='justify-content-center py-4'> 
        <Col sm={6} className=' pt-4 px-4'>
           <h2>Responsibilities</h2>
           <p class='fs-5'>Conducting interviews, paper and digital wireframing, low and high-fidelity prototyping, conducting usability studies, accounting for accessibility, and iterating on designs.</p>
        </Col>
        <Col sm={6} className=' px-4'>
          <h2>The Problem:</h2>
          <p class='fs-5'>Time-pressed customers striving to grab their coffee fix, yet grappling with the challenge of insufficient time to prepare it at home.</p>

        </Col>
       
      </Row>
      <Row className='py-4'>
        <Col sm={4} className='align-self-center px-2'>
          <h2>User Persona</h2>
          <p class='fs-5'>Problem Statement: Daniela, a Marketing Manager, seeks an efficient and cost-effective breakfast solution near her workplace due to time constraints during her mornings.</p>
        </Col>
  
        <Col sm={8} className=' py-4 px-4'>
          <img src={UPCoffeeShop} alt="" className='img-fluid rounded center-block px-4' />
        </Col>  
      </Row>
      <Row className='py-4'>
        <Col sm={4} className='align-self-center px-2'>
          <h2>User Journey Map</h2>
          <p className='fs-5'>Mapping Daniela's user journey revealed how the app at the moment is not satisfying the user's expectations and how helpful it would be to have access to a dedicated Coffee Shop app.</p>
        </Col>
  
        <Col sm={8} className=' py-4 px-4'>
          <img src={UserJourney} alt="" className='img-fluid rounded center-block px-4' />
        </Col>
      </Row>
      <Row className='py-4'>
        <Col sm={4} className='align-self-center py-4 px-4'>
          <h2>Paper Wireframes</h2>
          <p>Taking the time to draft the screens of the coffee shop, makes me question myself about what is the best way to achieve the App goals.</p>
        
         
        </Col>
        <Col sm={8} className=' px-4'>
          <img src={SketchImg} className='img-fluid rounded '/>
        </Col>
      </Row>
      <Row className='py-4'>
        <Col sm={12} className='pt-4 px-4'>
          <h2>Low Fidelity Prototype</h2>
          <p className='fs-5'>The low-fidelity prototype connects the primary user flow of adding an order, customizing it, setting up the payment method and time to pick up.</p>
          <a href="https://www.figma.com/proto/aJ99SzG5DCBu2uUn4sP13L/CoffeeShow-Mockups?page-id=0%3A1&node-id=701%3A4&viewport=4095%2C-72%2C0.79&scaling=scale-down&starting-point-node-id=701%3A4" target='_blank' className='fs-5'>View the low-fidelity prototype {'>'}</a>
        </Col>
        
      </Row>
      <Row className='py-4'>
        <Col sm={2} className='pt-4 px-4'> <img src={HomeLow} className='img-fluid rounded ' alt="" /></Col>
        <Col sm={2} className='pt-4 px-4'> <img src={MenuLow} className='img-fluid rounded ' alt="" /></Col>
        <Col sm={2} className='pt-4 px-4'> <img src={OrderLow1} className='img-fluid rounded ' alt="" /></Col>
      
        <Col sm={2} className='pt-4 px-4'> <img src={OrderLow2} className='img-fluid rounded ' alt="" /></Col>
        <Col sm={2} className='pt-4 px-4'> <img src={OrderLow3} className='img-fluid rounded ' alt="" /></Col>
        <Col sm={2} className='pt-4 px-4'> <img src={ConfirmationLow} className='img-fluid rounded ' alt="" /></Col>
      </Row>
      <Row className='py-4'>
        <Col sm={6} className=' py-4 align-self-center px-2'> 
        <h2>Usability study: findings</h2>
          <p class='fs-5'>I conducted two usability studies. Finds from the first round study helped guide the paper wireframes and mockups. The Second round helped the design to be more complete and covering all the user needs.</p>
        </Col>
        <Col sm={3} className=' py-4 px-4'>
          <h4>Round 1 findings:</h4>
          <ol className='fs-5'>
            <li>Users want to order quickly</li>
            <li>User wants card payment methods</li>
            <li>User want to be able to see photos of the products</li>
          </ol>
        </Col>
        <Col sm={3} className=' py-4 px-4'>
         <h4>Round 2 findings:</h4>
          <ol className='fs-5'>
            <li>User wants schedule the pick up time</li>
            <li>User wants to customize their order</li>
            <li>User wants to be able to score and review the service</li>
          </ol>
        </Col>
      </Row>
      <Row className='py-4'>
        <Col sm={12} className='pt-4 px-4'>
          <h2>Final Prototype</h2>
          <p className='fs-5'>In the early designs it was necessary to add the latest order of the user to save time add just repeat the order. Also, I added additional customization in the drinks and drink prices. </p>
          <a href="https://www.figma.com/proto/aJ99SzG5DCBu2uUn4sP13L/CoffeeShow-Mockups?page-id=940%3A46&node-id=864%3A8&viewport=3725%2C-746%2C0.75&scaling=min-zoom&starting-point-node-id=864%3A8" target="_blank" className='fs-5' rel="noopener noreferrer">View High-fidelity prototype {'>>'}</a>
          
        </Col>
      </Row>
      <Row className='py-4'>
        <Col sm={2} className='pt-4 px-4'> <img src={HomeHigh} className='img-fluid rounded ' alt="" /></Col>
        <Col sm={2} className='pt-4 px-4'> <img src={MenuHigh} className='img-fluid rounded ' alt="" /></Col>
        <Col sm={2} className='pt-4 px-4'> <img src={OrderHigh1} className='img-fluid rounded ' alt="" /></Col>
        <Col sm={2} className='pt-4 px-4'> <img src={OrderHigh2} className='img-fluid rounded ' alt="" /></Col>
        <Col sm={2} className='pt-4 px-4'> <img src={OrderHigh3} className='img-fluid rounded ' alt="" /></Col>
        <Col sm={2} className='pt-4 px-4'> <img src={ConformationHigh} className='img-fluid rounded ' alt="" /></Col>
      </Row>
      <Row className='py-4'>
        <Col sm={8} className='pt-4 px-4'>
          <h2>Takeaways</h2>
          <h4>Accessibility considerations</h4>
          <ol className='fs-5'>
            <li>Employed contrasting colors to effectively distinguish text from buttons.</li>
            <li>Enhanced accessibility for individuals with low vision by incorporating ALT text into images for compatibility with screen readers.</li>
            <li>Integrated intuitive icons to facilitate smoother navigation.</li>
          </ol>
        </Col>
      </Row>
      <Row >
        <Col sm={6} className='pt-2 px-4'>
       
          <h4>Impact: </h4>
          <p className='fs-5'>The Coffee Shop app provides users with a heightened sense of efficiency, allowing them to save time while enjoying a diverse range of invigorating energy and protein beverages.</p>
          
        </Col>
        <Col sm={6} className='pt-2 px-4'>
          <h4>What I learned: </h4>
          <p className='fs-5'>During the app's design phase, I came to realize that the initial mockups would undergo alterations based on the specific requirements and preferences of the users.</p>
          
        </Col>
      </Row>
      
      
    </Container>
  <Footer></Footer>
      
    </div>
     
  )
  }

  export default CoffeeShop;
    