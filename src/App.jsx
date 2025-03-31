import styles from './App.module.css';
import {Hero} from './components/Hero/Hero.jsx'
import {Navbar} from './components/Navbar/Navbar.jsx'
import {Footer} from './components/Footer/Footer.jsx'
import {About} from './components/Body/About.jsx'
import {Experience} from './components/Body/Experience.jsx'
import {Projects} from './components/Body/Projects.jsx'
import {Skills} from './components/Body/Skills.jsx'

function App() {
  return (
    <>
      <div className={styles.App}>        
        <Hero></Hero>
        <Navbar></Navbar>
        <About></About>
        <Skills></Skills>
        <Experience></Experience>
        <Projects></Projects>
        <Footer></Footer>
      </div>      
    </>
  );
}

export default App;
