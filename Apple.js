import React from 'react';
import Navbar from "./components/Navbar";
import Intro from './components/Intro';
import Second_page from "./components/Second_page";
import Our_Pillars from "./components/Our_Pillars";
import Event from './components/Event';
import Contact from './components/Contact';
import {BrowserRouter} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';


function App() {
  return (
    <BrowserRouter>
      <>
       <Navbar />
       <Intro />
       <Event/>
       <Our_Pillars />
       <Second_page />
       <Contact />
      </>
    </BrowserRouter>
  );
}

export default App;
