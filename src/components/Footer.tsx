import React from 'react';
import { Link } from 'react-router-dom';
import { Trophy, Instagram, Twitter, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0B1560] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Trophy className="text-[#FFB700] h-8 w-8" />
              <span className="font-bold text-2xl">Real Madrid UZ</span>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Real Madrid klubi muxlislari uchun O'zbekistondagi rasmiy fan-sayti.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white hover:text-[#FFB700] transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-white hover:text-[#FFB700] transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Tezkor Havolalar</h3>
            <ul className="space-y-2">
              {[
                { name: 'Bosh Sahifa', path: '/' },
                { name: 'Klub Haqida', path: '/about' },
                { name: 'Yangiliklar', path: '/news' },
                { name: 'Jamoa', path: '/team' },
                { name: 'Jadval', path: '/schedule' }
              ].map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-gray-300 hover:text-[#FFB700] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* More Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Qo'shimcha</h3>
            <ul className="space-y-2">
              {[
                { name: 'Media', path: '/media' },
                { name: 'Fan Do\'koni', path: '/shop' },
                { name: 'O\'zbekiston Muxlislari', path: '/fans' },
                { name: 'Maxfiylik Siyosati', path: '/privacy' },
                { name: 'Foydalanish Shartlari', path: '/terms' }
              ].map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-gray-300 hover:text-[#FFB700] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Bog'lanish</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-[#FFB700] mt-0.5" />
                <span className="text-gray-300">info@realmadriduz.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-[#FFB700] mt-0.5" />
                <span className="text-gray-300">+998 88 523 83 93</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Hala Madrid UZ. Barcha huquqlar himoyalangan.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;