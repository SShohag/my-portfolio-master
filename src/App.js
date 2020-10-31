import React from 'react'
import './App.css';
import Banner from "./components/Banner"
import Nav from "./components/Nav"
import Projects from "./components/Projects"
import About from "./components/About"
import Contact from './components/Contact';
import Blog from './components/Blog';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Banner/>
      <Nav/>
      <Projects/>
      <About/>
      <Blog></Blog>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
