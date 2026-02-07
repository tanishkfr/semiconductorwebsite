import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Mail, Phone, MapPin, Terminal, Send, Lock, Signal } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState('IDLE'); // IDLE, TYPING, SENDING, SENT
  const [statusText, setStatusText] = useState('AWAITING_INPUT');

  const handleFocus = () => {
     setFormState('TYPING');
     setStatusText('INPUT_DETECTED >> ENCRYPTING_STREAM');
  };

  const handleBlur = () => {
     setFormState('IDLE');
     setStatusText('AWAITING_INPUT');
  };

  // Blinking cursor effect
  const [cursorVisible, setCursorVisible] = useState(true);
  useEffect(() => {
     const interval = setInterval(() => setCursorVisible(v => !v), 500);
     return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-onyx min-h-screen pt-24 pb-20 px-6 text-white overflow-hidden relative">
      {/* Background Tech Grid */}
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-10 pointer-events-none"></div>
      
      {/* Animated Scan Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-cobalt/20 shadow-[0_0_20px_#0047AB] animate-[scan_4s_linear_infinite] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-20 relative z-10 h-full">
         
         {/* LEFT: INFO DASHBOARD */}
         <div className="flex flex-col justify-center py-12">
            <div className="mb-12">
               <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-6">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-[10px] font-mono text-green-400">SECURE UPLINK ESTABLISHED</span>
               </div>
               <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
                  Initiate <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cobalt to-blue-400">Sequence.</span>
               </h1>
               <p className="text-xl text-white/50 font-light max-w-md">
                  Secure high-volume allocation for the A-1400 node. Direct line to engineering validation teams.
               </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
               {[
                  { icon: Mail, label: "Enterprise Sales", val: "foundry@axon.com", color: "text-blue-400" },
                  { icon: Phone, label: "Global Support", val: "+1 (800) 555-0199", color: "text-green-400" },
                  { icon: MapPin, label: "HQ Coordinates", val: "12.9716° N, 77.5946° E", color: "text-yellow-400" }
               ].map((item, i) => (
                  <div key={i} className="flex items-center gap-6 p-6 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors cursor-pointer group">
                     <div className="w-12 h-12 bg-black border border-white/20 rounded-lg flex items-center justify-center shrink-0 group-hover:border-cobalt transition-colors">
                        <item.icon className="w-5 h-5 text-white/80" />
                     </div>
                     <div>
                        <h3 className="font-mono text-xs text-white/40 uppercase tracking-widest mb-1">{item.label}</h3>
                        <p className={`font-mono text-lg ${item.color}`}>{item.val}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>

         {/* RIGHT: TERMINAL FORM */}
         <div className="flex items-center">
            <div className="w-full bg-[#050505] border border-white/10 rounded-xl overflow-hidden shadow-2xl relative">
               {/* Terminal Header */}
               <div className="bg-white/5 border-b border-white/10 px-4 py-2 flex items-center justify-between">
                  <div className="flex gap-2">
                     <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                     <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                     <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                  </div>
                  <div className="text-[10px] font-mono text-white/30 flex items-center gap-2">
                     <Lock size={10} /> ENCRYPTED_SSH_SESSION
                  </div>
               </div>

               {/* Terminal Body */}
               <div className="p-8">
                  
                  {/* Status Line */}
                  <div className="font-mono text-xs text-cobalt mb-8 flex items-center gap-2">
                     <Signal size={12} className={formState === 'TYPING' ? 'animate-pulse' : ''} />
                     STATUS: {statusText}
                     <span className={`${cursorVisible ? 'opacity-100' : 'opacity-0'} inline-block w-2 h-4 bg-cobalt`}></span>
                  </div>

                  <form className="space-y-6">
                     <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-2 group">
                           <label className="text-[10px] font-mono text-white/40 group-hover:text-cobalt transition-colors uppercase">usr_first_name</label>
                           <input type="text" onFocus={handleFocus} onBlur={handleBlur} className="w-full bg-white/5 border border-white/10 rounded-none px-4 py-3 font-mono text-sm text-white focus:outline-none focus:border-cobalt focus:bg-white/10 transition-all placeholder-white/20" placeholder="NULL" />
                        </div>
                        <div className="space-y-2 group">
                           <label className="text-[10px] font-mono text-white/40 group-hover:text-cobalt transition-colors uppercase">usr_last_name</label>
                           <input type="text" onFocus={handleFocus} onBlur={handleBlur} className="w-full bg-white/5 border border-white/10 rounded-none px-4 py-3 font-mono text-sm text-white focus:outline-none focus:border-cobalt focus:bg-white/10 transition-all placeholder-white/20" placeholder="NULL" />
                        </div>
                     </div>
                     
                     <div className="space-y-2 group">
                        <label className="text-[10px] font-mono text-white/40 group-hover:text-cobalt transition-colors uppercase">target_email</label>
                        <input type="email" onFocus={handleFocus} onBlur={handleBlur} className="w-full bg-white/5 border border-white/10 rounded-none px-4 py-3 font-mono text-sm text-white focus:outline-none focus:border-cobalt focus:bg-white/10 transition-all placeholder-white/20" placeholder="enter_corp_id..." />
                     </div>

                     <div className="space-y-2 group">
                        <label className="text-[10px] font-mono text-white/40 group-hover:text-cobalt transition-colors uppercase">query_protocol</label>
                        <select onFocus={handleFocus} onBlur={handleBlur} className="w-full bg-white/5 border border-white/10 rounded-none px-4 py-3 font-mono text-sm text-white focus:outline-none focus:border-cobalt focus:bg-white/10 transition-all appearance-none cursor-pointer">
                           <option className="bg-onyx">VOL_FABRICATION</option>
                           <option className="bg-onyx">IP_LICENSING</option>
                           <option className="bg-onyx">INVESTOR_RELATIONS</option>
                        </select>
                     </div>

                     <div className="space-y-2 group">
                        <label className="text-[10px] font-mono text-white/40 group-hover:text-cobalt transition-colors uppercase">payload_message</label>
                        <textarea rows={4} onFocus={handleFocus} onBlur={handleBlur} className="w-full bg-white/5 border border-white/10 rounded-none px-4 py-3 font-mono text-sm text-white focus:outline-none focus:border-cobalt focus:bg-white/10 transition-all placeholder-white/20" placeholder="// type message here..."></textarea>
                     </div>

                     <button type="button" className="w-full bg-cobalt hover:bg-blue-600 text-white font-mono font-bold py-4 rounded-none transition-colors flex items-center justify-center gap-2 group border border-cobalt">
                        <Terminal size={16} /> EXECUTE_TRANSMISSION <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform"/>
                     </button>
                  </form>
               </div>
            </div>
         </div>

      </div>
    </div>
  );
};
export default Contact;