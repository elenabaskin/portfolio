import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from '../src/pages/Home';
import Projects from '../src/pages/Projects';
// import Project from './pages/Project'
// import About from './pages/About'
function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        {/* <Route path="/project/:id" element={<Project />} /> */}
        {/* <Route path="/project/:id" element={<About />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
