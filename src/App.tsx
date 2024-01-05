import { useEffect } from 'react';
import Home from './Home';
import "aos/dist/aos.css";
import AOS from "aos";
import './global.css';
import './App.css';

function App() {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    Home()
  );

}

export default App;