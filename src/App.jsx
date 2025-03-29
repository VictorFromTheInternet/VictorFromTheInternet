import styles from './App.module.css';
import {Navbar} from './components/navbar/navbar.jsx'
import {Footer} from './components/Footer/Footer.jsx'

function App() {
  return (
    <>
      <div className={styles.App}>        
        <Navbar></Navbar>
        <Footer></Footer>
      </div>      
    </>
  );
}

export default App;
