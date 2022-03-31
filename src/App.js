import React, { useState } from 'react';

//Component Imports
import Skills from './components/skills/Skills';
import Header from './components/header/Header';
import Projects from './components/projects/Projects';
import Experience from './components/experience/Experience';
import Connect from './components/connect/Connect';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';

function App() {

  //define state for current mode. Initiate to light.
  const [darkmode, setmode] = useState(false);

  const toggleDarkMode = () => setmode(!darkmode)
  return (
    <div className={`App ${darkmode ? 'dark' : ''}`}>
      <Navbar darkmode={darkmode} toggleMode={toggleDarkMode} />
      <Header />
      <Skills />
      <Projects />
      <Experience />
      <Connect />
      <Footer />
    </div>
  );
}

export default App;
