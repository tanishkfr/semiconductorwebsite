import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="bg-surface pt-32 pb-20 px-6 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-20">
         
         {/* LEFT: INFO */}
         <div>
            <h1 className="text-5xl font-bold tracking-tight text-onyx mb-6">
               Initiate<br/>Partnership.
            </h1>
            <p className="text-xl text-gray-500 mb-12 font-medium">
               Secure high-volume allocation for the A-1400 node. Our engineering team is ready to validate your architecture.
            </p>

            <div className="space-y-8">
               <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-paper rounded-full flex items-center justify-center shrink-0">
                     <Mail className="w-5 h-5 text-onyx" />
                  </div>
                  <div>
                     <h3 className="font-bold text-onyx">Enterprise Sales</h3>
                     <p className="text-gray-500 text-sm">foundry@axon.com</p>
                  </div>
               </div>
               
               <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-paper rounded-full flex items-center justify-center shrink-0">
                     <Phone className="w-5 h-5 text-onyx" />
                  </div>
                  <div>
                     <h3 className="font-bold text-onyx">Global Support</h3>
                     <p className="text-gray-500 text-sm">+1 (800) 555-0199</p>
                  </div>
               </div>

               <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-paper rounded-full flex items-center justify-center shrink-0">
                     <MapPin className="w-5 h-5 text-onyx" />
                  </div>
                  <div>
                     <h3 className="font-bold text-onyx">Headquarters</h3>
                     <p className="text-gray-500 text-sm">
                        Tech Park IV, Bengaluru<br/>
                        Karnataka, India 560045
                     </p>
                  </div>
               </div>
            </div>
         </div>

         {/* RIGHT: FORM */}
         <div className="bg-paper bg-gradient-mesh bg-opacity-30 rounded-3xl p-10 lg:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-white/40 pointer-events-none"></div>
            <form className="space-y-8 relative z-10">
               <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                     <label className="text-xs font-bold text-onyx uppercase tracking-wide">First Name</label>
                     <input type="text" className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-azure transition-colors" />
                  </div>
                  <div className="space-y-2">
                     <label className="text-xs font-bold text-onyx uppercase tracking-wide">Last Name</label>
                     <input type="text" className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-azure transition-colors" />
                  </div>
               </div>
               
               <div className="space-y-2">
                  <label className="text-xs font-bold text-onyx uppercase tracking-wide">Corporate Email</label>
                  <input type="email" className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-azure transition-colors" />
               </div>

               <div className="space-y-2">
                  <label className="text-xs font-bold text-onyx uppercase tracking-wide">Inquiry Type</label>
                  <select className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-azure transition-colors">
                     <option>Volume Fabrication</option>
                     <option>IP Licensing</option>
                     <option>Investor Relations</option>
                  </select>
               </div>

               <div className="space-y-2">
                  <label className="text-xs font-bold text-onyx uppercase tracking-wide">Message</label>
                  <textarea rows={4} className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-azure transition-colors"></textarea>
               </div>

               <button type="button" className="w-full bg-onyx text-white font-bold py-4 rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
                  TRANSMIT REQUEST <ArrowRight size={16} />
               </button>
            </form>
         </div>

      </div>
    </div>
  );
};
export default Contact;