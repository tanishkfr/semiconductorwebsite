import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Award, TrendingUp, Users, Book, Target } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-40 pb-20">
       
       <div className="max-w-4xl mx-auto px-6 mb-24 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
             <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-onyx mb-6">
                The Foundry<br/>of Tomorrow.
             </h1>
          </motion.div>
       </div>

       {/* LEADERSHIP GRID */}
       <div className="bg-onyx py-32 px-6">
          <div className="max-w-7xl mx-auto">
             <div className="flex items-end justify-between mb-16 border-b border-white/10 pb-8">
                <h2 className="text-4xl font-bold text-white">Leadership</h2>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                   { name: "Tanishk", role: "Founder & CEO", desc: "Ex-Intel Fellow. Pioneer of Backside Power Delivery." },
                   { name: "Sarah Chen", role: "CTO", desc: "Lead Architect of the A-1400 Logic Cell Library." },
                   { name: "Dr. A. Russo", role: "VP of Manufacturing", desc: "Oversees Fab 4.2 High-NA EUV operations." }
                ].map((leader, i) => (
                   <div key={i} className="group">
                      <div className="aspect-[4/5] bg-gray-800 mb-6 overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-500 rounded-lg">
                         <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                         <Users className="absolute bottom-4 right-4 text-white/20 w-12 h-12" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-1">{leader.name}</h3>
                      <div className="text-azure text-xs font-bold uppercase tracking-widest mb-4">{leader.role}</div>
                      <p className="text-white/40 text-sm leading-relaxed">{leader.desc}</p>
                   </div>
                ))}
             </div>
          </div>
       </div>

       {/* COLOR BLOCK: PURPLE (Mission) */}
       <div className="max-w-7xl mx-auto px-6 py-20">
         <div className="bg-purple-700 text-white rounded-3xl p-16 shadow-2xl shadow-purple-900/20">
            <div className="flex flex-col md:flex-row items-start gap-12">
               <Target className="w-20 h-20 text-purple-300" />
               <div>
                  <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
                  <p className="text-xl text-purple-100 leading-relaxed max-w-2xl">
                     To reduce the latency between human thought and digital action to zero. We are building the substrate for the post-biological intelligence era.
                  </p>
               </div>
            </div>
         </div>
       </div>

       {/* STATS */}
       <div className="max-w-6xl mx-auto px-6 pt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
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