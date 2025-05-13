import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {
  Navbar,
  Hero,
  About,
  Experience,
  Tech,
  Works,
  Contact,
  ParticlesBackground,
} from './components';

const App = () => (
  <BrowserRouter>
    <div className="relative">
      <ParticlesBackground/>
      <div className="relative z-10">
        <Navbar/>
        <Hero/>
        <About/>
        <Experience/>
        <Tech/>
        <Works/>
        <Contact/>
      </div>
    </div>
  </BrowserRouter>
);

export default App;
