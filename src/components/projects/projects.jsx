import React from 'react';
import project1 from '../../images/projects/proxy2.PNG';
import project2 from '../../images/projects/trivias.PNG';
import project3 from '../../images/projects/Ecommerce.png';
import '../../sass/projects/projects.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Project = () => {

  return (
    <div className='color--container'>
        <Container className='py-4 ' id="projects">
        <Row className='py-4'>
          <Col>
            <h1 className='main-title-projects'>Code Projects</h1>
          
          </Col>
        </Row>
        <Row>
          <Col sm className='py-3'>
            <figure >
              
              <a href="https://sleepy-noyce-80990f.netlify.app/" target="_blank">
                <img src={project1} alt="Proxy Image" className='img--project_item'/>
                <h3 className='title-project-item pt-4'>Proxy</h3>
                <p className='description--project-items fs-5'>Jamstack website, was done with Gatsby.Js, DatoCMS and Netlify. </p>
              </a>
            </figure> 
          </Col>
          <Col sm className='py-3'>
            <figure>
              <a href="https://hardcore-goldwasser-4fbdfe.netlify.app/" target="_blank">
                <img src={project2} alt="Trivias Image" className='img--project_item'/>
                <h3 className='title-project-item pt-4'>Trivias</h3>
                <p className='description--project-items fs-5'>Progressive Web Application (PWA), was done with Gulp, GridCSS, Javascript Vanilla, and Netlify.</p>
              </a>
            </figure>
          </Col>
          <Col sm className='py-3'>
            <figure>
              <a href="https://github.com/NycollSM/E-commerce" target="_blank">
                <img src={project3} alt="E-commerce image" className='img--project_item'/>
                <h3 className='title-project-item pt-4'>E-commerce</h3>
                <p className='description--project-items fs-5'>The idea of this project was see the differences trying React JS with a custom API</p>
              </a>
            </figure>
          </Col>
        </Row>
        <Row className='py-4'>
          <Col className='text-center'>
          <a href="https://github.com/NycollSM?tab=repositories" className='repo-link'>View my code</a>
          </Col>
        </Row>
      </Container>
    
    </div>
   
  )
}

export default Project;
