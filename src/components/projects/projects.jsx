import React from 'react';
import project1 from '../../images/projects/proxy2.PNG';
import project2 from '../../images/projects/ss2.PNG';
import project3 from '../../images/projects/Ecommerce.png';
import '../../sass/projects/projects.scss';

const Project = () => {

  return (
  <div id="Projects" className="projects--container">
    <h1 className='titlep'>Projects</h1>
    <figure className='project--right'>
      <a href="https://sleepy-noyce-80990f.netlify.app/" target="_blank">
        <img src={project1} alt="cbydbcudn" className='img--project_right'/>
        <h3>Proxy</h3>
      </a>
    </figure> {/*
    <figure className='project--left'>
      <a href="https://hardcore-goldwasser-4fbdfe.netlify.app/" target="_blank">
        <img src={project2} alt="rhfrnncfncu" className='img--project_left'/>
        <h3>Trivias</h3>
      </a>
    </figure> */}
    <figure className='project--secondrow--right'>
      <a href="https://github.com/NycollSM/E-commerce" target="_blank">
        <img src={project3} alt="ghjk" className='img--sndcrow_right'/>
        <h3>Ecommerce</h3>
      </a>
    </figure>
    <a href="https://github.com/NycollSM?tab=repositories" className='repo-link'>View my code</a>
  </div>
  )
}

export default Project;