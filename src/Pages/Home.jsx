import React from 'react';

import Project from '../components/projects/projects';
import Design from '../components/design/design';
import Skills from '../components/skills/skills';
import Footer from '../components/footer/footer';
// import CardO from '../components/design/CardOverview';
import About from '../components/about/about';
import Cards from '../components/design/cards';


function Home() {

  return (
    <>
      <Design></Design>
     
      <Cards></Cards>
      <Project></Project>
      <Skills></Skills>
      <About></About>
      <Footer></Footer>
    </>
  )
}

export default Home;