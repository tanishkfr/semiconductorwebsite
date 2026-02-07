import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Award, TrendingUp, Users, Database, Zap, Cpu, Search, CheckCircle2, FileBadge } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-20">
       
       {/* 1. HERO SECTION - HIGH PRECISION TYPOGRAPHY */}
       <div className="max-w-6xl mx-auto px-6 mb-32 text-center relative">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
             <h1 className="text-6xl md:text-[9rem] leading-[0.85] tracking-tighter text-onyx mb-12">
                <span className="block font-light text-onyx/80">The Foundry</span>
                <span className="block font-bold mt-2">of Tomorrow.</span>
             </h1>
             
             {/* Technical Separator */}
             <div className="flex items-center justify-center gap-4 opacity-50">
                <div className="h-px w-24 bg-gradient-to-r from-transparent to-onyx"></div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-onyx">Est. 2024 // Fabrication Div</div>
                <div className="h-px w-24 bg-gradient-to-l from-transparent to-onyx"></div>
             </div>
          </motion.div>
       </div>

       {/* 2. LEADERSHIP GRID - IDENTITY BADGES (Dark Theme) */}
       <div className="bg-onyx py-32 px-6 relative overflow-hidden border-y border-white/10">
          {/* Background Grid for Tech Feel */}
          <div className="absolute inset-0 bg-grid-pattern-dark opacity-10 pointer-events-none"></div>

          <div className="max-w-7xl mx-auto relative z-10">
             <div className="flex items-end justify-between mb-16 border-b border-white/10 pb-8">
                <div>
                   <h2 className="text-4xl font-bold text-white mb-2">Command Structure</h2>
                   <p className="text-white/40 font-mono text-xs uppercase tracking-wider">Executive Leadership // Clearance Level 5</p>
                </div>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                   { name: "Tanishk", role: "Founder & CEO", desc: "Ex-Intel Fellow. Pioneer of Backside Power Delivery.", id: "EXEC_01" },
                   { name: "Sarah Chen", role: "CTO", desc: "Lead Architect of the A-1400 Logic Cell Library.", id: "EXEC_02" },
                   { name: "Dr. A. Russo", role: "VP of Manufacturing", desc: "Oversees Fab 4.2 High-NA EUV operations.", id: "EXEC_03" }
                ].map((leader, i) => (
                   <div key={i} className="group relative p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-cobalt/50 transition-all duration-500 overflow-hidden">
                      {/* Hover Glow */}
                      <div className="absolute inset-0 bg-gradient-to-br from-cobalt/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      <div className="relative z-10">
                         <div className="flex justify-between items-start mb-8">
                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gray-700 to-black border border-white/20 flex items-center justify-center text-white/20">
                               <Users size={24} />
                            </div>
                            <span className="font-mono text-[10px] text-white/30 border border-white/10 px-2 py-1 rounded">{leader.id}</span>
                         </div>
                         
                         <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-cobalt transition-colors">{leader.name}</h3>
                         <div className="text-cobalt text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                            <div className="w-1 h-1 bg-cobalt rounded-full shadow-[0_0_5px_#0047AB]"></div>
                            {leader.role}
                         </div>
                         <p className="text-white/50 text-sm leading-relaxed border-t border-white/10 pt-4 mt-4 font-mono">
                            {leader.desc}
                         </p>
                      </div>
                   </div>
                ))}
             </div>
          </div>
       </div>

       {/* 3. GLOBAL FAB CAPACITY - DATA TERMINAL LAYOUT */}
       <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="flex items-center gap-4 mb-12">
             <div className="p-3 bg-cobalt/10 rounded-lg border border-cobalt/20"><Globe className="text-cobalt w-6 h-6" /></div>
             <div>
                <h2 className="text-3xl font-bold text-onyx">Global Fab Capacity</h2>
                <div className="text-xs font-mono text-onyx/40 uppercase tracking-widest mt-1">Network Status: Online</div>
             </div>
          </div>
          
          <div className="bg-surface border border-onyx/10 rounded-xl overflow-hidden shadow-sm">
             {/* Table Header */}
             <div className="grid grid-cols-3 px-8 py-4 bg-onyx/5 border-b border-onyx/10 text-xs font-mono font-bold text-onyx/50 uppercase tracking-wider">
                <div>Location / Node</div>
                <div>Facility Type</div>
                <div className="text-right">Throughput</div>
             </div>

             {/* Data Rows */}
             {[
                { city: "DRESDEN", type: "LOGIC FAB", cap: "45k WSPM" },
                { city: "AUSTIN", type: "PACKAGING", cap: "120k Units/Mo" },
                { city: "BENGALURU", type: "R&D CENTER", cap: "IP Core Dev" },
             ].map((fab, i) => (
                <div key={i} className="grid grid-cols-3 px-8 py-6 border-b border-onyx/5 hover:bg-white transition-colors items-center group">
                   <div>
                      <div className="font-mono text-xl font-bold text-onyx group-hover:text-cobalt transition-colors">{fab.city}</div>
                      <div className="text-[10px] font-mono text-onyx/40 mt-1 flex items-center gap-1">
                         <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_5px_#22c55e] animate-pulse"></div>
                         ACTIVE
                      </div>
                   </div>
                   <div className="font-mono text-sm text-onyx/60 flex items-center gap-2">
                      <Cpu size={14} className="text-onyx/30" />
                      {fab.type}
                   </div>
                   <div className="font-mono text-lg font-bold text-onyx text-right">
                      {fab.cap}
                   </div>
                </div>
             ))}
          </div>
       </div>

       {/* 4. R&D PIPELINE - PRECISION GAUGES */}
       <div className="max-w-7xl mx-auto px-6 py-12 mb-12">
          <div className="bg-onyx text-white rounded-2xl p-8 md:p-16 border border-white/10 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-8 opacity-10">
                <Search size={120} strokeWidth={1} />
             </div>
             
             <div className="relative z-10">
                <div className="flex items-center gap-4 mb-16">
                   <div className="p-3 bg-white/10 rounded-lg backdrop-blur-md border border-white/10"><Zap className="text-white w-6 h-6" /></div>
                   <h2 className="text-3xl font-bold">R&D Pipeline</h2>
                </div>

                <div className="space-y-12">
                   {[
                      { tech: "A-1400 (1.4nm)", status: "PRODUCTION", progress: 100 },
                      { tech: "A-1000 (1.0nm)", status: "RISK PRODUCTION", progress: 85 },
                      { tech: "Sub-Angstrom (0.8nm)", status: "PATHFINDING", progress: 40 },
                   ].map((item, i) => (
                      <div key={i} className="relative">
                         <div className="flex justify-between items-end mb-4">
                            <span className="font-mono text-xl font-bold tracking-tight">{item.tech}</span>
                            <span className="font-mono text-[10px] bg-cobalt/20 border border-cobalt/50 text-cobalt px-2 py-1 rounded uppercase tracking-wider shadow-[0_0_10px_rgba(0,71,171,0.2)]">
                               {item.status}
                            </span>
                         </div>
                         
                         {/* Precision Bar Track */}
                         <div className="w-full h-[2px] bg-white/10 relative overflow-visible">
                            {/* Glowing Progress */}
                            <motion.div 
                              initial={{ width: 0 }}
                              whileInView={{ width: `${item.progress}%` }}
                              transition={{ duration: 1.5, delay: i * 0.2, ease: "circOut" }}
                              className="absolute top-0 left-0 h-full bg-cobalt shadow-[0_0_15px_#0047AB]"
                            >
                               {/* Leading Edge Indicator */}
                               <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-4 bg-white shadow-[0_0_10px_white]"></div>
                            </motion.div>
                         </div>
                         
                         {/* Tick Marks */}
                         <div className="flex justify-between mt-2 opacity-30">
                            {[0, 25, 50, 75, 100].map((tick) => (
                               <div key={tick} className="flex flex-col items-center gap-1">
                                  <div className="w-px h-2 bg-white"></div>
                               </div>
                            ))}
                         </div>
                      </div>
                   ))}
                </div>
             </div>
          </div>
       </div>

       {/* 5. STANDARDS & COMPLIANCE TICKER (NEW SECTION) */}
       <div className="w-full bg-white border-y border-onyx/10 py-6 relative overflow-hidden">
          <div className="flex w-full items-center">
             <div className="absolute left-0 z-10 h-full w-20 bg-gradient-to-r from-surface to-transparent"></div>
             
             <motion.div 
               className="flex whitespace-nowrap gap-12"
               animate={{ x: [0, -1000] }}
               transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
             >
                {/* Repeat twice for seamless loop */}
                {[...Array(2)].map((_, i) => (
                   <React.Fragment key={i}>
                      {[
                         "ISO 9001:2015 CERTIFIED", "IEEE 802.3ck COMPLIANT", "RoHS DIRECTIVE 2011/65/EU", 
                         "IATF 16949 AUTOMOTIVE", "ANSI/ESD S20.20", "EUV SAFE HARBOR", "SOC 2 TYPE II"
                      ].map((cert, j) => (
                         <div key={j} className="flex items-center gap-3 opacity-50 hover:opacity-100 transition-opacity">
                            <FileBadge size={16} className="text-cobalt" />
                            <span className="font-mono text-sm font-bold text-onyx tracking-wider">{cert}</span>
                         </div>
                      ))}
                   </React.Fragment>
                ))}
             </motion.div>

             <div className="absolute right-0 z-10 h-full w-20 bg-gradient-to-l from-surface to-transparent"></div>
          </div>
       </div>

    </div>
  );
};
export default About;