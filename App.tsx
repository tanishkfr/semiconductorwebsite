import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import Navbar from './components/Navbar';
import SplashScreen from './components/SplashScreen';
import Home from './pages/Home';
import TechSpecs from './pages/TechSpecs';
import About from './pages/About';
import Contact from './pages/Contact';
import { AnimatePresence } from 'framer-motion';

const App = () => {
  const [activePage, setActivePage] = useState('home');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);

  return (
    <>
      <AnimatePresence>
        {loading && <SplashScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <>
          <Navbar activePage={activePage} setPage={setActivePage} />
          <Layout activePage={activePage} setPage={setActivePage}>
            {activePage === 'home' && <Home setPage={setActivePage} />}
            {activePage === 'specs' && <TechSpecs />}
            {activePage === 'about' && <About />}
            {activePage === 'contact' && <Contact />}
          </Layout>
        </>
      )}
    </>
  );
};

export default App;