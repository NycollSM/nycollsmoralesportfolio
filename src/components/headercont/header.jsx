import React from 'react';
import logo from '../../images/cherry.png';
import '../../sass/header/header.scss';

const Header = () => {
  return (
    <div className='header'>
      <img src={logo} alt="logo" className="logo"/>
      <p className='name'>Nycoll Soto M</p>
      <p className="career">Font-End Developer</p>
      <ul className='nav'>
        <li className='nav_items'><a href='/#projects'>projects</a> </li>
        <li className='nav_items'><a href='/#design'>design</a> </li>
        <li className='nav_items'><a href='/#skills'>skills</a> </li>
        <li className='nav_items'><a href='/#contact'>contact</a> </li>
      </ul>
    </div>
  )

}

export default Header;