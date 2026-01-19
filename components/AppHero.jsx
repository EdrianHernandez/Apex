import React from 'react';
import { ChevronRight, Star } from 'lucide-react';

const AppHero = () => {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-32 lg:pb-32 bg-white">
      
      {/* Animated Background Layers */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Layer 1: Slower, Deeper Wave */}
        <div className="absolute bottom-0 left-0 w-[300%] h-full flex animate-wave-slow opacity-60">
           {/* Segment 1 */}
           <svg className="w-1/3 h-[50vh] mt-auto text-zinc-50 fill-current transform translate-y-12" viewBox="0 0 1440 320" preserveAspectRatio="none">
              <path d="M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,165.3C672,139,768,117,864,128C960,139,1056,181,1152,197.3C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
           </svg>
           {/* Segment 2 (Duplicate) */}
           <svg className="w-1/3 h-[50vh] mt-auto text-zinc-50 fill-current transform translate-y-12" viewBox="0 0 1440 320" preserveAspectRatio="none">
              <path d="M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,165.3C672,139,768,117,864,128C960,139,1056,181,1152,197.3C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
           </svg>
           {/* Segment 3 (Duplicate) */}
           <svg className="w-1/3 h-[50vh] mt-auto text-zinc-50 fill-current transform translate-y-12" viewBox="0 0 1440 320" preserveAspectRatio="none">
              <path d="M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,165.3C672,139,768,117,864,128C960,139,1056,181,1152,197.3C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
           </svg>
        </div>

        {/* Layer 2: Faster, Shallower Wave */}
        <div className="absolute bottom-0 left-0 w-[300%] h-full flex animate-wave opacity-40">
           {/* Segment 1 */}
           <svg className="w-1/3 h-[45vh] mt-auto text-blue-50/50 fill-current transform translate-y-4" viewBox="0 0 1440 320" preserveAspectRatio="none">
              <path d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,106.7C672,117,768,171,864,197.3C960,224,1056,224,1152,202.7C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
           </svg>
           {/* Segment 2 */}
           <svg className="w-1/3 h-[45vh] mt-auto text-blue-50/50 fill-current transform translate-y-4" viewBox="0 0 1440 320" preserveAspectRatio="none">
              <path d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,106.7C672,117,768,171,864,197.3C960,224,1056,224,1152,202.7C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
           </svg>
           {/* Segment 3 */}
           <svg className="w-1/3 h-[45vh] mt-auto text-blue-50/50 fill-current transform translate-y-4" viewBox="0 0 1440 320" preserveAspectRatio="none">
              <path d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,106.7C672,117,768,171,864,197.3C960,224,1056,224,1152,202.7C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
           </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTA */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-600 text-xs font-medium mb-2 animate-fade-in-up">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500"></span>
              Apex 2.0 is now live
              <ChevronRight size={12} />
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-zinc-900 leading-[1.1]">
              Master your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-900 to-zinc-500">
                digital life.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-zinc-500 max-w-lg leading-relaxed">
              Experience clarity with the app designed to organize your thoughts, tasks, and time in one beautiful interface.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button className="download-store-btn bg-black text-white hover:bg-zinc-800 transition-all px-6 py-3 rounded-2xl font-semibold flex items-center justify-center gap-3 shadow-lg hover:shadow-xl hover:-translate-y-1 duration-300">
                <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                   <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.23-3.14-2.47-2.93-4.24-2.42-10.45 2.76-10.66 1.63-.07 2.82 1.09 3.71 1.09.89 0 2.45-1.35 4.14-1.15 2.18.09 3.83 1.48 4.3 1.76-2.42 1.18-2.02 6.83 2.15 8.16-.48 1.45-1.08 2.88-2.15 4.45-.66.97-1.35 1.94-2.16 1.32zM13 5.08c.7-.84 1.17-2.01 1.04-3.18-1.04.04-2.3.69-3.04 1.54-.66.75-1.24 1.95-1.1 3.1 1.15.09 2.33-.56 3.1-1.46z"></path>
                </svg>
                <div className="text-left leading-none">
                  <span className="block text-[10px] font-medium uppercase text-zinc-300">Download on the</span>
                  <span className="block text-xl font-bold">App Store</span>
                </div>
              </button>
              <button className="download-store-btn bg-zinc-100 text-zinc-900 hover:bg-zinc-200 transition-all px-8 py-4 rounded-2xl font-semibold flex items-center justify-center gap-3">
                <span>View Demo</span>
                <ChevronRight size={20} />
              </button>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img 
                    key={i}
                    src={`https://picsum.photos/40/40?random=${i + 10}`} 
                    alt="User" 
                    className="w-10 h-10 rounded-full border-2 border-white object-cover"
                  />
                ))}
              </div>
              <div className="flex flex-col items-start">
                <div className="flex text-yellow-500">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <span className="text-xs text-zinc-500 font-medium">Loved by 10k+ users</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Quality Device Mockup */}
          <div className="relative flex justify-center lg:justify-end app-mockup-container">
            {/* Abstract Background Shapes */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-blue-100 to-purple-100 rounded-full blur-3xl opacity-50 -z-10 animate-pulse"></div>

            {/* The Phone */}
            <div className="relative w-[300px] h-[600px] bg-zinc-900 rounded-[3rem] shadow-2xl border-[8px] border-zinc-900 ring-1 ring-zinc-900/5 z-20 overflow-hidden animate-float">
               {/* Bezel details */}
               <div className="absolute top-0 w-full h-8 bg-zinc-900 z-30 flex justify-center">
                  <div className="w-24 h-6 bg-black rounded-b-xl"></div>
               </div>

               {/* Screen Content */}
               <div className="w-full h-full bg-white flex flex-col pt-12 pb-8 px-4 relative overflow-hidden">
                  <img 
                    src="https://picsum.photos/300/600?grayscale" 
                    alt="App Interface" 
                    className="app-mockup-img absolute inset-0 w-full h-full object-cover opacity-90"
                  />
                  
                  {/* Floating UI Elements on top of screenshot to create depth */}
                  <div className="absolute bottom-12 left-4 right-4 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/20 transform translate-y-4">
                    <div className="flex items-center gap-3">
                       <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white">
                         <Star size={20} fill="currentColor" />
                       </div>
                       <div>
                         <p className="font-bold text-sm">Goal Achieved</p>
                         <p className="text-xs text-gray-500">Daily focus streak: 12 days</p>
                       </div>
                    </div>
                  </div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AppHero;
