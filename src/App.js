import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Link, Routes ,Route } from 'react-router-dom';

import CMDashboard from './Pages/CMDashboard';
import TheCoffeeApp from './Pages/TheCoffeeShop';
import FashionAwards from './Pages/FashionAwards';
import Header from './components/headercont/header';
import Home from './Pages/Home';
import './sass/styles.scss';


function App() {
  return (
    <div className="App">
     
      <Router> 
        <Header></Header>
        <Routes>
          <Route exact path="/Home" element={<Home />}> </Route>
          <Route exact path="/Design-Project/CMDashboard" element={<CMDashboard />}></Route>
          <Route exact path="/Design-Project/TheCoffeeShop" element={<TheCoffeeApp />}></Route>
          <Route exact path="/Design-Project/FashionAwards" element={<FashionAwards/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
