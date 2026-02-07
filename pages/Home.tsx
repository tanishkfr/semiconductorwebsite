import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Cpu, Activity, Zap, Layers, Network, Server, ShieldCheck, Box, Crosshair, BarChart3, Radio, Timer, Factory, Package, Truck } from 'lucide-react';

interface HomeProps {
  setPage: (page: string) => void;
}

const Home: React.FC<HomeProps> = ({ setPage }) => {
  return (
    <div className="w-full">
      {/* 1. HERO SECTION (KEPT AS IS) */}
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-20 pt-20 relative overflow-hidden bg-surface">
         
         <div className="max-w-5xl z-10">
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-onyx/10 rounded-full shadow-sm mb-8"
            >
               <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
               <span className="text-[10px] font-bold tracking-widest text-onyx/60 uppercase">Fab 4.2 Online</span>
            </motion.div>

            <h1 className="text-7xl md:text-[10rem] font-bold leading-[0.85] tracking-tighter text-onyx mb-10">
               Silicon <br/>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-cobalt to-blue-400">Evolution.</span>
            </h1>

            <div className="flex flex-col md:flex-row gap-8 items-start">
               <p className="max-w-xl text-xl text-onyx/60 font-medium leading-relaxed">
                  The world's first 14 Ångström process node. Fabricated for the post-silicon era with directed self-assembly.
               </p>
               
               <button onClick={() => setPage('specs')} className="group flex items-center gap-4 px-8 py-4 bg-onyx text-white rounded-full font-bold hover:bg-cobalt transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1">
                  Technical Data
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
               </button>
            </div>
         </div>

         {/* Hero Graphic */}
         <div className="absolute right-[-10%] top-[20%] w-[800px] h-[800px] opacity-10 pointer-events-none">
            <div className="w-full h-full border-[2px] border-onyx rounded-full flex items-center justify-center animate-[spin_60s_linear_infinite]">
               <div className="w-[80%] h-[80%] border border-dashed border-onyx rounded-full"></div>
               <div className="w-[60%] h-[60%] border border-onyx rounded-full"></div>
            </div>
         </div>
      </section>

      {/* 2. FEATURE DECK (REPLACES SLIDER) */}
      <section className="py-32 px-6 md:px-20 bg-onyx text-white border-y border-white/10 relative overflow-hidden">
         <div className="absolute inset-0 bg-grid-pattern-dark opacity-10 pointer-events-none"></div>
         
         <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex justify-between items-end mb-16">
               <div>
                  <h2 className="text-4xl font-bold tracking-tight mb-2">Core Architecture</h2>
                  <p className="text-white/40 font-mono text-xs uppercase tracking-widest">/// System Specifications</p>
               </div>
               <div className="hidden md:flex gap-4">
                  <div className="px-4 py-2 border border-white/10 rounded-full text-xs font-mono text-cobalt bg-cobalt/10">REV 4.2</div>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               {[
                  { title: "High-NA Optics", icon: Crosshair, spec: "0.55 NA", sub: "Resolution Limit" },
                  { title: "Backside Power", icon: Zap, spec: "30% ↓ IR", sub: "Voltage Droop" },
                  { title: "RibbonFET", icon: Layers, spec: "4nm Pitch", sub: "Gate Contact" }
               ].map((item, i) => (
                  <div key={i} className="group h-[400px] bg-white/5 border border-white/10 rounded-xl p-8 relative overflow-hidden hover:border-cobalt transition-colors duration-500">
                     <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-0"></div>
                     
                     <div className="relative z-10 h-full flex flex-col justify-between">
                        <div className="flex justify-between items-start">
                           <item.icon className="text-white/50 group-hover:text-cobalt transition-colors" size={32} />
                           <div className="opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                              <ArrowRight className="text-cobalt" />
                           </div>
                        </div>

                        <div>
                           <h3 className="text-2xl font-bold mb-1">{item.title}</h3>
                           <div className="w-full h-px bg-white/20 my-4 group-hover:bg-cobalt transition-colors"></div>
                           
                           {/* Hover Reveal Specs */}
                           <div className="grid grid-cols-2 gap-4">
                              <div>
                                 <div className="text-[10px] text-white/40 font-mono uppercase mb-1">Specification</div>
                                 <div className="text-xl font-mono font-bold text-cobalt">{item.spec}</div>
                              </div>
                              <div className="opacity-50 group-hover:opacity-100 transition-opacity">
                                 <div className="text-[10px] text-white/40 font-mono uppercase mb-1">Metric</div>
                                 <div className="text-sm font-mono text-white">{item.sub}</div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 3. PARTNER ECOSYSTEM (REPLACES NETWORK TOPOLOGY) */}
      <section className="py-24 px-6 md:px-20 bg-surface border-b border-onyx/10">
         <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-2 mb-12">
               <div className="p-2 bg-cobalt/10 rounded-md"><Network className="text-cobalt" size={20} /></div>
               <h2 className="text-sm font-bold uppercase tracking-widest text-onyx">Strategic Partners</h2>
            </div>
            
            <motion.div 
               className="grid grid-cols-2 md:grid-cols-4 bg-onyx/10 border border-onyx/10 gap-px"
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true }}
               variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
               }}
            >
               {[
                  { code: "NVDA", name: "NVIDIA", contrib: "H100 Integration" },
                  { code: "AAPL", name: "APPLE", contrib: "M3 Ultra Yield" },
                  { code: "AMD", name: "AMD", contrib: "Chiplet Architecture" },
                  { code: "INTC", name: "INTEL", contrib: "Foundry Services" },
                  { code: "QCOM", name: "QUALCOMM", contrib: "5G Modem RF" },
                  { code: "TSLA", name: "TESLA", contrib: "FSD HW 5.0" },
                  { code: "GOOG", name: "GOOGLE", contrib: "TPU v6 Pods" },
                  { code: "AMZN", name: "AMAZON", contrib: "Graviton 4" },
               ].map((p, i) => (
                  <motion.div 
                     key={i}
                     variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                     className="bg-white p-8 hover:bg-surface transition-colors group flex flex-col justify-between h-48 cursor-default"
                  >
                     <div className="text-2xl font-mono font-bold text-onyx/30 group-hover:text-cobalt transition-colors duration-300">[{p.code}]</div>
                     <div>
                        <div className="text-xs font-bold text-onyx uppercase tracking-wider mb-1">{p.name}</div>
                        <div className="text-xs font-mono text-onyx/60">{p.contrib}</div>
                     </div>
                  </motion.div>
               ))}
            </motion.div>
         </div>
      </section>

      {/* 4. DASHBOARD GRID: YIELD & SUPPLY */}
      <section className="py-24 px-6 md:px-20 bg-white">
         <div className="max-w-7xl mx-auto">
            <h2 className="text-xs font-mono text-onyx/40 uppercase tracking-widest mb-12">/// Manufacturing Intelligence</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
               
               {/* LITHOGRAPHY YIELD GRAPH */}
               <div className="border border-onyx/10 rounded-xl p-8 bg-surface">
                  <div className="flex justify-between items-center mb-8">
                     <div className="flex items-center gap-2">
                        <BarChart3 className="text-cobalt" size={20} />
                        <span className="font-bold text-onyx">Yield Rate</span>
                     </div>
                     <div className="text-xs font-mono bg-green-100 text-green-700 px-2 py-1 rounded">+2.4% WoW</div>
                  </div>
                  
                  <div className="h-64 flex items-end justify-between gap-2">
                     {[45, 52, 49, 60, 58, 65, 72, 70, 75, 82, 85, 88].map((h, i) => (
                        <div key={i} className="w-full bg-cobalt/10 rounded-t-sm relative group">
                           <motion.div 
                              initial={{ height: 0 }}
                              whileInView={{ height: `${h}%` }}
                              transition={{ duration: 1, delay: i * 0.05 }}
                              className="absolute bottom-0 w-full bg-cobalt rounded-t-sm"
                           >
                           </motion.div>
                           <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 text-xs font-bold bg-onyx text-white px-2 py-1 rounded transition-opacity">
                              {h}%
                           </div>
                        </div>
                     ))}
                  </div>
                  <div className="mt-4 flex justify-between text-[10px] font-mono text-onyx/40 uppercase">
                     <span>Wk 01</span>
                     <span>Wk 12</span>
                  </div>
               </div>

               {/* SUPPLY CHAIN GRID */}
               <div className="border border-onyx/10 rounded-xl overflow-hidden bg-surface">
                  <div className="p-6 border-b border-onyx/10 bg-white flex justify-between items-center">
                     <div className="flex items-center gap-2">
                        <Box className="text-cobalt" size={20} />
                        <span className="font-bold text-onyx">Supply Chain</span>
                     </div>
                     <div className="flex items-center gap-2">
                         <span className="relative flex h-2 w-2">
                           <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                           <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                         </span>
                         <span className="text-[10px] font-mono text-onyx/50">LIVE</span>
                     </div>
                  </div>

                  <table className="w-full text-left">
                     <thead className="bg-onyx/5 text-[10px] font-mono text-onyx/50 uppercase">
                        <tr>
                           <th className="px-6 py-3 font-medium">Material / Unit</th>
                           <th className="px-6 py-3 font-medium">Source</th>
                           <th className="px-6 py-3 font-medium text-right">Status</th>
                        </tr>
                     </thead>
                     <tbody className="text-sm">
                        {[
                           { name: "300mm Silicon Ingots", source: "Shin-Etsu", status: "Arrived" },
                           { name: "EUV Photoresist", source: "JSR Corp", status: "In Transit" },
                           { name: "Pellicle Membranes", source: "Teledyne", status: "QC Check" },
                           { name: "Fab 1 Output", source: "Internal", status: "Sorting" },
                           { name: "HBM3e Stacks", source: "SK Hynix", status: "Scheduled" }
                        ].map((row, i) => (
                           <tr key={i} className="border-b border-onyx/5 last:border-0 hover:bg-white transition-colors">
                              <td className="px-6 py-4 font-medium text-onyx">{row.name}</td>
                              <td className="px-6 py-4 text-onyx/60">{row.source}</td>
                              <td className="px-6 py-4 text-right">
                                 <span className={`inline-block px-2 py-1 rounded text-[10px] font-bold uppercase ${
                                    row.status === 'Arrived' ? 'bg-green-100 text-green-700' :
                                    row.status === 'In Transit' ? 'bg-blue-100 text-blue-700' :
                                    'bg-gray-100 text-gray-600'
                                 }`}>
                                    {row.status}
                                 </span>
                              </td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
            </div>
         </div>
      </section>

      {/* 5. SUPPLY CHAIN VELOCITY */}
      <section className="py-24 px-6 md:px-20 bg-onyx text-white border-t border-white/10 relative overflow-hidden">
         {/* Background accent */}
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cobalt/5 rounded-full blur-[100px] pointer-events-none"></div>

         <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex items-center gap-3 mb-16">
               <div className="p-2 bg-cobalt/20 rounded-lg"><Timer className="text-cobalt" size={24}/></div>
               <div>
                 <h2 className="text-2xl font-bold">Supply Chain Velocity</h2>
                 <p className="text-xs font-mono text-white/40 uppercase tracking-widest">End-to-End Latency Tracking</p>
               </div>
            </div>

            <div className="relative">
               {/* Connecting Line (Desktop) */}
               <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-white/5 via-white/20 to-white/5 -translate-y-1/2 z-0"></div>

               <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">
                  {[
                     { stage: "Raw Silicon", time: "T-48h", icon: Layers, desc: "Ingot Prep" },
                     { stage: "Fabrication", time: "Processing", icon: Factory, desc: "Lithography" },
                     { stage: "Packaging", time: "+12h", icon: Package, desc: "CoWoS Stack" },
                     { stage: "Distribution", time: "+24h", icon: Truck, desc: "Logistics" },
                  ].map((item, i) => (
                     <div key={i} className="group">
                        <div className="flex flex-col items-center text-center">
                           {/* Icon Node */}
                           <div className="w-16 h-16 bg-onyx border border-white/20 rounded-full flex items-center justify-center mb-6 relative z-10 group-hover:border-cobalt group-hover:shadow-[0_0_20px_rgba(0,71,171,0.3)] transition-all duration-300">
                              <item.icon size={24} className="text-white/60 group-hover:text-cobalt transition-colors" />
                              {i === 1 && (
                                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse border-2 border-onyx"></div>
                              )}
                           </div>
                           
                           {/* Data Card */}
                           <div className="w-full bg-white/5 border border-white/10 p-6 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-colors">
                              <div className="text-2xl font-mono font-bold text-white mb-1">{item.time}</div>
                              <div className="text-xs font-bold uppercase tracking-wider text-cobalt mb-2">{item.stage}</div>
                              <div className="text-xs text-white/40 font-mono">{item.desc}</div>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>

    </div>
  );
};
export default Home;