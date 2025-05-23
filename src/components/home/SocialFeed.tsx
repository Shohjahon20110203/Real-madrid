import React from 'react';
import { Instagram, Twitter, Send } from 'lucide-react';
import { socialPosts } from '../../data/socialPosts';

// Format date function
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('uz-UZ', { month: 'short', day: 'numeric' });
};

// Platform icon component
const PlatformIcon: React.FC<{ platform: string }> = ({ platform }) => {
  switch (platform) {
    case 'instagram':
      return <Instagram className="h-5 w-5 text-pink-600" />;
    case 'twitter':
      return <Twitter className="h-5 w-5 text-blue-400" />;
    case 'telegram':
      return <Send className="h-5 w-5 text-[#0088cc]" />;
    default:
      return null;
  }
};

const SocialFeed: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2 text-gray-900 dark:text-white">Ijtimoiy tarmoqlarda</h2>
        <p className="text-gray-600 dark:text-gray-300 text-center mb-10">Real Madridning eng yangi post va yangiliklari</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {socialPosts.map((post) => (
            <a 
              key={post.id} 
              href={post.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {post.image && (
                <div className="h-40 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt="" 
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              
              <div className="p-4">
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center">
                    <PlatformIcon platform={post.platform} />
                    <span className="ml-1 text-sm font-medium capitalize text-gray-700 dark:text-gray-200">{post.platform}</span>
                  </div>
                  <span className="text-gray-500 dark:text-gray-400 text-xs">{formatDate(post.date)}</span>
                </div>
                
                <p className="text-gray-700 dark:text-gray-200">{post.content}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialFeed;