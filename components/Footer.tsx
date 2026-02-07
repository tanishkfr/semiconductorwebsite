import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Twitter, Linkedin, Github, Lock, X, ShieldAlert } from 'lucide-react';

// 1. DEFINE LEGAL DATA
const LEGAL_DOCS: Record<string, string> = {
  'Privacy Policy': "All biometric and usage data is hashed locally using SHA-256 before transmission to AXON secure vaults. We prioritize user anonymity and do not sell data to third parties.",
  'Terms of Service': "By accessing AXON systems, user agrees to non-disclosure of 1.4nm architecture details. Unauthorized reproduction of lithography patterns is strictly prohibited.",
  'Export Control': "Technology restricted under International Traffic in Arms Regulations (ITAR). Access from non-allied nations is strictly prohibited without State Dept authorization.",
  'Supply Chain Ethics': "100% trace on raw silicon ingestion. All tantalum and tungsten sources utilize blockchain verification to ensure conflict-free origin."
};

// INTERNAL COMPONENT: System Notification Popup (Kept as is for other links)
const SystemNotification = ({ message, onClose }: { message: string; onClose: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, x: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, x: 20, scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      className="fixed bottom-6 right-6 z-[9999] max-w-sm w-full bg-onyx/95 backdrop-blur-xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-lg overflow-hidden"
    >
      <div className="h-1 w-full bg-gradient-to-r from-red-500 via-red-600 to-red-500"></div>
      <div className="p-5 flex items-start gap-4">
        <div className="p-3 bg-red-500/10 rounded-lg shrink-0 border border-red-500/20">
          <Lock className="w-5 h-5 text-red-500" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-start">
             <h4 className="text-[10px] font-bold text-red-500 uppercase tracking-widest mb-2 flex items-center gap-2">
               <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-[pulse_1s_infinite]"></span>
               System Alert // 403
             </h4>
          </div>
          <p className="font-mono text-xs text-white/90 leading-relaxed uppercase break-words border-l-2 border-white/10 pl-3">
            {message}
          </p>
        </div>
        <button 
          onClick={onClose}
          className="group p-1 hover:bg-white/10 rounded-md transition-colors text-white/20 hover:text-white"
        >
          <X size={14} className="group-hover:scale-110 transition-transform" />
        </button>
      </div>
      <motion.div 
        initial={{ width: "100%" }}
        animate={{ width: "0%" }}
        transition={{ duration: 3, ease: "linear" }}
        className="h-[2px] bg-white/10"
      />
    </motion.div>
  );
};

// INTERNAL COMPONENT: Simple Legal Modal (Minimalist)
const SimpleLegalModal = ({ title, content, onClose }: { title: string, content: string, onClose: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/60 backdrop-blur-sm p-6"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-xl bg-onyx/95 border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
      >
        <div className="flex justify-between items-center p-6 border-b border-white/10">
            <div className="flex items-center gap-3">
                <ShieldAlert className="text-white/60" size={20} />
                <h2 className="text-xl font-bold text-white tracking-tight">{title}</h2>
            </div>
            <button 
                onClick={onClose} 
                className="p-2 rounded-full hover:bg-white/10 text-white/60 hover:text-white transition-colors"
            >
                <X size={20} />
            </button>
        </div>
        <div className="p-8">
            <p className="text-white/80 leading-relaxed text-base font-sans">
                {content}
            </p>
        </div>
        <div className="px-6 py-4 bg-white/5 border-t border-white/10 flex justify-end">
            <button 
                onClick={onClose}
                className="text-xs font-bold text-white/60 hover:text-white uppercase tracking-wider transition-colors"
            >
                Close
            </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Footer: React.FC = () => {
  const [notification, setNotification] = useState<string | null>(null);
  const [activeLegalDoc, setActiveLegalDoc] = useState<{ title: string; content: string } | null>(null);

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => setNotification(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  const handleLinkClick = (name: string, category?: string) => {
    if (category === 'Legal' && LEGAL_DOCS[name]) {
       setActiveLegalDoc({ title: name, content: LEGAL_DOCS[name] });
       return;
    }
    const moduleId = name.toUpperCase().replace(/\s+/g, '_').replace(/[^A-Z0-9_]/g, '');
    setNotification(`ACCESS_DENIED: MODULE "${moduleId}" UNDER_CONSTRUCTION`);
  };

  return (
    <footer className="bg-onyx text-white pt-32 pb-6 relative overflow-hidden border-t border-white/10">
      
      <AnimatePresence>
         {notification && (
            <SystemNotification 
               message={notification} 
               onClose={() => setNotification(null)} 
            />
         )}
         {activeLegalDoc && (
            <SimpleLegalModal 
               title={activeLegalDoc.title}
               content={activeLegalDoc.content}
               onClose={() => setActiveLegalDoc(null)}
            />
         )}
      </AnimatePresence>

      <div className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-[0.03]">
         <h1 className="text-[30vw] font-bold leading-none tracking-tighter">AXON</h1>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="flex flex-col lg:flex-row justify-between items-end mb-24 pb-12 border-b border-white/10">
           <div className="mb-12 lg:mb-0">
              <div className="flex items-center gap-2 mb-4">
                 <div className="w-2 h-2 bg-cobalt rounded-full"></div>
                 <span className="text-xs font-mono text-cobalt uppercase tracking-widest">Newsletter</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
                 Stay Ahead of <br/>
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-cobalt to-blue-400">Moore's Law.</span>
              </h2>
           </div>
           
           <div className="w-full lg:w-auto">
              <div className="relative group">
                 <input 
                   type="email" 
                   placeholder="ENTER CORPORATE EMAIL" 
                   className="w-full md:w-[400px] bg-white/5 border border-white/10 rounded-none px-6 py-5 text-sm font-mono placeholder-white/30 focus:outline-none focus:border-cobalt focus:bg-white/10 transition-all"
                 />
                 <button className="absolute right-2 top-2 bottom-2 bg-white text-onyx px-6 font-bold text-xs uppercase hover:bg-cobalt hover:text-white transition-colors">
                    Initialize
                 </button>
              </div>
              <div className="mt-4 flex gap-6 text-[10px] font-mono text-white/30 uppercase">
                 <span className="flex items-center gap-1"><Lock size={10} /> 256-bit Encrypted</span>
                 <span>No Spam Protocol</span>
              </div>
           </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-32">
           <div>
              <h4 className="font-mono text-xs font-bold text-white/40 uppercase tracking-widest mb-8">Technology</h4>
              <ul className="space-y-4">
                 {['Logic Nodes (A-14)', 'Advanced Packaging', 'Silicon Photonics', 'Memory Stacks (HBM)'].map((item) => (
                    <li key={item}>
                       <button 
                         onClick={() => handleLinkClick(item, 'Technology')}
                         className="text-left text-sm font-medium text-white/70 hover:text-cobalt cursor-pointer transition-colors focus:outline-none group flex items-center gap-2"
                       >
                         <span className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-cobalt text-[10px]">►</span>
                         {item}
                       </button>
                    </li>
                 ))}
              </ul>
           </div>

           <div>
              <h4 className="font-mono text-xs font-bold text-white/40 uppercase tracking-widest mb-8">Company</h4>
              <ul className="space-y-4">
                 {['About Foundry', 'Leadership', 'Careers', 'Investor Relations'].map((item) => (
                    <li key={item}>
                       <button 
                         onClick={() => handleLinkClick(item, 'Company')}
                         className="text-left text-sm font-medium text-white/70 hover:text-cobalt cursor-pointer transition-colors focus:outline-none group flex items-center gap-2"
                       >
                         <span className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-cobalt text-[10px]">►</span>
                         {item}
                       </button>
                    </li>
                 ))}
              </ul>
           </div>

           <div>
              <h4 className="font-mono text-xs font-bold text-white/40 uppercase tracking-widest mb-8">Resources</h4>
              <ul className="space-y-4">
                 {['Documentation', 'PDK Access', 'Whitepapers', 'API Status'].map((item) => (
                    <li key={item}>
                       <button 
                         onClick={() => handleLinkClick(item, 'Resources')}
                         className="text-left text-sm font-medium text-white/70 hover:text-cobalt cursor-pointer transition-colors focus:outline-none group flex items-center gap-2"
                       >
                         <span className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-cobalt text-[10px]">►</span>
                         {item}
                       </button>
                    </li>
                 ))}
              </ul>
           </div>

           <div>
              <h4 className="font-mono text-xs font-bold text-white/40 uppercase tracking-widest mb-8">Legal</h4>
              <ul className="space-y-4">
                 {['Privacy Policy', 'Terms of Service', 'Export Control', 'Supply Chain Ethics'].map((item) => (
                    <li key={item}>
                       <button 
                         onClick={() => handleLinkClick(item, 'Legal')}
                         className="text-left text-sm font-medium text-white/70 hover:text-cobalt cursor-pointer transition-colors focus:outline-none group flex items-center gap-2"
                       >
                         <span className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-cobalt text-[10px]">►</span>
                         {item}
                       </button>
                    </li>
                 ))}
              </ul>
           </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
           
           <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/5">
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </div>
              <span className="text-[10px] font-mono text-green-400 uppercase tracking-wider">All Systems Operational</span>
           </div>

           <div className="flex items-center gap-6">
              <Twitter size={18} className="text-white/40 hover:text-white cursor-pointer transition-colors" />
              <Linkedin size={18} className="text-white/40 hover:text-white cursor-pointer transition-colors" />
              <Github size={18} className="text-white/40 hover:text-white cursor-pointer transition-colors" />
           </div>

           <div className="text-[10px] font-mono text-white/30 uppercase">
              © 2026 AXON Inc. // FAB_ID: 8842
           </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;