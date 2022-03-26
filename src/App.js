//Component Imports
import Skills from './components/skills/Skills';
import Header from './components/header/Header';
import Projects from './components/projects/Projects';
import Experience from './components/experience/Experience';
import Connect from './components/connect/Connect';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
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
