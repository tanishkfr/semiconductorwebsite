import React, { ReactNode, useLayoutEffect, useRef } from 'react';
import CustomCursor from './CustomCursor';
import Footer from './Footer';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';

interface LayoutProps {
  children: ReactNode;
  activePage: string;
  setPage: (page: string) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, activePage, setPage }) => {
  const mainRef = useRef<HTMLElement>(null);
  
  // Track scroll progress relative to the main scrollable container
  const { scrollYProgress } = useScroll({ container: mainRef });
  
  // Smooth out the progress bar animation
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useLayoutEffect(() => {
    // 1. Reset the scrollable container
    if (mainRef.current) {
      mainRef.current.scrollTo({ top: 0, behavior: "instant" });
    }
    // 2. Reset the window (backup)
    window.scrollTo(0, 0);
  }, [activePage]);

  return (
    <div className="min-h-screen bg-surface text-onyx font-sans overflow-hidden relative selection:bg-cobalt selection:text-white">
      <CustomCursor />
      
      {/* READING PROGRESS BAR */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-cobalt origin-left z-[9999]"
        style={{ scaleX }}
      />

      {/* GLOBAL NOISE OVERLAY */}
      <div 
        className="fixed inset-0 z-[50] pointer-events-none opacity-[0.05] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      ></div>
      
      {/* GLOBAL DOT TEXTURE UNDERLAY */}
      <div className="fixed inset-0 z-0 bg-dot-pattern bg-dots opacity-[0.15] pointer-events-none mix-blend-multiply"></div>
      
      {/* Main Content Container - Scrollable */}
      <main ref={mainRef} className="relative z-10 w-full h-screen overflow-y-auto no-scrollbar scroll-smooth">
        <AnimatePresence mode="wait">
           <motion.div
             key={activePage}
             initial={{ opacity: 0, y: 10, filter: 'blur(8px)' }}
             animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
             exit={{ opacity: 0, y: -10, filter: 'blur(8px)' }}
             transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
             className="min-h-screen" 
           >
             {children}
           </motion.div>
        </AnimatePresence>

        {/* CONTRAST SEPARATOR */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-onyx/20 to-transparent my-0"></div>

        {/* MEGA FOOTER - Inside Scroll Container */}
        <Footer />
        
      </main>
    </div>
  );
};
export default Layout;