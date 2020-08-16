import React from 'react';
import project1 from '../../images/projects/proxy2.PNG';
import project2 from '../../images/projects/trivias.PNG';
import project3 from '../../images/projects/Ecommerce.png';
import '../../sass/projects/projects.scss';

const Project = () => {

  return (
  <div id="projects" className="projects--container">
    <h1 className='main-title-projects'>Projects</h1>
    <figure >
      <h3 className='title-project-item'>Proxy</h3>
      <p className='description--project-items'>Jamstack website, was done with Gatsby.Js, DatoCMS and Netlify. </p>
      <a href="https://sleepy-noyce-80990f.netlify.app/" target="_blank">
        <img src={project1} alt="Screenshot of the project" className='img--project_item'/>
      </a>
    </figure> 
    <figure>
      <h3 className='title-project-item'>Trivias</h3>
      <p className='description--project-items'>Progressive Web Application (PWA), was done with Gulp, GridCSS, Javascript Vanilla, and Netlify.</p>
      <a href="https://hardcore-goldwasser-4fbdfe.netlify.app/" target="_blank">
        <img src={project2} alt="rhfrnncfncu" className='img--project_item'/>
        
      </a>
    </figure> 
    <figure>
      <h3 className='title-project-item'>E-commerce</h3>
      <p className='description--project-items'>The idea of this project was see the differences trying React JS with a custom API</p>
      <a href="https://github.com/NycollSM/E-commerce" target="_blank">
        <img src={project3} alt="ghjk" className='img--project_item'/>
      </a>
    </figure>
    <a href="https://github.com/NycollSM?tab=repositories" className='repo-link'>View my code</a>
  </div>
  )
}

export default Project;