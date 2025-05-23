import React from 'react';
import HeroSection from '../components/home/HeroSection';
import LatestNews from '../components/home/LatestNews';
import UpcomingMatches from '../components/home/UpcomingMatches';
import TeamHighlights from '../components/home/TeamHighlights';
import SocialFeed from '../components/home/SocialFeed';

const Home: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <LatestNews />
      <UpcomingMatches />
      <TeamHighlights />
      <SocialFeed />
    </div>
  );
};

export default Home;