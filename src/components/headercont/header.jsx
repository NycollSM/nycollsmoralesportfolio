import React from 'react';
import logo from '../../images/cherry.png';
import '../../sass/header/header.scss';

const Header = () => {
  const nav = ['projects', 'design', 'skills', 'contact']
  const content = nav.map(items => {
    return (
      <li className='nav_items'><a href={items}>{items}</a> </li>
       
    )
  })
  return (
    <div className='header'>
      <img src={logo} alt="logo" className="logo"/>
      <p className='name'>Nycoll Soto M</p>
      <p className="career">Font-End Developer</p>
      <ul className='nav'>
        {content}
      </ul>
    </div>
  )

}

export default Header;