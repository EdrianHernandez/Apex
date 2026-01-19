import React from 'react';
import AppHero from './components/AppHero.jsx';
import FeatureBentoGrid from './components/FeatureBentoGrid.jsx';
import UserTestimonials from './components/UserTestimonials.jsx';
import DownloadSection from './components/DownloadSection.jsx';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>
            <span className="font-bold text-xl tracking-tight">Apex</span>
          </div>
          
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#features" className="text-zinc-500 hover:text-zinc-900 transition-colors text-sm font-medium">Features</a>
            <a href="#testimonials" className="text-zinc-500 hover:text-zinc-900 transition-colors text-sm font-medium">Testimonials</a>
            <button className="bg-black text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-zinc-800 transition-colors">
              Get the App
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-zinc-600 hover:text-black">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-b border-zinc-100 p-4 space-y-4">
           <a href="#features" className="block text-zinc-600 font-medium" onClick={() => setIsOpen(false)}>Features</a>
           <a href="#testimonials" className="block text-zinc-600 font-medium" onClick={() => setIsOpen(false)}>Testimonials</a>
           <button className="w-full bg-black text-white py-3 rounded-xl font-medium">
              Get the App
            </button>
        </div>
      )}
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-zinc-50 border-t border-zinc-100 pt-16 pb-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-6 h-6 bg-zinc-900 rounded-md flex items-center justify-center">
          <div className="w-3 h-3 bg-white rounded-full"></div>
        </div>
        <span className="font-bold text-lg tracking-tight">Apex</span>
      </div>
      <p className="text-zinc-500 text-sm mb-8 text-center max-w-sm">
        Designed for focus. Built for speed. The only productivity tool you'll ever need.
      </p>
      <div className="flex gap-6 text-sm text-zinc-500">
        <a href="#" className="hover:text-zinc-900">Privacy</a>
        <a href="#" className="hover:text-zinc-900">Terms</a>
        <a href="#" className="hover:text-zinc-900">Twitter</a>
        <a href="#" className="hover:text-zinc-900">Instagram</a>
      </div>
      <p className="mt-8 text-xs text-zinc-400">© 2024 Apex Inc. All rights reserved.</p>
    </div>
  </footer>
);

const App = () => {
  return (
    <div className="min-h-screen bg-white selection:bg-zinc-100 selection:text-black">
      <Navbar />
      <main className="pt-16">
        <AppHero />
        <FeatureBentoGrid />
        <UserTestimonials />
        <DownloadSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
