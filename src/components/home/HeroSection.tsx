import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: 'url(https://images.pexels.com/photos/41257/pexels-photo-41257.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)' }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B1560]/70 via-[#0B1560]/50 to-[#0B1560]/80"></div>
      
      <div className="container mx-auto px-4 relative h-full flex flex-col justify-center">
        <div className="max-w-3xl">
          <h1 className="text-white font-bold text-4xl md:text-5xl lg:text-6xl mb-4">
            Real Madrid <br />
            <span className="text-[#FFB700]">O'zbekiston</span> muxlislari uchun
          </h1>
          <p className="text-white text-lg md:text-xl mb-8">
            Klubning eng so'nggi yangiliklari, o'yinlar jadvali, 
            va eksklyuziv kontent - barchasi o'zbek tilida.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/news" className="bg-[#FFB700] hover:bg-[#e6a600] text-[#0B1560] font-bold py-3 px-6 rounded-md transition-colors duration-300 flex items-center">
              So'nggi Yangiliklar
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link to="/schedule" className="bg-transparent hover:bg-white/10 text-white border-2 border-white font-bold py-3 px-6 rounded-md transition-colors duration-300">
              O'yinlar Jadvali
            </Link>
          </div>
        </div>
      </div>
      
      {/* Wave decoration at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" fill="white">
          <path d="M0,96L60,85.3C120,75,240,53,360,64C480,75,600,117,720,117.3C840,117,960,75,1080,64C1200,53,1320,75,1380,85.3L1440,96L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;