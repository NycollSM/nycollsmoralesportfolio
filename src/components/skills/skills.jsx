import React from 'react';
import '../../sass/skills/skills.scss';


const Skills = () => {
  return (
    <div id='skills' className='skills'>
      <h2 className='main--title-skills'>Skills</h2>
      <div className="wrapper-skills">
        <div className="wrapper-item">
          <h3 className='titles-skills'>Web</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript / Node JS</li>
            <li>WordPress / Drupal</li>
          </ul>
        </div>
        <div className="wrapper-item">
          <h3 className='titles-skills'>Design</h3>
          <ul>
            <li>UX / UI Design</li>
            <li>Figma / Sketch</li>
            <li>Adobe Photoshop</li> 
            <li>Adobe Illustrator</li>
          </ul>
        </div>
        <div className="wrapper-item">
          <h3 className='titles-skills'>Tools</h3>
          <ul>
            <li>Git</li>
            <li>Sass / PostCss</li>
            <li>Webpack / Gulp</li> 
          </ul>
        </div>
        <div className="wrapper-item">
          <h3 className='titles-skills'>Soft Skills</h3>
          <ul>
            <li>Non-violent Communication</li>
            <li>Design Thinking</li>
            <li>Agile Methodologies</li>
          </ul>
        </div>
      </div> 
    </div>
  )
}

export default Skills;