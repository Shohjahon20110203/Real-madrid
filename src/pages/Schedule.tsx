import React, { useState } from 'react';
import { upcomingMatches, recentMatches } from '../data/matches';
import { Calendar, MapPin, Clock, Trophy } from 'lucide-react';
import { Match } from '../types';

// Format date function
const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('uz-UZ', options);
};

const MatchCard: React.FC<{ match: Match }> = ({ match }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className={`p-3 text-white ${match.isHome ? 'bg-gradient-to-r from-[#0B1560] to-[#1a2675]' : 'bg-gradient-to-r from-gray-700 to-gray-600'}`}>
        <div className="flex justify-between items-center">
          <span className="font-medium">{match.competition}</span>
          <span className={`text-xs px-2 py-1 rounded-full ${match.isHome ? 'bg-white/20' : 'bg-white/20'}`}>
            {match.isHome ? 'Uy o\'yini' : 'Tashqi o\'yin'}
          </span>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <div className="flex-1 text-center">
            <div className="text-lg md:text-xl font-bold">{match.isHome ? 'Real Madrid' : match.opponent}</div>
            {match.score && <div className="text-2xl font-bold mt-1">{match.isHome ? match.score.home : match.score.away}</div>}
          </div>
          <div className="mx-4">
            {match.score ? (
              <div className="text-sm text-gray-500">VS</div>
            ) : (
              <div className="text-lg font-bold">VS</div>
            )}
          </div>
          <div className="flex-1 text-center">
            <div className="text-lg md:text-xl font-bold">{match.isHome ? match.opponent : 'Real Madrid'}</div>
            {match.score && <div className="text-2xl font-bold mt-1">{match.isHome ? match.score.away : match.score.home}</div>}
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-3 mt-3">
          <div className="grid grid-cols-2 gap-3">
            <div className="flex items-center text-gray-600">
              <Calendar className="h-4 w-4 mr-2" />
              <span className="text-sm">{formatDate(match.date)}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Clock className="h-4 w-4 mr-2" />
              <span className="text-sm">{match.time}</span>
            </div>
          </div>
          <div className="flex items-center text-gray-600 mt-2">
            <MapPin className="h-4 w-4 mr-2" />
            <span className="text-sm">{match.venue}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Schedule: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'recent'>('upcoming');
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <div className="bg-[#0B1560] text-white py-28">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">O'yinlar Jadvali</h1>
          <p className="text-gray-300 max-w-2xl">
            Real Madridning jadval va natijalarini kuzating
          </p>
        </div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Tab Navigation */}
        <div className="flex border-b border-gray-200 mb-8">
          <button
            className={`py-3 px-6 font-medium text-sm focus:outline-none ${
              activeTab === 'upcoming'
                ? 'text-[#0B1560] border-b-2 border-[#0B1560]'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('upcoming')}
          >
            Keyingi o'yinlar
          </button>
          <button
            className={`py-3 px-6 font-medium text-sm focus:outline-none ${
              activeTab === 'recent'
                ? 'text-[#0B1560] border-b-2 border-[#0B1560]'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('recent')}
          >
            So'nggi natijalar
          </button>
        </div>
        
        {/* Matches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activeTab === 'upcoming'
            ? upcomingMatches.map((match) => <MatchCard key={match.id} match={match} />)
            : recentMatches.map((match) => <MatchCard key={match.id} match={match} />)}
        </div>
        
        {/* La Liga Standings */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Trophy className="mr-2 h-6 w-6 text-[#FFB700]" />
            La Liga Turnir Jadvali
          </h2>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <table className="min-w-full">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">№</th>
                  <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">Jamoa</th>
                  <th className="py-3 px-4 text-center text-sm font-medium text-gray-600">O'yin</th>
                  <th className="py-3 px-4 text-center text-sm font-medium text-gray-600">G</th>
                  <th className="py-3 px-4 text-center text-sm font-medium text-gray-600">D</th>
                  <th className="py-3 px-4 text-center text-sm font-medium text-gray-600">M</th>
                  <th className="py-3 px-4 text-center text-sm font-medium text-gray-600">Ochko</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  { pos: 1, team: 'Real Madrid', played: 10, won: 8, drawn: 1, lost: 1, points: 25 },
                  { pos: 2, team: 'Barcelona', played: 10, won: 7, drawn: 2, lost: 1, points: 23 },
                  { pos: 3, team: 'Atletico Madrid', played: 10, won: 6, drawn: 3, lost: 1, points: 21 },
                  { pos: 4, team: 'Sevilla', played: 10, won: 5, drawn: 2, lost: 3, points: 17 },
                  { pos: 5, team: 'Villarreal', played: 10, won: 5, drawn: 1, lost: 4, points: 16 }
                ].map((team) => (
                  <tr key={team.pos} className={team.team === 'Real Madrid' ? 'bg-blue-50' : ''}>
                    <td className="py-3 px-4 text-sm">{team.pos}</td>
                    <td className="py-3 px-4">
                      <div className="flex items-center">
                        <span className={`font-medium ${team.team === 'Real Madrid' ? 'text-[#0B1560]' : ''}`}>{team.team}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-center text-sm">{team.played}</td>
                    <td className="py-3 px-4 text-center text-sm">{team.won}</td>
                    <td className="py-3 px-4 text-center text-sm">{team.drawn}</td>
                    <td className="py-3 px-4 text-center text-sm">{team.lost}</td>
                    <td className="py-3 px-4 text-center font-semibold">{team.points}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;