import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

const App = () => (
  <Router>
    <Navbar /> {/* Now uses the minimalist dark aesthetic with refined sans-serif text */}
    <Routes>
      <Route path="/" element={<Home />} /> {/* Now uses the "Senior Architect" copy and dark minimal theme */}
      <Route path="/projects" element={<Projects />} /> {/* Now uses "Outcome-oriented" project descriptions and tech stack chips */}
      <Route path="/resume" element={<Resume />} /> {/* Now uses "Result-First" bullets focusing on impact & scale */}
      <Route path="/contact" element={<Contact />} /> {/* Now uses elevated dark paper surfaces with refined icons */}
    </Routes>
    <Footer /> {/* Now uses the unified dark surface and muted text for a professional end-to-end feel */}
  </Router>
);

export default App;