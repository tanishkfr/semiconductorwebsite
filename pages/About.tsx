import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Award, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-surface pt-32 pb-20">
       
       {/* HERO */}
       <div className="max-w-4xl mx-auto px-6 mb-24 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
             <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-onyx mb-6">
                The Foundry<br/>of Tomorrow.
             </h1>
             <p className="text-xl text-gray-500 font-medium leading-relaxed">
                We are building the substrate for the next century of computing.
             </p>
          </motion.div>
       </div>

       {/* TIMELINE (New Feature) */}
       <div className="bg-paper py-20 px-6 mb-20 rounded-3xl mx-4 md:mx-12">
          <div className="max-w-4xl mx-auto">
             <h3 className="text-center text-sm font-bold text-azure uppercase tracking-widest mb-12">Our Journey</h3>
             <div className="space-y-12 relative border-l-2 border-gray-200 ml-4 md:ml-0 md:pl-0">
                {[
                   { year: "2024", title: "Inception", desc: "Founded in Bengaluru with a vision for bio-mimetic silicon." },
                   { year: "2025", title: "First Tapeout", desc: "Successful validation of the 14Å test chip." },
                   { year: "2026", title: "Global Expansion", desc: "Opening of Fab 2 in Dresden and Packaging facility in Austin." }
                ].map((item, i) => (
                   <div key={i} className="relative pl-8 md:pl-0 md:grid md:grid-cols-5 md:gap-8 items-center group">
                      <div className="md:col-span-1 md:text-right font-bold text-2xl text-onyx">{item.year}</div>
                      <div className="absolute left-[-5px] top-2 md:left-auto md:relative md:col-span-1 md:flex md:justify-center">
                         <div className="w-3 h-3 bg-azure rounded-full ring-4 ring-white group-hover:scale-150 transition-transform"></div>
                      </div>
                      <div className="md:col-span-3 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                         <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                         <p className="text-gray-500 text-sm">{item.desc}</p>
                      </div>
                   </div>
                ))}
             </div>
          </div>
       </div>

       {/* STATS */}
       <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
             { label: "Global Locations", val: "3", icon: Globe },
             { label: "Patents Granted", val: "142", icon: Award },
             { label: "YoY Growth", val: "200%", icon: TrendingUp },
          ].map((stat, i) => (
             <div key={i} className="text-center p-10 border border-gray-100 rounded-2xl hover:border-azure/20 transition-colors">
                <stat.icon className="w-8 h-8 text-azure mx-auto mb-4" />
                <div className="text-4xl font-bold text-onyx mb-2">{stat.val}</div>
                <div className="text-sm text-gray-500 font-bold uppercase tracking-wide">{stat.label}</div>
             </div>
          ))}
       </div>

    </div>
  );
};
export default About;