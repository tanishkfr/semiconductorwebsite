import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SPECS, FEATURES } from '../constants';
import { Download, Layers, Cpu } from 'lucide-react';

const TechSpecs: React.FC = () => {
  const [activeLayer, setActiveLayer] = useState<'logic' | 'memory'>('logic');

  return (
    <div className="bg-gradient-mesh min-h-screen pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-6">
         
         {/* HEADER */}
         <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
               <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-onyx mb-4">
                  A-1400 Series
               </h1>
               <div className="flex items-center gap-2">
                  <span className="bg-azure text-white text-xs font-bold px-2 py-1 rounded">REV 4.2</span>
                  <span className="text-gray-500 font-medium">Angstrom Class Logic</span>
               </div>
            </div>
            <button className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-full shadow-sm hover:shadow-md transition-shadow text-sm font-bold text-onyx">
               <Download size={16} /> Datasheet (PDF)
            </button>
         </div>

         {/* INTERACTIVE LAYER VISUALIZER (New Feature) */}
         <div className="bg-surface rounded-3xl p-8 border border-gray-200 shadow-xl mb-20 overflow-hidden relative">
            <div className="flex gap-4 mb-8 relative z-10">
               <button 
                  onClick={() => setActiveLayer('logic')}
                  className={`px-6 py-2 rounded-full text-sm font-bold transition-colors ${activeLayer === 'logic' ? 'bg-onyx text-white' : 'bg-gray-100 text-gray-500'}`}
               >
                  Logic Layer
               </button>
               <button 
                  onClick={() => setActiveLayer('memory')}
                  className={`px-6 py-2 rounded-full text-sm font-bold transition-colors ${activeLayer === 'memory' ? 'bg-onyx text-white' : 'bg-gray-100 text-gray-500'}`}
               >
                  Memory Stack
               </button>
            </div>

            <div className="relative h-[300px] bg-gray-50 rounded-2xl border border-gray-100 flex items-center justify-center overflow-hidden">
               {/* Grid Background */}
               <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#ddd 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
               
               <AnimatePresence mode="wait">
                  {activeLayer === 'logic' ? (
                     <motion.div 
                        key="logic"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="text-center"
                     >
                        <Cpu className="w-32 h-32 text-azure mx-auto mb-4" />
                        <h3 className="text-2xl font-bold text-onyx">GAAFET Logic</h3>
                        <p className="text-gray-500">RibbonFET transistors with backside power.</p>
                     </motion.div>
                  ) : (
                     <motion.div 
                        key="memory"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="text-center"
                     >
                        <Layers className="w-32 h-32 text-purple-600 mx-auto mb-4" />
                        <h3 className="text-2xl font-bold text-onyx">HBM4 Stack</h3>
                        <p className="text-gray-500">12-Hi Vertical Integration via TSV.</p>
                     </motion.div>
                  )}
               </AnimatePresence>
            </div>
         </div>

         {/* SPECS GRID */}
         <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-8">Technical Specifications</h3>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {SPECS.map((spec, i) => (
               <motion.div 
                 key={spec.id}
                 whileHover={{ y: -5 }}
                 className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:border-azure/30 transition-colors"
               >
                  <div className="font-mono text-xs text-azure mb-2 font-bold">{spec.parameter}</div>
                  <div className="text-4xl font-bold text-onyx mb-2 tracking-tight">{spec.value}<span className="text-xl text-gray-400 ml-1">{spec.unit}</span></div>
                  <p className="text-sm text-gray-500 font-medium leading-relaxed">
                     {spec.description}
                  </p>
               </motion.div>
            ))}
         </div>
      </div>
    </div>
  );
};
export default TechSpecs;