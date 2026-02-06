import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { NAV_ITEMS } from '../constants';

interface NavbarProps {
  activePage: string;
  setPage: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activePage, setPage }) => {
  const [isCompact, setIsCompact] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    // Switch to compact mode after scrolling 50px
    const shouldBeCompact = latest > 50;
    if (shouldBeCompact !== isCompact) setIsCompact(shouldBeCompact);
  });

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-center pointer-events-none pt-6">
      <motion.nav 
        layout
        initial={{ width: "100%", y: -20, opacity: 0 }}
        animate={{ 
           width: isCompact ? "auto" : "90%",
           y: 0,
           opacity: 1,
        }}
        transition={{ 
          duration: 0.6, 
          ease: [0.16, 1, 0.3, 1], // The "Apple" ease curve
        }}
        className={`pointer-events-auto relative flex items-center justify-between gap-6 px-3 py-3 rounded-full transition-all duration-500 ${
           isCompact 
             ? 'bg-white/80 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/20 pl-4 pr-4' 
             : 'bg-transparent max-w-7xl pl-0 pr-0'
        }`}
      >
        {/* Logo */}
        <button onClick={() => setPage('home')} className="flex items-center gap-3 group">
           <motion.div 
             layout 
             className="w-9 h-9 bg-onyx rounded-full flex items-center justify-center text-white font-bold text-xs group-hover:bg-azure transition-colors shadow-lg"
           >
              AX
           </motion.div>
           <motion.span 
             layout
             className={`font-bold tracking-tight text-lg ${isCompact ? 'text-onyx' : 'text-onyx'}`}
           >
             AXON
           </motion.span>
        </button>

        {/* Links Container */}
        <motion.div 
          layout
          className={`hidden md:flex items-center p-1.5 rounded-full ${isCompact ? 'bg-gray-100/50' : 'bg-white/50 backdrop-blur-md border border-white/40 shadow-sm'}`}
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setPage(item.id)}
                className="relative px-5 py-2 rounded-full text-xs font-bold transition-all z-10"
              >
                {isActive && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-white shadow-sm rounded-full border border-gray-100"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className={`relative z-10 transition-colors ${isActive ? 'text-onyx' : 'text-gray-500 hover:text-azure'}`}>
                  {item.label}
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* Action Button */}
        <motion.button 
           layout
           onClick={() => setPage('contact')} 
           whileHover={{ scale: 1.05 }}
           whileTap={{ scale: 0.95 }}
           className="hidden md:flex bg-azure text-white text-xs font-bold px-6 py-3 rounded-full shadow-lg shadow-azure/25 hover:bg-blue-600 transition-colors"
        >
           Start Project
        </motion.button>
      </motion.nav>
    </div>
  );
};
export default Navbar;