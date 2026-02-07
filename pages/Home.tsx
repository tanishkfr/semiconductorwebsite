import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Cpu, Activity, Zap, Layers, Network, Server, ShieldCheck, Box, Crosshair, BarChart3, Radio, Timer, Factory, Package, Truck, TrendingUp, AlertCircle, Info, DollarSign, PieChart } from 'lucide-react';

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
               
               {/* REFINED CTA BUTTON: Glassmorphic Outline */}
               <button 
                  onClick={() => setPage('specs')} 
                  className="group flex items-center gap-3 px-8 py-4 rounded-full font-bold border border-onyx/10 bg-white/5 backdrop-blur-sm text-onyx transition-all duration-300 hover:bg-cobalt hover:border-transparent hover:text-white hover:shadow-[0_0_20px_rgba(0,71,171,0.4)]"
               >
                  Technical Data
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300"/>
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

      {/* 2. FEATURE DECK */}
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

      {/* 3. PARTNER ECOSYSTEM */}
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

      {/* 4. PREDICTIVE SCALING */}
      <section className="py-24 px-6 md:px-20 bg-onyx text-white border-t border-white/10 relative overflow-hidden">
         <div className="absolute inset-0 bg-grid-pattern-dark opacity-10 pointer-events-none"></div>

         <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16">
               <div className="mb-8 md:mb-0">
                  <div className="flex items-center gap-2 mb-2">
                     <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                     <p className="text-white/40 font-mono text-xs uppercase tracking-widest">Live Capacity Forecasting</p>
                  </div>
                  <h2 className="text-4xl font-bold tracking-tight">Predictive Scaling</h2>
               </div>
               
               <div className="flex gap-8 text-right bg-white/5 p-4 rounded-xl border border-white/10 backdrop-blur-sm">
                  <div>
                     <div className="text-[10px] font-mono text-white/40 uppercase mb-1">Total Allocated</div>
                     <div className="text-white font-bold font-mono text-xl">14.2M <span className="text-xs text-white/40">Units</span></div>
                  </div>
                  <div className="w-px h-full bg-white/10"></div>
                  <div>
                     <div className="text-[10px] font-mono text-white/40 uppercase mb-1">Forecast Delta</div>
                     <div className="text-cobalt font-bold font-mono text-xl">+22.4%</div>
                  </div>
               </div>
            </div>

            {/* ENGINEERING CHART */}
            <div className="w-full h-[400px] bg-black/20 border border-white/10 rounded-xl p-8 relative flex flex-col">
               
               {/* Grid Background */}
               <div className="absolute inset-0 p-8 flex flex-col justify-between pointer-events-none z-0">
                  {[100, 75, 50, 25, 0].map((val, i) => (
                     <div key={i} className="w-full h-px bg-white/5 relative">
                        <span className="absolute -left-8 -top-2 text-[10px] font-mono text-white/20">{val}%</span>
                     </div>
                  ))}
               </div>

               {/* Chart Bars */}
               <div className="flex-1 flex items-end justify-around relative z-10 pl-8">
                  {[
                     { q: "Q1 '25", demand: 45, cap: 60, status: "OPTIMAL" },
                     { q: "Q2 '25", demand: 65, cap: 70, status: "OPTIMAL" },
                     { q: "Q3 '25", demand: 85, cap: 80, status: "CRITICAL" },
                     { q: "Q4 '25", demand: 98, cap: 85, status: "OVERFLOW" }
                  ].map((data, i) => (
                     <div key={i} className="group relative flex flex-col items-center gap-4 h-full justify-end w-full px-2 md:px-8">
                        
                        {/* Hover Tooltip */}
                        <div className="absolute -top-12 bg-white text-onyx px-3 py-2 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-20">
                           <div className="text-[10px] font-mono font-bold whitespace-nowrap">
                              DEMAND: {data.demand}k / CAP: {data.cap}k
                           </div>
                           <div className={`text-[9px] font-mono font-bold mt-1 ${
                              data.status === 'OPTIMAL' ? 'text-green-600' : 
                              data.status === 'CRITICAL' ? 'text-yellow-600' : 'text-red-600'
                           }`}>
                              STATUS: {data.status}
                           </div>
                        </div>

                        <div className="w-full relative h-full flex items-end justify-center">
                           {/* Capacity Line (Ghost Bar) */}
                           <motion.div 
                              initial={{ height: 0 }}
                              whileInView={{ height: `${data.cap}%` }}
                              transition={{ duration: 1, delay: i * 0.1 }}
                              className="absolute bottom-0 w-full border-x border-t border-dashed border-white/30 bg-white/5 z-0"
                           />

                           {/* Demand Bar (Solid) */}
                           <motion.div 
                              initial={{ height: 0 }}
                              whileInView={{ height: `${data.demand}%` }}
                              transition={{ duration: 1, delay: 0.2 + (i * 0.1), type: "spring", bounce: 0.2 }}
                              className={`w-[60%] z-10 relative ${
                                 data.status === 'OVERFLOW' ? 'bg-red-500 shadow-[0_0_20px_rgba(239,68,68,0.4)]' : 
                                 data.status === 'CRITICAL' ? 'bg-yellow-500 shadow-[0_0_20px_rgba(234,179,8,0.4)]' : 
                                 'bg-cobalt shadow-[0_0_20px_rgba(0,71,171,0.4)]'
                              }`}
                           >
                              {data.status === 'OVERFLOW' && (
                                 <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-red-500 animate-bounce">
                                    <AlertCircle size={16} />
                                 </div>
                              )}
                           </motion.div>
                        </div>
                        
                        <div className="text-xs font-mono text-white/50 border-t border-white/10 pt-2 w-full text-center group-hover:text-white transition-colors">
                           {data.q}
                        </div>
                     </div>
                  ))}
               </div>
            </div>

            {/* Legend */}
            <div className="mt-8 flex justify-center gap-8">
               <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-cobalt"></div>
                  <span className="text-[10px] font-mono text-white/60 uppercase">Market Demand</span>
               </div>
               <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-white/10 border border-dashed border-white/30"></div>
                  <span className="text-[10px] font-mono text-white/60 uppercase">Allocated Capacity</span>
               </div>
               <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500"></div>
                  <span className="text-[10px] font-mono text-white/60 uppercase">Supply Overflow</span>
               </div>
            </div>
         </div>
      </section>

      {/* 5. SUPPLY CHAIN VELOCITY (MOVED DOWN) */}
      <section className="py-24 px-6 md:px-20 bg-white border-t border-onyx/10 relative overflow-hidden">
         {/* Background accent */}
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cobalt/5 rounded-full blur-[100px] pointer-events-none"></div>

         <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex items-center gap-3 mb-16">
               <div className="p-2 bg-cobalt/10 rounded-lg"><Timer className="text-cobalt" size={24}/></div>
               <div>
                 <h2 className="text-2xl font-bold text-onyx">Supply Chain Velocity</h2>
                 <p className="text-xs font-mono text-onyx/40 uppercase tracking-widest">End-to-End Latency Tracking</p>
               </div>
            </div>

            <div className="relative">
               {/* Connecting Line (Desktop) */}
               <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-onyx/5 via-onyx/20 to-onyx/5 -translate-y-1/2 z-0"></div>

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
                           <div className="w-16 h-16 bg-white border border-onyx/10 rounded-full flex items-center justify-center mb-6 relative z-10 group-hover:border-cobalt group-hover:shadow-[0_0_20px_rgba(0,71,171,0.2)] transition-all duration-300">
                              <item.icon size={24} className="text-onyx/60 group-hover:text-cobalt transition-colors" />
                              {i === 1 && (
                                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse border-2 border-white"></div>
                              )}
                           </div>
                           
                           {/* Data Card */}
                           <div className="w-full bg-surface border border-onyx/10 p-6 rounded-xl hover:bg-white transition-colors shadow-sm">
                              <div className="text-2xl font-mono font-bold text-onyx mb-1">{item.time}</div>
                              <div className="text-xs font-bold uppercase tracking-wider text-cobalt mb-2">{item.stage}</div>
                              <div className="text-xs text-onyx/40 font-mono">{item.desc}</div>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* 6. INVESTOR DATA / FINANCIAL PERFORMANCE */}
      <section className="py-24 px-6 md:px-20 bg-surface border-t border-onyx/10 relative overflow-hidden">
         {/* Subtle Background Graphic */}
         <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-cobalt/5 to-transparent pointer-events-none"></div>

         <div className="max-w-7xl mx-auto relative z-10">
             <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                 <div>
                    <div className="flex items-center gap-2 mb-2">
                       <DollarSign className="text-cobalt" size={16} />
                       <span className="text-xs font-mono text-onyx/40 uppercase tracking-widest font-bold">Q4 FY25 Report</span>
                    </div>
                    <h2 className="text-3xl font-bold text-onyx">Financial Performance</h2>
                 </div>
                 <div className="mt-4 md:mt-0 px-4 py-2 bg-white rounded-full border border-onyx/5 text-xs font-mono text-onyx/60 flex items-center gap-2 shadow-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    NYSE: AXON
                 </div>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 {/* CARD 1: REVENUE */}
                 <div className="bg-white/60 backdrop-blur-md border border-white/80 p-8 rounded-2xl shadow-lg relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
                     <div className="flex justify-between items-start mb-6">
                         <div>
                            <div className="text-sm font-mono text-onyx/50 uppercase tracking-wider mb-1">Q4 Revenue</div>
                            <div className="text-4xl font-bold text-onyx tracking-tight">$12.4B</div>
                         </div>
                         <div className="p-2 bg-green-500/10 rounded-lg text-green-600">
                             <TrendingUp size={24} />
                         </div>
                     </div>
                     <div className="relative h-16 w-full">
                         {/* Simple SVG Trendline */}
                         <svg className="w-full h-full overflow-visible" viewBox="0 0 100 50" preserveAspectRatio="none">
                             <path d="M0,50 C20,45 40,30 60,35 S80,10 100,5" fill="none" stroke="#10B981" strokeWidth="3" strokeLinecap="round" />
                             <path d="M0,50 C20,45 40,30 60,35 S80,10 100,5 L100,50 L0,50 Z" fill="url(#gradGreen)" opacity="0.2" />
                             <defs>
                                <linearGradient id="gradGreen" x1="0%" y1="0%" x2="0%" y2="100%">
                                   <stop offset="0%" stopColor="#10B981" />
                                   <stop offset="100%" stopColor="transparent" />
                                </linearGradient>
                             </defs>
                         </svg>
                     </div>
                 </div>

                 {/* CARD 2: R&D INVESTMENT */}
                 <div className="bg-white/60 backdrop-blur-md border border-white/80 p-8 rounded-2xl shadow-lg relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
                     <div className="flex justify-between items-start mb-6">
                         <div>
                            <div className="text-sm font-mono text-onyx/50 uppercase tracking-wider mb-1">R&D Investment</div>
                            <div className="text-4xl font-bold text-onyx tracking-tight">18%</div>
                         </div>
                         <div className="p-2 bg-cobalt/10 rounded-lg text-cobalt">
                             <PieChart size={24} />
                         </div>
                     </div>
                     <div className="w-full bg-onyx/5 h-2 rounded-full overflow-hidden mt-8">
                         <div className="h-full bg-cobalt w-[18%] relative">
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-4 bg-white shadow-sm"></div>
                         </div>
                     </div>
                     <p className="mt-4 text-xs font-mono text-onyx/40">Targeting 22% by FY26 for Sub-Angstrom dev.</p>
                 </div>

                 {/* CARD 3: YOY GROWTH */}
                 <div className="bg-white/60 backdrop-blur-md border border-white/80 p-8 rounded-2xl shadow-lg relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
                     <div className="flex justify-between items-start mb-6">
                         <div>
                            <div className="text-sm font-mono text-onyx/50 uppercase tracking-wider mb-1">YoY Growth</div>
                            <div className="text-4xl font-bold text-onyx tracking-tight">+24%</div>
                         </div>
                         <div className="p-2 bg-green-500/10 rounded-lg text-green-600">
                             <Activity size={24} />
                         </div>
                     </div>
                     <div className="relative h-16 w-full">
                         {/* Bar Chart Representation */}
                         <div className="flex items-end justify-between h-full gap-2">
                             {[30, 45, 35, 60, 50, 80, 70, 90, 100].map((h, i) => (
                                 <div key={i} className="w-full bg-green-500 rounded-t-sm opacity-20 group-hover:opacity-100 transition-opacity" style={{ height: `${h}%` }}></div>
                             ))}
                         </div>
                     </div>
                 </div>
             </div>
         </div>
      </section>

    </div>
  );
};
export default Home;