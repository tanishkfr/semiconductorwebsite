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
    <div className="bg-surface min-h-screen pt-24 pb-20 px-6 text-onyx overflow-hidden relative">
      {/* Background Tech Grid - Light Mode */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none"></div>
      
      {/* Animated Scan Line - Cobalt Blue */}
      <div className="absolute top-0 left-0 w-full h-1 bg-cobalt/30 shadow-[0_0_20px_#0047AB] animate-[scan_4s_linear_infinite] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-20 relative z-10 h-full">
         
         {/* LEFT: INFO DASHBOARD - Clean Room Style */}
         <div className="flex flex-col justify-center py-12">
            <div className="mb-12">
               <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-onyx/10 rounded-full mb-6 shadow-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-[10px] font-mono text-onyx/60 uppercase tracking-wide">SECURE UPLINK ESTABLISHED</span>
               </div>
               <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-onyx">
                  Initiate <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cobalt to-blue-500">Sequence.</span>
               </h1>
               <p className="text-xl text-onyx/60 font-light max-w-md leading-relaxed">
                  Secure high-volume allocation for the A-1400 node. Direct line to engineering validation teams.
               </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
               {[
                  { icon: Mail, label: "Enterprise Sales", val: "foundry@axon.com", color: "text-cobalt" },
                  { icon: Phone, label: "Global Support", val: "+1 (800) 555-0199", color: "text-onyx" },
                  { icon: MapPin, label: "HQ Coordinates", val: "12.9716° N, 77.5946° E", color: "text-onyx" }
               ].map((item, i) => (
                  <div key={i} className="flex items-center gap-6 p-6 bg-white border border-onyx/10 rounded-xl hover:border-cobalt transition-colors cursor-pointer group shadow-sm">
                     <div className="w-12 h-12 bg-surface border border-onyx/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-cobalt group-hover:text-white transition-all text-onyx">
                        <item.icon className="w-5 h-5" />
                     </div>
                     <div>
                        <h3 className="font-mono text-xs text-onyx/40 uppercase tracking-widest mb-1">{item.label}</h3>
                        <p className={`font-mono text-lg font-medium ${item.color}`}>{item.val}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>

         {/* RIGHT: TERMINAL FORM - White/Light Grey */}
         <div className="flex items-center">
            <div className="w-full bg-white border border-onyx/10 rounded-xl overflow-hidden shadow-2xl relative">
               {/* Terminal Header */}
               <div className="bg-gray-50 border-b border-onyx/10 px-4 py-2 flex items-center justify-between">
                  <div className="flex gap-2">
                     <div className="w-3 h-3 rounded-full bg-red-400"></div>
                     <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                     <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="text-[10px] font-mono text-onyx/40 flex items-center gap-2 uppercase">
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
                           <label className="text-[10px] font-mono text-onyx/40 group-hover:text-cobalt transition-colors uppercase font-bold">usr_first_name</label>
                           <input type="text" onFocus={handleFocus} onBlur={handleBlur} className="w-full bg-transparent border-b border-onyx/20 rounded-none px-0 py-2 font-mono text-sm text-onyx focus:outline-none focus:border-cobalt transition-all placeholder-onyx/20" placeholder="NULL" />
                        </div>
                        <div className="space-y-2 group">
                           <label className="text-[10px] font-mono text-onyx/40 group-hover:text-cobalt transition-colors uppercase font-bold">usr_last_name</label>
                           <input type="text" onFocus={handleFocus} onBlur={handleBlur} className="w-full bg-transparent border-b border-onyx/20 rounded-none px-0 py-2 font-mono text-sm text-onyx focus:outline-none focus:border-cobalt transition-all placeholder-onyx/20" placeholder="NULL" />
                        </div>
                     </div>
                     
                     <div className="space-y-2 group">
                        <label className="text-[10px] font-mono text-onyx/40 group-hover:text-cobalt transition-colors uppercase font-bold">target_email</label>
                        <input type="email" onFocus={handleFocus} onBlur={handleBlur} className="w-full bg-transparent border-b border-onyx/20 rounded-none px-0 py-2 font-mono text-sm text-onyx focus:outline-none focus:border-cobalt transition-all placeholder-onyx/20" placeholder="enter_corp_id..." />
                     </div>

                     <div className="space-y-2 group">
                        <label className="text-[10px] font-mono text-onyx/40 group-hover:text-cobalt transition-colors uppercase font-bold">query_protocol</label>
                        <div className="relative">
                            <select onFocus={handleFocus} onBlur={handleBlur} className="w-full bg-transparent border-b border-onyx/20 rounded-none px-0 py-2 font-mono text-sm text-onyx focus:outline-none focus:border-cobalt transition-all appearance-none cursor-pointer">
                               <option>VOL_FABRICATION</option>
                               <option>IP_LICENSING</option>
                               <option>INVESTOR_RELATIONS</option>
                            </select>
                        </div>
                     </div>

                     <div className="space-y-2 group">
                        <label className="text-[10px] font-mono text-onyx/40 group-hover:text-cobalt transition-colors uppercase font-bold">payload_message</label>
                        <textarea rows={4} onFocus={handleFocus} onBlur={handleBlur} className="w-full bg-transparent border-b border-onyx/20 rounded-none px-0 py-2 font-mono text-sm text-onyx focus:outline-none focus:border-cobalt transition-all placeholder-onyx/20 resize-none" placeholder="// type message here..."></textarea>
                     </div>

                     <button type="button" className="w-full bg-cobalt hover:bg-blue-700 text-white font-mono font-bold py-4 rounded-lg transition-all shadow-lg shadow-cobalt/20 hover:shadow-cobalt/40 flex items-center justify-center gap-2 group mt-4">
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