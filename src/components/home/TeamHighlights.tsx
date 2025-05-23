import React from 'react';
import { Link } from 'react-router-dom';
import { players } from '../../data/players';
import { ArrowRight } from 'lucide-react';

const TeamHighlights: React.FC = () => {
  // Take only top 4 players
  const topPlayers = players.slice(0, 4);
  
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold">Jamoa Yulduzlari</h2>
          <Link to="/team" className="text-[#0B1560] hover:text-[#FFB700] font-medium flex items-center transition-colors">
            To'liq jamoa
            <ArrowRight className="ml-1 h-5 w-5" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {topPlayers.map((player) => (
            <div key={player.id} className="group relative overflow-hidden rounded-lg shadow-md">
              {/* Player Image */}
              <div className="h-80 overflow-hidden">
                <img 
                  src={player.image} 
                  alt={player.name} 
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1560] via-[#0B1560]/70 to-transparent opacity-70 transition-opacity group-hover:opacity-90"></div>
              
              {/* Player Details */}
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform transition-transform duration-300 group-hover:translate-y-0">
                <div className="bg-[#FFB700] text-[#0B1560] text-lg font-bold rounded-full w-8 h-8 flex items-center justify-center mb-2">
                  {player.number}
                </div>
                <h3 className="text-xl font-bold mb-1">{player.name}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-gray-200">{player.position}</span>
                  <span className="bg-white/20 text-white text-xs font-medium px-2 py-1 rounded-md">
                    {player.nationality}
                  </span>
                </div>
                
                {/* Stats - only visible on hover */}
                <div className="mt-3 pt-3 border-t border-white/30 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  <Link 
                    to={`/team/${player.id}`} 
                    className="text-white bg-[#FFB700] hover:bg-[#e6a600] text-[#0B1560] font-medium rounded-md py-2 px-4 inline-block"
                  >
                    Tafsilotlar
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamHighlights;