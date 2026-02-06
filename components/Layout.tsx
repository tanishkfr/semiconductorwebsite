import React, { ReactNode } from 'react';
import CustomCursor from './CustomCursor';
import Footer from './Footer';
import { motion, AnimatePresence } from 'framer-motion';

interface LayoutProps {
  children: ReactNode;
  activePage: string;
  setPage: (page: string) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, activePage, setPage }) => {
  return (
    <div className="min-h-screen bg-surface text-onyx font-sans overflow-hidden relative selection:bg-azure/20 selection:text-azure">
      <CustomCursor />
      
      {/* GLOBAL TEXTURE OVERLAY */}
      <div className="fixed inset-0 z-0 bg-noise pointer-events-none mix-blend-multiply opacity-40"></div>
      
      {/* Main Content */}
      <main className="relative z-10 w-full h-screen overflow-y-auto no-scrollbar">
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

        <Footer />
        
      </main>
    </div>
  );
};
export default Layout;