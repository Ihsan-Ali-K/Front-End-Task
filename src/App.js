
import {
  BrowserRouter as Router,
  Route,
  Routes,
  
} from "react-router-dom";
import Home from './Screens/Home';
import Contact from "./Component/Contact";
import BackToTopButton from "./Component/BackToTopButton";
import Portfolio from "./Component/Portfolio";
import DetailsCard from "./Component/DetailsCard";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";



function App() {
  useEffect(()=>{
    AOS.init({duration:1000})
  },[]);
   return (
    <>
    <Router>
      
     
      <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/contact" element={<Contact/>} />
      <Route exact path="/portfolio" element={<Portfolio />} />
      <Route exact path="/detailsCard" element={<DetailsCard />} />

    </Routes>
    <BackToTopButton />
    </Router>
    
    </>
  );
}

export default App;
