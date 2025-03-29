import styles from './App.module.css';
import {Navbar} from './components/navbar/navbar.jsx'
import {Footer} from './components/Footer/Footer.jsx'
import {About} from './components/Body/About.jsx'
import {Experience} from './components/Body/Experience.jsx'
import {Projects} from './components/Body/Projects.jsx'

function App() {
  return (
    <>
      <div className={styles.App}>        
        <Navbar></Navbar>
        <About></About>
        <Experience></Experience>
        <Projects></Projects>
        <Footer></Footer>
      </div>      
    </>
  );
}

export default App;
