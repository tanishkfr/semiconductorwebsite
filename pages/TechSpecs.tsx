import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SPECS, FEATURES } from '../constants';
import { Download, Cpu, Thermometer, Zap, Activity, BarChart3, TrendingUp, ShieldCheck, Cable, CheckCircle2 } from 'lucide-react';

const TechSpecs: React.FC = () => {
  const [viewMode, setViewMode] = useState<'logic' | 'thermal' | 'power' | 'signal'>('logic');

  return (
    <div className="min-h-screen pt-32 pb-20 bg-surface text-onyx">
      <div className="max-w-7xl mx-auto px-6">
         
         {/* HEADER */}
         <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-onyx/10 pb-8">
            <div>
               <div className="text-xs font-mono text-cobalt mb-2 uppercase tracking-widest font-bold">/// Datasheet Rev 4.2</div>
               <h1 className="text-6xl font-bold tracking-tighter text-onyx mb-2">A-1400 Series</h1>
               <p className="text-onyx/60 max-w-xl">1.4nm Angstrom-Class Logic Node with Backside Power Delivery.</p>
            </div>
            <button className="flex items-center gap-2 px-6 py-3 bg-cobalt text-white rounded-full hover:bg-blue-600 transition-colors text-sm font-bold mt-6 md:mt-0 shadow-lg shadow-cobalt/30 hover:shadow-cobalt/50">
               <Download size={16} /> DOWNLOAD PDF
            </button>
         </div>

         {/* 1. INTERACTIVE VISUALIZER */}
         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
            
            {/* Control Panel */}
            <div className="lg:col-span-1 space-y-4">
               <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-onyx/40">Real-Time Diagnostics</h3>
               
               <button onClick={() => setViewMode('logic')} className={`w-full text-left p-4 rounded-xl border transition-all duration-300 ${viewMode === 'logic' ? 'bg-cobalt border-cobalt shadow-lg shadow-cobalt/20 scale-[1.02]' : 'bg-white border-onyx/10 hover:border-cobalt/50'}`}>
                  <div className="flex items-center gap-3 mb-2">
                     <Cpu size={20} className={viewMode === 'logic' ? 'text-white' : 'text-onyx/40'} />
                     <span className={`font-bold ${viewMode === 'logic' ? 'text-white' : 'text-onyx'}`}>Logic Topology</span>
                  </div>
                  <div className={`text-xs ${viewMode === 'logic' ? 'text-white/70' : 'text-onyx/60'}`}>Active Core Load & Gate Switching</div>
               </button>

               <button onClick={() => setViewMode('thermal')} className={`w-full text-left p-4 rounded-xl border transition-all duration-300 ${viewMode === 'thermal' ? 'bg-cobalt border-cobalt shadow-lg shadow-cobalt/20 scale-[1.02]' : 'bg-white border-onyx/10 hover:border-cobalt/50'}`}>
                  <div className="flex items-center gap-3 mb-2">
                     <Thermometer size={20} className={viewMode === 'thermal' ? 'text-white' : 'text-onyx/40'} />
                     <span className={`font-bold ${viewMode === 'thermal' ? 'text-white' : 'text-onyx'}`}>Thermal Map</span>
                  </div>
                  <div className={`text-xs ${viewMode === 'thermal' ? 'text-white/70' : 'text-onyx/60'}`}>TDP Distribution & Hotspots</div>
               </button>

               <button onClick={() => setViewMode('power')} className={`w-full text-left p-4 rounded-xl border transition-all duration-300 ${viewMode === 'power' ? 'bg-cobalt border-cobalt shadow-lg shadow-cobalt/20 scale-[1.02]' : 'bg-white border-onyx/10 hover:border-cobalt/50'}`}>
                  <div className="flex items-center gap-3 mb-2">
                     <Zap size={20} className={viewMode === 'power' ? 'text-white' : 'text-onyx/40'} />
                     <span className={`font-bold ${viewMode === 'power' ? 'text-white' : 'text-onyx'}`}>Power Grid</span>
                  </div>
                  <div className={`text-xs ${viewMode === 'power' ? 'text-white/70' : 'text-onyx/60'}`}>Backside Rail Voltage Droop</div>
               </button>
            </div>

            {/* Visualization Window */}
            <div className="lg:col-span-2 bg-onyx rounded-2xl border border-onyx/5 relative overflow-hidden h-[500px] shadow-[0_0_40px_rgba(0,71,171,0.25)] flex items-center justify-center">
               <div className="absolute inset-0 bg-grid-pattern-dark bg-grid opacity-20 pointer-events-none"></div>
               
               <AnimatePresence mode="wait">
                  {viewMode === 'logic' && (
                     <motion.div key="logic" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full h-full p-8 grid grid-cols-4 gap-4">
                        {Array.from({ length: 16 }).map((_, i) => (
                           <div key={i} className="bg-white/5 border border-white/10 rounded-lg relative overflow-hidden group hover:border-cobalt/50 transition-colors">
                              <div className="absolute top-2 left-2 text-[10px] font-mono text-white/40">CORE_{i}</div>
                              {/* Animated Activity Bar */}
                              <motion.div 
                                animate={{ height: [Math.random() * 100 + "%", Math.random() * 100 + "%"] }} 
                                transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                                className="absolute bottom-0 left-0 w-full bg-cobalt/60 blur-[2px]"
                              />
                              <div className="absolute bottom-2 right-2 text-xs font-mono text-cobalt font-bold shadow-black drop-shadow-md">{Math.floor(Math.random() * 99)}%</div>
                           </div>
                        ))}
                     </motion.div>
                  )}

                  {viewMode === 'thermal' && (
                     <motion.div key="thermal" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="relative w-full h-full">
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/30 via-transparent to-red-900/50"></div>
                        {/* Heat Blobs */}
                        <motion.div animate={{ x: [0, 20, 0], y: [0, -20, 0], scale: [1, 1.2, 1] }} transition={{ duration: 5, repeat: Infinity }} className="absolute top-1/3 left-1/3 w-64 h-64 bg-red-600/40 blur-[80px] rounded-full"></motion.div>
                        <div className="absolute bottom-8 left-8 text-white">
                           <div className="text-4xl font-bold">42.5°C</div>
                           <div className="text-xs font-mono text-white/50">AVERAGE JUNCTION TEMP</div>
                        </div>
                     </motion.div>
                  )}

                  {viewMode === 'power' && (
                     <motion.div key="power" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="relative w-full h-full p-12">
                        <div className="border-l-2 border-b-2 border-white/20 h-full w-full relative">
                           {/* Voltage Line Graph */}
                           <svg className="absolute inset-0 w-full h-full overflow-visible">
                              <motion.path 
                                 d="M0,300 C100,280 200,320 300,300 S500,250 600,280" 
                                 fill="none" 
                                 stroke="#EAB308" 
                                 strokeWidth="3"
                                 initial={{ pathLength: 0 }}
                                 animate={{ pathLength: 1 }}
                                 transition={{ duration: 2 }}
                              />
                           </svg>
                           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow-500/10 border border-yellow-500/50 p-4 rounded-lg backdrop-blur-md">
                              <div className="text-yellow-500 font-bold text-xl">0.55V</div>
                              <div className="text-[10px] text-yellow-200/50 font-mono">RAIL STABILITY</div>
                           </div>
                        </div>
                     </motion.div>
                  )}
               </AnimatePresence>
            </div>
         </div>

         {/* 2. RELIABILITY CURVE (MTBF) */}
         <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
            <div className="md:col-span-1">
               <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-cobalt/10 rounded-lg"><ShieldCheck className="text-cobalt" size={24}/></div>
                  <h2 className="text-2xl font-bold text-onyx">Reliability Curve</h2>
               </div>
               <p className="text-onyx/60 leading-relaxed mb-6">
                  AXON chips utilize self-healing interconnects to minimize electromigration, resulting in a 40% increase in Mean Time Between Failures (MTBF) compared to legacy 3nm silicon.
               </p>
               <div className="flex items-center gap-8">
                  <div>
                     <div className="text-3xl font-bold text-onyx">10yr+</div>
                     <div className="text-xs font-mono text-onyx/40 uppercase">Lifespan</div>
                  </div>
                  <div>
                     <div className="text-3xl font-bold text-cobalt">-40%</div>
                     <div className="text-xs font-mono text-onyx/40 uppercase">Failure Rate</div>
                  </div>
               </div>
            </div>
            <div className="md:col-span-2 bg-white border border-onyx/10 rounded-2xl p-8 relative overflow-hidden shadow-sm">
               <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-30 pointer-events-none"></div>
               <div className="h-64 relative flex items-end pb-6 pl-6 border-l border-b border-onyx/20">
                  {/* AXON CURVE (FLAT/GOOD) */}
                  <svg className="absolute inset-0 w-full h-full overflow-visible">
                     <path d="M0,200 C100,200 300,200 600,210" fill="none" stroke="#0047AB" strokeWidth="3" />
                     <text x="500" y="190" className="text-xs font-bold fill-cobalt">AXON A-1400</text>
                  </svg>
                  {/* LEGACY CURVE (STEEP/BAD) */}
                  <svg className="absolute inset-0 w-full h-full overflow-visible">
                     <path d="M0,200 C100,200 300,150 600,50" fill="none" stroke="#E5E7EB" strokeWidth="3" strokeDasharray="5 5" />
                     <text x="500" y="60" className="text-xs font-bold fill-gray-400">LEGACY 3nm</text>
                  </svg>
                  <div className="absolute -left-8 top-1/2 -rotate-90 text-xs font-mono text-onyx/40">FAILURE RATE</div>
                  <div className="absolute bottom-2 right-0 text-xs font-mono text-onyx/40">TIME (YEARS)</div>
               </div>
            </div>
         </div>

         {/* 3. I/O STANDARDS TABLE - CLEAN ENGINEERING GRID */}
         <div className="mb-24">
            <div className="flex items-center gap-3 mb-8">
               <div className="p-2 bg-cobalt/10 rounded-lg"><Cable className="text-cobalt" size={24}/></div>
               <h2 className="text-2xl font-bold text-onyx">Supported I/O Protocols</h2>
            </div>
            
            <div className="w-full">
               <table className="w-full text-left border-collapse">
                  <thead>
                     <tr className="border-b border-onyx/10">
                        <th className="py-4 text-xs font-mono uppercase tracking-widest text-onyx/40">Protocol</th>
                        <th className="py-4 text-xs font-mono uppercase tracking-widest text-onyx/40">Version</th>
                        <th className="py-4 text-xs font-mono uppercase tracking-widest text-onyx/40">Bandwidth</th>
                        <th className="py-4 text-xs font-mono uppercase tracking-widest text-onyx/40">Target Application</th>
                     </tr>
                  </thead>
                  <tbody>
                     {[
                        { name: "PCI Express", ver: "Gen 6.0", bw: "64 GT/s", app: "GPU Interconnect & NVMe Storage" },
                        { name: "CXL", ver: "3.0", bw: "128 GB/s", app: "Cache Coherent Memory Expansion" },
                        { name: "UCIe", ver: "1.1", bw: "32 GT/s", app: "Die-to-Die Chiplet Communication" },
                        { name: "Ethernet", ver: "800G", bw: "800 Gbps", app: "Hyperscale Networking Fabric" }
                     ].map((row, i) => (
                        <tr key={i} className="border-b border-onyx/5 hover:bg-onyx/5 transition-colors group">
                           <td className="py-6 pr-4">
                              <span className="text-xl font-bold text-onyx">{row.name}</span>
                           </td>
                           <td className="py-6 pr-4 font-mono text-sm text-onyx/60">{row.ver}</td>
                           <td className="py-6 pr-4">
                              <span className="inline-block px-3 py-1 bg-cobalt/10 text-cobalt font-mono text-sm font-bold rounded-full">
                                 {row.bw}
                              </span>
                           </td>
                           <td className="py-6 text-sm text-onyx/60 font-medium">{row.app}</td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
         </div>

         {/* 4. PROTOCOL COMPLIANCE (TECHNICAL STAMPS) */}
         <div className="mb-32">
            <h3 className="text-sm font-bold uppercase tracking-widest text-onyx/40 mb-6">Protocol Compliance & Certification</h3>
            <div className="flex flex-wrap gap-3">
               {[
                  "PCIe Gen6 Ready", "CXL 3.0 Type 1/2/3", "JEDEC HBM4", "LPDDR5X-8533", 
                  "MIPI C-PHY v2.1", "OIF-CEI-112G-LR", "JESD204C", "NVMe 2.0b", "TSMC N2 IP"
               ].map((tag, i) => (
                  <div key={i} className="px-4 py-2 bg-white border border-onyx/10 text-xs font-mono font-bold text-onyx uppercase tracking-wide hover:border-cobalt hover:text-cobalt transition-colors cursor-default shadow-sm">
                     {tag}
                  </div>
               ))}
               <div className="px-4 py-2 bg-onyx/5 border border-dashed border-onyx/20 text-xs font-mono text-onyx/60 uppercase tracking-wide">
                  +12 More
               </div>
            </div>
         </div>

         {/* SPECS GRID (Existing) */}
         <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 mb-32 border-t border-onyx/10 pt-16">
            {SPECS.map((spec, i) => (
               <div key={i} className="group">
                  <div className="flex justify-between items-baseline mb-2">
                     <span className="text-xs font-mono text-cobalt font-bold tracking-widest group-hover:underline underline-offset-4 decoration-cobalt/30">{spec.parameter}</span>
                     <span className="text-sm font-mono text-onyx/40">{spec.id}</span>
                  </div>
                  <div className="flex items-baseline gap-2 mb-2">
                     <span className="text-4xl font-bold text-onyx group-hover:text-cobalt transition-colors duration-300">{spec.value}</span>
                     <span className="text-lg text-onyx/40">{spec.unit}</span>
                  </div>
                  <p className="text-sm text-onyx/60 font-medium leading-relaxed">{spec.description}</p>
               </div>
            ))}
         </div>

      </div>
    </div>
  );
};
export default TechSpecs;