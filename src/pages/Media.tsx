import React, { useState } from 'react';
import { Play, Film, ArrowRight } from 'lucide-react';

const videoCategories = [
  { id: 'all', name: 'Barchasi' },
  { id: 'goals', name: 'Gollar' },
  { id: 'interviews', name: 'Intervyular' },
  { id: 'training', name: 'Mashg\'ulotlar' },
  { id: 'documentary', name: 'Hujjatli filmlar' }
];

const videoItems = [
  {
    id: 1,
    title: 'Real Madrid vs Barcelona 3-1 | El Clásico Gollar',
    thumbnail: 'https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    duration: '4:32',
    views: '1.2M',
    category: 'goals',
    hasUzbekSubtitles: true
  },
  {
    id: 2,
    title: 'Bellingham bilan eksklyuziv intervyu',
    thumbnail: 'https://images.pexels.com/photos/47343/the-ball-stadion-football-the-pitch-47343.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    duration: '10:15',
    views: '852K',
    category: 'interviews',
    hasUzbekSubtitles: true
  },
  {
    id: 3,
    title: 'UCL Final | Real Madrid vs Manchester City',
    thumbnail: 'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    duration: '8:44',
    views: '3.5M',
    category: 'goals',
    hasUzbekSubtitles: true
  },
  {
    id: 4,
    title: 'Santiago Bernabéuda mashg\'ulot kuni',
    thumbnail: 'https://images.pexels.com/photos/1667583/pexels-photo-1667583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    duration: '15:20',
    views: '456K',
    category: 'training',
    hasUzbekSubtitles: false
  },
  {
    id: 5,
    title: 'Real Madrid: The Untouchables | Hujjatli film',
    thumbnail: 'https://images.pexels.com/photos/140039/pexels-photo-140039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    duration: '42:18',
    views: '1.8M',
    category: 'documentary',
    hasUzbekSubtitles: true
  },
  {
    id: 6,
    title: 'Mbappé Real Madrid bilan ilk o\'yinida hat-trik urdi',
    thumbnail: 'https://images.pexels.com/photos/41257/pexels-photo-41257.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    duration: '5:47',
    views: '2.1M',
    category: 'goals',
    hasUzbekSubtitles: true
  }
];

const Media: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  const filteredVideos = videoItems.filter(
    (video) => activeCategory === 'all' || video.category === activeCategory
  );
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <div className="bg-[#0B1560] text-white py-28">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Media</h1>
          <p className="text-gray-300 max-w-2xl">
            Real Madrid videolari, gollar, intervyular va hujjatli filmlar o'zbek tilida
          </p>
        </div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {videoCategories.map((category) => (
            <button 
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeCategory === category.id
                  ? 'bg-[#0B1560] text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Featured Video */}
        {activeCategory === 'all' && (
          <div className="mb-12 relative rounded-xl overflow-hidden shadow-lg group">
            <div className="relative h-[60vh] w-full">
              <img 
                src="https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Featured Video" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-white/90 rounded-full p-5 transform transition-transform duration-300 group-hover:scale-110">
                  <Play className="h-10 w-10 text-[#0B1560] fill-current" />
                </button>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center mb-2">
                  <span className="bg-[#FFB700] text-[#0B1560] text-sm font-semibold px-2 py-1 rounded-md mr-2">
                    Hujjatli film
                  </span>
                  <span className="text-white text-sm">1 soat 20 daqiqa</span>
                </div>
                <h2 className="text-3xl font-bold text-white mb-2">Real Madrid: Kings of Europe</h2>
                <p className="text-gray-300 max-w-2xl">
                  Real Madrid Champions League tarixidagi eng ko'p Chempionlar Ligasi g'alabalari haqida hujjatli film. 
                  O'zbek tilidagi subtitrlari bilan.
                </p>
              </div>
            </div>
          </div>
        )}
        
        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVideos.map((video) => (
            <div key={video.id} className="bg-white rounded-lg shadow-md overflow-hidden group transform transition duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={video.thumbnail} 
                  alt={video.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="bg-white/90 rounded-full p-3 transform transition-transform scale-75 group-hover:scale-100">
                    <Play className="h-6 w-6 text-[#0B1560] fill-current" />
                  </button>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                  {video.duration}
                </div>
              </div>
              
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold leading-tight">{video.title}</h3>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 text-sm">{video.views} ko'rilgan</span>
                  {video.hasUzbekSubtitles && (
                    <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                      O'zbek subtitrlar
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Documentary Section */}
        <section className="mt-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold flex items-center">
              <Film className="mr-2 h-6 w-6 text-[#0B1560]" />
              Hujjatli Filmlar
            </h2>
            <button className="text-[#0B1560] hover:text-[#FFB700] font-medium flex items-center transition-colors">
              Barchasi
              <ArrowRight className="ml-1 h-5 w-5" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/47343/the-ball-stadion-football-the-pitch-47343.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Galácticos: The Team of Stars" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="bg-white/90 rounded-full p-4 transform transition-transform scale-75 group-hover:scale-100">
                    <Play className="h-8 w-8 text-[#0B1560] fill-current" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Galácticos: The Team of Stars</h3>
                <p className="text-gray-600 mb-4">
                  Zinedine Zidane, Luis Figo, Ronaldo va David Beckham davrida 
                  Galácticos erasi haqidagi tarixiy hujjatli film.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500">55 daqiqa • O'zbek subtitrlar</span>
                  <span className="text-[#0B1560] font-medium">Ko'rish</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="The Dynasty: 2014-2018" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="bg-white/90 rounded-full p-4 transform transition-transform scale-75 group-hover:scale-100">
                    <Play className="h-8 w-8 text-[#0B1560] fill-current" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">The Dynasty: 2014-2018</h3>
                <p className="text-gray-600 mb-4">
                  Real Madrid ketma-ket to'rt Champions League finalini yutgan 
                  tarixiy 2014-2018 yillar davridagi g'alabalar haqida.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500">70 daqiqa • O'zbek subtitrlar</span>
                  <span className="text-[#0B1560] font-medium">Ko'rish</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Media;