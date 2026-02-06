import React from 'react';
import { ArrowRight, Twitter, Linkedin, Github, Globe, Hexagon, Server, Shield, Zap, Activity } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-onyx text-white pt-32 pb-12 relative overflow-hidden">
      
      {/* MASSIVE WATERMARK */}
      <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-[0.02]">
         <h1 className="text-[35vw] font-bold leading-none tracking-tighter">AXON</h1>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* TOP: SUBSCRIBE */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-24 border-b border-white/10 pb-20">
           <div className="max-w-2xl mb-12 lg:mb-0">
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
                 Stay Ahead.<br/>
                 <span className="text-azure">Subscribe.</span>
              </h2>
           </div>
           <div className="w-full lg:w-auto">
              <form className="flex flex-col md:flex-row gap-4 w-full md:w-[400px]">
                 <input 
                   type="email" 
                   placeholder="ENTER YOUR EMAIL" 
                   className="bg-transparent border-b border-white/20 py-4 text-white placeholder-white/20 focus:outline-none focus:border-azure transition-colors flex-1 font-mono text-sm"
                 />
                 <button className="bg-white text-onyx px-8 py-4 rounded-full font-bold text-sm hover:bg-azure hover:text-white transition-colors flex items-center justify-center gap-2 group">
                    <Hexagon size={16} className="group-hover:rotate-180 transition-transform" />
                    JOIN
                 </button>
              </form>
           </div>
        </div>

        {/* MIDDLE: MEGA GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
           <div>
              <h4 className="font-bold text-white mb-6">Product</h4>
              <ul className="space-y-4 text-sm text-gray-400">
                 <li className="hover:text-azure cursor-pointer">Logic Nodes</li>
                 <li className="hover:text-azure cursor-pointer">HBM Memory</li>
                 <li className="hover:text-azure cursor-pointer">Photonics</li>
              </ul>
           </div>
           <div>
              <h4 className="font-bold text-white mb-6">Company</h4>
              <ul className="space-y-4 text-sm text-gray-400">
                 <li className="hover:text-azure cursor-pointer">About</li>
                 <li className="hover:text-azure cursor-pointer">Careers</li>
                 <li className="hover:text-azure cursor-pointer">Investors</li>
              </ul>
           </div>
           
           {/* SYSTEM STATUS MINI-GRID */}
           <div className="col-span-2 lg:col-span-2 bg-white/5 rounded-2xl p-8 border border-white/10">
              <h4 className="font-bold text-white mb-6 flex items-center gap-2">
                 <Activity size={16} className="text-green-500" /> System Status
              </h4>
              <div className="grid grid-cols-2 gap-4">
                 <div className="flex items-center gap-3">
                    <Server size={14} className="text-gray-500" />
                    <span className="text-xs text-gray-300">Fab 4.2 (DE)</span>
                    <span className="w-2 h-2 rounded-full bg-green-500 ml-auto"></span>
                 </div>
                 <div className="flex items-center gap-3">
                    <Zap size={14} className="text-gray-500" />
                    <span className="text-xs text-gray-300">Grid Power</span>
                    <span className="w-2 h-2 rounded-full bg-green-500 ml-auto"></span>
                 </div>
                 <div className="flex items-center gap-3">
                    <Shield size={14} className="text-gray-500" />
                    <span className="text-xs text-gray-300">Security</span>
                    <span className="w-2 h-2 rounded-full bg-green-500 ml-auto"></span>
                 </div>
              </div>
           </div>
        </div>

        {/* BOTTOM */}
        <div className="flex flex-col items-center border-t border-white/5 pt-12">
           <div className="flex gap-8 mb-8">
              <Twitter size={20} className="text-white/40 hover:text-white transition-colors cursor-pointer" />
              <Linkedin size={20} className="text-white/40 hover:text-white transition-colors cursor-pointer" />
              <Github size={20} className="text-white/40 hover:text-white transition-colors cursor-pointer" />
           </div>
           <div className="text-xs text-white/20 font-mono">
              © 2026 AXON FOUNDRIES INC. // BENGALURU, KA
           </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;