import React from 'react';
import { HeroSection } from './components/HeroSection';
import { MagicWishes } from './components/MagicWishes';
import { BffQuiz } from './components/BffQuiz';
import { Heart } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-pink-50 text-gray-800 font-sans selection:bg-rose-200">
      
      {/* Navigation / Header */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-pink-100">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <span className="text-2xl font-bold text-rose-500 handwriting">Samu and Nafu</span>
          <div className="flex items-center gap-1 text-sm font-medium text-gray-500">
             <span>Made with</span>
             <Heart size={14} className="fill-rose-500 text-rose-500" />
             <span>for my Bestie</span>
          </div>
        </div>
      </nav>

      <main>
        <HeroSection />
        <BffQuiz />
        <MagicWishes />
      </main>

      <footer className="py-10 text-center text-gray-500 text-sm bg-white/40">
        <p>© {new Date().getFullYear()} Surprise for Saamu. All love reserved.</p>
      </footer>
    </div>
  );
};

export default App;