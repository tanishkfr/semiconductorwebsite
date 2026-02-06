import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SPECS } from '../constants';
import { Download, Layers, Cpu, Thermometer, Zap, Activity, Network } from 'lucide-react';

const TechSpecs: React.FC = () => {
  const [viewMode, setViewMode] = useState<'logic' | 'thermal' | 'power' | 'signal'>('logic');

  return (
    <div className="min-h-screen pt-40 pb-20">
      <div className="max-w-6xl mx-auto px-6">
         
         <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
               <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-onyx mb-4">
                  Datasheet
               </h1>
               <div className="flex items-center gap-2">
                  <span className="bg-azure text-white text-xs font-bold px-2 py-1 rounded">REV 4.2</span>
                  <span className="text-gray-500 font-medium">Angstrom Class Logic</span>
               </div>
            </div>
            <button className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-full shadow-sm hover:shadow-md transition-shadow text-sm font-bold text-onyx">
               <Download size={16} /> Download PDF
            </button>
         </div>

         {/* INTERACTIVE VISUALIZER EXPANDED */}
         <div className="bg-surface rounded-3xl p-8 border border-gray-200 shadow-xl mb-20 overflow-hidden relative">
            <div className="flex flex-wrap gap-4 mb-8 relative z-10">
               <button onClick={() => setViewMode('logic')} className={`px-6 py-2 rounded-full text-sm font-bold transition-colors ${viewMode === 'logic' ? 'bg-onyx text-white' : 'bg-gray-100 text-gray-500'}`}>Logic Map</button>
               <button onClick={() => setViewMode('thermal')} className={`px-6 py-2 rounded-full text-sm font-bold transition-colors ${viewMode === 'thermal' ? 'bg-red-500 text-white' : 'bg-gray-100 text-gray-500'}`}>Thermal</button>
               <button onClick={() => setViewMode('power')} className={`px-6 py-2 rounded-full text-sm font-bold transition-colors ${viewMode === 'power' ? 'bg-yellow-500 text-white' : 'bg-gray-100 text-gray-500'}`}>Power Grid</button>
               <button onClick={() => setViewMode('signal')} className={`px-6 py-2 rounded-full text-sm font-bold transition-colors ${viewMode === 'signal' ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-500'}`}>Signal Mesh</button>
            </div>

            <div className="relative h-[400px] bg-gray-50 rounded-2xl border border-gray-100 flex items-center justify-center overflow-hidden">
               <AnimatePresence mode="wait">
                  {viewMode === 'logic' && (
                     <motion.div key="logic" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="relative w-full h-full p-10 grid grid-cols-4 gap-2 opacity-50">
                        {Array.from({ length: 16 }).map((_, i) => <div key={i} className="border border-azure/20 bg-azure/5 rounded"></div>)}
                        <div className="absolute inset-0 flex items-center justify-center">
                           <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center">
                              <Cpu className="w-12 h-12 text-azure mx-auto mb-2" />
                              <div className="font-bold text-onyx">GAAFET Core</div>
                           </div>
                        </div>
                     </motion.div>
                  )}
                  {viewMode === 'thermal' && (
                     <motion.div key="thermal" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="relative w-full h-full flex items-center justify-center">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-yellow-500 to-red-500 opacity-20 blur-3xl"></div>
                        <Thermometer className="w-16 h-16 text-red-500 relative z-10" />
                     </motion.div>
                  )}
                  {viewMode === 'power' && (
                     <motion.div key="power" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="relative w-full h-full bg-onyx flex items-center justify-center">
                         <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#F59E0B 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
                         <Zap className="w-20 h-20 text-yellow-500 animate-pulse" />
                         <div className="absolute bottom-4 text-yellow-500 font-mono text-xs">BACKSIDE POWER DELIVERY ACTIVE</div>
                     </motion.div>
                  )}
                  {viewMode === 'signal' && (
                     <motion.div key="signal" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="relative w-full h-full bg-gray-900 flex items-center justify-center">
                         <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(90deg, #10B981 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                         <Activity className="w-20 h-20 text-green-500" />
                         <div className="absolute bottom-4 text-green-500 font-mono text-xs">PHOTONIC INTERCONNECT: 224Gbps</div>
                     </motion.div>
                  )}
               </AnimatePresence>
            </div>
         </div>

         {/* COLOR BLOCK: ORANGE */}
         <div className="bg-orange-500 text-white p-12 rounded-3xl mb-20 shadow-xl shadow-orange-500/20">
            <div className="flex flex-col md:flex-row items-center gap-12">
               <div className="flex-1">
                  <h2 className="text-4xl font-bold mb-4">Signal Integrity.</h2>
                  <p className="text-orange-100 text-lg">Our Graphene-doped interconnects reduce electromigration by 50% compared to traditional copper, ensuring reliable operation at 8.5GHz.</p>
               </div>
               <div className="bg-white/10 p-8 rounded-full">
                  <Network className="w-16 h-16 text-white" />
               </div>
            </div>
         </div>

         {/* SPECS GRID */}
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {SPECS.map((spec, i) => (
               <motion.div key={spec.id} whileHover={{ y: -5 }} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:border-azure/30 transition-colors">
                  <div className="font-mono text-xs text-azure mb-2 font-bold">{spec.parameter}</div>
                  <div className="text-4xl font-bold text-onyx mb-2 tracking-tight">{spec.value}<span className="text-xl text-gray-400 ml-1">{spec.unit}</span></div>
                  <p className="text-sm text-gray-500 font-medium leading-relaxed">{spec.description}</p>
               </motion.div>
            ))}
         </div>
      </div>
    </div>
  );
};
export default TechSpecs;