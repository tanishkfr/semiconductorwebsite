import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { NAV_ITEMS } from '../constants';
import { Hexagon } from 'lucide-react';

interface NavbarProps {
  activePage: string;
  setPage: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activePage, setPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-center pt-6 pointer-events-none">
      <motion.header
        layout
        initial={{ width: "90%", borderRadius: "24px", y: 0 }}
        animate={{ 
           width: isScrolled ? "fit-content" : "90%",
           borderRadius: "9999px",
           y: isScrolled ? 10 : 0,
           backgroundColor: isScrolled ? "rgba(255, 255, 255, 0.9)" : "transparent",
           backdropFilter: isScrolled ? "blur(20px)" : "blur(0px)",
           boxShadow: isScrolled ? "0 20px 40px rgba(0,0,0,0.1)" : "none",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30, mass: 0.8 }}
        className="pointer-events-auto flex items-center justify-between px-3 py-3"
        style={{ maxWidth: '1400px' }}
      >
        
        {/* NEW BRANDING */}
        <button onClick={() => setPage('home')} className="flex items-center gap-3 px-3 group">
           <div className="relative w-8 h-8">
              <svg viewBox="0 0 60 60" fill="none" className="w-full h-full drop-shadow-md">
                  <path d="M30 0L60 60H0L30 0Z" fill="#1D1D1F"/>
                  <path d="M30 15L45 60H15L30 15Z" fill="#FFFFFF"/>
              </svg>
           </div>
           <motion.span 
             animate={{ opacity: isScrolled ? 0 : 1, width: isScrolled ? 0 : "auto" }}
             className="font-bold tracking-tight text-xl text-onyx overflow-hidden whitespace-nowrap"
           >
             AXON
           </motion.span>
        </button>

        {/* NAVIGATION PILL */}
        <nav className={`flex items-center gap-1 p-1 rounded-full ${isScrolled ? '' : 'bg-white/50 backdrop-blur-md border border-white/20 shadow-sm'}`}>
           {NAV_ITEMS.map((item) => {
             const isActive = activePage === item.id;
             return (
               <button
                 key={item.id}
                 onClick={() => setPage(item.id)}
                 className={`relative px-5 py-2 rounded-full text-xs font-bold transition-all duration-300 z-10 ${
                   isActive ? 'text-onyx' : 'text-gray-500 hover:text-azure'
                 }`}
               >
                 {isActive && (
                   <motion.div
                     layoutId="nav-pill"
                     className="absolute inset-0 bg-white shadow-sm rounded-full border border-gray-200"
                     transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                   />
                 )}
                 <span className="relative z-10">{item.label}</span>
               </button>
             );
           })}
        </nav>

        {/* CTA BUTTON */}
        <motion.button 
           animate={{ opacity: isScrolled ? 0 : 1, width: isScrolled ? 0 : "auto", padding: isScrolled ? 0 : "0 24px" }}
           onClick={() => setPage('contact')} 
           className="bg-onyx text-white text-xs font-bold h-10 rounded-full overflow-hidden flex items-center justify-center hover:bg-azure transition-colors whitespace-nowrap shadow-lg shadow-onyx/20"
        >
           Start Project
        </motion.button>
      </motion.header>
    </div>
  );
};
export default Navbar;