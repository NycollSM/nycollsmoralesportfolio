import React from 'react';
import Header from './components/headercont/header';
import Project from './components/projects/projects';
import Design from './components/design/design';
import './sass/styles.scss';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Project></Project>
      <Design></Design>
    </div>
  );
}

export default App;
