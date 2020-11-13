import React from 'react'
import './App.css';
import Banner from "./components/Banner"
import Nav from "./components/Nav"
import Projects from "./components/Projects"
import About from "./components/About"
import Contact from './components/Contact';
import Blog from './components/Blog';
import Footer from './components/Footer';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NoMatch from './images/NoMatch';

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/home">
          <Banner/>
        </Route>
        <Route exact path="/">
          <Banner/>
        </Route>
        <Route path="/project">
          <Projects/>
        </Route>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/blog">
          <Blog/>
        </Route>
        <Route path="/contact">
          <Contact/>
        </Route>
        <Route path="*">
          <NoMatch/>
        </Route>
      </Switch>
      <Footer/>
    </Router>
    
  );
}

export default App;
