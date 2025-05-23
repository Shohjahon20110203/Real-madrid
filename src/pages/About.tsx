import React from 'react';
import { Trophy, Radius as Stadium, Users, History } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner with Stadium Image */}
      <div className="h-[60vh] relative bg-cover bg-center" style={{ backgroundImage: 'url(https://images.pexels.com/photos/41257/pexels-photo-41257.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)' }}>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1560]/70 to-[#0B1560]/80"></div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Klub Haqida</h1>
            <p className="text-xl text-gray-200">
              Dunyoning eng muvaffaqiyatli futbol klubi Real Madrid haqida barcha ma'lumotlar
            </p>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        {/* History Section */}
        <section className="mb-16">
          <div className="flex items-center mb-6 pb-2 border-b border-gray-200">
            <History className="h-6 w-6 text-[#0B1560] mr-2" />
            <h2 className="text-2xl font-bold">Tarix</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:shadow-xl">
              <div className="h-40 bg-[#0B1560] flex items-center justify-center">
                <span className="text-4xl font-bold text-white">1950</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Evropa Chempionlar Kubogi dominantligi</h3>
                <p className="text-gray-600">
                  1950-yillarda Real Madrid Evropada hukmronlik qildi va ilk besh Evropa Kubogini ketma-ket yutdi. 
                  Alfredo Di Stefano, Ferenc Puskas va Francisco Gento kabi afsonaviy o'yinchilar tarkibida bo'lgan.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:shadow-xl">
              <div className="h-40 bg-[#0B1560] flex items-center justify-center">
                <span className="text-4xl font-bold text-white">2000</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Galactikos davri</h3>
                <p className="text-gray-600">
                  2000-yillar boshida Florentino Pérez "Galacticos" siyosatini boshladi. 
                  Zinedine Zidane, Luis Figo, Ronaldo, David Beckham kabi eng yaxshi 
                  o'yinchilar klubga qo'shildi va 2000 hamda 2002-yillar Chempionlar Ligasini yutdi.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:shadow-xl">
              <div className="h-40 bg-[#0B1560] flex items-center justify-center">
                <span className="text-4xl font-bold text-white">2010</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">UEFA Champions League dominantligi</h3>
                <p className="text-gray-600">
                  2014-2018 yillar oralig'ida Real Madrid 4 Champions League finalini yutdi. 
                  Cristiano Ronaldo, Sergio Ramos, Luka Modric, Toni Kroos, Karim Benzema kabi 
                  superstar o'yinchilar yordamida jahon futbolida yangi eraga asos solindi.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Stadium Section */}
        <section className="mb-16">
          <div className="flex items-center mb-6 pb-2 border-b border-gray-200">
            <Stadium className="h-6 w-6 text-[#0B1560] mr-2" />
            <h2 className="text-2xl font-bold">Santiago Bernabéu Stadioni</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-600 mb-4">
                Santiago Bernabéu stadioni Real Madridning uyidir. 1947-yilda ochildi va klubning 
                sobiq prezidenti Santiago Bernabéu nomi bilan atalgan. Stadion 81,044 tomoshabinga 
                mo'ljallangan va dunyoning eng mashhur futbol maydonlaridan biri hisoblanadi.
              </p>
              <p className="text-gray-600 mb-4">
                Stadion o'zining ajoyib tarixiy voqealari, shovqinli muxlislari va 
                "La Decimotercera" (13-chi UEFA Champions League g'alabasi) kabi shonli lahzalari bilan mashhur.
              </p>
              <p className="text-gray-600">
                Hozirgi kunda Santiago Bernabéu stadioni eng zamonaviy stadionga aylanish 
                uchun yangilanmoqda. Yangi loyiha stadionga to'liq ochiladigan tom, 360 daraja 
                videokub va ko'plab yangi imkoniyatlarni o'z ichiga oladi.
              </p>
            </div>
            <div className="h-80 rounded-lg overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Santiago Bernabéu Stadioni" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>
        
        {/* Trophy Cabinet */}
        <section className="mb-16">
          <div className="flex items-center mb-6 pb-2 border-b border-gray-200">
            <Trophy className="h-6 w-6 text-[#0B1560] mr-2" />
            <h2 className="text-2xl font-bold">Yutuqlar</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden text-center p-6 transform transition duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="bg-[#FFB700] inline-flex rounded-full p-4 mb-4">
                <Trophy className="h-8 w-8 text-[#0B1560]" />
              </div>
              <h3 className="text-3xl font-bold mb-2">14</h3>
              <p className="text-gray-600">UEFA Champions League</p>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden text-center p-6 transform transition duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="bg-[#FFB700] inline-flex rounded-full p-4 mb-4">
                <Trophy className="h-8 w-8 text-[#0B1560]" />
              </div>
              <h3 className="text-3xl font-bold mb-2">35</h3>
              <p className="text-gray-600">La Liga</p>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden text-center p-6 transform transition duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="bg-[#FFB700] inline-flex rounded-full p-4 mb-4">
                <Trophy className="h-8 w-8 text-[#0B1560]" />
              </div>
              <h3 className="text-3xl font-bold mb-2">19</h3>
              <p className="text-gray-600">Copa del Rey</p>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden text-center p-6 transform transition duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="bg-[#FFB700] inline-flex rounded-full p-4 mb-4">
                <Trophy className="h-8 w-8 text-[#0B1560]" />
              </div>
              <h3 className="text-3xl font-bold mb-2">5</h3>
              <p className="text-gray-600">FIFA Club World Cup</p>
            </div>
          </div>
        </section>
        
        {/* Management Section */}
        <section>
          <div className="flex items-center mb-6 pb-2 border-b border-gray-200">
            <Users className="h-6 w-6 text-[#0B1560] mr-2" />
            <h2 className="text-2xl font-bold">Rahbariyat</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/6168/hands-businessmen-entrepreneur-meeting-6168.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Florentino Pérez" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Florentino Pérez</h3>
                <p className="text-[#0B1560] mb-3">President</p>
                <p className="text-gray-600">
                  2000-yildan beri Real Madridni boshqarib kelayotgan. Uning 
                  rahbarligida Real Madrid yana bir bor dunyoning eng nufuzli va 
                  daromadli futbol klubiga aylandi.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Carlo Ancelotti" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Carlo Ancelotti</h3>
                <p className="text-[#0B1560] mb-3">Bosh murabbiy</p>
                <p className="text-gray-600">
                  Tajribali italyan murabbiy. Real Madrid bilan 2 Champions 
                  Leagueni yutgan va 2021-yilda klubga qaytib keldi. 
                  Uning boshchiligida klub La Liga va Champions Leagueda g'alabalarga erishdi.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/5615665/pexels-photo-5615665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="José Ángel Sánchez" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">José Ángel Sánchez</h3>
                <p className="text-[#0B1560] mb-3">Bosh direktor</p>
                <p className="text-gray-600">
                  Pérez bilan yaqin hamkorlikda ishlaydigan Sánchez klub 
                  operatsiyalarini boshqaradi va transferlar, shartnomalar 
                  va klubning kundalik faoliyati uchun javobgardir.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;