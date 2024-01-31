import { useEffect } from 'react';
import Home from './Home';
import "aos/dist/aos.css";
import AOS from "aos";
import './global.css';
import './App.css';
import CustomCursor from './CustomCursor';

function App() {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <CustomCursor />
      <Home />
    </>
    
  );

}

export default App;