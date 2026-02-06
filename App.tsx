import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import TechSpecs from './pages/TechSpecs';
import About from './pages/About';
import Contact from './pages/Contact';

const App = () => {
  const [activePage, setActivePage] = useState('home');

  // Scroll to top whenever page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);

  return (
    <>
      {/* Navbar sits outside the layout to stay fixed */}
      <Navbar activePage={activePage} setPage={setActivePage} />
      
      <Layout activePage={activePage} setPage={setActivePage}>
        {activePage === 'home' && <Home setPage={setActivePage} />}
        {activePage === 'specs' && <TechSpecs />}
        {activePage === 'about' && <About />}
        {activePage === 'contact' && <Contact />}
      </Layout>
    </>
  );
};

export default App;