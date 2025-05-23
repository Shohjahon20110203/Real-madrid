import React from 'react';
import { players } from '../data/players';

const Team: React.FC = () => {
  // Group players by position
  const groupedPlayers = players.reduce((groups, player) => {
    const position = player.position;
    if (!groups[position]) {
      groups[position] = [];
    }
    groups[position].push(player);
    return groups;
  }, {} as Record<string, typeof players>);
  
  // Order of positions to display
  const positionOrder = ['Darvozabon', 'Himoyachi', 'Yarim himoyachi', 'Hujumchi'];
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <div className="bg-[#0B1560] text-white py-28">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Jamoa Tarkibi</h1>
          <p className="text-gray-300 max-w-2xl">
            2025/2026 mavsum uchun Real Madrid asosiy tarkibi
          </p>
        </div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        {positionOrder.map((position) => {
          const positionPlayers = groupedPlayers[position] || [];
          
          if (positionPlayers.length === 0) return null;
          
          return (
            <div key={position} className="mb-16">
              <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200">{position}lar</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {positionPlayers.map((player) => (
                  <div key={player.id} className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:shadow-xl hover:-translate-y-1">
                    <div className="h-64 relative overflow-hidden">
                      <img 
                        src={player.image} 
                        alt={player.name} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                      <div className="absolute top-4 left-4 bg-[#FFB700] text-[#0B1560] text-lg font-bold rounded-full w-8 h-8 flex items-center justify-center">
                        {player.number}
                      </div>
                    </div>
                    
                    <div className="p-5">
                      <h3 className="text-xl font-bold mb-1">{player.name}</h3>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">{player.position}</span>
                        <div className="flex items-center">
                          <span className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-md">
                            {player.nationality}
                          </span>
                          <span className="ml-2 text-sm text-gray-500">{player.age} yosh</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Team;