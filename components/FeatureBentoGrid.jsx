import React from 'react';
import { WifiOff, Cloud, ShieldCheck, Zap, Layers, Smartphone } from 'lucide-react';

const FeatureBentoGrid = () => {
  return (
    <section id="features" className="py-24 bg-zinc-50 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-3">Capabilities</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight">
            Everything you need. <br />Nothing you don't.
          </h3>
          <p className="mt-4 text-zinc-500 text-lg">
            Built with a focus on simplicity, speed, and reliability. 
            Apex adapts to your workflow, not the other way around.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-6 auto-rows-[minmax(180px,auto)]">
          
          {/* Feature 1: Large Span */}
          <div className="bento-feature-card group col-span-1 md:col-span-2 md:row-span-2 bg-white rounded-3xl p-8 border border-zinc-100 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden">
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                <Cloud size={24} />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-zinc-900 mb-2">Instant Cloud Sync</h4>
                <p className="text-zinc-500">Start on your phone, finish on your tablet. Changes reflect instantly across all your connected devices with end-to-end encryption.</p>
              </div>
            </div>
            <div className="absolute right-0 bottom-0 w-64 h-64 bg-gradient-to-tl from-blue-50 to-transparent rounded-tl-[100px] opacity-50"></div>
            {/* Visual element representing sync */}
             <div className="absolute right-8 top-8 opacity-20">
                <Cloud size={120} />
             </div>
          </div>

          {/* Feature 2: Tall Vertical */}
          <div className="bento-feature-card group col-span-1 md:row-span-2 bg-black text-white rounded-3xl p-8 shadow-xl hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden">
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="w-12 h-12 bg-zinc-800 rounded-2xl flex items-center justify-center text-white mb-6">
                <Smartphone size={24} />
              </div>
              <div className="mt-auto">
                <h4 className="text-2xl font-bold mb-2">Mobile First</h4>
                <p className="text-zinc-400">Designed for the thumb zone. Every interaction is fluid, natural, and specifically crafted for touch screens.</p>
              </div>
            </div>
             <div className="absolute -right-10 -bottom-10 w-40 h-40 border-[20px] border-zinc-800 rounded-full opacity-50"></div>
          </div>

          {/* Feature 3: Standard Box */}
          <div className="bento-feature-card group bg-white rounded-3xl p-6 border border-zinc-100 shadow-sm hover:shadow-md transition-all">
            <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center text-orange-500 mb-4">
              <WifiOff size={20} />
            </div>
            <h4 className="text-lg font-bold text-zinc-900 mb-1">Offline Mode</h4>
            <p className="text-sm text-zinc-500">No internet? No problem. Full functionality without a connection.</p>
          </div>

          {/* Feature 4: Standard Box */}
          <div className="bento-feature-card group bg-white rounded-3xl p-6 border border-zinc-100 shadow-sm hover:shadow-md transition-all">
            <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center text-green-600 mb-4">
              <ShieldCheck size={20} />
            </div>
            <h4 className="text-lg font-bold text-zinc-900 mb-1">Bank-Grade Security</h4>
            <p className="text-sm text-zinc-500">Your data is yours. Encrypted at rest and in transit.</p>
          </div>

           {/* Feature 5: Wide Bottom */}
           <div className="bento-feature-card group md:col-span-1 bg-white rounded-3xl p-6 border border-zinc-100 shadow-sm hover:shadow-md transition-all">
            <div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600 mb-4">
              <Zap size={20} />
            </div>
            <h4 className="text-lg font-bold text-zinc-900 mb-1">Lightning Fast</h4>
            <p className="text-sm text-zinc-500">Optimized specifically for performance on iOS and Android silicon.</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeatureBentoGrid;
