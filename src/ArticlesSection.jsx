// filepath: d:\Codes\React_Apps\TungonDugi\src\ArticlesSection.jsx
import React, { useState, useEffect } from 'react';
import Parser from 'rss-parser';

const ArticlesSection = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      const parser = new Parser();
      try {
        const feed = await parser.parseURL('https://medium.com/feed/@tungondugi');
        const mediumArticles = feed.items.slice(0, 5).map((item) => ({
          id: item.guid,
          title: item.title,
          date: new Date(item.pubDate).toLocaleDateString(),
          excerpt: item.contentSnippet,
          link: item.link,
        }));
        setArticles(mediumArticles);
      } catch (error) {
        console.error('Error fetching Medium articles:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  return (
    <section id="articles" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent inline-block">
            Articles
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto"></div>
        </div>

        {loading ? (
          <p className="text-center text-gray-600 dark:text-gray-300">Loading articles...</p>
        ) : (
          <div className="space-y-6">
            {articles.map((article) => (
              <div
                key={article.id}
                className="hover: transition-all duration-300 cursor-pointer"
              >
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <div className="w-2 h-2 rounded-full bg-indigo-500 mr-2"></div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{article.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{article.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{article.excerpt}</p>
                  <a
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 dark:text-indigo-400 font-medium hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors flex items-center"
                  >
                    Read More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4 ml-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ArticlesSection;