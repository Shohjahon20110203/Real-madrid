import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { newsItems } from '../../data/news';

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

const LatestNews: React.FC = () => {
  // Get the latest 3 news items
  const latest = [...newsItems].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  ).slice(0, 3);
  
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold">So'nggi Yangiliklar</h2>
          <Link to="/news" className="text-[#0B1560] hover:text-[#FFB700] font-medium flex items-center transition-colors">
            Barcha yangiliklar
            <ArrowRight className="ml-1 h-5 w-5" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latest.map((news) => (
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
                  to={`/news/${news.id}`} 
                  className="text-[#0B1560] hover:text-[#FFB700] font-medium inline-flex items-center transition-colors"
                >
                  Batafsil o'qish
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;