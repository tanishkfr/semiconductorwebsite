import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Cpu, Activity, ArrowRight, Layers, Leaf, Atom, Zap } from 'lucide-react';
import { APPLICATIONS } from '../constants';

interface HomeProps {
  setPage: (page: string) => void;
}

const Home: React.FC<HomeProps> = ({ setPage }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Fake Yield Data
  const [yieldRate, setYieldRate] = useState(99.91);
  useEffect(() => {
     const interval = setInterval(() => {
        setYieldRate(prev => +(prev + (Math.random() * 0.04 - 0.02)).toFixed(3));
     }, 1000);
     return () => clearInterval(interval);
  }, []);

  return (
    <div ref={containerRef} className="w-full relative bg-transparent overflow-hidden">
      
      {/* HERO SECTION */}
      <motion.section 
        style={{ y: heroY, opacity: heroOpacity }}
        className="relative min-h-[110vh] flex flex-col items-center pt-40 px-6"
      >
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 1.4 }} 
           className="inline-flex items-center gap-3 border border-onyx/5 bg-white/50 backdrop-blur-md rounded-full pl-2 pr-4 py-1.5 mb-10 shadow-sm"
        >
           <span className="relative flex h-2 w-2">
             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-azure opacity-75"></span>
             <span className="relative inline-flex rounded-full h-2 w-2 bg-azure"></span>
           </span>
           <span className="text-[10px] font-bold text-gray-500 tracking-widest uppercase">
              Fab 4.2 Operational
           </span>
        </motion.div>

        <h1 className="text-7xl md:text-[9rem] font-bold tracking-tighter text-onyx mb-6 leading-[0.85] text-center z-10">
          <motion.span 
             initial={{ opacity: 0, y: 50 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 1.6, duration: 0.8 }}
             className="block"
          >
             Silicon
          </motion.span>
          <motion.span 
             initial={{ opacity: 0, y: 50 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 1.8, duration: 0.8 }}
             className="block text-transparent bg-clip-text bg-gradient-to-br from-azure to-blue-800"
          >
             Supremacy.
          </motion.span>
        </h1>

        <div className="relative w-full max-w-[1100px] z-20 pb-20 perspective-1000">
            <motion.div 
               initial={{ rotateX: 20, opacity: 0 }}
               animate={{ rotateX: 0, opacity: 1 }}
               transition={{ delay: 2.0, duration: 1.5, ease: "easeOut" }}
               className="aspect-[21/9] bg-white rounded-3xl border border-gray-100 shadow-2xl relative overflow-hidden group"
            >
               <div className="absolute inset-0 bg-gradient-to-tr from-gray-50 to-white opacity-40"></div>
               <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="relative w-32 h-32 md:w-48 md:h-48 bg-onyx rounded-3xl shadow-2xl flex items-center justify-center border border-gray-700">
                     <Cpu className="text-azure w-16 h-16 md:w-24 md:h-24 drop-shadow-[0_0_15px_rgba(0,122,255,0.5)] animate-pulse" />
                  </div>
               </div>
            </motion.div>
        </div>
      </motion.section>

      {/* NEW: COLOR BLOCK SECTION 1 (AZURE) */}
      <section className="bg-azure text-white py-32 px-6">
         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div>
               <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter">Speed of Light.</h2>
               <p className="text-xl text-blue-100 font-medium leading-relaxed mb-8">
                  We've replaced copper traces with a native silicon photonics mesh. Data moves between chiplets instantly, with 10x less power consumption.
               </p>
               <div className="grid grid-cols-2 gap-8 border-t border-white/20 pt-8">
                  <div>
                     <div className="text-4xl font-bold mb-1">224G</div>
                     <div className="text-xs font-bold uppercase tracking-widest text-blue-200">Per Lane</div>
                  </div>
                  <div>
                     <div className="text-4xl font-bold mb-1">0.1pJ</div>
                     <div className="text-xs font-bold uppercase tracking-widest text-blue-200">Per Bit</div>
                  </div>
               </div>
            </div>
            <div className="bg-white/10 rounded-3xl p-12 backdrop-blur-sm border border-white/20">
               <Zap className="w-32 h-32 text-white mx-auto animate-pulse" />
            </div>
         </div>
      </section>

      {/* TRUSTED BRANDS */}
      <section className="bg-white py-16 border-y border-gray-100 overflow-hidden group">
         <p className="text-center text-xs font-bold text-gray-400 uppercase tracking-widest mb-10">Integration Partners</p>
         <div className="flex gap-20 animate-marquee whitespace-nowrap group-hover:[animation-play-state:paused]">
             {[...Array(2)].map((_, i) => (
                <div key={i} className="flex gap-20">
                  {["NVIDIA", "APPLE", "TESLA", "SPACEX", "QUALCOMM", "AMD", "INTEL"].map((brand, j) => (
                      <span key={j} className="text-4xl font-bold font-mono text-gray-300 hover:text-azure transition-colors cursor-pointer">{brand}</span>
                  ))}
                </div>
             ))}
         </div>
      </section>

      {/* NEW: WAFER TOPOGRAPHY SECTION */}
      <section className="bg-onyx text-white py-32 px-6 overflow-hidden relative">
         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
            <div>
               <h3 className="text-azure font-mono text-xs uppercase tracking-widest mb-4">/// Architecture 4.0</h3>
               <h2 className="text-5xl font-bold mb-6">Vertical Stacking.</h2>
               <p className="text-gray-400 text-lg leading-relaxed mb-8">
                  Our Backside Power Delivery Network (BSPDN) routes power from underneath the logic layer, freeing up the top stack for pure signal routing.
               </p>
            </div>
            
            <div className="relative h-[400px] perspective-1000 flex items-center justify-center">
               <motion.div 
                 initial={{ rotateX: 60, rotateZ: 45 }}
                 whileInView={{ rotateX: 55, rotateZ: 40 }}
                 transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                 className="w-64 h-64 bg-gray-800 rounded-xl border border-gray-700 shadow-2xl relative transform-style-3d"
               >
                  <div className="absolute inset-0 bg-azure/20 rounded-xl translate-z-20 border border-azure/50"></div>
                  <div className="absolute inset-0 bg-white/5 rounded-xl translate-z-40 border border-white/10 flex items-center justify-center">
                     <Layers className="text-white w-12 h-12" />
                  </div>
               </motion.div>
            </div>
         </div>
      </section>

      {/* NEW: COLOR BLOCK SECTION 2 (LIME/PAPER) */}
      <section className="bg-paper py-32 px-6 md:px-20 relative z-30">
         <div className="max-w-7xl mx-auto text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-onyx">Powering the Next Wave.</h2>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {APPLICATIONS.map((app, i) => (
               <motion.div 
                  key={i}
                  whileHover={{ y: -10 }}
                  className="bg-surface rounded-3xl p-10 shadow-sm border border-gray-100 hover:shadow-2xl transition-all duration-300 group"
               >
                  <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-azure transition-colors">
                     <app.icon className="w-8 h-8 text-azure group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold text-onyx mb-3">{app.title}</h3>
                  <p className="text-gray-500 mb-8">{app.desc}</p>
                  <div className="border-t border-gray-100 pt-6 flex justify-between items-center">
                     <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Benchmark</span>
                     <span className="text-xl font-bold text-onyx font-mono">{app.stat}</span>
                  </div>
               </motion.div>
            ))}
         </div>
      </section>

    </div>
  );
};

export default Home;