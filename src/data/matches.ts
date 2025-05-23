import { Match } from '../types';

// Sample upcoming matches
export const upcomingMatches: Match[] = [
  {
    id: 1,
    competition: 'La Liga',
    opponent: 'Barcelona',
    date: '2025-05-20',
    time: '22:00',
    venue: 'Santiago Bernabéu',
    isHome: true
  },
  {
    id: 2,
    competition: 'UEFA Champions League',
    opponent: 'Manchester City',
    date: '2025-05-27',
    time: '21:00',
    venue: 'Etihad Stadium',
    isHome: false
  },
  {
    id: 3,
    competition: 'La Liga',
    opponent: 'Atletico Madrid',
    date: '2025-06-03',
    time: '22:00',
    venue: 'Santiago Bernabéu',
    isHome: true
  }
];

// Sample recent matches with results
export const recentMatches: Match[] = [
  {
    id: 4,
    competition: 'La Liga',
    opponent: 'Real sosedad',
    date: '2025-05-24',
    time: '21:30',
    venue: 'Santiago Bernabéu',
    isHome: true,
    score: {
      home: 3,
      away: 1
    }
  },
  {
    id: 5,
    competition: 'UEFA Champions League',
    opponent: 'Bayern Munich',
    date: '2025-05-05',
    time: '21:00',
    venue: 'Allianz Arena',
    isHome: false,
    score: {
      home: 1,
      away: 2
    }
  },
  {
    id: 6,
    competition: 'La Liga',
    opponent: 'Sevilla',
    date: '2025-04-28',
    time: '19:30',
    venue: 'Ramón Sánchez Pizjuán',
    isHome: false,
    score: {
      home: 0,
      away: 2
    }
  }
];