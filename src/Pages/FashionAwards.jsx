import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from '../components/footer/footer';
// Images
import PaperWFA from '../images/design/PaperW-FA.jpeg';
import UserPersona from '../images/design/UserPersona-FashionAW.png';
import HeroBannerFA from '../images/design/Awwards.png';
import ArchitectureFA from '../images/design/architecture-fashioaw.png';
import HomeLow from '../images/design/HomePageAW-low.png';
import LogInLow from '../images/design/LogIn-AW-low.png';
import ConfirmationLow from '../images/design/After-Voting-AW-low.png';
import NominateesLow from '../images/design/Nominatees-PageAW-low.png';
// high fidelity wireframes
import HomeAWHigh from '../images/design/home-aw-high.png';
import NominateesHigh from '../images/design/Nominatees-High.png';
import LogInAWHigh from '../images/design/LogIn-High-AW.png';
import ConfirmationHigh from '../images/design/After-Voting-AW-high.png';
//mobile
import HomeMobile from '../images/design/home-aw-mobile.png';
import NominateesMobile from '../images/design/nominatees-aw-mobile.png';
import LogInMobile from '../images/design/LogIn-AW-mobile.png';
import VoteMobile from '../images/design/After-Voting-AW-mobile.png';
import UikitAW from '../images/design/UI-Kit-Aw.png';





function Awwards() {
  
  return (
    <div className="color--container">
     
     <Container className='p-4 '>
      <Row>
        <Col sm={12} className='py-4 align-middle text-center'>
          <h1 className='text-center py-4'>New York Fashion Awwards </h1>
        </Col>
      </Row>
      <Row>
      <Row className=' justify-content-md-center'>
      <Col  sm={12} className=' text-center'>
        <img src={HeroBannerFA} className='img-fluid rounded float-center text-center'/>
      </Col>
      </Row>

      </Row>
      <Row >
        <Col sm={12} className='pt-4 px-4'>
          <h2>Overview</h2>
          <p class='fs-5 py-2'>The Fashion Awards is a prestigious event that celebrates the exceptional contributions of individuals in the fashion industry, including visionary designers, who are recognized and honored for their relentless dedication and unparalleled creative brilliance.</p>
          <p class='fs-5'>The selection process welcomes public participation, fostering an inclusive environment that not only introduces fresh audiences but also amplifies visibility for the talented designers. </p>
        </Col>
      </Row>
      <Row className='justify-content-center'>
       
        <Col sm={6} className='pt-4 px-4'>
          <h2> My role</h2>
          <p class='fs-5'> Research, UX / UI Designer</p>
        </Col>  
        <Col sm={6} className='pt-4 px-4'>
          <h2>Duration</h2> 
          <p class='fs-5'>3 Months</p>
        </Col>
       
      </Row>
      <Row className='justify-content-center'> 
        <Col sm={6} className=' pt-4 px-4'>
           <h2>Responsibilities</h2>
           <p class='fs-5'> Conducting research, paper and digital wireframing, digital prototyping, usability testing, iteration on design. </p>
        </Col>
        <Col sm={6} className='py-4 px-4'>
          <h2>The Problem:</h2>
          <p class='fs-5'>Art and fashion reside within the realm of subjectivity, where perspectives can dynamically shift from person to person. To embrace this diversity, garnering the endorsement of public sentiment becomes essential, complementing the insights of the expert panel of judges.</p>

        </Col>
       
      </Row>
      <Row className='py-4'>
        <Col sm={4} className='align-self-center px-2'>
          <h2>User Personas</h2>
          <p class='fs-5'>Throughout my research, a key insight emerged: while users may possess distinct needs, they share a unified goal — to cast their votes for their favored designers. Additionally, they exhibit a curiosity to explore deeper into these designers' profiles and past collections, thereby enhancing their engagement with the platform.</p>
        </Col>
  
        <Col sm={8} className=' px-4'>
          <img src={UserPersona} alt="" className='img-fluid rounded center-block px-4' />
        </Col>  
      </Row>
      <Row className='py-4'>
        <Col sm={8} className=' px-4'>
          <img src={ArchitectureFA} alt="" className='img-fluid rounded center-block' />
        </Col>  
        <Col sm={4} className='align-self-center px-2'>
          <h2>Information Architecture</h2>
          <p className='fs-5'>Informed by comprehensive research and user requirements, prioritizing the presentation of the 'Nominee Designers' emerged as a strategic imperative. This approach ensures alignment with user expectations and preferences.</p>
        </Col>
      </Row>
      <Row className='py-4'>
        <Col sm={4} className='pt-4 px-4'>
          <h2>Wireframes</h2>
          
          <p className='fs-5'>In the initial sketch phase, I developed low-fidelity wireframes, which provided me with enhanced clarity regarding the layout within the established Information Architecture framework. Subsequently, I progressed to crafting high-fidelity wireframes for both desktop and mobile interfaces. Throughout this process, I remained attuned to users' device preferences, ensuring a seamless and tailored experience.</p>
        </Col>
        <Col sm={8} className=' px-4'>
          <img src={PaperWFA} className='img-fluid rounded px-4'/>
        </Col>
      </Row>
      <Row className='py-4'>
        <Col sm={3} className='pt-4 px-4'>
         
          <h3>Low Fidelity Wireframes</h3>
         
        </Col>
      </Row>
      <Row className='py-4'>
        <Col sm={3} className=' px-2'>
          <img src={HomeLow} className='img-fluid rounded px-2'/>
        </Col>
        <Col sm={3} className=' px-2'>
          <img src={NominateesLow} className='img-fluid rounded px-2'/>
        </Col>
        <Col sm={3} className=' px-2'>
          <img src={LogInLow} className='img-fluid rounded px-2'/>
        </Col>
        <Col sm={3} className=' px-2'>
          <img src={ConfirmationLow} className='img-fluid rounded px-2'/>
        </Col>
      </Row>
      <Row className='py-4'>
        <Col sm={3} className='pt-4 px-4'>
          <h2>High Fidelity Wireframes</h2>
        </Col>
      </Row>
      <Row className='py-4'>
        <Col sm={3} className=' px-2'>
          <img src={HomeAWHigh} className='img-fluid rounded px-2'/>
        </Col>
        <Col sm={3} className=' px-2'>
          <img src={NominateesHigh} className='img-fluid rounded px-2'/>
        </Col>
        <Col sm={3} className=' px-2'>
          <img src={LogInAWHigh} className='img-fluid rounded px-2'/>
        </Col>
        <Col sm={3} className=' px-2'>
          <img src={ConfirmationHigh} className='img-fluid rounded px-2'/>
        </Col>
      </Row>
      <Row className='py-4'>
        <Col sm={3} className='pt-4 px-4'>
          <h2>Mobile Wireframes</h2>
        </Col>
      </Row>
      <Row className='py-4'>
        <Col sm={3} className=' px-2'>
          <img src={HomeMobile} className='img-fluid rounded px-2'/>
        </Col>
        <Col sm={3} className=' px-2'>
          <img src={NominateesMobile} className='img-fluid rounded px-2'/>
        </Col>
        <Col sm={3} className=' px-2'>
          <img src={LogInMobile} className='img-fluid rounded px-2'/>
        </Col>
        <Col sm={3} className=' px-2'>
          <img src={VoteMobile} className='img-fluid rounded px-2'/>
        </Col>
      </Row>
      
      
      <Row className='py-4'>
        <Col sm={4} className='align-self-center px-2'> 
        <h2>UI Desing</h2>
          <p class='fs-5'>In shaping the website's visual design and aesthetics, I deliberately opted for a dark color palette. This choice was rooted in the intention to evoke the ambiance of the autumn season, which aligns seamlessly with the fact that the in-person event is slated for October.</p>
        </Col>
        <Col sm={8} className='px-4'>
          <img src={UikitAW} alt="" className='img-fluid rounded center-block px-4'/>
        </Col>
      </Row>
      <Row className='py-4'>
        <Col sm={12} className='pt-4 px-2'>
          <h2>The take away</h2>
          <p class='fs-5'>In this transformative endeavor, I had the privilege to spearhead the conception and realization of The Fashion Awards, an illustrious platform that reveres the extraordinary contributions of luminaries within the fashion industry. At its core, this gala event serves as a beacon for visionary designers, highlighting their unyielding commitment and unparalleled artistic ingenuity.</p>
          <p class='fs-5'>As a Researcher and UX/UI Designer, I undertook a comprehensive journey spanning three months. The challenge was woven into the very fabric of art and fashion—subjective realms where perspectives shift fluidly between individuals. Recognizing this dynamic, I ingeniously interwove public sentiment with the judgments of expert panels. This fusion yielded an inclusive atmosphere that amplified engagement while upholding the integrity of the selection process.</p>
          <p class='fs-5'>Through diligent research, a captivating revelation emerged: divergent user needs converged on a singular aspiration—to cast their votes for cherished designers. This revelation propelled me to craft an interface that seamlessly intertwines user desires with an immersive exploration of designers' profiles and past collections, enriching the overall experience.</p>
          <p class='fs-5'>My journey traversed the transition from low-fidelity wireframes, which laid the blueprint within our Information Architecture, to high-fidelity counterparts tailored for both desktop and mobile interfaces. This journey was punctuated by a commitment to device preferences, promising a cohesive and tailored experience across platforms.</p>
          <p class='fs-5'>The UI design captured the essence of the autumn season with a carefully chosen dark color palette, mirroring the ambiance of the event scheduled for October. This visual symphony enveloped users in a seasonal embrace, evoking anticipation for the event's immersive experience.</p>
          <p class='fs-5'>In retrospect, this project was more than an evolution—it was a voyage through the confluence of fashion, design, and user-centricity. It showcased how a strategic amalgamation of user insights, meticulous architecture, and aesthetic excellence can coalesce into an extraordinary digital experience that reverberates through the corridors of fashion's finest moments.</p>
        </Col>
      </Row>
      
      
    </Container>
  <Footer></Footer>
      
    </div>
     
  )
  }

  export default Awwards;
    