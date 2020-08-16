import React from 'react';
import camaleonimg from '../../images/design/camaleon.jpg';
import ecommerceimg from '../../images/design/E-commerce.jpg';
import designimg from '../../images/design/mockup.jpg';
import municipalidad from '../../images/design/municipalidad.jpg';
import dogegram from '../../images/design/dogegram-mockup.jpg';
import '../../sass/design/design.scss';

const Design = () => {

  return (
  <div id="design" className='design--container'>
    <div className="design--projects">
      <h2 className='title-design'>Design</h2>
      <img src={designimg} alt="" className='mockups-img'/>
      <div className='projects'>
        <h3 className='titledesign--item'>Camaleon Film Company</h3> 
        <p className='description'>Camaleon Film is a contact web site for Film makers in Costa Rica, you can <a href="https://www.camaleonfilmcompany.com/" className='link-project'>visit their site.</a></p>
        <img src={camaleonimg} alt="" className='image--firstcol_right'/>
      </div>
      <div className='projects'>
        <h3 className='titledesign--item'>House of Art</h3>
        <p className='description'>House of Art is a minimalist design which the idea is sell Art only with the necessary interface.</p>
        <img src={ecommerceimg} alt=""/>
      </div>
      <div className='projects'>
        <h3 className='titledesign--item'>Municipalidad de Pococi</h3>
        <p className='description'>Municipalidad de Pococi web site was redesign to give a better experience to the users that mostly are elder people.</p>
        <img src={municipalidad} alt="Its a screenshot of the design"/>
      </div>
      <div className='projects'>
        <h3 className='titledesign--item'>Dogegram</h3>
        <p className='description'>Dogegram is a Design that was created as a social media for our best friends, they would give you a paw.</p>
        <img src={dogegram} alt="Its a screenshot of the design"/>
      </div>
    </div>
  </div>
  )
}

export default Design;