import React from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { upcomingMatches } from '../../data/matches';
import { formatDistanceToNow } from 'date-fns';
import { Match } from '../../types';

interface CountdownProps {
  targetDate: string;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = React.useState<string>('');
  
  React.useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const target = new Date(targetDate);
      
      if (target > now) {
        setTimeLeft(formatDistanceToNow(target, { addSuffix: true }));
      } else {
        setTimeLeft('Bugun!');
      }
    };
    
    calculateTimeLeft();
    const timerId = setInterval(calculateTimeLeft, 60000);
    
    return () => clearInterval(timerId);
  }, [targetDate]);
  
  return (
    <div className="text-sm font-semibold text-white bg-[#0B1560] px-3 py-1 rounded-full inline-block">
      {timeLeft}
    </div>
  );
};

const MatchCard: React.FC<{ match: Match }> = ({ match }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:shadow-xl hover:scale-105">
      <div className="bg-gradient-to-r from-[#0B1560] to-[#1a2675] text-white p-3">
        <div className="flex justify-between items-center">
          <span className="font-medium">{match.competition}</span>
          <Countdown targetDate={match.date} />
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <div className="flex-1 text-center">
            <div className="text-xl font-bold">Real Madrid</div>
          </div>
          <div className="mx-4 text-lg font-bold">VS</div>
          <div className="flex-1 text-center">
            <div className="text-xl font-bold">{match.opponent}</div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-3 mt-3">
          <div className="grid grid-cols-2 gap-3">
            <div className="flex items-center text-gray-600">
              <Calendar className="h-4 w-4 mr-2" />
              <span className="text-sm">{match.date}</span>
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

const UpcomingMatches: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2">Keyingi O'yinlar</h2>
        <p className="text-gray-600 text-center mb-10">Real Madridning kelgusi bellashuvlari</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingMatches.map((match) => (
            <MatchCard key={match.id} match={match} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingMatches;