import './App.css';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Intro from './components/Intro';
import Project from './components/Project';
import Work from './components/Work';
function App() {
  return (
    <>
    <Navbar></Navbar>
    <Intro></Intro>
    <Work></Work>
    <Project></Project>
    <Skills></Skills>
    <Contact/>
    <Footer/>
</>
  );
}

export default App;
