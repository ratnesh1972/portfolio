//Component Imports
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Experience from './components/experience/Experience';
import Connect from './components/connect/Connect';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Skills />
      <Projects />
      <Experience />
      <Connect />
      <Footer />
    </div>
  );
}

export default App;
