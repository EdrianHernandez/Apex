import React from 'react';
import { QrCode } from 'lucide-react';

const DownloadSection = () => {
  return (
    <section className="bg-zinc-900 py-24 relative overflow-hidden text-white">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/4"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 bg-white/5 backdrop-blur-lg rounded-[2.5rem] p-8 md:p-16 border border-white/10">
          
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Ready to upgrade <br /> your workflow?
            </h2>
            <p className="text-zinc-400 text-lg mb-8 max-w-md mx-auto md:mx-0">
              Download Apex today and experience the future of productivity. Free for the first 14 days.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="download-store-btn bg-white text-black hover:bg-zinc-200 transition-colors px-6 py-3 rounded-xl font-semibold flex items-center justify-center gap-2">
                <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                   <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.23-3.14-2.47-2.93-4.24-2.42-10.45 2.76-10.66 1.63-.07 2.82 1.09 3.71 1.09.89 0 2.45-1.35 4.14-1.15 2.18.09 3.83 1.48 4.3 1.76-2.42 1.18-2.02 6.83 2.15 8.16-.48 1.45-1.08 2.88-2.15 4.45-.66.97-1.35 1.94-2.16 1.32zM13 5.08c.7-.84 1.17-2.01 1.04-3.18-1.04.04-2.3.69-3.04 1.54-.66.75-1.24 1.95-1.1 3.1 1.15.09 2.33-.56 3.1-1.46z"></path>
                </svg>
                <div className="text-left leading-none">
                  <span className="block text-[10px] font-medium uppercase">Download on the</span>
                  <span className="block text-sm font-bold">App Store</span>
                </div>
              </button>
              
              <button className="download-store-btn bg-transparent border border-white/20 hover:bg-white/10 transition-colors px-6 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 text-white">
                 <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                <div className="text-left leading-none">
                  <span className="block text-[10px] font-medium uppercase">Get it on</span>
                  <span className="block text-sm font-bold">Google Play</span>
                </div>
              </button>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="bg-white p-4 rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
               <div className="w-40 h-40 bg-zinc-100 rounded-xl flex flex-col items-center justify-center text-zinc-900">
                  <QrCode size={80} className="mb-2 opacity-80" />
                  <span className="text-xs font-bold tracking-widest uppercase">Scan to get</span>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
