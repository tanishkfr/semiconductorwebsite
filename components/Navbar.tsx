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
           width: isScrolled ? "min-content" : "90%",
           borderRadius: "9999px",
           y: isScrolled ? 10 : 0,
           // Always use frosted glass for consistent contrast
           backgroundColor: "rgba(255, 255, 255, 0.85)", 
           backdropFilter: "blur(12px)",
           boxShadow: isScrolled ? "0 10px 30px rgba(0,0,0,0.1)" : "0 4px 20px rgba(0,0,0,0.05)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30, mass: 0.8 }}
        className="pointer-events-auto flex items-center justify-between px-2 py-2 md:px-3 md:py-3 border border-white/40"
        style={{ maxWidth: '1400px' }}
      >
        
        {/* BRANDING */}
        <button onClick={() => setPage('home')} className="flex items-center gap-3 px-3 group overflow-hidden focus:outline-none">
           <div className="relative w-8 h-8 shrink-0">
              <svg viewBox="0 0 60 60" fill="none" className="w-full h-full drop-shadow-sm">
                  <path d="M30 0L60 60H0L30 0Z" fill="#0A0A0A"/>
                  <path d="M30 15L45 60H15L30 15Z" fill="#0047AB"/>
              </svg>
           </div>
           <motion.span 
             initial={{ opacity: 1, width: "auto" }}
             animate={{ 
               opacity: isScrolled ? 0 : 1, 
               width: isScrolled ? 0 : "auto",
               marginLeft: isScrolled ? 0 : 12
             }}
             transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
             className="font-bold tracking-tight text-xl whitespace-nowrap text-onyx"
           >
             AXON
           </motion.span>
        </button>

        {/* NAVIGATION PILL */}
        {/* We keep the nav pill transparent/subtle inside the glass header */}
        <nav className="hidden md:flex items-center gap-1 p-1 rounded-full">
           {NAV_ITEMS.map((item) => {
             const isActive = activePage === item.id;
             return (
               <button
                 key={item.id}
                 onClick={() => setPage(item.id)}
                 className={`relative px-5 py-2 rounded-full text-xs font-bold transition-all duration-300 z-10 hover:text-cobalt focus:outline-none ${
                   isActive ? 'text-onyx' : 'text-onyx/60'
                 }`}
               >
                 {isActive && (
                   <motion.div
                     layoutId="nav-pill"
                     className="absolute inset-0 bg-white shadow-sm rounded-full border border-black/5"
                     transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                   />
                 )}
                 <span className="relative z-10">{item.label}</span>
               </button>
             );
           })}
        </nav>

        {/* CTA BUTTON (TRANSFORMING) */}
        <motion.button 
           onClick={() => setPage('contact')} 
           className="h-10 rounded-full overflow-hidden flex items-center justify-center transition-all shadow-md relative bg-onyx text-white hover:bg-cobalt focus:outline-none"
           animate={{ 
             width: isScrolled ? 40 : 130, // Shrink to circle
             padding: 0
           }}
        >
           {/* Text Label */}
           <motion.span 
             className="absolute text-xs font-bold whitespace-nowrap"
             animate={{ opacity: isScrolled ? 0 : 1, scale: isScrolled ? 0.5 : 1 }}
           >
             Start Project
           </motion.span>
           
           {/* Icon Label */}
           <motion.div
             className="absolute"
             animate={{ opacity: isScrolled ? 1 : 0, scale: isScrolled ? 1 : 0.5, rotate: isScrolled ? 0 : -90 }}
           >
              <Hexagon size={16} strokeWidth={2.5} />
           </motion.div>
        </motion.button>
      </motion.header>
    </div>
  );
};
export default Navbar;