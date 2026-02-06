import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Cpu, Network, Zap, Box, Activity, Globe, ArrowRight } from 'lucide-react';

interface HomeProps {
  setPage: (page: string) => void;
}

const Home: React.FC<HomeProps> = ({ setPage }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Parallax Logic
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]); // Moves slower than scroll
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Fake Yield Data
  const [yieldRate, setYieldRate] = useState(99.91);
  useEffect(() => {
     const interval = setInterval(() => {
        setYieldRate(prev => +(prev + (Math.random() * 0.04 - 0.02)).toFixed(3));
     }, 1000);
     return () => clearInterval(interval);
  }, []);

  const headlineText = "Reimagined.";

  return (
    <div ref={containerRef} className="w-full relative bg-surface overflow-hidden">
      
      {/* --- HERO SECTION (With Parallax) --- */}
      <motion.section 
        style={{ y: heroY, opacity: heroOpacity }}
        className="relative min-h-[110vh] flex flex-col items-center pt-32 px-6"
      >
        {/* Status Pill */}
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="inline-flex items-center gap-3 border border-gray-200 bg-white/50 backdrop-blur-md rounded-full pl-2 pr-4 py-1.5 mb-10 shadow-sm"
        >
           <span className="relative flex h-2 w-2">
             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
             <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
           </span>
           <span className="text-[10px] font-bold text-gray-500 tracking-widest uppercase">
              Fab 4.2 Online // Dresden
           </span>
        </motion.div>

        {/* Headline */}
        <div className="text-6xl md:text-[8rem] font-bold tracking-tighter text-onyx mb-6 leading-[0.9] text-center z-10">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
          >
            Silicon.
          </motion.div>
          <div className="text-transparent bg-clip-text bg-gradient-to-br from-azure to-blue-600 inline-block">
             {headlineText.split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, x: -10, filter: "blur(8px)" }}
                  animate={{ 
                    opacity: 1, 
                    x: 0, 
                    filter: "blur(0px)",
                  }}
                  transition={{ 
                    duration: 0.4, 
                    delay: 0.5 + i * 0.1,
                    type: "spring",
                    stiffness: 200
                  }}
                  className="inline-block"
                >
                  {char}
                </motion.span>
             ))}
          </div>
        </div>

        <motion.p 
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 0.2 }}
           className="max-w-xl mx-auto text-xl text-gray-500 font-medium text-center leading-relaxed mb-12 z-10"
        >
           The world's first 14 Ångström process node. <br/>
           Fabricated for the post-silicon era.
        </motion.p>

        {/* MAIN VISUAL CARD (Fixed: Self-Contained) */}
        <div className="relative w-full max-w-[1100px] z-20 pb-20">
            <motion.div 
               initial={{ y: 100, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               transition={{ duration: 1, delay: 0.2 }}
               className="aspect-[16/9] md:aspect-[21/9] bg-white rounded-3xl border border-gray-100 shadow-[0_40px_80px_rgba(0,0,0,0.08)] relative overflow-hidden group"
            >
               {/* Background Sheen */}
               <div className="absolute inset-0 bg-silver-sheen opacity-40"></div>
               <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] opacity-50"></div>
               
               {/* Center Chip */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="relative w-32 h-32 md:w-48 md:h-48 bg-onyx rounded-3xl shadow-2xl flex items-center justify-center border border-gray-700">
                     <Cpu className="text-azure w-16 h-16 md:w-24 md:h-24 drop-shadow-[0_0_15px_rgba(0,122,255,0.5)]" />
                     {/* Scanning Line */}
                     <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent h-[20%] w-full animate-scan"></div>
                  </div>
               </div>

               {/* Floating Data Widgets */}
               <motion.div 
                 whileHover={{ scale: 1.05 }}
                 className="absolute top-8 left-8 bg-white/90 backdrop-blur-xl border border-gray-100 p-5 rounded-2xl shadow-lg"
               >
                  <div className="flex items-center gap-2 mb-2">
                     <Activity size={14} className="text-green-500" />
                     <span className="text-[10px] font-bold text-gray-400 tracking-wider">LIVE YIELD</span>
                  </div>
                  <div className="text-3xl font-bold text-onyx font-mono tracking-tight">{yieldRate}%</div>
               </motion.div>

               <motion.div 
                 whileHover={{ scale: 1.05 }}
                 className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-xl border border-gray-100 p-5 rounded-2xl shadow-lg text-right"
               >
                  <div className="flex items-center gap-2 mb-2 justify-end">
                     <span className="text-[10px] font-bold text-gray-400 tracking-wider">LATENCY</span>
                     <Zap size={14} className="text-azure" />
                  </div>
                  <div className="text-3xl font-bold text-onyx font-mono tracking-tight">&lt; 0.2ns</div>
               </motion.div>
            </motion.div>
        </div>
      </motion.section>


      {/* --- SMOOTH TICKER SECTION (Completely Revamped) --- */}
      <section className="bg-white py-24 border-y border-gray-100 relative z-30 overflow-hidden">
         <div className="mb-12 text-center">
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em]">Trusted Integration Partners</h4>
         </div>
         
         {/* Row 1: Left Movement */}
         <div className="flex overflow-hidden relative w-full mb-8 mask-linear-fade">
            <motion.div 
               className="flex gap-20 whitespace-nowrap"
               animate={{ x: [0, -1000] }}
               transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            >
               {[...Array(2)].map((_, i) => (
                  <div key={i} className="flex gap-20 items-center">
                     {["NVIDIA", "APPLE", "TESLA", "SPACEX", "QUALCOMM", "AMD", "INTEL"].map((brand, j) => (
                        <span key={j} className="text-4xl md:text-6xl font-bold text-gray-200 hover:text-onyx transition-colors cursor-default select-none">
                           {brand}
                        </span>
                     ))}
                  </div>
               ))}
            </motion.div>
         </div>

         {/* Row 2: Right Movement */}
         <div className="flex overflow-hidden relative w-full mask-linear-fade">
            <motion.div 
               className="flex gap-20 whitespace-nowrap"
               animate={{ x: [-1000, 0] }}
               transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            >
               {[...Array(2)].map((_, i) => (
                  <div key={i} className="flex gap-20 items-center">
                     {["SAMSUNG", "TSMC", "GOOGLE", "META", "AMAZON", "IBM", "ORACLE"].map((brand, j) => (
                        <span key={j} className="text-4xl md:text-6xl font-bold text-transparent text-stroke hover:text-azure transition-colors cursor-default select-none opacity-50">
                           {brand}
                        </span>
                     ))}
                  </div>
               ))}
            </motion.div>
         </div>
      </section>


      {/* --- GRID SECTION (Clean & Spaced) --- */}
      <section className="bg-paper py-32 px-6 md:px-20 relative z-30">
         <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
               <div className="lg:col-span-8">
                  <h2 className="text-4xl md:text-6xl font-bold mb-6 text-onyx">Modular by Design.</h2>
                  <p className="text-xl text-gray-500 max-w-2xl leading-relaxed">
                     Our chiplet ecosystem allows for heterogeneous integration. Mix 1.4nm Logic with legacy I/O nodes for the perfect thermal envelope.
                  </p>
               </div>
               <div className="lg:col-span-4 flex items-end justify-start lg:justify-end">
                  <button onClick={() => setPage('specs')} className="group flex items-center gap-2 text-azure font-bold text-lg hover:gap-4 transition-all">
                     Explore Architecture <ArrowRight className="w-5 h-5" />
                  </button>
               </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {[
                  { title: "Logic Core", desc: "1.4nm GAAFET", icon: Cpu, color: "text-blue-500", bg: "bg-blue-50" },
                  { title: "HBM4 Memory", desc: "3D Stacked DRAM", icon: Box, color: "text-indigo-500", bg: "bg-indigo-50" },
                  { title: "RF Analog", desc: "6G Front End", icon: Activity, color: "text-rose-500", bg: "bg-rose-50" },
                  { title: "Secure Enclave", desc: "Root-of-Trust", icon: Network, color: "text-emerald-500", bg: "bg-emerald-50" },
                  { title: "Power IC", desc: "Backside Delivery", icon: Zap, color: "text-amber-500", bg: "bg-amber-50" },
                  { title: "Photonics", desc: "Optical Fabric", icon: Globe, color: "text-cyan-500", bg: "bg-cyan-50" },
               ].map((item, i) => (
                  <motion.div 
                     key={i}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ delay: i * 0.1 }}
                     whileHover={{ y: -5 }}
                     className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300 group cursor-pointer"
                  >
                     <div className={`w-14 h-14 ${item.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <item.icon className={`w-7 h-7 ${item.color}`} />
                     </div>
                     <h3 className="text-2xl font-bold text-onyx mb-2">{item.title}</h3>
                     <p className="text-gray-500 font-medium">{item.desc}</p>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

    </div>
  );
};

export default Home;