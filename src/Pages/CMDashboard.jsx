import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Img2 from '../images/design/Dashboard-mk.png';
import ArchitectureImg from '../images/design/architecture-csm-dashboard.png';
import MmsUi from '../images/design/UI-Kit-MMS.png';
import wireframesIMG from '../images/design/CMS-dashboard.png';
import DigitalWireframes from '../images/design/Digital-w-Dashboard.png'
import Gif from '../images/design/video3.gif';
import UPDashboard from '../images/design/UP-CMDashboard.png';
import Footer from '../components/footer/footer';


function CMDashboard() {
  
  return (
    <div className="color--container">
     
     <Container className='p-4'>
      <Row className='py-4'>
        <Col sm={12} className='py-4 align-middle text-center'>
          <h1 className='text-center py-4'>Customer Manager Dashboard</h1>
        </Col>
      </Row>
      
      <Row className=' justify-content-md-center'>
        <Col  sm={12} className=' text-center' >
          <img src={Img2} className='rounded '/>
        </Col>
      </Row>
      <Row className='pt-4'>
        <Col sm={12} className='pt-4 px-4'>
          <h2>Overview</h2>
        </Col>
      </Row>
      <Row>
        <Col sm={6} className='pt-4 px-4'> <p className='fs-5'>The creation of this dashboard was driven by the needs of the company's managers, who required a centralized system to effectively monitor client activities. It serves as a comprehensive solution for keeping track of both actively engaged clients and those who have shown prolonged periods of inactivity.</p></Col>
        <Col sm={6} className='pt-4 px-4'> <p className='fs-5'>Managers often face challenges in remembering the numerous clients with ongoing campaigns that remain incomplete, especially considering that clients can independently initiate their own email campaigns or seek managerial assistance. To alleviate this issue, we have meticulously developed a user-friendly Dashboard.</p></Col>
      </Row>
      <Row>
        <Col sm={12} className='pt-2 px-4'>
          <p className='fs-5'> Through this intuitive interface, Customer Success Managers can effortlessly access information pertaining to their active campaigns while also identifying clients who have exhibited a period of inactivity ranging from 2 to 6 months. By providing this essential functionality, the Dashboard enables managers to streamline their workflow, enhance client engagement, and effectively manage ongoing campaigns.</p>
        </Col>
      </Row>
      <Row className='pt-4 justify-content-center'>
       
        <Col sm={6} className='pt-4 px-4'>
          <h2> My role</h2>
          <p className='fs-5'> Research, UX / UI Designer</p>
        </Col>  
        <Col sm={6} className='pt-4 px-4'>
          <h2>Duration</h2> 
          <p className='fs-5'>3 Months</p>
        </Col>
       
      </Row>
      <Row className='pt-4 justify-content-center'> 
        <Col sm={6} className=' pt-4 px-4'>
           <h2>Responsibilities</h2>
           <p className='fs-5'> Conducting research, paper and digital wireframing, digital prototyping, usability testing, iteration on design. </p>
        </Col>
        <Col sm={6} className='py-4 px-4'>
          <h2>The Problem:</h2>
          <p className='fs-5'> Managing and organizing multiple campaigns and customers can be complex and challenging, especially when it comes to keeping track of customers who need to re-engage because they have been inactive on the website.</p>

        </Col>
       
      </Row>
      <Row className='py-4'>
        <Col sm={8} className='align-self-center px-2'>
          <h2>Getting Closer to User-Centered Design</h2>
        </Col>
      </Row>

      <Row className='py-4'>
        <Col sm={4} className='align-self-center px-2'>
        <h2>User Personas</h2>
          <p className='fs-5'>During the research phase we could see that the managers had a challenge in common: organization. But also we can see that their organization priorities vary.</p>
          <p className='fs-5'>Creating these user personas help me understand how the managers organize their clients without any tool on the website. </p>
        </Col>
  
        <Col sm={8} className=' px-4'>
          <img src={UPDashboard} alt="" className='img-fluid rounded center-block px-4' />
        </Col>  
      </Row>
      <Row className='py-4'>
        <Col sm={4} className='align-self-center px-2'>
          <h2>Information Architecture</h2>
          
          <p className='fs-5'>This sitemap is designed based on research and the requirements of the managers. It was deemed important to introduce a new navigation page. This page would include a Dashboard placed within the first tab. The purpose of this Dashboard is to exclusively cater to managers, providing them with visibility into their projects and inactive customers right from the start. </p>
        </Col>
  
        <Col sm={8} className=' px-4'>
          <img src={ArchitectureImg} alt="" className='img-fluid rounded center-block px-4' />
        </Col>
      </Row>
      <Row className='py-4'>
        <Col sm={4} className='pt-4 px-4'>
          <h2>Wireframes</h2>
          <p className='fs-5'>Conducting tests with a low-fidelity prototype enabled me to gain a deeper comprehension of users' anticipated interactions while performing the tasks in focus. Through observation of their touch and swipe gestures, and crucially, engaging in discussions with them regarding their expectations and timing, I could pinpoint the necessary refinements. These insights guided the enhancements required to establish a robust groundwork for the subsequent development of a high-fidelity prototype.</p>
          
         
        </Col>
        <Col sm={8} className=' px-4'>
          <img src={wireframesIMG} className='img-fluid rounded px-4'/>
        </Col>
      </Row>
      <Row className='py-4'>
        <Col sm={4} className='pt-4 px-4'>
          <h2>Digital Wireframes</h2>
          <p className='fs-5'>The low-fidelity wireframes provided test users with an approximation of the potential layout for this feature. By presenting two options, we were able to gauge, through testing, which of the alternatives proved to be more user-friendly. This approach allowed us to assess user preferences and make informed decisions about the most effective design direction.</p>
       
        </Col>
        <Col sm={8} className=' px-4'>
          <img src={DigitalWireframes} alt="" className='img-fluid rounded px-4'/>
        </Col>
      </Row>
      <Row className='py-4'>
        <Col sm={4} className='align-self-center px-2'> 
        <h2>UI Desing</h2>
        <p className='fs-5'>Throughout the course of this project, I placed a strong emphasis on following the MMS Style Guide with meticulous attention. This approach was instrumental in creating a design that is not only consistent but also seamlessly unified across all elements.</p>
        </Col>
        <Col sm={8} className='px-4'>
          <img src={MmsUi} alt="" className='img-fluid rounded center-block px-4'/>
        </Col>
      </Row>
      <Row className='py-4'>
        <Col sm={12} className='pt-4 px-4'>
          <h2  className='py-4'>Final Prototype</h2>
          <p className='fs-5'>Following a comprehensive round of user testing using the low-fidelity wireframes, the collected data indicated that the layout most intuitive for users was the one incorporating the tabs feature. In response to this insight, I conceptualized a design tailored specifically for desktop and laptop devices. This design maximizes user-friendliness while encompassing the two primary functionalities required.</p>
          <ol className='fs-5 pt-4'>
            <li>Keep working on open quotes with clients.</li>
            <li>Be able to see a list of Inactive customers, who have not being on the platform for the last six months. </li>
          </ol>
          
        </Col>
      </Row>
      <Row className='py-4'>
        <Col sm={12} className='pt-4 px-4'>
          <img src={Gif} alt="" className='rounded img-fluid center-block'/>
        </Col>
      </Row>
      <Row className='py-4'>
        <Col sm={12} className='pt-4 px-4'>
          <h2>Future Recommendations</h2>
          <p className='fs-5'>Continue fostering open communication with clients. Implement a feature to display a list of inactive customers, aiding managers in identifying clients inactive for the past six months.</p>
          <p className='fs-5'>This project has been a journey in understanding user needs, translating insights into effective design, and culminating in a user-centric dashboard that empowers managers in their client management endeavors.</p>
        </Col>
      </Row>
    </Container>
  <Footer></Footer>
      
    </div>
     
  )
  }

  export default CMDashboard;
    