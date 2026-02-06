import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SplashScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    // Speed run: 0ms -> 400ms -> 1200ms (Done)
    const timer1 = setTimeout(() => setStep(1), 400);
    const timer2 = setTimeout(() => onComplete(), 1200);
    return () => { clearTimeout(timer1); clearTimeout(timer2); };
  }, [onComplete]);

  return (
    <motion.div 
       className="fixed inset-0 z-[100] bg-onyx flex items-center justify-center overflow-hidden"
       exit={{ y: "-100%", transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } }}
    >
       <div className="relative text-center w-full">
          <AnimatePresence mode="wait">
             {step === 0 && (
                <motion.div 
                  key="step0"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="font-mono text-xs font-bold text-azure tracking-[0.5em] uppercase"
                >
                   System_Boot // Fab_4.2
                </motion.div>
             )}
             {step === 1 && (
                <motion.div 
                  key="step1"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center justify-center gap-4"
                >
                   {/* NEW LOGO MARK */}
                   <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M30 0L60 60H0L30 0Z" fill="#007AFF"/>
                      <path d="M30 15L45 60H15L30 15Z" fill="#FFFFFF"/>
                   </svg>
                   <span className="text-6xl font-bold tracking-tighter text-white">AXON</span>
                </motion.div>
             )}
          </AnimatePresence>
       </div>
    </motion.div>
  );
};

export default SplashScreen;