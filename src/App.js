import React, { useContext } from 'react';
// import { Route, Routes } from 'react-router-dom';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import { ThemeContext } from './components/context';
// import Cv from './components/cvdownload/Cv';
import Intro from './components/intro/Intro';
// import ProductList from './components/productList/ProductList';
import Skills from './components/skills/Skills';
import Toggle from './components/toggle/Toggle';

const App = () => {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
      <div style={{backgroundColor: darkMode ? "#222" : "white",  color: darkMode && "white"}}> 
      <Toggle />
      {/* <Cv /> */}
      <Intro />
      <About />
      <Skills />
      {/* <ProductList /> */}
      <Contact />
    </div>
    
  )
}

export default App