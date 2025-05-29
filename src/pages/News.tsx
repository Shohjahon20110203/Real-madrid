import React, { useState } from 'react';
import { newsItems } from '../data/news';
import { Link } from 'react-router-dom';
import { ArrowRight, Search } from 'lucide-react';

// Format date function
const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('uz-UZ', options);
};

// Category badge component
const CategoryBadge: React.FC<{ category: string }> = ({ category }) => {
  const getColorClass = () => {
    switch (category) {
      case 'transfer':
        return 'bg-purple-600';
      case 'match':
        return 'bg-green-600';
      case 'club':
        return 'bg-blue-600';
      case 'interview':
        return 'bg-orange-600';
      default:
        return 'bg-gray-600';
    }
  };
  
  const getCategoryName = () => {
    switch (category) {
      case 'transfer':
        return 'Transfer';
      case 'match':
        return 'O\'yin';
      case 'club':
        return 'Klub';
      case 'interview':
        return 'Intervyu';
      default:
        return category;
    }
  };
  
  return (
    <span className={`${getColorClass()} text-white text-xs font-semibold px-2 py-1 rounded-md`}>
      {getCategoryName()}
    </span>
  );
};

const News: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // Filter news based on active category and search query
  const filteredNews = newsItems.filter((news) => {
    const matchesCategory = activeCategory === 'all' || news.category === activeCategory;
    const matchesSearch = searchQuery === '' || 
      news.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      news.summary.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <div className="bg-[#0B1560] text-white py-28">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Yangiliklar</h1>
          <p className="text-gray-300 max-w-2xl">
            Real Madrid haqidagi eng so'nggi yangiliklar, transfer xabarlari va intervyular
          </p>
        </div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8 gap-4">
          <div className="flex flex-wrap gap-2">
            {['all', 'transfer', 'match', 'club', 'interview'].map((category) => (
              <button 
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? 'bg-[#0B1560] text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category === 'all' ? 'Barchasi' : 
                  category === 'transfer' ? 'Transfer' :
                  category === 'match' ? 'O\'yin' :
                  category === 'club' ? 'Klub' : 'Intervyu'}
              </button>
            ))}
          </div>
          
          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="Qidirish..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0B1560] focus:border-transparent"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          </div>
        </div>
        
        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews.length > 0 ? (
            filteredNews.map((news) => (
              <div key={news.id} className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={news.image} 
                    alt={news.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <CategoryBadge category={news.category} />
                    <span className="text-gray-500 text-sm">{formatDate(news.date)}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2">{news.title}</h3>
                  <p className="text-gray-600 mb-4">{news.summary}</p>
                  
                  <Link 
                    to={`src/news/index.html`} 
                    className="text-[#0B1560] hover:text-[#FFB700] font-medium inline-flex items-center transition-colors"
                  >
                    Batafsil o'qish
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500 text-lg">Yangiliklar topilmadi</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default News;