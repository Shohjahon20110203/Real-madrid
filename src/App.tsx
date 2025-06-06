import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import News from './pages/News';
import Team from './pages/Team';
import Schedule from './pages/Schedule';
import Media from './pages/Media';
import Fans from './pages/Fans';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/news" element={<News />} />
            <Route path="/team" element={<Team />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/media" element={<Media />} />
            <Route path="/fans" element={<Fans />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;