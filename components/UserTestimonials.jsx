import React, { useRef } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Product Designer",
    quote: "I've tried every productivity app on the store. Apex is the only one that actually stuck. It's beautiful and intuitive.",
    image: "https://picsum.photos/100/100?random=1",
    rating: 5
  },
  {
    id: 2,
    name: "Marcus Chen",
    role: "Startup Founder",
    quote: "The offline mode is a lifesaver when I'm traveling. Syncs perfectly when I'm back online. Highly recommended.",
    image: "https://picsum.photos/100/100?random=2",
    rating: 5
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Freelance Writer",
    quote: "Finally, an app that doesn't feel cluttered. The dark mode is gorgeous on my OLED screen.",
    image: "https://picsum.photos/100/100?random=3",
    rating: 5
  },
  {
    id: 4,
    name: "David Kim",
    role: "Creative Director",
    quote: "Apex completely transformed how I manage my design sprints. The interface is simply stunning.",
    image: "https://picsum.photos/100/100?random=4",
    rating: 5
  },
  {
    id: 5,
    name: "Jessica Park",
    role: "Software Engineer",
    quote: "Fast, reliable, and actually enjoyable to use. It's the first thing I open in the morning.",
    image: "https://picsum.photos/100/100?random=5",
    rating: 5
  }
];

const UserTestimonials = () => {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = direction === 'left' ? -350 : 350;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="testimonials" className="py-24 bg-white border-t border-zinc-100 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
           <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              Loved by thousands of creators
            </h2>
            <p className="mt-4 text-lg text-zinc-500 max-w-2xl">
              Join the community of people who have reclaimed their time.
            </p>
          </div>
          
          <div className="flex items-center gap-2">
            <button 
              onClick={() => scroll('left')}
              className="p-3 rounded-full border border-zinc-200 text-zinc-600 hover:bg-zinc-100 hover:text-black transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-3 rounded-full border border-zinc-200 text-zinc-600 hover:bg-zinc-100 hover:text-black transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Horizontal Carousel */}
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 hide-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0"
        >
          {testimonials.map((t) => (
            <div 
              key={t.id} 
              className="snap-center flex-shrink-0 w-[85vw] md:w-[400px] bg-zinc-50 rounded-2xl p-8 border border-zinc-100 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex gap-1 mb-4 text-yellow-500">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              
              <blockquote className="text-zinc-800 text-lg font-medium leading-relaxed mb-6 h-32 overflow-hidden relative">
                "{t.quote}"
              </blockquote>
              
              <div className="flex items-center gap-4">
                <img 
                  src={t.image} 
                  alt={t.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-white"
                />
                <div>
                  <div className="font-bold text-zinc-900 text-sm">{t.name}</div>
                  <div className="text-zinc-500 text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Social Proof Logos */}
        <div className="mt-12 pt-10 border-t border-zinc-100">
          <p className="text-center text-zinc-400 text-sm font-medium uppercase tracking-widest mb-8">Featured In</p>
          <div className="flex flex-wrap justify-center gap-12 opacity-40 grayscale">
            <span className="text-xl font-bold font-serif">TechCrunch</span>
            <span className="text-xl font-bold font-sans tracking-tighter">TheVerge</span>
            <span className="text-xl font-bold font-mono">WIRED</span>
            <span className="text-xl font-bold font-sans italic">FastCompany</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default UserTestimonials;
