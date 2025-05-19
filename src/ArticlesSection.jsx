import React from 'react';

const ArticlesSection = () => {
  // Custom list of articles
  const articles = [
    {
      id: 1,
      title: "Probability Basics for Beginners",
      date: "Dec 20, 2021",
      excerpt: "This article explains the basic concepts needed to understand probability from an axiomatic approach, including random experiments, sample space, and events. It also discusses types of events and their algebra, laying the foundation for advanced probability theory.",
      link: "https://tungondugi.medium.com/prerequisites-for-axiomatic-approach-toprobability-d9c6dffe9079",
    },
    {
      id: 2,
      title: "The basic Text Vectorization Techniques",
      date: "Jan 23, 2024",
      excerpt: "The article highlights limitations of traditional text vectorization methods like Bag-of-Words (BoW) and TF-IDF, such as loss of context, high dimensionality, and lack of semantic understanding. It suggests moving toward more advanced models like Word2Vec or BERT for better performance.",
      link: "https://tungondugi.medium.com/problems-with-the-basic-text-vectorization-techniques-e89857fe207a",
    },
    {
      id: 3,
      title: "Running OpenNMT-py models on web using Flask and HuggingFace",
      date: "Dec 27, 2023",
      excerpt: "This guide walks through deploying a pre-trained English-to-German translation model using OpenNMT-py and Flask. It includes steps for installing dependencies, converting models, and building a simple web interface for real-time translation.",
      link: "https://tungondugi.medium.com/how-to-run-opennmt-py-pre-trained-models-on-web-using-flask-e1e20b43e7ca",
    },
        {
      id: 4,
      title: "Running OpenNMT-py models on web using Streamlit and HuggingFace",
      date: "Dec 28, 2023",
      excerpt: "The article shows how to deploy a pre-trained OpenNMT-py translation model using Streamlit , a Python library for building interactive apps. It simplifies deployment compared to Flask, making it ideal for quick prototyping and user-friendly interfaces.",
      link: "https://medium.com/@tungondugi/how-to-run-opennmt-py-pre-trained-models-on-web-using-streamlit-f555d35ee7be",
    },
  ];

  return (
    <section id="articles" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent inline-block">
            Articles
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto"></div>
        </div>

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
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-justify">{article.excerpt}</p>
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
      </div>
    </section>
  );
};

export default ArticlesSection;