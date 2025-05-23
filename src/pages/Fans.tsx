import React from 'react';
import { Users, Map, Calendar, Camera } from 'lucide-react';

const Fans: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <div className="bg-cover bg-center h-[60vh] relative" style={{ backgroundImage: 'url(https://images.pexels.com/photos/3953282/pexels-photo-3953282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)' }}>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1560]/70 to-[#0B1560]/80"></div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">O'zbekiston Muxlislari</h1>
            <p className="text-xl text-gray-200">
              O'zbekistondagi Real Madrid fan-klublari, tadbirlar va muxlislar uchun maxsus imkoniyatlar
            </p>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Fan Clubs Section */}
        <section className="mb-16">
          <div className="flex items-center mb-6 pb-2 border-b border-gray-200">
            <Users className="h-6 w-6 text-[#0B1560] mr-2" />
            <h2 className="text-2xl font-bold">O'zbekiston Fan-klublari</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-[#0B1560] to-[#1a2675] flex items-center justify-center">
                <div className="text-center">
                  <span className="text-white text-xl font-bold">Toshkent</span>
                  <p className="text-white/70">2012-yilda tashkil etilgan</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Real Madrid O'zbekiston</h3>
                <p className="text-gray-600 mb-4">
                  O'zbekistondagi eng katta va birinchi oficial fan-klub. 
                  5000+ a'zolari mavjud va har hafta matchlarni birgalikda ko'rishni tashkil etadi.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 flex items-center">
                    <Map className="h-4 w-4 mr-1" /> Toshkent shahri
                  </span>
                  <button className="text-[#0B1560] font-medium">Qo'shilish</button>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-[#0B1560] to-[#1a2675] flex items-center justify-center">
                <div className="text-center">
                  <span className="text-white text-xl font-bold">Samarqand</span>
                  <p className="text-white/70">2016-yilda tashkil etilgan</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Samarqand Madridistas</h3>
                <p className="text-gray-600 mb-4">
                  Samarqanddagi eng faol Real Madrid fan-klubi. 
                  Mahalliy sportzallarda futbol o'ynashni va birgalikda matchlarni ko'rishni tashkil qiladi.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 flex items-center">
                    <Map className="h-4 w-4 mr-1" /> Samarqand shahri
                  </span>
                  <button className="text-[#0B1560] font-medium">Qo'shilish</button>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-[#0B1560] to-[#1a2675] flex items-center justify-center">
                <div className="text-center">
                  <span className="text-white text-xl font-bold">Andijon</span>
                  <p className="text-white/70">2019-yilda tashkil etilgan</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Andijon Blancos</h3>
                <p className="text-gray-600 mb-4">
                  Andijon viloyatidagi Real Madrid muxlislari uchun. 
                  Ijtimoiy tarmoqlarda faol, tadbirlar va musobaqalar tashkil qiladi.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 flex items-center">
                    <Map className="h-4 w-4 mr-1" /> Andijon shahri
                  </span>
                  <button className="text-[#0B1560] font-medium">Qo'shilish</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Upcoming Events */}
        <section className="mb-16">
          <div className="flex items-center mb-6 pb-2 border-b border-gray-200">
            <Calendar className="h-6 w-6 text-[#0B1560] mr-2" />
            <h2 className="text-2xl font-bold">Kelgusi Tadbirlar</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-[#0B1560] text-white p-4">
                <div className="flex justify-between items-center">
                  <span className="font-bold">El Clásico Watch Party</span>
                  <span className="bg-white/20 text-xs px-2 py-1 rounded-full">Toshkentda</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between mb-4">
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-gray-500 mr-2" />
                    <span>2025-yil 20-may, 22:00</span>
                  </div>
                  <div className="flex items-center">
                    <Map className="h-5 w-5 text-gray-500 mr-2" />
                    <span>Chao Coffee, Toshkent</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Real Madrid va Barcelona o'rtasidagi El Clásiko o'yinni katta 
                  ekranda ko'rish va boshqa muxlislar bilan tanishish imkoniyati.
                </p>
                <button className="bg-[#FFB700] hover:bg-[#e6a600] text-[#0B1560] font-bold py-2 px-4 rounded-md transition-colors duration-300">
                  Ro'yxatdan o'tish
                </button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-[#0B1560] text-white p-4">
                <div className="flex justify-between items-center">
                  <span className="font-bold">Fan Tournament 2025</span>
                  <span className="bg-white/20 text-xs px-2 py-1 rounded-full">Samarqandda</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between mb-4">
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-gray-500 mr-2" />
                    <span>2025-yil 15-iyun, 10:00</span>
                  </div>
                  <div className="flex items-center">
                    <Map className="h-5 w-5 text-gray-500 mr-2" />
                    <span>Afrosiyob Arena, Samarqand</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Real Madrid muxlislari o'rtasida mini-futbol 
                  musobaqasi. Sovrinlar va qiziqarli tadbirlar kutilmoqda.
                </p>
                <button className="bg-[#FFB700] hover:bg-[#e6a600] text-[#0B1560] font-bold py-2 px-4 rounded-md transition-colors duration-300">
                  Ro'yxatdan o'tish
                </button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Fan Gallery */}
        <section>
          <div className="flex items-center mb-6 pb-2 border-b border-gray-200">
            <Camera className="h-6 w-6 text-[#0B1560] mr-2" />
            <h2 className="text-2xl font-bold">Muxlislar Galereyasi</h2>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <div className="aspect-square rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.pexels.com/photos/3953282/pexels-photo-3953282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Fan 1" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Fan 2" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Fan 3" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.pexels.com/photos/47343/the-ball-stadion-football-the-pitch-47343.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Fan 4" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.pexels.com/photos/141959/pexels-photo-141959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Fan 5" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.pexels.com/photos/1667583/pexels-photo-1667583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Fan 6" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>
          
          {/* Call to Upload */}
          <div className="mt-8 bg-gray-100 rounded-lg p-6 text-center">
            <h3 className="text-xl font-bold mb-2">O'z rasmingizni yuklang</h3>
            <p className="text-gray-600 mb-4">
              Real Madrid muxlisi sifatida o'z rasmingizni yuklang va muxlislar gallereyasida bo'ling!
            </p>
            <button className="bg-[#0B1560] hover:bg-[#0a1247] text-white font-bold py-2 px-6 rounded-md transition-colors duration-300">
              Rasm yuklash
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Fans;